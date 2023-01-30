import Image from "next/image"
import { useDispatch } from 'react-redux';
import { deleteCookie } from 'cookies-next';
import { USER_COOKIE } from "@/pages/api/projects";
import { clearClient } from "@/redux/slice/clientSlice";
import { useRouter } from "next/router";



export default function DashboardClient({ params, setView }: { params: any, setView: (view: 'historique' | 'projet' | '', params: any) => void }) {

    const dispatch = useDispatch();
    const { push, query, isReady } = useRouter();

    return (
        <>


            <div className="client__left__nameClient client__block">
                <Image src={require('../images/icons/cliente.png')} width={22} height={22} alt="icon représentant le client ou la cliente" />
                <p className="title--small">Nom du client</p>

            </div>

            <div className=" client__left__projets client__block">
                <p className="title--small">Vos projets</p>
                <button onClick={
                    () => setView('projet', {})
                } className="client__left__projets-active">
                    <span>{/* <Image src="" alt="" /> */}</span>

                    <p>Projet 1</p>
                </button>
                <button onClick={
                    () => setView('projet', {})
                } >
                    <span>{/* <Image src="" alt="" /> */}</span>
                    <p>Projet 1</p>
                </button>
            </div>
            <div className="client__left__historique client__block">
                <p className="title--small">Historiques du projet</p>
                <div>
                    <button
                        onClick={
                            () => setView('historique', {})
                        }
                    >
                        <p>Signature contrat <span>01/01/2023</span></p>
                    </button>
                    <button
                        onClick={
                            () => setView('historique', {})
                        }
                    >
                        <p>Signature contrat <span>01/01/2023</span></p>
                    </button>
                    <button
                        onClick={
                            () => setView('historique', {})
                        }
                    >
                        <p>Signature contrat <span>01/01/2023</span></p>
                    </button>
                    <button
                        onClick={
                            () => setView('historique', {})
                        }
                    >
                        <p>Signature contrat <span>01/01/2023</span></p>
                    </button>
                    <button
                        onClick={
                            () => setView('historique', {})
                        }
                    >
                        <p>Signature contrat <span>01/01/2023</span></p>
                    </button>
                </div>
            </div>
            <div className="client__left__codeDoc client__block">
                <p className="title--small">Code source & documentation</p>
                <a href="">
                    <Image src={require('../images/icons/github.png')} width={28} height={28} alt="" />
                    <p>Code GitHub </p>
                </a>

                <a href="">
                    <Image src={require('../images/icons/cahier_des_charges.png')} width={28} height={28} alt="" />
                    <p>Cahier des charges</p>
                </a>
            </div>
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