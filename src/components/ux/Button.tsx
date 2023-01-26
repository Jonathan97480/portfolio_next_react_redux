import React, { useEffect, useState } from 'react';

interface ButtonProps {
    text: string;
    onClick: () => void;
    disabled?: boolean;
    inverted?: boolean;


}


export default function Button({ text, onClick, disabled = false, inverted = false }: ButtonProps) {

    const [buttonStyle, setButtonStyle] = useState<string>('btn btn-primary');

    useEffect(() => {

        if (disabled) {
            setButtonStyle('btn btn-primary disabled');
        } else if (inverted) {
            setButtonStyle('btn btn-secondary');
        } else {
            setButtonStyle('btn btn-primary');
        }

    }, [disabled, inverted]);

    return (
        <button className={buttonStyle} onClick={onClick}>
            <p>
                {text}
            </p>
        </button>
    )
}