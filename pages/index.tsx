import { Button, Col, Container, Image, Jumbotron, Row } from "react-bootstrap";

import Head from "next/head";
import Project from "../components/Project";

function language(name: string, img: string): JSX.Element {
    return (
        <li className="list-inline-item">
            <img src={`/img/languages/${img}`} alt={name} />
        </li>
    );
}

export default function Page() {
    return (
        <>
            <Head>
                <title>Cole Johnson - Full Stack Web Developer</title>
            </Head>
            <header>
                <Jumbotron id="jumbo" className="text-center">
                    <Image src="/img/me.png" roundedCircle />
                    <h1>Cole Johnson</h1>
                    <hr />
                    <h3>Full Stack Web Developer</h3>
                </Jumbotron>
            </header>
            <main>
                <Container>
                    <Row>
                        <Col>
                            <h1>About Me</h1>
                            <hr />
                            <p>
                                I am a full stack web developer with over a decade of programming experience.
                            </p>
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
                    <Row className="border">
                        <Col>
                            <Container fluid className="text-center">
                                <Row>
                                    <Col>
                                        <h3>Location</h3>
                                        <p>Long Island, NY, USA</p>
                                    </Col>
                                    <Col>
                                        <h3>Around the Web</h3>
                                        <div className="aroundTheWeb">
                                            <a href="https://github.com/colejohnson66">
                                                <Button variant="dark">
                                                    <i className="bi bi-github" />
                                                </Button>
                                            </a>
                                            <a href="https://stackoverflow.com/users/1350209">
                                                <Button variant="dark">
                                                    Stack Overflow
                                                </Button>
                                            </a>
                                            <a href="https://www.linkedin.com/in/colejohnson66/">
                                                <Button variant="dark">
                                                    <i className="bi bi-linkedin" />
                                                </Button>
                                            </a>
                                        </div>
                                    </Col>
                                </Row>
                            </Container>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <h1>Portfolio</h1>
                            <hr />
                            <Project
                                name="iDecryptIt Website"
                                imgSrc="/img/thumbs/iDecryptItWeb.png"
                                imgAlt="A page from the iDecryptIt website"
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
                        </Col>
                    </Row>
                </Container>
            </main>
            <hr />
            <footer>
                <Container className="small-print">
                    <p>
                        Website copyright &copy; Cole Johnson 2021.
                    </p>
                </Container>
            </footer>
        </>
    );
}
