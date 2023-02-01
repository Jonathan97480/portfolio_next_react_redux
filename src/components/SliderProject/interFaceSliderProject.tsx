import { Technologies } from '@/pages/api/projects'
export interface SlidersProjetsProps {
    img: ImgSliderProjectProps
    tech: Technologies[]
    title: string
    text: string
    links: LinkTechnologies[]
    handleViewModal: (value: boolean, project: SlidersProjetsModalProps) => void

}
export interface SlidersProjetsModalProps {
    img: ImgSliderProjectProps
    tech: Technologies[]
    title: string
    text: string
    links: LinkTechnologies[]



}
export interface LinkTechnologies {

    name: 'github' | 'site' | 'playstore' | 'appstore' | 'figma'
    link: string | undefined

}

export interface ImgSliderProjectProps {
    src: string
    alt: string
}


export interface ModalProjectProps {
    title: string
    img: ImgSliderProjectProps
    tech: Technologies[]
    text: string
    links: LinkTechnologies[]
    isVisible: boolean
    handleCloseModal: (value: boolean) => void
}