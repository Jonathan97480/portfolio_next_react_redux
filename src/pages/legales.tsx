/* eslint-disable react/no-unescaped-entities */
import { Main } from "@/components";

export default function Legales() {
    return (
        <Main
            pageTitle="Page Mentions légales"
            pageDescription="Cette page contient les informations légales importantes concernant notre site web. Il comprend des informations sur les propriétaires du site, les conditions d'utilisation, les politiques de confidentialité, les marques déposées et les lois applicables. Veuillez prendre le temps de lire attentivement ces informations avant d'utiliser notre site. Nous nous efforçons de fournir une expérience en ligne transparente et éthique pour nos utilisateurs."
            className="legals"
        >
            <h1 className="legals__title title">Les mentions légales</h1>
            <div className="legals__block">
                <h2>Editeur du site :</h2>
                <p>
                    Jon_dev
                    <br />
                    6 rue Renée Hoareau
                    <br />
                    Saint-Joseph 97480
                    Réunion
                    <br />
                    SIRET : 904 797 255 00018
                    <br />
                    TVA : FR37904797255

                </p>
            </div>
            <div className="legals__block">
                <h2>Hébergeur du site :</h2>
                <p>
                    OVH SAS
                    <br />
                    2 rue Kellermann – 59100 Roubaix
                    <br />
                    +33 (0)8 203 203 63
                    <br />
                    http://www.ovh.fr/
                </p>
            </div>
            <div className="legals__block">
                <p className="paragraphe">
                    <br />
                    <strong className="strong">Informations légales</strong> <br />
                    Le site Jon_dev est édité par la société Jon_dev, immatriculée au SIRET 904 797 255 00018 et au numéro de TVA FR37904797255, domiciliée au 6 rue Renée Hoareau à Saint-Joseph 97480 Réunion. <br />
                    <br />
                    <strong className="strong">Hébergement</strong> <br />
                    L'hébergement du site est assuré par la société OVH SAS, domiciliée au 2 rue Kellermann - 59100 Roubaix, enregistrée au Registre du Commerce et des Sociétés de Roubaix-Tourcoing sous le numéro 424 761 419.
                    <br />
                    <br />
                    <strong className="strong">Contenues</strong> <br />
                    Les informations contenues sur le site sont fournies à titre indicatif et ne sont pas exhaustives. Elles peuvent être modifiées ou mises à jour sans préavis. Jon_dev ne peut en aucun cas être tenue responsable des dommages directs ou indirects, tels que, notamment, préjudice matériel, perte de données ou de programme, préjudice financier, résultant de l'accès ou de l'utilisation de ce site ou de tous sites qui lui sont liés.
                    <br />
                    <br />
                    <strong className="strong">Marques et logos</strong> <br />
                    Les marques et logos figurant sur le site sont des marques déposées par les sociétés qui en sont propriétaires. Toute reproduction ou utilisation de ces marques ou logos, sans l'accord préalable et écrit des propriétaires, est strictement interdite.
                    <br />
                    <br />
                    <strong className="strong">Informations  & données personnelles</strong> <br />

                    Les informations et données personnelles collectées sur le site sont traitées conformément à la loi n°78-17 du 6 janvier 1978 relative à l'informatique, aux fichiers et aux libertés. Les utilisateurs disposent d'un droit d'accès, de modification, de rectification et de suppression des données qui les concernent. Pour exercer ce droit, il suffit d'en faire la demande par courrier électronique à l'adresse suivante : contact@jon_dev.fr
                    <br />
                    Le site Jon_dev est soumis à la législation française. Tout litige relatif à son utilisation est soumis à la juridiction des tribunaux compétents de La Réunion.

                    <br />
                    <br />
                    <strong className="strong" id="rgpd">RGPD</strong>
                    <br />
                    Nous prenons très au sérieux la protection de vos données personnelles et nous nous conformons au RGPD. Nous collectons, stockons et utilisons vos données uniquement dans le but de fournir nos services et produits. Vous pouvez à tout moment demander l'accès à vos données personnelles, les faire corriger ou les faire supprimer. Pour plus d'informations sur la protection de vos données personnelles, veuillez consulter notre politique de confidentialité en ligne.
                    <br />
                    <strong className=" strong" > Pour faire une demande de suppression de vos données personnelles, veuillez nous contacter à l'adresse suivante : <a href="mailto:jon.dev974@gmail.com" title="Adresse email de contact pour toute demande lier ho RGPD" >jon.dev974@gmail.com</a>  </strong>
                    <br />
                    <br />
                    <strong className="strong">Google Analytique</strong> <br />
                    Enfin, nous souhaitons informer les utilisateurs que le site Jon_dev utilise Google Analytics pour suivre les statistiques d'utilisation et d'audience.
                    <br />
                    Cette plateforme peut collecter des informations telles que les pages visitées, le temps passé sur le site, les sources de trafic, etc.
                    <br />
                    Ces informations sont utilisées pour améliorer l'expérience utilisateur et adapter le contenu du site aux besoins de nos visiteurs.<br /> Les données collectées par Google Analytics sont soumises à la politique de confidentialité de Google.
                    <br />
                    Les utilisateurs peuvent choisir de désactiver Google Analytics en installant l'extension de navigateur appropriée.
                    <br />
                    Pour plus d'informations sur la protection de vos données personnelles, veuillez consulter notre politique de confidentialité en ligne.
                </p>


            </div>
        </Main >
    )
}
