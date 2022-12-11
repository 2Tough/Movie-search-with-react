import React from "react";

export default function SearchMovies(){
    
    const searchMovies = async (e) => {
        e.preventDefault();

        const url = `https://api.themoviedb.org/3/search/movie?api_key=def02cd1541154638a709f437d1c8d97&language=en-US&query=${query}&page=1&include_adult=false`

        try {
            const res = await fetch(url)
            const data = await res.json()

        }catch(err){
            console.error(err)
        }
    }
    return (
        <form className="form" onSubmit={searchMoviesd}>
            <label htmlFor="query" className="Label">Movie name</label>
            <input className="input" type="text" name="query" placeholder="i.e. Jurassic Park"/>

            <button className="button" type="submit">Search</button>
            
            
            
            
        </form>
    )
}

