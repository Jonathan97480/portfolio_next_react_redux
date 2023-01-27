import { url } from 'inspector';
import Image from 'next/image'
import bg from '../images/cover/remarque.jpg'
interface SlidersProjetsProps {
    img: {
        src: string;
        alt: string;
    },
    icon?: {
        src: string;
        alt: string;
    }
    title: string;
    text: string;
    links?: {
        name: string;
        url: string;
    }[]

}


export default function SlidersProjets({ img, title, text }: SlidersProjetsProps) {



    return (
        <div className='slidersProjets'>
            <h2 className='slidersProjets__title'>{title}</h2>
            <div className='slidersProjets__content'>
                <Image className='slidersProjets__content-cover' src={img.src} alt="logo du site" width={397} height={252} />
                <div className='slidersProjets__content-info'>
                    <h3>Technologies utiliser  </h3>
                    <span>
                        <Image src={require('../images/icons/strapi.png')} alt="logo du site" width={50} height={50} />
                        <Image src={require('../images/icons/strapi.png')} alt="logo du site" width={50} height={50} />
                        <Image src={require('../images/icons/strapi.png')} alt="logo du site" width={50} height={50} />
                    </span>
                    <div>
                        <h4>Liens utiles </h4>
                        <span>
                            <a href="">Android</a>
                            <a href="">IPhone</a>
                            <a href="">Site</a>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )

}