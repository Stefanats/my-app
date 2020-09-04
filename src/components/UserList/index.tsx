import React from "react";
import { useSelector } from "react-redux";

import "./style.scss";

import { UserCard, CreateUser } from "..";
import { selectUsers } from "../../redux/users";
import { User } from "../../redux/users/reducer";
import { searchSelector } from "../../redux/search";
import { filtersSelector } from "../../redux/filters";
import { filterUsers, searchUsers } from "../../utils";

const UserList: React.FC = () => {
    const users = useSelector((state) => selectUsers(state));
    const filters = useSelector((state) => filtersSelector(state));
    const search = useSelector((state) => searchSelector(state));

    const _filterUsers = filterUsers(users, filters);
    const _searchUsers = searchUsers(_filterUsers, search);

    return (
        <section className="user-list">
            <CreateUser />
            <div className="user-list__wrapper">
                {_searchUsers.map((item: User, key) => (
                    <UserCard key={key} {...item} />
                ))}
                {_searchUsers.length === 0 && <p>No data!</p>}
            </div>
        </section>
    );
};

export default UserList;
