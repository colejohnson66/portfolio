import { Image, Jumbotron } from "react-bootstrap";

import React from "react";

export default function Header(): JSX.Element {
    return (
        <header id="top">
            <Jumbotron id="jumbo" className="text-center">
                <Image src="/img/me.png" roundedCircle />
                <h1>Cole Tobin</h1>
                <hr />
                <h3>Software Engineer</h3>
            </Jumbotron>
        </header>
    );
}
