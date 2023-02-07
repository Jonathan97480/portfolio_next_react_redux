/* eslint-disable react-hooks/exhaustive-deps */

import { useEffect, useState } from "react"
import { DashboardClient, HistoriqueClient, HomeClient, Main, ProjetClient } from "@/components"
import { useSwipeable } from 'react-swipeable'
import { useSelector } from "react-redux"
import { ClientInterface, selectClient } from "@/redux/slice/clientSlice"
import { getProjectsClient, Historiques, ProjectClientInterface } from "./api/projects"
import { useRouter } from "next/router"


export default function Client() {
    const [warperOpen, setWarperOpen] = useState(false)
    const [curentView, setCurentView] = useState<'historique' | 'projet' | 'home'>('home')
    const [projectsClient, setProjectsClient] = useState<ProjectClientInterface[]>([])
    const [curentProject, setCurentProject] = useState<ProjectClientInterface | null>(null)
    const [curentHistorique, setCurentHistorique] = useState<Historiques | null>(null)
    const { push, query, isReady } = useRouter();
    const handlers = useSwipeable({
        onSwipedLeft: () => setWarperOpen(false),
        onSwipedRight: () => setWarperOpen(true),
    })



    const userRedux = selectClient(useSelector((state: any) => state)) as ClientInterface

    useEffect(() => {

        if (userRedux === null || userRedux === undefined) {
            push('/')
            return
        }
        getProjectsClient(userRedux.id, userRedux.jwt).then((res) => {


            if (res) {
                setProjectsClient([...res])

            }

        }).catch((err) => {
            console.error(err)
        }
        )

    }, [userRedux])

    const handlersView = (view: 'historique' | 'projet' | 'home', params: {
        project: ProjectClientInterface | null,
        client: ClientInterface | null,
        curentHistorique: Historiques | null
    }) => {

        setCurentView(view)
        setCurentProject(params.project)
        setCurentHistorique(params.curentHistorique)
    }
    return (
        <Main
            pageDescription="Client"
            pageTitle="Client"
            className="client"
        >
            <div
                {...handlers}
                className={`client__warper ${warperOpen ? 'client__warper-push' : ''}`}>
                <div className="client__left">
                    {
                        userRedux &&
                        <DashboardClient params={{
                            client: userRedux,
                            ProjectsClient: projectsClient
                        }} setView={handlersView}

                        />}
                </div>
                <div className="client__right">
                    {getCurentView(curentView, {
                        client: userRedux,
                        curentProject: curentProject as ProjectClientInterface,
                        curentHistorique: curentHistorique as Historiques
                    })}
                </div>
            </div>
        </Main>
    )
}

const getCurentView = (view: 'historique' | 'projet' | 'home', params: {
    client: ClientInterface | null,
    curentProject: ProjectClientInterface | null,
    curentHistorique: Historiques | null

}) => {
    switch (view) {
        case 'historique':
            return <HistoriqueClient
                params={
                    { historiques: params.curentHistorique }
                }
            />
        case 'projet':
            return <ProjetClient
                params={{
                    project: params.curentProject,
                }}
            />
        case 'home':
            return <HomeClient />
        default:
            return <HomeClient />

    }
}
