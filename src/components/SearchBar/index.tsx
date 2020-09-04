import React, { useState } from "react";
import { useDispatch } from "react-redux";

import "./index.scss";

import { AppButton, AppInput } from "..";
import { Modal, FilterType } from "./modal";
import { setSearch } from "../../redux/search";
import FilterIcon from "../../icons/FilterIcon";
import { setFilter, resetFilter } from "../../redux/filters";

const SearchBar: React.FC = () => {
    const dispatch = useDispatch();
    const [modal, setModal] = useState(false);

    const handleFilter = (filter: FilterType) => {
        dispatch(setFilter(filter));
        setModal(false);
    };

    const handleResetFilter = () => {
        dispatch(resetFilter());
        setModal(false);
    };

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) =>
        dispatch(setSearch(e.target.value));

    return (
        <section className="search-bar">
            {modal && (
                <Modal
                    handleFilter={handleFilter}
                    handleResetFilter={handleResetFilter}
                    onClick={() => setModal(false)}
                />
            )}
            <AppInput onChange={handleSearchChange} placeholder="Search..." />
            <AppButton onClick={() => setModal(true)} shape="square">
                <FilterIcon size="small" />
            </AppButton>
        </section>
    );
};

export default SearchBar;
