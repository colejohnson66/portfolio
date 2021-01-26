import { Button, Col, Container, Row } from "react-bootstrap";

import Footer from "../components/Footer";
import Head from "next/head";
import Header from "../components/Header";
import Link from "next/link";
import Project from "../components/Project";

function language(name: string, img: string): JSX.Element {
    return (
        <li className="list-inline-item">
            <img src={`/img/languages/${img}`} alt={name} />
        </li>
    );
}

function linkButton(href: string, content: JSX.Element | string, useNextLink = false): JSX.Element {
    if (useNextLink) {
        return (
            <Link href={href}>
                <a>
                    <Button variant="dark">
                        {content}
                    </Button>
                </a>
            </Link>
        )
    }

    return (
        <a href={href}>
            <Button variant="dark">
                {content}
            </Button>
        </a>
    );
}

export default function Page() {
    return (
        <>
            <Head>
                <meta name="viewport" content="min-width=640" />
                <meta name="description" content="Portfolio for Cole Johnson - A Full Stack Web Developer on Long Island, NY" />
                <link ref="canonical" href="https://colejohnson66.com" />
                <link ref="me" href="https://github.com/colejohnson66" />
                <link ref="me" href="https://www.linkedin.com/in/colejohnson66/" />
                <link ref="me" href="mailto:coleharrisjohnson@gmail.com" />
                <title>Cole Johnson - Full Stack Web Developer</title>
            </Head>
            <Header />
            <main>
                <Container>
                    <Row>
                        <Col className="text-center">
                            <div className="buttonList">
                                {linkButton("#headerInfo", "Info")}
                                {linkButton("#headerPortfolio", "Portfolio")}
                                {linkButton("#headerCertifications", "Certifications")}
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <h1>About Me</h1>
                            <hr />
                            <p>
                                I am a full stack web developer with over a decade of programming experience.
                            </p>
                            {/*<p>
                                <Link href="/resume"><a>View my resume.</a></Link>
                            </p>*/}
                            <p>
                                I am well versed in many different programming languages and technologies:
                            </p>
                            <ul className="languages list-inline">
                                {language("C#", "CSharp.svg")}
                                {language("HTML5", "HTML5.svg")}
                                {language("JavaScript", "JavaScript.svg")}
                                {language("Node.js", "NodeJS.svg")}
                                {language("React.js", "ReactJS.svg")}
                                {language("TypeScript", "TypeScript.svg")}
                            </ul>
                        </Col>
                    </Row>
                    <Row className="border text-center" id="headerInfo">
                        <Col>
                            <h3>Location</h3>
                            <p>Long Island, NY, USA</p>
                        </Col>
                        <Col>
                            <h3>Around the Web</h3>
                            <div className="buttonList">
                                {linkButton("mailto:coleharrisjohnson@gmail.com", <i className="bi bi-envelope-fill" />)}
                                {linkButton("https://github.com/colejohnson66", <i className="bi bi-github" />)}
                                {linkButton("https://www.linkedin.com/in/colejohnson66/", <i className="bi bi-linkedin" />)}
                                {linkButton("https://stackoverflow.com/users/1350209", "Stack Overflow")}
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <h1 id="headerPortfolio">Portfolio</h1>
                            <hr />
                            <Project
                                name="iDecryptIt Website"
                                imgSrc="/img/thumbs/iDecryptItWeb.png"
                                imgAlt="A page from the iDecryptIt website"
                                technologies={["Node.js", "React.js", "Next.js", "TypeScript"]}
                                buttons={[
                                    {
                                        href: "https://idecryptit.com/",
                                        text: "Visit",
                                        icon: "link-45deg"
                                    },
                                    {
                                        href: "https://github.com/colejohnson66/idecryptit-web",
                                        text: "GitHub",
                                        icon: "github"
                                    }
                                ]}>
                                <p>
                                    Currently a work in progress, this website is designed to replace the iDecryptIt program.
                                    I created this website to show what goes on inside an iDevice's update file.
                                    There are plans for this website to go in depth about every file inside an iDevice's firmware.
                                </p>
                                <p>
                                    The image to the side shows the page for the <a href="https://idecryptit.com/file/format/img3/kbag">IMG3 <code>KBAG</code> tag</a>.
                                </p>
                            </Project>
                            <hr />
                            <Project
                                name="80x86"
                                imgSrc="/img/thumbs/80x86.png"
                                imgAlt="A page from the 80x86 website"
                                technologies={["Node.js", "React.js", "Next.js", "TypeScript"]}
                                buttons={[
                                    {
                                        href: "https://80x86.dev/",
                                        text: "Visit",
                                        icon: "link-45deg"
                                    },
                                    {
                                        href: "https://github.com/colejohnson66/80x86",
                                        text: "GitHub",
                                        icon: "github"
                                    }
                                ]}>
                                <p>
                                    Currently a work in progress, this website is designed to be a digital reference of the x86 (and x86-64) architecture.
                                </p>
                                <p>
                                    The image to the side shows the page for the <a href="https://80x86.dev/instruction/aam"><code>AAM</code> instruction</a>.
                                </p>
                            </Project>
                            <hr />
                            <Project
                                name="iDecryptIt"
                                imgSrc="/img/thumbs/iDecryptIt.png"
                                imgAlt="iDecryptIt"
                                technologies={["C#", ".NET", "WPF"]}
                                buttons={[
                                    {
                                        href: "https://sourceforge.net/projects/idecryptit/",
                                        text: "Download",
                                        icon: "download"
                                    },
                                    {
                                        href: "https://sourceforge.net/p/idecryptit/code/HEAD/tree/",
                                        text: "Source Code",
                                        icon: "code"
                                    }
                                ]}>
                                <p>
                                    iDecryptIt was created so I could learn the .NET framework.
                                    It is a tool designed to assist in decrypting iOS firmware files.
                                    It has been downloaded over 160,000 times over the past nine years.
                                </p>
                            </Project>
                            <hr />
                            <Project
                                name="Mission Nutrition"
                                imgSrc="/img/thumbs/MissionNutrition.png"
                                imgAlt="Mission Nutrition"
                                buttons={[
                                    {
                                        href: "https://creamdreamextremeteam.github.io/MissionNutrition/",
                                        text: "Visit",
                                        icon: "link-45deg"
                                    },
                                    {
                                        href: "https://ithub.com/colejohnson66/MissionNutrition",
                                        text: "GitHub",
                                        icon: "github"
                                    }
                                ]}>
                                <p>
                                    Mission Nutrition is a calorie counting tool.
                                    My team and I created this tool to assist us in learning HTML, CSS, JavaScript, and APIs.
                                    We saw a need for a simple tool for people to count calories.
                                </p>
                            </Project>
                            <hr />
                            <Project
                                name="CrazyTalk"
                                imgSrc="/img/thumbs/CrazyTalk.png"
                                imgAlt="CrazyTalk"
                                technologies={["Node.js", "Handlebars.js", "MySQL", "Heroku"]}
                                buttons={[
                                    {
                                        href: "https://crazytalk-launch-this.herokuapp.com/",
                                        text: "Play",
                                        icon: "joystick"
                                    },
                                    {
                                        href: "https://github.com/MadamOcelot/CrazyTalk",
                                        text: "GitHub",
                                        icon: "github"
                                    }
                                ]}>
                                <p>
                                    CrazyTalk is an 80s themed Mad Libs inspired game.
                                    My team and I created this game to assist us in learning Node.js, Handlebars.js, MySQL, and Heroku.
                                    The knowledge gained from this project gives me confidence to be able to tackle much larger database projects.
                                My professor's quote in regards to the <a href="https://github.com/MadamOcelot/CrazyTalk/blob/master/helpers.js">parsing code</a> was, "It's almost as if you wrote a mini compiler. Great job!"
                                </p>
                            </Project>
                            <hr />
                            <Project
                                name="Call of Fathoovu"
                                imgSrc="/img/thumbs/CallOfFathoovu.png"
                                imgAlt="Call of Fathoovu"
                                technologies={["Node.js", "React.js", "MongoDB"]}
                                buttons={[
                                    {
                                        href: "https://github.com/colejohnson66/call-of-fathoovu",
                                        text: "GitHub",
                                        icon: "github"
                                    }
                                ]}>
                                <p>
                                    Choose your own story in this one of a kind adventure game!
                                    My team and I created this game to learn and develop our skills with React.js and MongoDB.
                                    I played a big part in this project by writing the majority of the JavaScript which gave me confidence to create more projects using React.js.
                                    I am proud of this project because it gave me skills to create more web based apps or games.
                                </p>
                            </Project>
                            <hr />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <h1 id="headerCertifications">Certifications</h1>
                            <hr />
                            <ul>
                                <li><b>MTA: Software Development Fundamentals (98-361)</b> (October 2020)</li>
                                <li><b>Triplebyte: Generalist</b> (March 2020)</li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </main>
            <Footer />
        </>
    );
}
