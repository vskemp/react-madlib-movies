import React from 'react';
import Box from './Box';

function Movies({title}) {
    const movieTitle = `${title}`
    return (
        <div>
            <Box text={movieTitle} />
        </div>
    );
}

export default Movies