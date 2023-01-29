import Image from "next/image"


export default function ProjetClient({ params }: { params: any }) {
    return (
        <>
            {/* Content Variable multiple components */}
            <h1 className="client__right__title title">Nom du projet avec le nom du client(e)</h1>
            <p className="client__right__paragraphe paragraphe">
                Lorem ipsum dolor sit amet consectetur. Ac pellentesque sed curabitur neque quis risus convallis vel. Suspendisse quis donec nec porttitor mollis. Lacus enim aenean malesuada massa massa integer tortor. Cursus a at pharetra morbi faucibus in ut in. Tellus tincidunt eget lectus tempus sed. Id fermentum consectetur orci turpis vulputate pellentesque. Elementum odio ultrices ante scelerisque ac tristique urna nibh. Etiam scelerisque diam praesent vestibulum mauris sed. Porta consequat commodo dignissim arcu aliquam.
                Aliquet volutpat vitae consequat rhoncus vitae. Euismod scelerisque scelerisque turpis vitae. Fermentum augue a risus libero vehicula lacus. Gravida proin urna etiam odio egestas turpis mi.
            </p>

            <div className="client__right__linksUtiles">
                <h2 className="title--medium" >Liens utiles</h2>
                <a href="">
                    <Image src={require('../images/icons/figma.png')} width={59} height={59} alt="" />
                    <p>Lien vers la maquette Figma</p>
                </a>
                <a href="">
                    <Image src={require('../images/icons/cahier_des_charges.png')} width={59} height={59} alt="" />
                    <p>Lien du cahier des charges</p>
                </a>
                <a href="">
                    <Image src={require('../images/icons/discord.png')} width={59} height={59} alt="" />
                    <p>Lien de Discorde pour les vidéo conférence</p>
                </a>
            </div>
        </>
    )
}