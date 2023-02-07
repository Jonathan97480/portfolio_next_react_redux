
import { Historiques } from '@/pages/api/projects'
import Image from 'next/image'
import React, { useState } from 'react'

interface Props {
    params: {
        historiques: Historiques | null
    }
}

export default function HistoriqueClient({ params }: Props) {

    const [historique, setHistorique] = useState(params.historiques)
    const [indexCurentPIcture, setIndexCurentPIcture] = useState(0)
    console.log(historique);
    if (!historique) return null

    return (
        <div className='historiqueClient'>
            <h1 className='title'>{historique.title}</h1>
            {
                historique.image && historique.image.length > 0 ?
                    <div className='historiqueClient__image'>
                        <Image className='historiqueClient__image__view' src={historique.image[indexCurentPIcture].url} alt={historique.image[indexCurentPIcture].name + "-view"} width={1280} height={600} loading="lazy" />
                        <div className='historiqueClient__image__buttonBlock'>

                            {
                                historique.image.map((image, index) => {
                                    return (
                                        <button key={index} onClick={() => setIndexCurentPIcture(index)} className={indexCurentPIcture === index ? 'active' : ''} >
                                            <Image src={image.url} alt={image.name + "-preView"} width={100} height={100} loading="lazy" />
                                        </button>
                                    )
                                })
                            }

                        </div>
                    </div> : null
            }
            <p className='paragraphe' >{historique.description}</p>

            <div className='historiqueClient__document'>
                <h2 className='title--small'>Document lié a cette historique: </h2>
                {
                    historique.Documents ?
                        <a href={historique.Documents?.name}>{historique.Documents?.name}</a> :
                        <p>pas de document lié a cette historique pour le moment</p>
                }
            </div>
        </div>
    )
}