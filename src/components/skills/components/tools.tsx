import Image from "next/image";
import React from 'react'



type ToolsProps = {
    image: string;
    url: string;
}



export const Tools = ({ image, url }: ToolsProps) => {
    return (
        <>
            <a href={url} target="_blank" rel="noopener noreferrer">
                <Image
                    src={image}
                    alt="stack"
                    width={70}
                    height={70}
                />
            </a>

        </>
    )
}