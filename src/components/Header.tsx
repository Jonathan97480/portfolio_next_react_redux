import React, { useEffect, useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import Image from 'next/image';
import { Button } from './ux';
import { setHeader } from '@/redux/slice/headerStatu.Slice';
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";

export default function Header() {

    const HeaderRedux = useSelector((state: any) => state.Header);
    const [isOpen, setIsOpen] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {

        setIsOpen(HeaderRedux.isOPen);

    }, [HeaderRedux]);

    return (
        <header className='header'>
            <GiHamburgerMenu className='header__burgerIcon' onClick={() => dispatch(setHeader(!isOpen))} />
            <div className={isOpen ? 'header__content header__content-active' : 'header__content'}>
                <Image className='header__content--image' src={require('../images/icons/logo.png')} alt="logo du site" width={47} height={57} />
                <nav className='header__content--nav'>
                    <ul className='header__content--ul'>
                        <li className='header__content--ul__li'>
                            <Link onClick={() => dispatch(setHeader(!isOpen))} href="/#home" title="Lien qui redirige vers la page d'accueil">Accueil</Link>
                        </li>
                        <li className='header__content--ul__li'>
                            <Link onClick={() => dispatch(setHeader(!isOpen))} href="/#about" title="Lien qui redirige vers la section qui somme nous">Qui sommes nous</Link>
                        </li>
                        <li className='header__content--ul__li'>
                            <Link onClick={() => dispatch(setHeader(!isOpen))} href="/#projet" title="Lien qui redirige vers la section nos projets">Nos projets</Link>
                        </li>
                        <li className='header__content--ul__li'>
                            <Link onClick={() => dispatch(setHeader(!isOpen))} href="/#methode" title="Lien qui redirige vers la section nos méthode de travail">Nos méthode de travail</Link>
                        </li>
                        <li className='header__content--ul__li'>
                            <Link onClick={() => dispatch(setHeader(!isOpen))} href="/contact" title="Lien qui redirige vers la page de contact">Nous contacter</Link>
                        </li>
                    </ul>
                </nav>
                <Button text="Connexion" onClick={() => {
                    dispatch(setHeader(!isOpen))
                }} />
            </div>
        </header>
    )
}