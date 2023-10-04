// copyright (c) 2021-2023 Cole Tobin
// all rights reserved

import { ArrowDownTrayIcon, CodeBracketIcon, EnvelopeIcon, LinkIcon } from "@heroicons/react/20/solid"

import A from "@components/A";
import Head from "next/head";
import Layout from "@components/Layout";
import Project from "@components/Project";

function Language(name: string, img: string): JSX.Element {
    return (
        <li className="inline-block mr-4">
            <img src={`/img/languages/${img}`} alt={name} className="w-16" />
        </li>
    );
}

export default function Page() {
    return (
        <>
            <Head>
                <meta name="viewport" content="min-width=640" />
                <meta name="description" content="Portfolio for Cole Tobin - A Software Engineer on Long Island, NY" />
                <link ref="canonical" href="https://coletobin.com" />
                <link ref="me" href="https://github.com/colejohnson66" />
                <link rel="me" href="https://stackoverflow.com/users/1350209/cole-tobin" />
                <link ref="me" href="https://www.linkedin.com/in/colejohnson66/" />
                <link ref="me" href="mailto:coleharrisjohnson@gmail.com" />
                <title>Cole Tobin - Software Engineer</title>
            </Head>
            <Layout.Root pageTitle="Cole Tobin" canonical="/">
                <Layout.Content>
                    <img src="/img/me.png" alt="Cole Tobin Headshot" className="rounded-full mx-auto" />
                    <h1 className="text-gray-800 text-center py-4">Cole Tobin</h1>
                    <hr />
                    <h3 className="text-gray-800 text-center py-2">Software Engineer</h3>

                    {/* Content */}
                    <div className="bg-white shadow max-w-7xl py-6 px-4">
                        <h2 className="mt-0">About Me</h2>
                        <p>
                            I am a programmer with a passion for building software.
                        </p>
                        <p>
                            I am well versed in many different programming languages and technologies, but I mainly work with C# and TypeScript.
                        </p>
                        <ul className="list-none">
                            {Language("C#", "CSharp.svg")}
                            {Language(".NET", "DotNET.svg")}
                            {Language("TypeScript", "TypeScript.svg")}
                        </ul>

                        {/* <h2>Around the Web</h2>
                        <div className="buttonList">
                            {LinkButton("mailto:coleharrisjohnson@gmail.com", <i className="bi bi-envelope-fill" />)}
                            {LinkButton("https://github.com/colejohnson66", <i className="bi bi-github" />)}
                            {LinkButton("https://www.linkedin.com/in/colejohnson66/", <i className="bi bi-linkedin" />)}
                            {LinkButton("https://stackoverflow.com/users/1350209/cole-tobin", "Stack Overflow")}
                        </div> */}

                        <h2>Portfolio</h2>
                        <Project
                            name="iDecryptIt"
                            imgSrc="/img/thumbs/iDecryptIt.png"
                            imgAlt="iDecryptIt"
                            technologies={["C#", ".NET", "WPF", "Avalonia UI"]}
                            buttons={[
                                {
                                    href: "https://sourceforge.net/projects/idecryptit/",
                                    text: "Download",
                                    icon: <ArrowDownTrayIcon />,
                                },
                                {
                                    href: "https://github.com/colejohnson66/iDecryptIt",
                                    text: "GitHub",
                                    icon: <CodeBracketIcon />,
                                }
                            ]}>
                            <p>
                                iDecryptIt was created so I could learn the .NET Framework and WPF.
                                It is a tool designed to assist in decrypting iOS firmware files.
                                It has been downloaded over 160,000 times in the past nine years.
                            </p>
                            <p>
                                It is currently in the process of a major rewrite to replace WPF with Avalonia, and to add more features.
                            </p>
                        </Project>
                        <Project
                            name="Arch86"
                            imgSrc="/img/thumbs/Arch86.png"
                            imgAlt="A page from the Arch86 website"
                            technologies={["x86 assembly", "Node.js", "React.js", "Next.js", "TypeScript", "Tailwind CSS"]}
                            buttons={[
                                {
                                    href: "https://arch86.com/",
                                    text: "Visit",
                                    icon: <LinkIcon />,
                                },
                                {
                                    href: "https://github.com/colejohnson66/Arch86",
                                    text: "GitHub",
                                    icon: <CodeBracketIcon />,
                                }
                            ]}>
                            <p>
                                Currently a work in progress, this website is designed to be a digital reference of the x86 (and x86-64) architecture.
                                The entire theme is custom built using Tailwind CSS.
                            </p>
                            <p>
                                The image to the side shows the page for the <a href="https://arch86.com/instruction/a/aam"><code>AAM</code> instruction</a>.
                            </p>
                        </Project>
                        <Project
                            name="iFirmware"
                            imgSrc="/img/thumbs/iFirmware.png"
                            imgAlt="A page from the iFirmware website"
                            technologies={["Node.js", "React.js", "Next.js", "TypeScript", "Tailwind CSS"]}
                            buttons={[
                                {
                                    href: "https://ifirmware.dev/",
                                    text: "Visit",
                                    icon: <LinkIcon />,
                                },
                                {
                                    href: "https://github.com/colejohnson66/iFirmware",
                                    text: "GitHub",
                                    icon: <CodeBracketIcon />,
                                }
                            ]}>
                            <p>
                                Currently a work in progress, this website is a collection of all my knowledge regarding Apple&apos;s iOS ecosystem.
                                The entire theme is custom built using Tailwind CSS.
                            </p>
                            <p>
                                The image to the side shows a page containing <A href="https://ifirmware.dev/fw/format/tags/kbag">a custom hex display</A> I wrote.
                            </p>
                        </Project>
                        {/* <Project
                            name="Mission Nutrition"
                            imgSrc="/img/thumbs/MissionNutrition.png"
                            imgAlt="Mission Nutrition"
                            buttons={[
                                {
                                    href: "https://creamdreamextremeteam.github.io/MissionNutrition/",
                                    text: "Visit",
                                    icon: <LinkIcon />,
                                },
                                {
                                    href: "https://github.com/colejohnson66/MissionNutrition",
                                    text: "GitHub",
                                    icon: <CodeBracketIcon />,
                                }
                            ]}>
                            <p>
                                Mission Nutrition is a calorie counting tool.
                                My team and I created this tool to assist us in learning HTML, CSS, JavaScript, and APIs.
                                We saw a need for a simple tool for people to count calories.
                            </p>
                        </Project> */}
                        {/* <Project
                            name="CrazyTalk"
                            imgSrc="/img/thumbs/CrazyTalk.png"
                            imgAlt="CrazyTalk"
                            technologies={["Node.js", "Handlebars.js", "MySQL", "Heroku"]}
                            buttons={[
                                {
                                    href: "https://crazytalk-launch-this.herokuapp.com/",
                                    text: "Play",
                                    icon: <PuzzlePieceIcon />,
                                },
                                {
                                    href: "https://github.com/MadamOcelot/CrazyTalk",
                                    text: "GitHub",
                                    icon: <CodeBracketIcon />,
                                }
                            ]}>
                            <p>
                                CrazyTalk is an 80s themed Mad Libs inspired game.
                                My team and I created this game to assist us in learning Node.js, Handlebars.js, MySQL, and Heroku.
                                The knowledge gained from this project gives me confidence to be able to tackle much larger database projects.
                                My professor's quote in regards to the <a href="https://github.com/MadamOcelot/CrazyTalk/blob/master/helpers.js">parsing code</a> was, "It's almost as if you wrote a mini compiler. Great job!"
                            </p>
                        </Project> */}
                        {/* <Project
                            name="Call of Fathoovu"
                            imgSrc="/img/thumbs/CallOfFathoovu.png"
                            imgAlt="Call of Fathoovu"
                            technologies={["Node.js", "React.js", "MongoDB"]}
                            buttons={[
                                {
                                    href: "https://github.com/colejohnson66/call-of-fathoovu",
                                    text: "GitHub",
                                    icon: <CodeBracketIcon />,
                                }
                            ]}>
                            <p>
                                Choose your own story in this one of a kind adventure game!
                                My team and I created this game to learn and develop our skills with React.js and MongoDB.
                                I played a big part in this project by writing the majority of the JavaScript which gave me confidence to create more projects using React.js.
                            </p>
                        </Project> */}
                    </div>
                </Layout.Content>
            </Layout.Root>
        </>
    );
}
