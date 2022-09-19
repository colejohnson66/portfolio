// copyright (c) 2022 Cole Tobin
// all rights reserved

import Head from "next/head";

type LayoutRoot404Props = {
    pageTitle: "404";
    canonical?: string; // missing
    children: React.ReactNode;
}
type LayoutRootProps = {
    pageTitle: string | React.ReactNode;
    canonical: string;
    children: React.ReactNode;
};

function LayoutRoot(props: LayoutRootProps | LayoutRoot404Props): React.ReactElement {
    return (
        <>
            <Head>
                {props.canonical && <link rel="canonical" href={`https://coletobin.com${props.canonical}`} />}
                {/* <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" /> */}
            </Head>
            <div className="min-h-full flex flex-col">
                {/* content */}
                <main className="flex-1">
                    <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                        {props.children}
                    </div>
                </main>

                {/* footer */}
                <footer className="bg-white shadow flex-initial">
                    <div className="text-sm max-w-7xl mx-auto pt-6 pb-10 px-4 sm:px-6 lg:px-8">
                        <p>
                            Website copyright &copy; Cole Tobin 2021-2022.
                        </p>
                        <p>
                            View the source for this website on <a href="https://github.com/colejohnson66/portfolio">GitHub</a>.
                        </p>
                    </div>
                </footer>
            </div>
        </>
    );
}

type LayoutContentProps = {
    children: React.ReactNode;
}

function LayoutContent(props: LayoutContentProps): React.ReactElement {
    return (
        <div className="px-4 py-6 sm:px-0">
            {props.children}
        </div>
    );
}

export default {
    Root: LayoutRoot,
    Content: LayoutContent,
};
