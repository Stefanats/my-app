import React, { useState } from "react";

import "./index.scss";

import { AppButton, AppModal, AppInput } from "..";

const initialState = {
    min: "",
    max: "",
    status: false,
};

type ModalProps = {
    onClick: () => void;
    handleFilter: (filter: FilterType) => void;
    handleResetFilter: () => void;
};

type InputType = React.ChangeEvent<HTMLInputElement>;

export type FilterType = {
    min: string;
    max: string;
    status: boolean;
};

export const Modal: React.FC<ModalProps> = ({
    onClick,
    handleFilter,
    handleResetFilter,
}) => {
    const [filter, setFilter] = useState(initialState);

    const handleOnChange = (e: string, type: string) => {
        setFilter({ ...filter, [type]: e.replace(/[^\d]+/g, "") });
    };
    const handleStatus = (e: boolean) => setFilter({ ...filter, status: e });

    return (
        <AppModal handleClose={onClick} title="Filter your search">
            <div className="search-bar__modal">
                <div className="custom-input-wrapper">
                    <span>Avg. Points</span>
                    <AppInput
                        onChange={(e: InputType) =>
                            handleOnChange(e.target.value, "min")
                        }
                        placeholder="Min"
                        className="custom-input"
                        type="number"
                        min={0}
                        max={1000}
                    />
                    <AppInput
                        onChange={(e: InputType) =>
                            handleOnChange(e.target.value, "max")
                        }
                        placeholder="Max"
                        className="custom-input"
                        type="number"
                        min={0}
                        max={1000}
                    />
                </div>
                <div>
                    <span>Available</span>
                    <AppInput
                        checked={filter.status}
                        handleCheckbox={(e: InputType) =>
                            handleStatus(e.target.checked)
                        }
                        type="checkbox"
                        placeholder="Min"
                        key={Math.random()}
                    />
                </div>
                <AppButton
                    className="search-bar__modal-button"
                    onClick={() => handleFilter(filter)}
                >
                    Filter
                </AppButton>
                <AppButton
                    inverted
                    className="search-bar__reset-button"
                    onClick={handleResetFilter}
                >
                    Reset Filter
                </AppButton>
            </div>
        </AppModal>
    );
};
