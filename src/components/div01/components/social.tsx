import Image, { StaticImageData } from "next/image";
import React from 'react'



type LogoProps = {
    image: StaticImageData;
    src: string;
}



export const Social = ({ image, src }: LogoProps) => {
    return (
        <>
            <a href={src}>
                <Image
                    src={image}
                    alt="stack"
                    width={300}
                    height={100}
                />
            </a>

        </>
    )
}

