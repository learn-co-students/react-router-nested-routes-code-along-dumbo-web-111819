// ./src/components/MovieShow.js
import React from 'react';
 
const MovieShow = ({match,movies}) => {
  
  return (
    <div>
      {/* {console.log(props.match.params)} */}
      <h3>{ movies[match.params.movieId].title }</h3>
    </div>
  );
}
 
export default MovieShow;