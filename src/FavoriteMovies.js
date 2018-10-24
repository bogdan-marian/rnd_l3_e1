import React, {Component} from 'react'

class FavoriteMovies extends Comment{
    render(){
        console.log('Props', this.props)
        return(
            <ol> 
                {this.props.profiles.map((profile)=>(
                    <li key={profile.id} className='favorit-movies-list'>{profile.name}</li>
                ))}
            </ol>
        )
    }
}

export default FavoriteMovies