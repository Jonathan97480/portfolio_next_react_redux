import { Project } from "@/pages/api/projects"
import { off } from "process"
import { useCallback, useState } from "react"
import Carousel, { CarouselItem } from "../Carousel"
import { SlidersProjetsModalProps, SlidersProjetsProps } from "./interFaceSliderProject"
import { ModalProject } from "./ModalProject"
import SlidersProjets from "./SlidersProject"


interface ProjectProps {
    projects: Project[]
}

export default function SectionSliderProject({ projects }: ProjectProps) {
    const [isView, setIsView] = useState(false)
    const [project, setProject] = useState<SlidersProjetsModalProps | null>(null)

    const handleViewModal = useCallback((isVisible: boolean, project?: SlidersProjetsModalProps) => {
        if (isVisible && project) {
            setProject(project)
            setIsView(isVisible)
        } else {
            setIsView(isVisible)
            setProject(null)
        }
    }, [])



    return (
        <section className='sectionProject ph-26' id='projet'>
            <h2 className='sectionProject__title title'>Nos derniers projets</h2>
            <Carousel
                typeController='Circle'
                btnEnabled={false}
                delay={5000}
            >
                {
                    projects.map((_project: Project, index) => {
                        return (
                            <CarouselItem key={index + '-project'}>
                                <SlidersProjets
                                    img={{
                                        src: _project.cover,
                                        alt: 'logo du site',
                                    }}
                                    title={_project.title}
                                    text={_project.description}
                                    tech={_project.technologies}
                                    links={[
                                        {
                                            name: "site",
                                            link: _project.site_url,
                                        },
                                        {
                                            name: 'playstore',
                                            link: _project.android_url,
                                        },
                                        {
                                            name: 'appstore',
                                            link: _project.ios_url,
                                        },
                                        {
                                            name: 'github',
                                            link: _project.github_url,
                                        },
                                        {
                                            name: 'figma',
                                            link: _project.figma_url,
                                        }
                                    ]}
                                    handleViewModal={handleViewModal}
                                />
                            </CarouselItem>
                        )
                    })
                }


            </Carousel>
            {
                project &&
                <ModalProject
                    title={project.title}
                    img={project.img}
                    tech={project.tech}
                    text={project.text}
                    links={project.links}
                    isVisible={isView}
                    handleCloseModal={handleViewModal}
                />
            }

        </section>

    )
}