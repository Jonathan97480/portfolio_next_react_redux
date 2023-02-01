/* eslint-disable react/no-unescaped-entities */
import { Main } from "@/components";
import Image from "next/image";
import Link from "next/link";


export default function page404() {
    return (
        <Main
            pageTitle="404"
            pageDescription="Oh non! Il semble que vous ayez atterri sur une page qui n'existe pas. Ne vous inquiétez pas, cela arrive à tout le monde. Vous pouvez retourner à la page d'accueil en cliquant sur le lien ci-dessous, ou utiliser la barre de navigation pour trouver ce que vous cherchez. Si vous avez besoin d'aide supplémentaire, n'hésitez pas à nous contacter. Nous sommes là pour vous aider!"
            className="page404 "

        >
            <Image className="page404__cover" src={require('../images/cover/404.webp')} alt="404" width={500} height={500} />
            <div className="page404__blockParagraphe">
                <p className="paragraphe">Oups ! Il semble que vous vous soyez perdu(e) dans les méandres d'Internet. Ne vous inquiétez pas, cela arrive à tout le monde.
                </p>
                <p className="paragraphe"> La page que vous recherchez n'est peut-être plus disponible ou n'a jamais existé. Ou peut-être que vous avez simplement saisi une URL incorrecte.</p>
                <p className="paragraphe"> Mais ne désespérez pas ! Il y a encore beaucoup de choses à découvrir sur notre site. Vous pouvez</p>
            </div>
            <Link className="btn btn-primary" href="/">
                Retourner a la page d’accueil
            </Link>

            <div className="page404__blockParagraphe">
                <p className="paragraphe">Et si vous êtes vraiment à la recherche d'aventure, pourquoi ne pas saisir une adresse aléatoire et voir où cela vous mène ? On ne sait jamais, vous pourriez découvrir quelque chose d'inattendu et d'excitant !</p>
                <p className="paragraphe">En tout cas, n'hésitez pas à nous faire savoir si vous avez besoin d'aide pour retrouver votre chemin. Nous serons ravis de vous guider.</p>
            </div>
        </Main>
    )
}
