import A from "./A";
import Clear from "./Clear";
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
        <div className="pb-4">
            <A href={props.imgSrc}>
                <img
                    className="float-left rounded-lg mr-4"
                    width={400}
                    alt={props.imgAlt}
                    src={props.imgSrc} />
            </A>
            <h2>{props.name}</h2>
            {props.children}
            <div className="text-center my-4">
                {props.buttons.map((button, idx) => (
                    <A key={idx} href={button.href}>
                        <div className="inline bg-stone-700 text-white rounded-lg p-2 mx-2">
                            {/* {button.icon &&
                                <i className={`bi bi-${button.icon}`} />} */}
                            {button.text}
                        </div>
                    </A>
                ))}
            </div>
            {props.technologies &&
                <div className="text-gray-600 text-sm">
                    Technologies: {props.technologies.map((technology, idx) => (
                        <React.Fragment key={idx}>
                            {technology}
                            {idx !== props.technologies.length - 1 && ", "}
                        </React.Fragment>
                    ))}
                </div>}
            <Clear />
        </div>
    );
}

export default Project;
