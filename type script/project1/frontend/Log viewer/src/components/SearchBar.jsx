// SearchBar.js
import PropTypes from 'prop-types';

function SearchBar({ searchTerm, setSearchTerm }) {
  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search logs..."
        value={searchTerm}
        onChange={handleChange}
      />
    </div>
  );
}

SearchBar.propTypes = {
  searchTerm: PropTypes.any.isRequired,
  setSearchTerm: PropTypes.func.isRequired,
};

export default SearchBar;
