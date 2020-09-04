import React, { useState } from "react";
import { useSelector } from "react-redux";

import "./index.scss";

import { getUniqueId } from "../../utils";
import { selectUsers } from "../../redux/users";
import { User } from "../../redux/users/reducer";
import { AppButton, AppModal, AppInput } from "..";

type ModalProps = {
    handleClose: () => void;
    handleCreate: (user: User) => void;
};

type InputType = React.ChangeEvent<HTMLInputElement>;

const initialState = {
    firstName: "",
    lastName: "",
    thumbnail: "",
    status: false,
};

export const Modal: React.FC<ModalProps> = ({ handleClose, handleCreate }) => {
    const [user, setUser] = useState(initialState);

    const users = useSelector((state) => selectUsers(state));
    const isDisabled = !!!user.firstName || !!!user.lastName;

    const handleOnChange = (e: string | boolean, type: string) =>
        setUser({ ...user, [type]: e });

    const handleSubmit = () => {
        handleCreate({
            ...user,
            id: getUniqueId(users),
            games: [],
        });
        handleClose();
    };

    return (
        <AppModal handleClose={handleClose} title="Add New Player">
            <div className="add-player__modal">
                <AppInput
                    className="add-player__modal-input"
                    placeholder="First Name"
                    onChange={(e: InputType) =>
                        handleOnChange(e.target.value, "firstName")
                    }
                />
                <AppInput
                    className="add-player__modal-input"
                    placeholder="Last Name"
                    onChange={(e: InputType) =>
                        handleOnChange(e.target.value, "lastName")
                    }
                />
                <AppInput
                    className="add-player__modal-input"
                    placeholder="Thumbnail"
                    onChange={(e: InputType) =>
                        handleOnChange(e.target.value, "thumbnail")
                    }
                />
                <div className="add-player__modal-checkbox">
                    <span>Available</span>
                    <AppInput
                        type="checkbox"
                        handleCheckbox={(e: InputType) =>
                            handleOnChange(e.target.checked, "status")
                        }
                        checked={user.status}
                        key={Math.random()}
                    />
                </div>
                <AppButton
                    disabled={isDisabled}
                    onClick={handleSubmit}
                    type="submit"
                    className="add-player__modal-button"
                >
                    Create
                </AppButton>
            </div>
        </AppModal>
    );
};
