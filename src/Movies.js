import React from 'react';
import Box from './Box';

function Movies({title}) {
    const movieTitle = `${title}`
    return (
        <ul>
            <Box text={movieTitle} />
        </ul>
    );
}

export default Movies;