
import { useState } from "react"
import { DashboardClient, HistoriqueClient, Main, ProjetClient } from "@/components"
import { useSwipeable } from 'react-swipeable'

export default function Client() {
    const [warperOpen, setWarperOpen] = useState(false)
    const [curentView, setCurentView] = useState<'historique' | 'projet' | ''>('projet')

    const handlers = useSwipeable({
        onSwipedLeft: () => setWarperOpen(false),
        onSwipedRight: () => setWarperOpen(true),
    })


    const handlersView = (view: 'historique' | 'projet' | '', params: any) => {

        setCurentView(view)
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
                    <DashboardClient params={{}} setView={handlersView} />
                </div>
                <div className="client__right">
                    {getCurentView(curentView, {})}
                </div>
            </div>
        </Main>
    )
}

const getCurentView = (view: 'historique' | 'projet' | '', params: any) => {
    switch (view) {
        case 'historique':
            return <HistoriqueClient
                params={params}
            />
        case 'projet':
            return <ProjetClient
                params={params}
            />

        default:
            return null

    }
}
