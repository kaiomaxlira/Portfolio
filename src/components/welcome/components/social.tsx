import Image, { StaticImageData } from "next/image";
import React from 'react'

type SocialProps = {
    image: StaticImageData;
    url: string;
}

export const Social = ({ image, url }: SocialProps) => {
    return (
        <>
            <a href={url} target="_blank" rel="noopener noreferrer " className="w-[3.1rem] h-[3.1rem]">
                <Image
                    src={image}
                    alt="stack"
                    width={50}
                    height={50}
                />
            </a>

        </>
    )
}