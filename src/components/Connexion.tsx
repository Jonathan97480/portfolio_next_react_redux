/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-unescaped-entities */
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Button } from './ux';
import { AiFillCloseCircle } from 'react-icons/ai';
import { BsChevronDoubleUp } from 'react-icons/bs';
import { BiLoader } from 'react-icons/bi';
import { AUTH, BASE_API_URL, RGPD_COOKIE, USER_COOKIE } from '@/pages/api/projects';
import { useDispatch } from 'react-redux';
import { ClientInterface, setClient } from '@/redux/slice/clientSlice';
import { setCookie, getCookie, hasCookie } from 'cookies-next';




interface ConnexionProps {
    onClose?: () => void;
    isClose?: boolean;
}

export default function Connexion({ onClose, isClose = false }: ConnexionProps) {


    const [isAnimeClose, setIsAnimeClose] = useState(false);
    const [isInoOen, setIsInoOpen] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [submit, setSubmit] = useState({
        submit: false,
        error: false,
        message: ''

    });

    const dispatch = useDispatch();

    const closeConnexion = () => {
        setIsAnimeClose(true);
        setTimeout(() => {
            if (onClose)
                onClose();
            setIsAnimeClose(false);
            /* clear fomr and error message */
            const f = document.getElementById('my-form-login') as HTMLFormElement;
            f.reset();
            setSubmit({ ...submit, submit: false, error: false, message: '' });
        }, 500);
    }

    useEffect(() => {

        if (isClose) {
            closeConnexion();
        }


    }, [isClose]);

    useEffect(() => {

        if (hasCookie(USER_COOKIE)) {
            const user = JSON.parse(getCookie(USER_COOKIE) as string);
            if (user) {

                dispatch(setClient({
                    id: user.id,
                    email: user.email,
                    username: user.username,
                    jwt: user.jwt,
                    confirmed: user.confirmed,
                    blocked: user.blocked
                }));
            }
        }
    }, []);

    const handlerOpenInfo = () => {
        setIsInoOpen(true);
    }
    const handlerCloseInfo = () => {
        setIsInoOpen(false);
    }

    const SubmitConnexion = async (event: React.FormEvent<HTMLFormElement>) => {

        event.preventDefault();
        setSubmit({ ...submit, submit: true });
        const data = new FormData();

        const identifier = event.currentTarget.identifier.value;
        const password = event.currentTarget.password.value;

        const response = await fetch(BASE_API_URL + AUTH, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                identifier,
                password,
            }),
        })





        const user = await response.json()

        if (user.error) {
            if (user.error.message === 'Invalid identifier or password') {

                setSubmit({ ...submit, error: true, message: 'Identifiant ou mot de passe incorrect' });

            }
            return;
        }

        if (user) {

            const curentUser: ClientInterface = {
                id: user.user.id,
                blocked: user.user.blocked,
                confirmed: user.user.confirmed,
                email: user.user.email,
                username: user.user.username,
                jwt: user.jwt,
            }
            if (!curentUser.blocked) {

                dispatch(setClient(curentUser));

                if (hasCookie(RGPD_COOKIE) && getCookie(RGPD_COOKIE) === true) {

                    setCookie(USER_COOKIE, JSON.stringify(curentUser), {

                        expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 7),

                    });

                    sessionStorage.setItem(USER_COOKIE, JSON.stringify(curentUser));

                } else {

                    sessionStorage.setItem(USER_COOKIE, JSON.stringify(curentUser));
                }

                setSubmit({ ...submit, error: false, message: '', submit: false });
                /* clear input form */
                const form = document.getElementById("my-form-login") as HTMLFormElement;
                if (form) {
                    form.reset();
                }
                /* close modal */
                closeConnexion();
                return
            }

            setSubmit({ ...submit, error: true, message: "Votre compte est bloqué veuillé contacter l'administrateur via la page de contact de ce site ", submit: false });

        }
    }

    return (
        <>
            <div className={`connexion ${isAnimeClose ? 'connexion__close' : "connexion__open"}  `}>
                <AiFillCloseCircle className='connexion__iconClose' onClick={closeConnexion} />

                <Image className='connexion__cover' src={require('../images/cover/connexion.webp')} alt="connection illustration" loading='lazy' width={509} height={429} />

                <div className='connexion__content'>
                    <div className={` connexion__content__loader ${submit.submit ? 'connexion__content__loader__active' : ""} `}>
                        <BiLoader className='connexion__content__loader__icon' />
                    </div>
                    <span className='connexion__content__title' >Connexion</span>
                    <form className='connexion__content__form' onSubmit={(e) => SubmitConnexion(e)} id="my-form-login">
                        <span className={`connexion__content__message ${submit.error ? 'connexion-error' : 'connexion-success'}`} > {submit.message}  </span>
                        <div>
                            <span onClick={() => handlerOpenInfo()}>Je suis client ou trouver mes identifiants?</span>

                            <div className={`connexion__content__infoClient ${isInoOen ? 'connexion__content__infoClient__open' : 'connexion__content__infoClient__close'}`}>

                                <p>
                                    Nous vous invitons à consulter votre boîte de réception, vous devriez y trouver un mail avec vos identifiants de connexion.
                                </p>
                                <BsChevronDoubleUp className='connexion__content__infoClient__chevron' onClick={() => handlerCloseInfo()} />
                            </div>
                        </div>
                        <input type="email" placeholder="Email" required name="identifier" autoComplete='username' />

                        <div className='connexion__content__form__showPassword'>
                            <input type={`${showPassword ? 'text' : 'password'}`} placeholder="Mot de passe" required name="password" autoComplete='current-password' />
                            <div>
                                <input type="checkbox" onChange={(value) => {
                                    if (value.target.checked) {
                                        setShowPassword(true);
                                    } else {
                                        setShowPassword(false);
                                    }
                                }} />
                                <label htmlFor="show_password">Afficher le mot de passe</label>
                            </div>
                        </div>
                        <input id='show_password' className='btn btn-primary' type="submit" value="Se connecter" />

                    </form>
                </div>
            </div >

        </>
    )


}