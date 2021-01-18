import { Image, Jumbotron, Nav } from "react-bootstrap";

import React from "react";

export default function Header(): JSX.Element {
    return (
        <header>
            <Jumbotron id="jumbo" className="text-center">
                <Image src="/img/me.png" roundedCircle />
                <h1>Cole Johnson</h1>
                <hr />
                <h3>Full Stack Web Developer</h3>
            </Jumbotron>
        </header>
    );
}
