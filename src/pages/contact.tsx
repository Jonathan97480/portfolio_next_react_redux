/* eslint-disable react-hooks/rules-of-hooks */
import { Main } from "@/components";
import React, { useState } from "react";
import { BsFacebook, BsLinkedin, BsTwitter } from 'react-icons/bs';
import Image from "next/image";
import { BiLoader } from 'react-icons/bi';
import { event } from "nextjs-google-analytics";
import { saveFormContactSend } from "./api/projects";

interface SubmitAction {
    submit: boolean,
    submitMessage: string,
    success: boolean,
    successMessage: string,
    error: boolean,
    errorMessage: string
}

export default function Contact() {

    const [submitAction, setSubmitAction] = useState<SubmitAction>({
        submit: false,
        submitMessage: "Envoi en cours...",
        success: false,
        successMessage: "L'envoi du formulaire est confirmer notre équipe prendra contact avec vous dans les 48 heures",
        error: false,
        errorMessage: "L'envoi du formulaire à échoué veuillez réessayé plus tard ou contactez-nous par téléphone"

    })
    const submitForm = (_event: any) => {
        _event.preventDefault();

        setSubmitAction({ ...submitAction, submit: true })

        const form: HTMLFormElement = document.getElementById("my-form") as HTMLFormElement;
        const data = new FormData(_event.target);


        const newData = new FormData();
        newData.append("email", data.get("email") as string);
        newData.append("message", data.get("name") as string + " <br>" + data.get("message") as string);

        fetch(_event.target.action, {
            method: form.method,
            body: data,
            headers: {
                'Accept': 'application/json'
            }
        }).then(response => {
            if (response.ok) {
                setSubmitAction({ ...submitAction, submit: false, success: true })
                event("submit_form", {
                    category: "Contact",
                    label: `message envoyer avec succès par ${data.get("name") as string} `,
                });

                saveFormContactSend({
                    data: {
                        email: data.get("email") as string,
                        name: data.get("name") as string,
                        message: data.get("message") as string
                    }

                })

                form.reset()
            } else {
                response.json().then(data => {
                    setSubmitAction({ ...submitAction, submit: false, error: true })
                    event("submit_form", {
                        category: "Contact",
                        label: `message envoi erreur par ${data.get("name") as string} `,
                    });
                })
            }
        }).catch(error => {
            setSubmitAction({ ...submitAction, submit: false, error: true })
            event("submit_form", {
                category: "Contact",
                label: `message envoi erreur par ${data.get("name") as string} `,
            });
        });
    }



    return (
        <Main
            pageTitle="Page de contact"
            pageDescription={`Besoin de nous contacter? Vous pouvez nous trouver sous les noms d'utilisateur "jon dev", "jon-dev", ou "jon.dev".N'hésitez pas à nous envoyer un message si vous avez des questions ou des commentaires. Nous sommes là pour vous aider!`}
            className="contact"
        >
            {
                !submitAction.success && !submitAction.error ?
                    <div className="contact__content">
                        {
                            submitAction.submit &&
                            <div className="contact__submit">
                                <BiLoader className="contact__submit__loading" />
                                <p className="paragraphe">{submitAction.submitMessage}</p>
                            </div>
                        }
                        <Image className="contact__content__cover" src={require('../images/cover/contact.webp')} alt="illustration pour la page de contact" width={514} height={565} loading="lazy" />
                        <div className="contact__content__right">

                            <h1 className="contact__content__right__title title">Contactez-nous</h1>
                            <form className="form" onSubmit={(e) => submitForm(e)} id="my-form" method="POST" action="https://formspree.io/f/mlekglna">
                                <div className="form__block">
                                    <label htmlFor="name"> Nom & Prénom</label>
                                    <input type="text" name="name" id="name" placeholder=" Votre nom & prénom" required />
                                </div>
                                <div className="form__block">
                                    <label htmlFor="email">Email</label>
                                    <input type="text" name="email" placeholder="Votre email" id="email" required />
                                </div >

                                <div className="form__block">
                                    <label htmlFor="message">Message</label>
                                    <textarea name="message" id="message" cols={30} rows={10} placeholder="Votre message" required />

                                </div>
                                <input type="submit" value="Envoyer" className="btn btn-primary" />
                            </form>
                        </div>
                    </div> :
                    <div className="contact__message">
                        {
                            submitAction.success ?
                                <p className="contact__success paragraphe"> {submitAction.successMessage} </p> :
                                <p className="contact__error paragraphe"> {submitAction.errorMessage} </p>

                        }
                        <div >
                            <button className="btn btn-primary" onClick={() => setSubmitAction({ ...submitAction, submit: false, success: false, error: false })}>Retour</button>
                        </div>
                    </div>
            }
            <div className="contact__reseaux" >
                <h2 className="contact__reseaux__title ">Suivez nous sur les réseaux sociaux</h2>
                <div className="contact__reseaux__blackLink">
                    <a href="https://www.linkedin.com/in/gauvin-jonathan" target={'_blank'}
                        rel='noreferrer'
                        title="lien ver LinkedIn" >
                        <BsLinkedin className="contact__reseaux__icon" /> <span>LinkedIn</span>
                    </a>
                    <a href="https://www.facebook.com/jon.dev974" target={'_blank'}
                        rel='noreferrer' title="lien ver Facebook">
                        <BsFacebook className="contact__reseaux__icon" /> <span>Facebook</span>
                    </a>
                    <a href="https://twitter.com/jonathanfrt9741" target={'_blank'}
                        rel='noreferrer' title="lien ver Twitter">
                        <BsTwitter className="contact__reseaux__icon" /> <span>Twitter</span>
                    </a>
                </div>
            </div>
        </Main >
    )
}
