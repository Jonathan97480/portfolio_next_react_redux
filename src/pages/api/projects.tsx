// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
export const BASE_API_URL = "https://api.jon-dev.fr"
export const BASE_URL = "https://api.jon-dev.fr"
export const AUTH = "/api/auth/local"
export const FORM_STRAPI_URL = "/api/contact-formulaires"
export const USER_COOKIE = "user"
export const RGPD_COOKIE = "rgpd"
export const GET_PROJECTS = "/api/projet-clients"


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
    github_url?: string
    figma_url?: string
}

export const getProjects = async () => {



    const res = await fetch(BASE_API_URL + '/api/projects?populate[0]=technologies.Icon&populate[1]=Cover', {
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
            cover: BASE_URL + project.attributes.Cover.data.attributes.url,
            site_url: project.attributes.Site_url,
            android_url: project.attributes.Android_url,
            ios_url: project.attributes.IPhone_url,
            github_url: project.attributes.Github_url,
            figma_url: project.attributes.Figma_url,
            technologies: []
        }

        const t: Technologies[] = project.attributes.technologies.data.map((tech: any) => {
            return {
                id: tech.id,
                name: tech.attributes.Title,
                icon: BASE_URL + tech.attributes.Icon.data.attributes.url
            }
        })
        p.technologies = t

        return p

    })

    return newProjects


}


interface DataFormulaire {
    data: {
        name: string
        email: string
        message: string
    }

}

export const saveFormContactSend = async (data: DataFormulaire) => {

    const res = await fetch(BASE_API_URL + FORM_STRAPI_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    const result = await res.json()
    return result


}

export interface Historiques {
    id: string
    title: string
    description: string
    date: string
    image: {
        name: string
        url: string
    }[] | null
    ,
    Documents: {
        name: string
        url: string
    } | null,
}

export interface ProjectClientInterface {
    id: string
    Android_url: string
    Cahier_des_charges: string
    Description: string
    Github_url: string
    IPhone_url: string
    Site_url: string
    Title_project: string
    Cover_url: string | null
    Historiques: Historiques[],
    Icon_url: string | null

}

export const getProjectsClient = async (id_client: number, token: string) => {




    const Option = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        },
    }

    /* define Request */
    const requestCore = `?populate[0]=Cover&populate[1]=Icon&populate[2]=Historiques.image&populate[3]=Historiques.Documents&filters[users_permissions_user][id][$eq]=${id_client}`


    const res = await fetch(BASE_API_URL + GET_PROJECTS + requestCore, Option)

    const projects = await res.json()
    const projectsClient: ProjectClientInterface[] = [];

    console.log(projects)

    projects.data.map((project: any) => {

        const dataProject = project.attributes

        const p: ProjectClientInterface = {

            id: project.id,
            Android_url: dataProject.Android_url,
            Cahier_des_charges: dataProject.Cahier_des_charges,
            Description: dataProject.Description,
            Github_url: dataProject.Github_url,
            IPhone_url: dataProject.IPhone_url,
            Site_url: dataProject.Site_url,
            Title_project: dataProject.Title_project,
            Cover_url: dataProject.Cover.data ? BASE_URL + dataProject.Cover.data.attributes.url : null,

            Historiques: dataProject.Historiques !== null ? dataProject.Historiques.map((historique: any) => {

                return {
                    id: historique.id,
                    title: historique.Titre,
                    description: historique.description,
                    date: historique.date,
                    image: historique.image.data !== null ? historique.image.data.map((image: any) => {

                        return {
                            name: image.attributes.name,
                            url: BASE_URL + image.attributes.url
                        }
                    }) : null,

                    Documents: historique.Documents.data !== null ? {
                        name: historique.Documents.data?.attributes.name,
                        url: BASE_URL + historique.Documents.data?.attributes.url
                    } : null
                }
            }) : null,
            Icon_url: dataProject.Icon.data ? BASE_URL + dataProject.Icon.data.attributes.url : null

        }


        projectsClient.push(p)

    })

    return projectsClient


}