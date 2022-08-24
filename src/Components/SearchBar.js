import { useState } from 'react';
import { useDispatch } from 'react-redux'
import searchIcon from '../assets/search.svg'
import { searchFilter } from '../redux/actions';

const SearchBar = () => {
    const [inputValue, setInputValue] = useState('');
    const dispatch = useDispatch();

    const debounce = (handleChange, delay) => {
        let timeoutId;
        if (timeoutId) {
            return clearTimeout(timeoutId)
        }
        return function () {
            timeoutId = setTimeout(() => {
                handleChange();
            }, delay);

        };
    }
    const handleChange = (e) => {
        setInputValue(e.target.value)
    }

    const debounceOnChange = (e) => {
        const deb = debounce(() => handleChange(e), 1200);
        deb();
    }
    dispatch(searchFilter(inputValue));
    return (
        <div
            className="border mt-6 border-slate-200 flex items-center w-11/12 lg:w-1/2 mx-auto bg-gray-50 h-12 px-5 rounded-lg text-sm ring-emerald-200"
        >
            <input
                className="outline-none border-none bg-gray-50 h-full w-full mr-2"
                type="search"
                name="search"
                placeholder="Search"
                onChange={debounceOnChange}
            />
            <img
                className="inline h-6 cursor-pointer"
                src={searchIcon}
                alt="Search"
            />
        </div>
    );
};

export default SearchBar;