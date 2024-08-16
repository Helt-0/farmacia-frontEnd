import React from 'react'
import { FacebookLogo, InstagramLogo, LinkedinLogo } from '@phosphor-icons/react'

function Footer() {



    return (
        <>
            <div className="flex justify-center bg-gray-900 text-white">
                <div className="container flex flex-col items-center py-4">
                    <p className='text-xl font-bold'>VivaBem Farma Generation | Copyright: Generation Brasil </p>
                    <p className='text-lg'>Acesse nossas redes sociais</p>
                    <div className='flex gap-2'>
                        <a href="https://www.linkedin.com/in/lucas-vasconcelos-dev/"><LinkedinLogo size={48} weight='bold' /></a>
                        <a href="https://www.instagram.com/generationbrasil/"><InstagramLogo size={48} weight='bold' /></a>
                        <a href="https://www.facebook.com/generationbrasil/"><FacebookLogo size={48} weight='bold' /></a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer