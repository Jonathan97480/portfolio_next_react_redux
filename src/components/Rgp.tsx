import { Button } from "./ux";


export default function Rgp() {

    return (

        <div className="rgpd">
            <h3 className="title">RGPD</h3>
            <p className="paragraphe">Ce site utilise des cookies pour vous permettre de bénéficier des meilleurs services.</p>
            <div className="rgpd__action">
                <Button
                    text={"Accepter"}
                    onClick={function (): void {
                        throw new Error("Function not implemented.");
                    }} />
                <Button
                    text={"Refuser"}
                    inverted={true}
                    onClick={function (): void {
                        throw new Error("Function not implemented.");
                    }} />
            </div>
        </div>

    )
}