import React from "react";

type Props = {
    size?: "small" | "regular" | "large";
    color?: "white" | "black";
};

enum Size {
    "small" = 7,
    "regular" = 30,
    "large" = 50,
}

const DeleteIcon: React.FC<Props> = ({ size = "regular", color = "white" }) => (
    <svg viewBox="0 0 24 24" width={Size[size]} height={Size[size]}>
        <path
            fill="#fff"
            fillRule="nonzero"
            stroke={color}
            d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"
        />
    </svg>
);

export default DeleteIcon;
