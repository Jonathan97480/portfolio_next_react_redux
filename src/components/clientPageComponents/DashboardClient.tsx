/* eslint-disable react/no-unescaped-entities */
import Image from "next/image"
import { useDispatch } from 'react-redux';
import { deleteCookie } from 'cookies-next';
import { Historiques, ProjectClientInterface, USER_COOKIE } from "@/pages/api/projects";
import { clearClient, ClientInterface } from "@/redux/slice/clientSlice";
import { useRouter } from "next/router";
import { useState, useCallback } from "react";
import { textSplit } from "@/functions/global";
import { BiArrowFromLeft } from "react-icons/bi";

interface Props {
    setView: (view: 'historique' | 'projet' | 'home', params: {
        client: ClientInterface | null
        project: ProjectClientInterface | null
        curentHistorique: Historiques | null
    }) => void
    params: {
        client: ClientInterface
        ProjectsClient: ProjectClientInterface[]
    }

    setWrapperOpenOrClose: (open: boolean) => void
    isOpen: boolean

}

export default function DashboardClient({ params, setView, setWrapperOpenOrClose, isOpen }: Props) {

    const dispatch = useDispatch();
    const { push, query, isReady } = useRouter();
    const [client, ProjectsClient] = [params.client, params.ProjectsClient]
    const [curentProject, setCurentProject] = useState<ProjectClientInterface | null>(null)
    const [curentIndexProjectActive, setCurentIndexProjectActive] = useState<number | null>(0)
    const [curentIndexHistoriqueActive, setCurentIndexHistoriqueActive] = useState<number | null>(-1)

    const setProject = useCallback((index: number) => {
        setCurentProject(ProjectsClient[index])
        setCurentIndexProjectActive(index)
        setCurentIndexHistoriqueActive(-1)

    }, [ProjectsClient])

    const setHistorique = useCallback((index: number) => {
        setCurentIndexHistoriqueActive(index)

    }, [])

    return (
        <div className="dashboardClient">
            <span className={isOpen ? "dashboard__section__mobileIcon dashboard__section__mobileIcon-open" : "dashboard__section__mobileIcon"}
                onClick={() => {
                    if (isOpen) {
                        setWrapperOpenOrClose(false)
                        return
                    }
                    setWrapperOpenOrClose(true)
                }}
            >
                <BiArrowFromLeft />
            </span>

            <div className="dashboardClient__nameClient dashboard__section">
                <Image src={require('../../images/icons/cliente.png')} width={22} height={22} alt="icon représentant le client ou la cliente" />
                <p className="title--small">{client.username}</p>

            </div>

            <div className=" dashboardClient__projets dashboard__section">

                <p className="title--small">Vos projets</p>
                {
                    ProjectsClient.map((project, index) => {
                        return (
                            <button key={index + project.Title_project} onClick={
                                () => {
                                    setView('projet', {
                                        project: project,
                                        client: null
                                        , curentHistorique: null
                                    })
                                    setProject(index)
                                    if (isOpen) {
                                        setWrapperOpenOrClose(false)
                                    }
                                }
                            } className={curentIndexProjectActive === index ? "dashboardClient__projets-active" : "dashboardClient__projets"}>
                                <span>{/* <Image src="" alt="" /> */}</span>

                                <p>{textSplit(project.Title_project, 20)}</p>
                            </button>
                        )

                    })
                }

            </div>
            {
                curentProject?.Historiques &&
                <div className="dashboardClient__historique dashboard__section">
                    <p className="title--small">Historiques du projet</p>
                    {curentProject.Historiques.length > 0 ? <div>
                        {
                            curentProject.Historiques?.map((historique, index) => {

                                return (
                                    <button
                                        onClick={
                                            () => {
                                                setView('historique', {
                                                    project: null,
                                                    client: null,
                                                    curentHistorique: historique
                                                })
                                                setHistorique(index)
                                                if (isOpen) {
                                                    setWrapperOpenOrClose(false)
                                                }
                                            }
                                        }
                                        key={index + historique.title}
                                        className={curentIndexHistoriqueActive === index ? "dashboardClient__historique-active" : "dashboardClient__historique"}
                                    >
                                        <p>{textSplit(historique.title, 13)}<span>{historique.date}</span></p>
                                    </button>


                                )

                            })
                        }

                    </div> : <div > <p className="title--small">pas d'historique disponible pour le moment</p> </div>}
                </div>}
            {
                curentProject &&
                <div className="dashboardClient__codeDoc dashboard__section">
                    <p className="title--small">Code source & documentation</p>
                    {curentProject.Github_url || curentProject.Cahier_des_charges ? <> {
                        curentProject.Github_url && <a href={curentProject.Github_url}
                            target="_blank"
                            rel="noreferrer"
                            title="lien vers le code source du projet"
                        >
                            <Image src={require('../../images/icons/github.png')} width={28} height={28} alt="Icon pour Github" />
                            <p>Code GitHub </p>
                        </a>
                    }

                        {curentProject.Cahier_des_charges && <a href={curentProject.Cahier_des_charges}
                            target="_blank"
                            rel="noreferrer"
                            title="lien vers le cahier des charges du projet"
                        >
                            <Image src={require('../../images/icons/cahier_des_charges.png')} width={28} height={28} alt="Icon pour le cahier des charges" />
                            <p>Cahier des charges</p>
                        </a>}
                    </>
                        : <p>Aucun code source ou documentation disponible pour le moment</p>}
                </div>}
            <button className="dashboardClient__btnLogout" onClick={
                () => {
                    deleteCookie(USER_COOKIE);
                    dispatch(clearClient(true));
                    push('/');

                }
            }>
                <Image src={require('../../images/icons/cliente.png')} width={34} height={34} alt="" />
                <p>Déconnexion</p>
            </button>

        </div>
    )
}