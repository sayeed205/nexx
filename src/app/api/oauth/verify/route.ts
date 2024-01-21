import { NextRequest, NextResponse } from 'next/server';

import { getAccessToken, getAccountInfo } from '@/lib/utils';

export async function POST(req: NextRequest) {
    const body = (await req.json()) as { code: string };

    const { code } = body;

    const oDToken = await getAccessToken({ code });
    const accountInfo = await getAccountInfo(oDToken.accessToken);

    if (!accountInfo) throw new Error('No account info found');

    const userPrincipalName = accountInfo.userPrincipalName;

    if (!process.env['EMAILS']?.split(',').includes(userPrincipalName)) {
        return NextResponse.json(
            {
                success: false,
                error: "You are not the owner of the Drive or check out the env variable 'EMAILS'",
            },
            { status: 401 },
        );
    }

    return NextResponse.json(
        {
            success: true,
            msg: 'Drive setup successful.',
        },
        { status: 200 },
    );
}
