import React, { useEffect, useState } from "react";
import { useSwipeable } from 'react-swipeable'

interface ModalProps {
    children: React.ReactNode;
    open: boolean;
    onClose: () => void;
    transparent?: boolean;
}


export default function Modal({ children, open, onClose, transparent = true }: ModalProps) {
    const [show, setShow] = useState(open);
    const [isClose, setIsClose] = useState(false);

    useEffect(() => {
        setShow(open);
        document.body.style.overflow = open ? "hidden" : "unset";
    }, [open]);

    const handleClose = () => {
        setShow(false);
        setIsClose(false);
        onClose();
    };

    const handlers = useSwipeable({
        onSwipedUp: () => setIsClose(true),
    })

    const childrenWithProps = React.Children.map(children, child => {
        if (React.isValidElement(child)) {
            return React.cloneElement(child as React.ReactElement<any>, { onClose: handleClose, isClose: isClose });
        }
        return child;
    });


    return (
        <div {...handlers} className={`modal ${show ? "modal__show" : ""} ${!transparent ? "modal__visibility" : ""}`}>
            <div className="modal__content">
                {
                    childrenWithProps
                }
            </div>

        </div>
    );
}