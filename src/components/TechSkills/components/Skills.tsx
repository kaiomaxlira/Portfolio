import Image from "next/image";
import React from 'react'



type SkillsProps = {
    image: string;
    url: string;
}



export const Skills = ({ image, url }: SkillsProps) => {
    return (
        <>
            <a href={url} target="_blank" rel="noopener noreferrer">
                <Image
                    src={image}
                    alt="stack"
                    width={75}
                />
            </a>

        </>
    )
}