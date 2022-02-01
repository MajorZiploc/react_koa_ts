import React from 'react';
import DataContext from '../context/DataContext';
import { Movie } from '../models';

const Movies = () => {
  const appData = React.useContext(DataContext);
  const [movies, setMovies] = React.useState<Movie[] | null>(null);
  React.useEffect(() => {
    if (appData) appData.getMovies().then(setMovies);
  }, [appData]);

  return (
    <React.Fragment>
      <p>Movies</p>
      {JSON.stringify(process.env)}
      {`${process.env.APP_PUBLIC_URL}:${process.env.SERVER_PORT}/movies`}
      {movies && movies.map(movie => <p>{movie.name}</p>)}
    </React.Fragment>
  );
};

export default Movies;
