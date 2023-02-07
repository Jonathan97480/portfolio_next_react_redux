/* eslint-disable react/no-unescaped-entities */
import Image from "next/image"
import { useDispatch } from 'react-redux';
import { deleteCookie } from 'cookies-next';
import { Historiques, ProjectClientInterface, USER_COOKIE } from "@/pages/api/projects";
import { clearClient, ClientInterface } from "@/redux/slice/clientSlice";
import { useRouter } from "next/router";
import { useState, useCallback } from "react";
import { textSplit } from "@/functions/global";

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
}

export default function DashboardClient({ params, setView }: Props) {

    const dispatch = useDispatch();
    const { push, query, isReady } = useRouter();
    const [client, ProjectsClient] = [params.client, params.ProjectsClient]
    const [curentProject, setCurentProject] = useState<ProjectClientInterface | null>(null)
    const [curentIndexProjectActive, setCurentIndexProjectActive] = useState<number | null>(0)
    const [curentIndexHistoriqueActive, setCurentIndexHistoriqueActive] = useState<number | null>(0)

    const setProject = useCallback((index: number) => {
        setCurentProject(ProjectsClient[index])
        setCurentIndexProjectActive(index)
    }, [ProjectsClient])

    const setHistorique = useCallback((index: number) => {
        setCurentIndexHistoriqueActive(index)

    }, [])

    return (
        <>


            <div className="client__left__nameClient client__block">
                <Image src={require('../images/icons/cliente.png')} width={22} height={22} alt="icon représentant le client ou la cliente" />
                <p className="title--small">{client.username}</p>

            </div>

            <div className=" client__left__projets client__block">
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
                                }
                            } className={curentIndexProjectActive === index ? "client__left__projets-active" : "client__left__projets"}>
                                <span>{/* <Image src="" alt="" /> */}</span>

                                <p>{project.Title_project}</p>
                            </button>
                        )

                    })
                }

            </div>
            {
                curentProject?.Historiques &&
                <div className="client__left__historique client__block">
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
                                            }
                                        }
                                        key={index + historique.title}
                                        className={curentIndexHistoriqueActive === index ? "client__left__historique-active" : "client__left__historique"}
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
                <div className="client__left__codeDoc client__block">
                    <p className="title--small">Code source & documentation</p>
                    {curentProject.Github_url || curentProject.Cahier_des_charges ? <> {
                        curentProject.Github_url && <a href={curentProject.Github_url}
                            target="_blank"
                            rel="noreferrer"
                            title="lien vers le code source du projet"
                        >
                            <Image src={require('../images/icons/github.png')} width={28} height={28} alt="Icon pour Github" />
                            <p>Code GitHub </p>
                        </a>
                    }

                        {curentProject.Cahier_des_charges && <a href={curentProject.Cahier_des_charges}
                            target="_blank"
                            rel="noreferrer"
                            title="lien vers le cahier des charges du projet"
                        >
                            <Image src={require('../images/icons/cahier_des_charges.png')} width={28} height={28} alt="Icon pour le cahier des charges" />
                            <p>Cahier des charges</p>
                        </a>}
                    </>
                        : <p>Aucun code source ou documentation disponible pour le moment</p>}
                </div>}
            <button className="client__left__btnLogout" onClick={
                () => {
                    deleteCookie(USER_COOKIE);
                    dispatch(clearClient(true));
                    push('/');

                }
            }>
                <Image src={require('../images/icons/cliente.png')} width={34} height={34} alt="" />
                <p>Déconnexion</p>
            </button>

        </>
    )
}