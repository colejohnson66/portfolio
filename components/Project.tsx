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
    children: JSX.Element | JSX.Element[];
    buttons: ProjectButton[];
    technologies?: string[];
};

function Project(props: ProjectProps): JSX.Element {
    return (
        <Media className="project">
            <a href={props.imgSrc}>
                <Image
                    className="image"
                    width={400}
                    src={props.imgSrc}
                    alt={props.imgAlt}
                    rounded />
            </a>
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
                {props.technologies &&
                    <div className="technologies text-muted">
                        Technologies: {props.technologies.map((technology, idx) => (
                        <React.Fragment key={idx}>
                            {technology}
                            {idx !== props.technologies.length - 1 && ", "}
                        </React.Fragment>
                    ))}
                    </div>}
            </Media.Body>
        </Media>
    );
}

export default Project;
