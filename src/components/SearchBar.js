import React, { useState } from 'react';

const SearchBar = ({ onFormSubmit }) => {

    const [term, setTerm] = useState('');

    const onInputChange = (event) => {
        setTerm(event.target.value);
    }
    const onSubmit = (event) => {
        event.preventDefault();
        onFormSubmit(term);
    }

    return (
        <div className="search-bar ui segment">
            <form onSubmit={onSubmit} className="ui form">
                <div className="field">
                    <label>Search for a video</label>
                    <input
                        value={term}
                        onChange={onInputChange}
                        type="text" />
                </div>
            </form>
        </div>);
}

export default SearchBar;


// class SearchBar extends Component {
//     // state = { term: '' }
//     render() {

//     }
// }


// export default SearchBar;