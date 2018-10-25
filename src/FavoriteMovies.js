import React, {Component} from 'react'

class FavoriteMovies extends Component{
    
    render(){
        
        return (
            <ul>
                {
                    //profiles, users, movies
                    this.props.profiles.map(profile => (
                        <li key={profile.id}>
                            {
                                <p>{`
                                    ${this.props.users[profile.userID].name}
                                    's favorite movie is 
                                    ${this.props.movies[profile.favoriteMovieID].name}`}
                                </p>
                            }
                        </li>
                    ))
                }
            </ul>
        )
       
    }
}

export default FavoriteMovies