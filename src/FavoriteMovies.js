import React from 'react';

export default (FavoriteMovies = ({ profiles, users, movies }) => {
    const profilesList = profiles.map(profile => {
        const { id, userID, favoriteMovieID } = profile;
        const currentUser = users[userID];
        const favoriteMovie = movies[favoriteMovieID];
        const favoriteMovieString = `${currentUser.name}'s favorite movie is ${
            favoriteMovie.name
        }`;
        return (
            <li key={id}>
                <p>{favoriteMovieString}</p>
            </li>
        );
    });

    return <ul>{profilesList}</ul>;
});
