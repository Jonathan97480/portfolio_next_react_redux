import { ProjectClientInterface } from "@/pages/api/projects"
import Image from "next/image"


interface Props {
    params: {

        project: ProjectClientInterface
    }
}

export default function ProjetClient({ params }: Props) {
    const [project] = [params.project]

    console.log("PROJECT", project);

    return (
        <>
            {/* Content Variable multiple components */}
            <h1 className="client__right__title title">{project.Title_project}</h1>
            <p className="client__right__paragraphe paragraphe"> {project.Description} </p>

            <div className="client__right__linksUtiles">
                <h2 className="title--medium" >Liens utiles</h2>
                <a href={project.Github_url}
                    target="_blank"
                    rel="noreferrer"
                    title="Github"
                >
                    <Image src={require('../../images/icons/figma.png')} width={59} height={59} alt="Icon pour Figma" />
                    <p>Lien vers la maquette Figma</p>
                </a>
                <a href={project.Cahier_des_charges}
                    target="_blank"
                    rel="noreferrer"
                    title="Cahier des charges"
                >
                    <Image src={require('../../images/icons/cahier_des_charges.png')} width={59} height={59} alt="Icon pour Le cahier des charges" />
                    <p>Lien du cahier des charges</p>
                </a>
                <a href="https://discord.gg/JrQ9Ak5A"
                    target="_blank"
                    rel="noreferrer"
                    title="Discord"
                >
                    <Image src={require('../../images/icons/discord.png')} width={59} height={59} alt="Icon pour Discorde" />
                    <p>Lien de Discorde pour les vidéo conférence</p>
                </a>
            </div>
        </>
    )
}