import Image from "next/image";
import React from 'react'



type SocialProps = {
    image: string;
    url: string;
}



export const Social = ({ image, url }: SocialProps) => {
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