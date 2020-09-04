import React from "react";
import { useDispatch } from "react-redux";

import "./index.scss";

import { AppButton, AppImage } from "..";
import ArrowIcon from "../../icons/ArrowIcon";
import DeleteIcon from "../../icons/DeleteIcon";
import { checkAverageScore, reduceNameSize } from "../../utils";
import { deleteUser } from "../../redux/users/reducer";

type Props = {
    id: number;
    firstName: string;
    lastName: string;
    games: {
        name: string;
        scoredPoints: number;
    }[];
    status: boolean;
    thumbnail: string;
};

const UserCard: React.FC<Props> = ({
    id,
    firstName,
    lastName,
    games,
    status,
    thumbnail,
}) => {
    const dispatch = useDispatch();
    const handleDelete = () => {
        dispatch(deleteUser(id));
    };

    return (
        <div className="user-card">
            <div className="user-card__image-wrapper">
                <AppImage
                    src={thumbnail}
                    alt={`${id}`}
                    className="user-card__image"
                    key={id}
                />
            </div>
            <div className="user-card__user-info-wrapper">
                <p className="user-name">
                    {reduceNameSize(firstName)} {reduceNameSize(lastName)}
                </p>
                <p className="user-points">
                    Avg. Score: {checkAverageScore(games)}
                </p>
            </div>
            <div className="user-card__status-wrapper">
                <p className={`status ${status && "success"}`}>
                    {status ? "Available" : "Taken"}
                </p>
            </div>
            <div className="arrow">
                <ArrowIcon size="small" color="black" direction="right" />
            </div>
            <AppButton
                onClick={handleDelete}
                className="delete-button"
                shape="circle"
            >
                <DeleteIcon size="small" />
            </AppButton>
        </div>
    );
};

export default UserCard;
