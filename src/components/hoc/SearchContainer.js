import Search from '../Search/Search';
import { connect } from 'react-redux';
import { setSort, setFilter, searchTodos } from '../../redux/actions/todoActions';



const mapDispatchToProps = (dispatch) => {
  return {
    setSort: (sorted) => dispatch(setSort(sorted)),
    setFilter: (filtered) => dispatch(setFilter(filtered)),
    searchData: (searchWord) => dispatch(searchTodos(searchWord))
  }
}

export default connect(null, mapDispatchToProps)(Search);
