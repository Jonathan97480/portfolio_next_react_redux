import React, { useEffect, useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import Image from 'next/image'
import { Button, Modal } from './ux'
import { setHeader } from '@/redux/slice/headerStatu.Slice'
import Link from 'next/link'
import { useSelector, useDispatch } from 'react-redux'
import Connexion from './Connexion'

export default function Header() {
    const HeaderRedux = useSelector((state: any) => state.Header)
    const [isOpen, setIsOpen] = useState(false)
    const dispatch = useDispatch()

    const [openModalConnexion, setOpenModalConnexion] = useState(false)

    useEffect(() => {
        setIsOpen(HeaderRedux.isOPen)
    }, [HeaderRedux])

    return (
        <header className={isOpen ? 'header header__active' : 'header'}>
            <div className='header__burgerContent'>
                <GiHamburgerMenu
                    className='header__burgerContent--burgerIcon'
                    onClick={() => dispatch(setHeader(!isOpen))}
                />
            </div>
            <div className='header__content'>
                <Image
                    className='header__content--image'
                    src={require('../images/icons/logo.png')}
                    alt='logo du site'
                    width={47}
                    height={57}
                />
                <nav className='header__content--nav'>
                    <ul className='header__content--nav__ul'>
                        <li>
                            <Link
                                onClick={() => dispatch(setHeader(false))}
                                href='/#home'
                                scroll={false}
                                title="Lien qui redirige vers la page d'accueil"
                            >
                                Accueil
                            </Link>
                        </li>
                        <li>
                            <Link
                                onClick={() => dispatch(setHeader(false))}
                                href='/#about'
                                scroll={false}
                                title='Lien qui redirige vers la section qui somme nous'
                            >
                                A-propos
                            </Link>
                        </li>
                        <li>
                            <Link
                                onClick={() => dispatch(setHeader(false))}
                                href='/#projet'
                                scroll={false}
                                title='Lien qui redirige vers la section nos projets'
                            >
                                projets
                            </Link>
                        </li>
                        <li>
                            <Link
                                onClick={() => dispatch(setHeader(false))}
                                href='/#methode'
                                scroll={false}
                                title='Lien qui redirige vers la section nos méthode de travail'
                            >
                                méthode de travail
                            </Link>
                        </li>
                        <li>
                            <Link
                                onClick={() => dispatch(setHeader(false))}
                                href='/contact'
                                scroll={false}
                                title='Lien qui redirige vers la page de contact'
                            >
                                contact
                            </Link>
                        </li>
                    </ul>
                </nav>
                <Button
                    text='Connexion'
                    onClick={() => {
                        dispatch(setHeader(false))
                        setOpenModalConnexion(true)
                    }}
                />
            </div>
            {/* MODAL */}
            <Modal
                open={openModalConnexion}
                transparent={true}
                onClose={() => setOpenModalConnexion(false)}

            >
                <Connexion />
            </Modal>
        </header >
    )
}
