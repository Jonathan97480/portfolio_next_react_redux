import { BsFacebook, BsLinkedin, BsTwitter } from 'react-icons/bs'
import Link from 'next/link'


export default function Footer() {
    return (
        <>
            <footer className='footer'>
                <div className='footer__content'>
                    <div className='footer__content--navigation'>
                        <p>Navigations</p>
                        <nav className='footer__content--navigation__nav'>
                            <ul className='footer__content--navigation__nav--ul'>
                                <li>
                                    <Link
                                        href='/#home'

                                        title="Lien qui redirige vers la page d'accueil"
                                    >
                                        Accueil
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href='/#about'
                                        scroll={false}
                                        title='Lien qui redirige vers la section qui somme nous'
                                    >
                                        A-propos
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href='/#projet'
                                        scroll={false}
                                        title='Lien qui redirige vers la section nos projets'
                                    >
                                        projets
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href='/#methode'
                                        scroll={false}
                                        title='Lien qui redirige vers la section nos méthode de travail'
                                    >
                                        méthode de travail
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className='footer__content--utiles'>
                        <p>liens utiles</p>
                        <Link href='legales' title='Redirige ver les mentions légales'>
                            Mentions légales
                        </Link>
                        <Link href='legales#rgpd  scroll={false} ' scroll={false} title='Redirige ver les RGPD'>
                            RGPD
                        </Link>
                    </div>
                    <div className='footer__content--contact'>
                        <p>Nous contacter</p>
                        <Link href='contact' title='Redirige ver la page de contact'>
                            Page de contact
                        </Link>
                        <a href='tel:+0692417574' title='Numero de téléphone pour joindre Jon_dev'>
                            Mobile : 0692 41 75 74
                        </a>
                    </div>
                    <div className='footer__content--reseaux'>
                        <p>Réseaux sociaux</p>
                        <div className='footer__content--reseaux--icon'>
                            <a
                                href='https://www.linkedin.com/in/gauvin-jonathan'
                                title='Lien ver mon LinkedIn'
                                target={'_blank'}
                                rel='noreferrer'
                            >
                                <BsLinkedin />
                            </a>
                            <a
                                href='https://www.facebook.com/jon.dev974'
                                title='Lien ver mon Facebook'
                                target={'_blank'}
                                rel='noreferrer'
                            >
                                <BsFacebook />
                            </a>
                            <a
                                href='https://twitter.com/jonathanfrt9741'
                                title='Lien ver mon Twitter'
                                target={'_blank'}
                                rel='noreferrer'
                            >
                                <BsTwitter />
                            </a>
                        </div>
                    </div>
                </div>
                <p className='footer__copy'>©copyright jon_dev 2023</p>

            </footer>
            {/* <Rgp /> */}
        </>
    )
}
