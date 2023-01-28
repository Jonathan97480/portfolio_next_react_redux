/* eslint-disable react/no-unescaped-entities */
import { Main } from "@/components";
import Image from "next/image";


export default function About() {
    return (
        <Main
            pageTitle="About"
            pageDescription="About"
            className="about"
        >
            <h1 className="about__title title">À-propos de nous</h1>
            <Image className="about__cover" src={require('../images/cover/about.jpg')} alt="illustration pour la page de présentation" width={576} height={309} loading="lazy" />
            <div className="about__blockParagraphe">

                <p className="paragraphe">
                    <strong>Jon_dev</strong> est une entreprise spécialisée dans le développement web et mobile pour les petites et moyennes entreprises. Nous avons pour objectif de permettre à nos clients d'être visibles sur Internet en utilisant les dernières technologies telles que React, React Native, Nextjs, WordPress, PrestaShop, Strapi, Firebase et Redux.</p>

                <p className="paragraphe">Notre équipe est composée de développeurs expérimentés et passionnés, capables de créer des <strong>sites et des applications mobiles sur Android et IOS</strong>. Nous sommes également agréés au chèque numérique de la Région, ce qui permet à nos clients de <strong>se faire rembourser jusqu'à 80% des sommes déboursées</strong> pour leur site ou application mobile.</p>

                <p className="paragraphe">Nous sommes fiers de notre capacité à comprendre les besoins de nos clients et à les aider à atteindre leurs objectifs en utilisant les dernières technologies. Nous sommes convaincus que notre expertise technique combinée à notre engagement à fournir un service de qualité supérieure permettra à nos clients de réussir sur Internet. Contactez-nous dès maintenant pour discuter de vos projets et de la façon dont nous pouvons vous aider à les réaliser.</p>
            </div>
        </Main>
    )
}
