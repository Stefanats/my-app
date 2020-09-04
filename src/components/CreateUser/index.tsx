import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { AppButton } from "..";
import { Modal } from "./modal";
import { addUser } from "../../redux/users";
import PlusIcon from "../../icons/PlusIcon";
import { User } from "../../redux/users/reducer";

const CreateUser: React.FC = () => {
    const [modal, setModal] = useState(false);
    const dispatch = useDispatch();
    const handleCreate = (user: User) => {
        dispatch(addUser(user));
        setModal(false);
    };

    return (
        <>
            {modal && (
                <Modal
                    handleCreate={handleCreate}
                    handleClose={() => setModal(false)}
                />
            )}
            <AppButton onClick={() => setModal(true)} shape="circle">
                <PlusIcon />
            </AppButton>
        </>
    );
};

export default CreateUser;
