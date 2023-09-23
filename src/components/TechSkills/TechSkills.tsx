"use client"

import React from 'react'
import { Skills } from './components/Skills'

import Html from '../../assets/html.svg'
import Css from '../../assets/css.svg'
import Js from '../../assets/js.svg'
import Type from '../../assets/typescript.svg'
import ReactJs from '../../assets/react.svg'
import Tailwind from '../../assets/tailwind.svg'

export const TechSkills = () => {
  
    return (
        <div>

            <div className="flex items-center flex-col justify-center text-center absolute
                h-[15rem] w-[35rem] -right-[-3rem] mt-[-21rem]
                bg-emerald-800 shadow-md shadow-slate-500 rounded-lg">

                    <div className="absolute h-[3rem] w-[15rem] -right-[-10rem] mt-[-15rem]
                        bg-emerald-400 shadow-md shadow-slate-500 rounded-lg">
                            <h1 className="text-center uppercase font-bold mt-3">Skills</h1>
                    </div>

                <div className='grid grid-cols-4 gap-10 mt-[2rem]'>
                    <Skills image={Html} url='https://developer.mozilla.org/pt-BR/docs/Web/HTML' />
                    <Skills image={Css} url='https://developer.mozilla.org/pt-BR/docs/Web/CSS' />
                    <Skills image={Js} url='https://developer.mozilla.org/pt-BR/docs/Web/JavaScript' />
                    <Skills image={Type} url='https://www.typescriptlang.org/' />
                    <Skills image={ReactJs} url='https://react.dev/' />
                    <Skills image={Tailwind} url='https://tailwindcss.com/' />                  
                </div>
            </div>
        </div>
    )
}