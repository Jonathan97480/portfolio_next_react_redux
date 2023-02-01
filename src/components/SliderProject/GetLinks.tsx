import { LinkTechnologies } from "./interFaceSliderProject"

interface GetLinkProjectProps {
    links: LinkTechnologies[]
}

export default function GetLinkProject({ links }: GetLinkProjectProps) {



    const linkValide = getLinkValide(links)
    return (
        <div className='slidersProjets__content-info__links'>
            <h4>Liens utiles </h4>
            <span className='slidersProjets__content-info__links__content'>

                {
                    linkValide.map((plateforme, index) => {
                        if (plateforme.link) {

                            return (
                                plateforme.link &&

                                <a href={plateforme.link}
                                    key={plateforme.name + plateforme.link + "--" + Math.random() + 100}
                                    target='_blank' rel='noreferrer'
                                    title={getTitleLink(plateforme) + plateforme.name}
                                >
                                    {plateforme.name}

                                    <span style={{ display: index >= linkValide.length - 1 ? 'none' : 'block' }}> | </span>
                                </a>


                            )
                        }
                    })
                }

            </span>
        </div>

    )

}

const getTitleLink = (link: { name: string, link: string | undefined }) => {

    switch (link.name) {
        case 'github':
            return 'lien vers le github du projet'
        case 'playstore':
            return 'lien vers l application android de'
        case 'appstore':
            return 'lien vers l application ios de'
        case 'site':
            return 'lien vers le site web de'
        case 'figma':
            return 'lien vers la maquette Figma du projet'
        default:
            return 'lien vers le projet'

    }

}

const getLinkValide = (links: LinkTechnologies[]) => {

    const linksValide = links.filter((link) => {
        return link.link
    })

    return linksValide
}

