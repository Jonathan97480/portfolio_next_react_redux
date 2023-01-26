import { GiHamburgerMenu } from 'react-icons/gi';
import Image from 'next/image';
import { Button } from './ux';
export default function Header() {

    return (
        <header className='header'>
            <GiHamburgerMenu className='header__burgerIcon' />
            <div className='header__content'>
                <Image className='header__content--image' src={require('../images/icons/logo.png')} alt="logo du site" width={47} height={57} />
                <nav className='header__content--nav'>
                    <ul className='header__content--ul'>
                        <li className='header__content--ul__li'>Accueil</li>
                        <li className='header__content--ul__li'>Qui sommes nous</li>
                        <li className='header__content--ul__li'>Nos projets</li>
                        <li className='header__content--ul__li'>Nos méthode de travail</li>
                        <li className='header__content--ul__li'>Nous contacter</li>
                    </ul>
                </nav>
                <Button text="Connexion" onClick={() => { }} />
            </div>
        </header>
    )
}