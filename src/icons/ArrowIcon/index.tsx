import React from "react";

type Props = {
    size?: "small" | "regular" | "large";
    color?: "white" | "black";
    direction?: "up" | "down" | "left" | "right";
};

enum Size {
    "small" = 20,
    "regular" = 30,
    "large" = 50,
}

enum Direction {
    "right" = 0,
    "down" = 90,
    "left" = 180,
    "up" = 270,
}

const ArrowIcon: React.FC<Props> = ({
    size = "regular",
    color = "white",
    direction = "right",
}) => (
    <svg viewBox="0 0 60 60" width={Size[size]} height={Size[size]}>
        <polygon
            stroke={color}
            points="15.561,0 14.146,1.414 42.439,29.707 14.146,58 15.561,59.414 45.268,29.707 "
            transform={`rotate(${Direction[direction]}, 30, 30)`}
        />
    </svg>
);

export default ArrowIcon;
