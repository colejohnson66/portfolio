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
                </Container>
            </footer>
        </>
    );
}
