import { url } from 'inspector'
import Image from 'next/image'
import bg from '../images/cover/remarque.jpg'
interface SlidersHomeProps {
    img: {
        src: string
        alt: string
    }
    title: string
    text: string
}

export default function SlidersHome({ img, title, text }: SlidersHomeProps) {
    return (
        <div className='sliderHome' style={{ backgroundImage: `url(${img.src})` }}>
            {/*  <Image className='sliderHome__img' src={require(`../images/cover/${img.src}`)} alt={img.alt} width={1280} height={600} /> */}
            <div className='sliderHome__content'>
                <h2 className='sliderHome__content--title'>{title}</h2>
                <p className='sliderHome__content--paragraphe'>{text}</p>
            </div>
        </div>
    )
}
