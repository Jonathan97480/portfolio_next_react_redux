import { Button } from "./ux";
import { setCookie } from "cookies-next";
import { RGPD_COOKIE } from "@/pages/api/projects";
import React, { useState } from "react";

export default function Rgp() {

    const [isRgpd, setIsRgpd] = useState(false);


    return (
        <>
            {
                !isRgpd ?

                    <div className="rgpd">
                        <h3 className="title">RGPD</h3>
                        <p className="paragraphe">Ce site utilise des cookies pour vous permettre de bénéficier des meilleurs services.</p>
                        <div className="rgpd__action">
                            <Button
                                text={"Accepter"}
                                onClick={() => {
                                    setCookie(RGPD_COOKIE, "true", {
                                        expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 365),
                                    });
                                    setIsRgpd(true);
                                }} />
                            <Button
                                text={"Refuser"}
                                inverted={true}
                                onClick={() => {
                                    setCookie(RGPD_COOKIE, "false");
                                    setIsRgpd(true);
                                }} />
                        </div>
                    </div> : null
            }
        </>
    )
}