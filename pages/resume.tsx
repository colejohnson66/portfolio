import { Breadcrumb, Col, Container, Row } from "react-bootstrap";

import Footer from "../components/Footer";
import Head from "next/head";
import Header from "../components/Header";
import Link from "next/link";

export default function Page() {
    return (
        <>
            <Head>
                <meta name="viewport" content="min-width=640" />
                <meta name="description" content="Resume for Cole Johnson - A Full Stack Web Developer on Long Island, NY" />
                <link ref="canonical" href="https://colejohnson66.com/resume" />
                <link ref="me" href="https://github.com/colejohnson66" />
                <link ref="me" href="https://www.linkedin.com/in/colejohnson66/" />
                <link ref="me" href="mailto:coleharrisjohnson@gmail.com" />
                <title>Cole Johnson - Full Stack Web Developer - Resume</title>
            </Head>
            <Header />
            <main>
                <Container>
                    <Breadcrumb>
                        <Breadcrumb.Item><Link href="/"><a>Home</a></Link></Breadcrumb.Item>
                        <Breadcrumb.Item active>Resume</Breadcrumb.Item>
                    </Breadcrumb>
                    <Row>
                        <Col>
                            <h2>Skills</h2>
                            <p>
                                <b>Programming:</b> C#, JavaScript, TypeScript
                                <br />
                                <b>Web:</b> HTML, CSS
                                <br />
                                <b>Technologies:</b> Node.js, React.js, Express, MongoDB
                            </p>

                            <h2>Certifications</h2>
                            <p>
                                <b>MTA: Software Development Fundamentals (98-361)</b> (October 2020)
                                <ul>
                                    <li>Proved knowledge of object-oriented programming and web development involving C#</li>
                                </ul>

                                <b>Triplebyte: Generalist</b> (March 2020)
                                <ul>
                                    <li>Proved knowledge of general programming, back-end web development, algorithms and data structures, and low-level systems</li>
                                </ul>
                            </p>
                        </Col>
                    </Row>
                </Container>
            </main>
            <Footer />
        </>
    );
}
