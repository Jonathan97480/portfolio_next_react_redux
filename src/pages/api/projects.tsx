// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export interface Technologies {
    id: string
    name: string
    icon: string
}

export interface Project {
    id: string
    title: string
    description: string
    shortDescription: string
    cover: string
    technologies: Technologies[]
    site_url?: string
    android_url?: string
    ios_url?: string
}

export const getProjects = async () => {

    const BaseUrl = "https://api.jon-dev.fr"

    const res = await fetch(BaseUrl + '/api/projects?populate[0]=technologies.Icon&populate[1]=Cover', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    })
    const projects = await res.json()

    const newProjects: Project[] = projects.data.map((project: any) => {

        const p: Project = {
            id: project.id,
            title: project.attributes.Title,
            description: project.attributes.Description,
            shortDescription: project.attributes.Shot_description,
            cover: BaseUrl + project.attributes.Cover.data.attributes.url,
            site_url: project.attributes.Site_url,
            android_url: project.attributes.Android_url,
            ios_url: project.attributes.IPhone_url,
            technologies: []
        }

        const t: Technologies[] = project.attributes.technologies.data.map((tech: any) => {
            return {
                id: tech.id,
                name: tech.attributes.Title,
                icon: BaseUrl + tech.attributes.Icon.data.attributes.url
            }
        })
        p.technologies = t

        return p

    })

    return newProjects


}
