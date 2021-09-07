import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import MovieList from './pages/MovieList';
import NewMovie from './pages/NewMovie';
import EditMovie from './pages/EditMovie';
import NotFound from './pages/NotFound';
import MovieDetails from './pages/MovieDetails';

function App() {
  return (
    <div>
      <div>Movie Card Library CRUD</div>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={ MovieList } />
          <Route path="/movies/new" exact component={ NewMovie } />
          <Route path="/movies/:id" exact component={ MovieDetails } />
          <Route path="/movies/:id/edit" exact component={ EditMovie } />
          <Route path="*" component={ NotFound } />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
