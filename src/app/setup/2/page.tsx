import Image from 'next/image';
import { CodeInput } from '@/components';

import { genAuthUrl } from '@/lib/utils';

export default function OAuthStep2() {
    const oauthURL = genAuthUrl();
    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-white dark:bg-gray-900">
            <main className="flex w-full flex-1 flex-col bg-gray-50 dark:bg-gray-800">
                <div className="mx-auto w-full max-w-5xl p-4">
                    <div className="rounded bg-white p-3 dark:bg-gray-900 dark:text-gray-100">
                        <div className="mx-auto w-52">
                            <Image
                                src="/images/fabulous-come-back-later.png"
                                width={912}
                                height={912}
                                alt="fabulous come back later"
                                priority
                            />
                        </div>
                        <h3 className="mb-4 text-center text-xl font-medium">
                            Welcome to your new onedrive-vercel-index 🎉
                        </h3>

                        <h3 className="mt-4 mb-2 text-lg font-medium">
                            Step 2/3: Get authorisation code
                        </h3>

                        <p className="py-1 text-sm font-medium text-red-400">
                            {/* <Trans> */}
                            {/* <FontAwesomeIcon icon="exclamation-circle" className="mr-1" />  */}
                            If you are not the owner of this website, stop now,
                            as continuing with this process may expose your
                            personal files in OneDrive.
                            {/* </Trans> */}
                        </p>

                        <a
                            className="relative my-2 cursor-pointer rounded border border-gray-500/50 bg-gray-50 font-mono text-sm hover:opacity-80 dark:bg-gray-800"
                            // onClick={() => {
                            //     window.open(oauthURL);
                            // }}
                            href={oauthURL}
                            target="_blank"
                        >
                            <div className="absolute top-0 right-0 p-1 opacity-60"></div>
                            <pre className="overflow-x-auto whitespace-pre-wrap p-2">
                                <code>{oauthURL}</code>
                            </pre>
                        </a>

                        <p className="py-1">
                            {/* <Trans> */}
                            The OAuth link for getting the authorisation code
                            has been created. Click on the link above to get the{' '}
                            <b className="underline decoration-yellow-400 decoration-wavy">
                                authorisation code
                            </b>
                            . Your browser will open a new tab to Microsoft's
                            account login page. After logging in and
                            authenticating with your Microsoft account, you will
                            be redirected to a blank page on localhost. Paste{' '}
                            <b className="underline decoration-teal-500 decoration-wavy">
                                the entire redirected URL
                            </b>{' '}
                            down below.
                            {/* </Trans> */}
                        </p>

                        <div className="my-4 mx-auto w-2/3 overflow-hidden rounded">
                            <Image
                                src="/images/step-2-screenshot.png"
                                width={1466}
                                height={607}
                                alt="step 2 screenshot"
                            />
                        </div>

                        <CodeInput />
                    </div>
                </div>
            </main>
        </div>
    );
}
