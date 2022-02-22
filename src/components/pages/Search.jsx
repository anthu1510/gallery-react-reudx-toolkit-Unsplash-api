import React, {useState} from 'react';
import { useDispatch, useSelector } from "react-redux";
import { searchUpdate } from "../../redux/reducers/gallerySlice";

const Search = () => {
    const [search, setSearch] = useState("");
    const dispatch = useDispatch();
    const gallery = useSelector(state => state.gallery);

    const handleSearch = (e) => {
        e.preventDefault();
        dispatch(searchUpdate(search));
    }

    return (
        <div className="row">
            <div className="col-xl-12">
                <form onSubmit={handleSearch}>
                    <div className="mt-5">
                        <div className="row">
                            <div className="col-xl-11">
                                <input type="text" onChange={e => setSearch(e.target.value)} className="form-control" placeholder="Search for photos"/>
                            </div>
                            <div className="col-xl-1">
                                <button className="btn btn-dark">Search</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Search;