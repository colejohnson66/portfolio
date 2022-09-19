// copyright (c) 2022 Cole Tobin
// all rights reserved

import Link from "next/link";
import React from "react";

// TODO: next uses 'url.UrlObject | string' for 'href'; is that needed here?
type AProps = {
    href: string;
    className?: string[];
    children: React.ReactNode;
}

export default function A(props: AProps): React.ReactElement {
    const classes = props.className ?? [];

    // local link?
    if (props.href[0] === "#") {
        return (
            <Link href={props.href}>
                <a className={classes.join(" ")}>{props.children}</a>
            </Link>
        );
    }

    // internal link? (internal links without slash are invalid)
    if (props.href[0] === "/") {
        return (
            <Link href={props.href}>
                <a className={classes.join(" ")}>{props.children}</a>
            </Link>
        );
    }

    // it's external
    return <a href={props.href} className={classes.join(" ")} rel="external">{props.children}</a>;
}
