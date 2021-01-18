import { Button, Image, Media } from "react-bootstrap";

import React from "react";

type ProjectButton = {
    href: string;
    icon?: string;
    text: string;
}

type ProjectProps = {
    name: string;
    imgSrc: string;
    imgAlt: string;
    children: React.ReactChild;
    buttons: ProjectButton[];
};

function Project(props: ProjectProps): JSX.Element {
    return (
        <Media className="project">
            <Image
                className="image"
                width={400}
                src={props.imgSrc}
                alt={props.imgAlt}
                rounded />
            <Media.Body>
                <h2>{props.name}</h2>
                {props.children}
                <div className="text-center links">
                    {props.buttons.map((button, idx) => {
                        return (
                            <a key={idx} href={button.href}>
                                <Button variant="dark">
                                    {button.icon &&
                                        <i className={`bi bi-${button.icon}`} />}
                                    {button.text}
                                </Button>
                            </a>
                        );
                    })}
                </div>
            </Media.Body>
        </Media>
    );
}

export default Project;
