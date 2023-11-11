import Image, { StaticImageData } from "next/image";
import React from 'react'
import Linkedin from "@/assets/linkedin.svg";
import GitHub from "@/assets/GitHub.svg"

type SocialProps = {
    image: StaticImageData;
    url: string;
}

export const Social = ({ image, url }: SocialProps) => {
    const imageSize = image.src === Linkedin.src ? 60 : image.src === GitHub.src ? 45 : 30;

    return (
        <>
            <a href={url} target="_blank" rel="noopener noreferrer " className="w-[3rem] h-[3rem]">
                <Image
                    src={image}
                    alt="stack"
                    width={imageSize}
                    height={imageSize}
                    
                />
            </a>

        </>
    )
}