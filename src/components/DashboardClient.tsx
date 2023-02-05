import Image from "next/image"
import { useDispatch } from 'react-redux';
import { deleteCookie } from 'cookies-next';
import { ProjectClientInterface, USER_COOKIE } from "@/pages/api/projects";
import { clearClient, ClientInterface } from "@/redux/slice/clientSlice";
import { useRouter } from "next/router";
import { useState } from "react";

interface Props {
    setView: (view: 'historique' | 'projet' | 'home', params: {
        client: ClientInterface | null
        project: ProjectClientInterface | null
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
                                    })
                                    setCurentProject(project)
                                }
                            } className="client__left__projets-active">
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
                    <div>
                        {
                            curentProject.Historiques?.map((historique, index) => {
                                console.log(historique)
                                return (
                                    <button
                                        key={index + historique.title}
                                    >
                                        <p>{historique.title}<span>{historique.date}</span></p>
                                    </button>


                                )

                            })
                        }

                    </div>
                </div>}
            {
                curentProject &&
                <div className="client__left__codeDoc client__block">
                    <p className="title--small">Code source & documentation</p>
                    <a href={curentProject.Github_url}
                        target="_blank"
                        rel="noreferrer"
                        title="lien vers le code source du projet"
                    >
                        <Image src={require('../images/icons/github.png')} width={28} height={28} alt="Icon pour Github" />
                        <p>Code GitHub </p>
                    </a>

                    <a href={curentProject.Cahier_des_charges}
                        target="_blank"
                        rel="noreferrer"
                        title="lien vers le cahier des charges du projet"
                    >
                        <Image src={require('../images/icons/cahier_des_charges.png')} width={28} height={28} alt="Icon pour le cahier des charges" />
                        <p>Cahier des charges</p>
                    </a>
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