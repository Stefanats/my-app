import React, { ReactNode } from "react";

import "./index.scss";

type Props = {
    type?: "button" | "submit";
    disabled?: boolean;
    onClick?: () => void;
    className?: string;
    children: ReactNode;
    shape?: "square" | "circle" | "normal";
    inverted?: boolean;
};

const AppButton: React.FC<Props> = ({
    disabled = false,
    onClick,
    children,
    className,
    shape = "normal",
    type = "button",
    inverted,
}) => (
    <button
        type={type}
        className={`button ${shape} ${className} ${
            disabled ? "disabled" : ""
        } ${inverted ? "inverted" : ""}`}
        onClick={onClick}
        disabled={disabled}
    >
        {typeof children === "string" ? String(children) : children}
    </button>
);

export default AppButton;
