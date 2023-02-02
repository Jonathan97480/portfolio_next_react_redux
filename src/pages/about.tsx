/* eslint-disable react/no-unescaped-entities */
import { Main } from "@/components";
import Image from "next/image";


export default function About() {

    const schema = {
        '@context': 'https://schema.org',
        '@type': 'About',
        siteUrl: 'https://site.jon-dev.fr',
        name: 'Jon_dev',
        pageUrl: 'https://site.jon-dev.fr/about',
        companyName: 'Jon_dev',
        companySpecialization: 'développement web et mobile pour les petites et moyennes entreprises',
        workMode: 'télétravail',
        regionSupport: 'agréé au chèque numérique de la Région',
        supportPercentage: '80%',
        services: ['création de sites vitrines', 'sites e-commerce', 'applications web sur mesure', 'développement d\'applications mobiles'],
        mission: 'comprendre les besoins de nos clients pour les aider à atteindre leurs objectifs en utilisant les dernières technologies',
        contact: ['jon.dev974@gmail.com', 'https://www.linkedin.com/in/gauvin-jonathan/', 'https://www.facebook.com/jon.dev974/', 'https://www.instagram.com/jon97480/'],


    }
    return (
        <Main
            pageTitle="Page À propos"
            pageDescription="Cette page vous donne un aperçu de qui nous sommes et de ce que nous faisons. Nous aimons partager notre histoire, nos valeurs et nos objectifs avec nos utilisateurs. Vous découvrirez également des informations sur notre équipe, nos réalisations et nos projets futurs. Nous sommes fiers de notre travail et nous espérons que vous apprécierez en apprendre davantage sur nous. N'hésitez pas à nous contacter si vous avez des questions ou des commentaires."
            className="about"
            schema={schema}

        >
            <h1 className="about__title title">À-propos de nous</h1>
            <Image className="about__cover" src={require('../images/cover/about.webp')} alt="illustration pour la page de présentation" width={576} height={309} loading="lazy" />
            <div className="about__blockParagraphe">

                <div>
                    <h2 className="title--standard title_left">Présentation de Jon_dev</h2>
                    <p className="paragraphe">
                        Jon_dev est une entreprise spécialisée dans le développement web et mobile pour les petites et moyennes entreprises. <br /> Nous visons à aider nos clients à être visibles sur Internet en utilisant les dernières technologies telles que React, React Native, Nextjs, WordPress, PrestaShop, Strapi, Firebase et Redux.<br /> Notre équipe est composée de développeurs expérimentés et passionnés, capable de créer des sites web et des applications mobiles sur Android et IOS
                    </p>
                </div>
                <div>
                    <h2 className="title--standard title_left">Le fondateur de Jon_dev</h2>
                    <p className="paragraphe">
                        Gauvin Jonathan, fondateur de Jon_dev, expert en développement web et mobile avec plus de 15 ans d'expérience et 7 ans spécialisé dans ce domaine.<br /> Avec une équipe composée d'un développeurs front-end talentueux, d'un community manager compétent et d'un web designer créatif, Jon_dev assure la réussite de ses projets.<br /> Le développement back-end est supervisé par Gauvin Jonathan lui-même, garantissant ainsi la qualité de ses services de développement web, y compris les sites vitrines, les sites e-commerce, les applications web sur mesure et les développements d'applications mobiles.
                    </p>
                </div>
                <div>
                    <h2 className="title--standard title_left">Télétravail chez Jon_dev</h2>
                    <p className="paragraphe">
                        Chez Jon_dev, nous travaillons en mode télétravail pour mieux s'adapter aux besoins spécifiques de chacun de nos collaborateurs et pour permettre une ambiance plus chaleureuse entre collègues.<br /> Nous croyons que cela nous permet d'offrir un service de qualité supérieure à nos clients.
                    </p>
                </div>
                <div>
                    <h2 className="title--standard title_left"> Aide de la région</h2>
                    <p className="paragraphe">
                        Jon_dev est agréé au chèque numérique de la Région, ce qui permet à nos clients de se faire rembourser jusqu'à 80% des sommes déboursées pour leur site ou application mobile.<br /> Cette aide régionale permet à nos clients de maximiser leur retour sur investissement.
                    </p>
                </div>
                <div>
                    <h2 className="title--standard title_left">Nos services de développement web</h2>
                    <p className="paragraphe">
                        Notre expertise technique combinée à notre engagement envers la qualité de service nous permet de fournir un large éventail de services de développement web, y compris la création de sites vitrines, de sites e-commerce, d'applications web sur mesure et de développement d'applications mobiles.<br /> Nous visons à comprendre les besoins de nos clients pour les aider à atteindre leurs objectifs en utilisant les dernières technologies.
                    </p>
                </div>
                <div>
                    <h2 className="title--standard title_left">Contactez-nous pour discuter de vos projets</h2>
                    <p className="paragraphe">

                        N'hésitez pas à nous contacter pour discuter de vos projets web et de la façon dont nous pouvons vous aider à les réaliser.<br /> Nous sommes convaincus que notre expertise technique et notre engagement envers la qualité de service vous permettront de réussir sur Internet.
                    </p>
                </div>
            </div >
        </Main >
    )
}
