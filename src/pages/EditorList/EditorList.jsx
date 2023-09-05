import PropTypes from 'prop-types';
import { List, Item, MovieLink } from './EditorList.styled';

const EditorList = ({ films, prevLocation }) => {
  return (
    <List>
      {films.map(film => (
        <Item key={film.id}>
          <MovieLink to={`/movies/${film.id}`} state={{ from: prevLocation }}>
            {film.title}
          </MovieLink>
        </Item>
      ))}
    </List>
  );
};

EditorList.propTypes = {
  films: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};

export default EditorList;
