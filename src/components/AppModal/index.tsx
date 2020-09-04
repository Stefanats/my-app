import React, { ReactNode } from "react";

import "./index.scss";

type Props = {
    children: ReactNode;
    title: string;
    handleClose: () => void;
};

const AppModal: React.FC<Props> = ({ children, title, handleClose }) => {
    return (
        <div onClick={handleClose} className="app-modal">
            <div
                onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                }}
                className="app-modal__container"
            >
                <p className="app-modal__title">{title}</p>
                {children}
            </div>
        </div>
    );
};

export default AppModal;
