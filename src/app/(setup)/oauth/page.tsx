import { TokenSetup } from '@/components';

import { genAuthUrl } from '@/lib/utils';
import { Button } from '@/components/ui';

const OauthPage = () => {
    const oauthURL = genAuthUrl();
    return (
        <main className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1 className="text-3xl font-bold">OAuth Page</h1>
            <p className="m-2 text-center">
                Get the Authorization code from Microsoft and paste it here.
            </p>
            {/* <div className="mx-2 flex flex-col items-center justify-center"> */}
            <p className="font-bold text-red-500 text-center">
                If you are not the owner of this website, stop now, as
                continuing with this process may expose your personal files in
                OneDrive.
            </p>
            <a href={oauthURL} target="_blank">
                <Button className="text-center">Authorize</Button>
            </a>
            <p className="m-2">
                The OAuth link for getting the authorization code has been
                created. Click on the link above to get the{' '}
                <b className="underline decoration-yellow-400 decoration-wavy">
                    authorization code
                </b>
                . Your browser will open a new tab to Microsoft's login page.
                After logging in and authorizing the app, you will be redirected
                to a blank page. Copy the URL of the blank page and paste it in
                the box below.
            </p>
            <div className="m-2">
                <p>
                    To add more than one account, repeat the process above and
                    paste the URL in new box below.
                </p>
                <TokenSetup />
            </div>

            {/* </div> */}
        </main>
    );
};

export default OauthPage;
