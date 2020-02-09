import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class MoviesList extends Component {
    
    render() {

            const renderMovies = Object.keys(this.props.movies).map(movieID =>
              <Link key={movieID} 
              to={`/movies/${movieID}`}>{this.props.movies[movieID].title}</Link>
            )
       
        return (
            <div>
                {renderMovies}
            </div>
        );
    }
}

export default MoviesList;