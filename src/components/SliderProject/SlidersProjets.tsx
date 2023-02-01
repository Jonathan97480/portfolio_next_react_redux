


import ImageLoader from '../ImageLoader'
import GetLinkProject from './GetLinks'
import { SlidersProjetsProps } from './interFaceSliderProject'

import { TechnologiesLogo } from './TechnologiesLogo'




export default function SlidersProjets({ img, title, text, links, tech, handleViewModal }: SlidersProjetsProps) {



    return (
        <>
            <div className='slidersProjets'>
                <h2 className='slidersProjets__title'>{title}</h2>
                <div className='slidersProjets__content'>
                    <ImageLoader
                        className='slidersProjets__content-cover'
                        src={img.src}
                        alt='logo du site'
                        width={397}
                        height={252}
                        loading='lazy'
                    />

                    <div className='slidersProjets__content-info'>
                        <TechnologiesLogo
                            tech={tech}
                        />
                        <div>
                            <GetLinkProject
                                links={links}
                            />

                            <button
                                className='btn btn-primary'
                                onClick={
                                    () => {
                                        handleViewModal(true, { img, title, text, links, tech })
                                    }
                                }

                            >
                                Voir plus
                            </button>
                        </div>


                    </div>
                </div>

            </div>

        </>
    )
}





