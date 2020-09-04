import React, { HTMLAttributes } from "react";

import "./index.scss";

type Props = {
    type?: "number" | "text" | "checkbox";
    disabled?: boolean;
    className?: string;
    placeholder?: string;
    checked?: boolean;
    handleCheckbox?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    min?: number;
    max?: number;
} & HTMLAttributes<HTMLInputElement>;

const AppInput: React.FC<Props> = ({
    disabled = false,
    type,
    className,
    placeholder,
    checked = false,
    handleCheckbox,
    min,
    max,
    ...rest
}) => {
    if (type === "checkbox") {
        return (
            <input
                checked={checked}
                type="checkbox"
                onChange={handleCheckbox}
            />
        );
    }
    return (
        <input
            min={min}
            max={max}
            type={type}
            placeholder={placeholder}
            className={`input ${className}`}
            disabled={disabled}
            {...rest}
        />
    );
};

export default AppInput;
