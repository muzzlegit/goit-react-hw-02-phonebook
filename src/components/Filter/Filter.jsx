import PropTypes from 'prop-types';

export const Filter = ({ filter, onFilterChange }) => {
  return (
    <label>
      Хочу знайти...
      <input
        type="text"
        name="filter"
        required
        value={filter}
        onChange={onFilterChange}
      />
    </label>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onFilterChange: PropTypes.func.isRequired,
};
