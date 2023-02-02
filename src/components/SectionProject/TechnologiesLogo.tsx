import { Technologies } from "@/pages/api/projects"
import ImageLoader from "../ImageLoader"

export const TechnologiesLogo = ({ tech }: { tech: Technologies[] }) => {

    return (
        <div className="technologiesLogo">
            <h3 className="technologiesLogo__title title--medium">Technologies utilisées</h3>
            <span className='technologiesLogo__icons'>
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
        </div>
    )

}