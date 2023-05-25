import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from 'redux/selectors';
import { setFilter } from 'redux/filterSlice';
import css from './Filter.module.css';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  const handleChange = e => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <div>
      <input
        className={css.searchInput}
        type="text"
        name="filter"
        placeholder="Find contacts by Name"
        value={filter}
        onChange={handleChange}
      />
    </div>
  );
};
