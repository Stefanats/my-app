import React from "react";

type Props = {
    size?: "small" | "regular" | "large";
    color?: "white" | "black";
};

enum Size {
    "small" = 20,
    "regular" = 30,
    "large" = 50,
}

const PlusIcon: React.FC<Props> = ({ size = "regular", color = "white" }) => (
    <svg viewBox="0 0 20 20" width={Size[size]} height={Size[size]}>
        <path
            d="M3 9.8h2 9.8h2M10 16.8V3"
            stroke={color}
            strokeWidth="2"
            strokeLinecap="round"
        />
    </svg>
);

export default PlusIcon;
