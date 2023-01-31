import Image from 'next/image'

interface SlidersWorkProps {
    img: {
        src: string
        alt: string
    }

    title: string
    text: string
    slideNumber: number
}

export default function SlidersWork({ img, title, text, slideNumber }: SlidersWorkProps) {
    return (
        <div className='sliderWork'>
            <div className='cardWork'>
                <span className='cardWork__numberMobile'>
                    {slideNumber}
                </span>
                <Image
                    loading='lazy'
                    className='cardWork__cover'
                    src={img.src}
                    alt={img.alt}
                    width={533}
                    height={546}
                />
                <div className='cardWork__content'>
                    <span className='cardWork__content-number'>
                        {slideNumber}
                    </span>
                    <h2 className='cardWork__content-title'>{title}</h2>
                    <p className='cardWork__content-text paragraphe'>{text}</p>
                </div>
            </div>
        </div>
    )
}
