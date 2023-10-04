// copyright (c) 2021-2023 Cole Tobin
// all rights reserved

import A from "./A";
import React from "react";

type ProjectButton = {
    href: string;
    text: string;
    icon?: JSX.Element;
}

type ProjectProps = {
    name: string;
    imgSrc: string;
    imgAlt: string;
    children: JSX.Element | JSX.Element[];
    buttons: ProjectButton[];
    technologies?: string[];
};

export default function Project(props: ProjectProps): JSX.Element {
    return (
        <div className="pb-4">

            <A href={props.imgSrc}>
                <img
                    className="float-left rounded-lg mr-4"
                    width={400}
                    alt={props.imgAlt}
                    src={props.imgSrc} />
            </A>

            <h2 className="border-0">{props.name}</h2>

            {props.children}

            <div className="text-center my-4">
                {props.buttons.map((button, idx) => (
                    <A key={idx} href={button.href}>
                        <div className="inline bg-slate-700 text-white rounded-lg p-2 mx-2">
                            {button.icon &&
                                <span className="inline-block w-5 align-middle ml-0.5 mb-1 mr-2">{button.icon}</span>}
                            {button.text}
                        </div>
                    </A>
                ))}
            </div>

            {props.technologies &&
                <div className="text-gray-600 text-sm">
                    Technologies: {props.technologies.join(", ")}
                </div>}

            <div className="clear-both" />

        </div>
    );
}
