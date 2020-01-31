import React from 'react';


// function _handleMouseOver() {
//     console.log('ouch');
//}

// const movies = [
//     'The Goonies',
//     'E.T.',
//     'Cube'
// ]


// MovieList is a react component
class MovieList extends React.Component {
    constructor(props) {
        super(props);
        this.state= {
            movies: [
                'The Goonies',
                'E.T.',
                'Cube'
            ]
        };
    }
    render() {
        return (
            <ul>
                {
                this.state.movies.map(movie => <li onClick={this._handleClick}>{movie}</li>)
                }
            </ul>
        )
    } //_handleClick is an arrow function and it's part of this class
    _handleClick = (event) => {
        console.log('They clicked');
        console.log(event.target);
    }
}
export default MovieList;