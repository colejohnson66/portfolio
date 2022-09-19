// copyright (c) 2021-2022 Cole Tobin
// all rights reserved

import "../styles/global.css";

import { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />;
}
