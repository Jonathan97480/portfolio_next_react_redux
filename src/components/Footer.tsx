import { BsFacebook, BsLinkedin, BsTwitter } from 'react-icons/bs';

export default function Footer() {

    return (
        <footer className='footer'>
            <div className='footer__content'>
                <div className='footer__content--navigation'>
                    <p>Navigations</p>
                    <nav className='footer__content--navigation__nav'>
                        <ul className='footer__content--navigation__nav--ul'>
                            <li className='footer__content--navigation__nav--ul__li'>Accueil</li>
                            <li className='footer__content--navigation__nav--ul__li'>Qui sommes nous</li>
                            <li className='footer__content--navigation__nav--ul__li'>Nos projets</li>
                            <li className='footer__content--navigation__nav--ul__li'>Nos méthode de travail</li>
                            <li className='footer__content--navigation__nav--ul__li'>Nous contacter</li>
                        </ul>
                    </nav>

                </div>
                <div className='footer__content--utiles'>
                    <p>liens utiles</p>
                    <a href="Mentions légales " title="Redirige ver les mentions légales"></a>
                    <a href="RGPD " title="Redirige ver les RGPD"></a>
                </div>
                <div className='footer__content--contact'>
                    <p>Nous contacter</p>
                    <a href="contact" title="Redirige ver la page de contact">Page de contact</a>
                    <a href="tel:+0692417574">Mobile : 0692 41 75 74</a>
                </div>
                <div className='footer__content--reseaux'>
                    <p>Réseaux sociaux</p>
                    <a href="https://www.linkedin.com/in/gauvin-jonathan" title='Lien ver mon LinkedIn' target={"_blank"} rel="noreferrer">
                        <BsLinkedin />
                    </a>
                    <a href="https://www.facebook.com/jon.dev974" title='Lien ver mon Facebook' target={"_blank"} rel="noreferrer">
                        <BsFacebook />
                    </a>
                    <a href="https://twitter.com/jonathanfrt9741" title='Lien ver mon Twitter' target={"_blank"} rel="noreferrer">
                        <BsTwitter />
                    </a>
                </div>
            </div>
            <p className='footer__copy'>©copyright jon_dev 2023</p>
        </footer>
    )
}