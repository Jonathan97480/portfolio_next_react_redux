import { Technologies } from '@/pages/api/hello'
import Image from 'next/image'

interface SlidersProjetsProps {
    img: {
        src: string
        alt: string
    }
    tech: Technologies[]
    title: string
    text: string
    links: {
        android: string | null | undefined
        ios: string | null | undefined
        site: string | null | undefined
    }
}

export default function SlidersProjets({ img, title, text, links, tech }: SlidersProjetsProps) {
    return (
        <div className='slidersProjets'>
            <h2 className='slidersProjets__title'>{title}</h2>
            <div className='slidersProjets__content'>
                <Image
                    className='slidersProjets__content-cover'
                    src={img.src}
                    alt='logo du site'
                    width={397}
                    height={252}
                />
                <div className='slidersProjets__content-info'>
                    <h3>Technologies utiliser </h3>
                    <span>
                        {
                            tech.map((item) => {
                                return <Image
                                    key={item.name + item.id}
                                    src={item.icon}
                                    alt={item.name}
                                    width={50}
                                    height={50}
                                />
                            })
                        }

                    </span>
                    <div>
                        <h4>Liens utiles </h4>
                        <span>
                            {
                                links.android && <a href={links.android}>Android</a>
                            }
                            {
                                links.ios && <a href={links.ios}>IPhone</a>

                            }
                            {
                                links.site && <a href={links.site} >Site</a>
                            }




                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}
