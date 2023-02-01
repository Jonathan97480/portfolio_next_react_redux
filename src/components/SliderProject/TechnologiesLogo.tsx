import { Technologies } from "@/pages/api/projects"
import ImageLoader from "../ImageLoader"

export const TechnologiesLogo = ({ tech }: { tech: Technologies[] }) => {

    return (
        <>
            <h3>Technologies utilisées</h3>
            <span className='slidersProjets__content-info__cover'>
                {
                    tech.map((item) => {
                        return <ImageLoader
                            loading='lazy'
                            key={item.name + item.id}
                            src={item.icon}
                            alt={item.name}
                            width={50}
                            height={50}


                        />
                    })
                }

            </span>
        </>
    )

}