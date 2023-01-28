/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-unescaped-entities */
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Button } from './ux';
import { AiFillCloseCircle } from 'react-icons/ai';
import { BsChevronDoubleUp } from 'react-icons/bs';
import { BiLoader } from 'react-icons/bi';
import handler from '@/pages/api/hello';


interface ConnexionProps {
    onClose?: () => void;
    isClose?: boolean;
}

export default function Connexion({ onClose, isClose = false }: ConnexionProps) {


    const [isAnimeClose, setIsAnimeClose] = useState(false);
    const [isInoOen, setIsInoOpen] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [isLoader, setIsLoader] = useState(false);

    const closeConnexion = () => {
        setIsAnimeClose(true);
        setTimeout(() => {
            if (onClose)
                onClose();
            setIsAnimeClose(false);
        }, 500);
    }

    useEffect(() => {

        if (isClose) {
            closeConnexion();
        }

    }, [isClose]);

    const handlerOpenInfo = () => {
        setIsInoOpen(true);
    }
    const handlerCloseInfo = () => {
        setIsInoOpen(false);
    }

    const SubmitConnexion = async (event: React.FormEvent<HTMLFormElement>) => {
        setIsLoader(true);
        event.preventDefault();
        const data = new FormData(event.currentTarget);

        setTimeout(() => {
            console.log({
                email: data.get('email'),
                password: data.get('password'),
            });
            setIsLoader(false);
            closeConnexion();
        }, 2000);
        // eslint-disable-next-line no-console


    }

    return (
        <>
            <div className={`connexion ${isAnimeClose ? 'connexion__close' : "connexion__open"}  `}>
                <AiFillCloseCircle className='connexion__iconClose' onClick={closeConnexion} />

                <Image className='connexion__cover' src={require('../images/cover/connexion.jpg')} alt="connection illustration" loading='lazy' width={509} height={429} />

                <div className='connexion__content'>
                    <div className={` connexion__content__loader ${isLoader ? 'connexion__content__loader__active' : ""} `}>
                        <BiLoader className='connexion__content__loader__icon' />
                    </div>
                    <h2 className='connexion__content__title' >Connexion</h2>
                    <form className='connexion__content__form' onSubmit={(e) => SubmitConnexion(e)}>
                        <div>
                            <span onClick={() => handlerOpenInfo()}>Je suis client ou trouver mes identifiants?</span>

                            <div className={`connexion__content__infoClient ${isInoOen ? 'connexion__content__infoClient__open' : 'connexion__content__infoClient__close'}`}>

                                <p>
                                    Vous être client vous avez reçu un email qui contenait des identifiants de connexion pour suivre l'évolution de votre projet veuillez vous connecter ici
                                </p>
                                <BsChevronDoubleUp className='connexion__content__infoClient__chevron' onClick={() => handlerCloseInfo()} />
                            </div>
                        </div>
                        <input type="email" placeholder="Email" required name="email" />

                        <div className='connexion__content__form__showPassword'>
                            <input type={`${showPassword ? 'text' : 'password'}`} placeholder="Mot de passe" required name="password" />
                            <div>
                                <input lang='show_password' type="checkbox" onChange={(value) => {
                                    if (value.target.checked) {
                                        setShowPassword(true);
                                    } else {
                                        setShowPassword(false);
                                    }
                                }} />
                                <label htmlFor="show_password">Afficher le mot de passe</label>
                            </div>
                        </div>
                        <Button
                            text={'Se connecter'}
                            onClick={() => { }}
                        />

                    </form>
                </div>
            </div >

        </>
    )


}