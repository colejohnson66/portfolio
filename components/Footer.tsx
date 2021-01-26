import { Container } from "react-bootstrap";
import React from "react";

export default function Footer(): JSX.Element {
    return (
        <>
            <hr />
            <footer>
                <Container>
                    <p>
                        Website copyright &copy; Cole Johnson 2021.
                    </p>
                    <p>
                        View the source for this website on <a href="https://github.com/colejohnson66/portfolio">GitHub</a>.
                    </p>
                </Container>
            </footer>
        </>
    );
}
