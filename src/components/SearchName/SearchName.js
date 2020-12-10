import React, { useContext } from "react";
import "./SearchName.css";
import DataAreaContext from "../../utils/DataAreaContext";

const SearchName = () => {
    const context = useContext(DataAreaContext);

    return (
        <div className="searchbox">
            <form className="form-inline">
                <input
                    className="form-control mr-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                    onChange={e => context.handleSearchChange(e)}
                />
                <button className="btn" type="submit">
                <i class="fas fa-search"></i>
                 </button>
            </form>
        </div>
    );
}
export default SearchName;