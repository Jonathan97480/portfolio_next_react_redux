import { Main } from "@/components";

import { BsFacebook, BsLinkedin, BsTwitter } from 'react-icons/bs';
import Image from "next/image";

export default function Contact() {
    return (
        <Main
            pageTitle="Contact"
            pageDescription="Contact"
            className="contact"
        >
            <div className="contact__content">
                <Image className="contact__content__cover" src={require('../images/cover/contact.webp')} alt="illustration pour la page de contact" width={514} height={565} loading="lazy" />
                <div className="contact__content__right">

                    <h1 className="contact__content__right__title title">Contacter nous</h1>
                    <form className="form" >
                        <div className="form__block">
                            <label htmlFor="name"> Nom & Prénom</label>
                            <input type="text" name="last_name_&first_name" id="name" placeholder=" Votre nom & prénom" required />
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
            </div>

            <div className="contact__reseaux" >
                <h2 className="contact__reseaux__title ">Suivez nous sur les réseaux sociaux</h2>
                <div className="contact__reseaux__blackLink">
                    <a href="https://www.linkedin.com/in/gauvin-jonathan" title="lien ver LinkedIn" >
                        <BsLinkedin className="contact__reseaux__icon" /> <span>LinkedIn</span>
                    </a>
                    <a href="https://www.facebook.com/jon.dev974" title="lien ver Facebook">
                        <BsFacebook className="contact__reseaux__icon" /> <span>Facebook</span>
                    </a>
                    <a href="https://twitter.com/jonathanfrt9741" title="lien ver Twitter">
                        <BsTwitter className="contact__reseaux__icon" /> <span>Twitter</span>
                    </a>
                </div>
            </div>
        </Main>
    )
}
