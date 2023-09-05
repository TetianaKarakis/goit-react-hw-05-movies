import { useState, useEffect } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';
import Loader from 'components/Loader/Loader';
import EditorList from 'pages/EditorList/EditorList';
import Form from 'components/Form/Form';
import { fetchSearchByKeyword } from 'services/TmbdApi';

const Movies = () => {
  const [searchFilms, setSearchFilms] = useState([]);
  const [loading, setLoading] = useState(false);
  const [noMoviesText, setNoMoviesText] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const searchRequest = searchParams.get('query');

  useEffect(() => {
    if (!searchRequest) {
      return;
    }

    const searchMovies = () => {
      setLoading(true);

      fetchSearchByKeyword(searchRequest)
        .then(searchResults => {
          if (!searchResults.length) {
            alert('No movies found!');
          }
          setSearchFilms(searchResults);
          setNoMoviesText(searchResults.length === 0);
        })
        .catch(error => {
          console.log(error);
        })
        .finally(setLoading(false));
    };

    searchMovies();
  }, [searchRequest]);

  function onSubmit(value) {
    setSearchParams({ query: `${value}` });
  }

  return (
    <main>
      <Form searchMovies={onSubmit} />
      {loading && <Loader />}
      {noMoviesText && (
        <p>There is no movies with this request. Please, try again</p>
      )}
      {searchFilms && (
        <EditorList films={searchFilms} prevLocation={location} />
      )}
    </main>
  );
};

export default Movies;
