import React from "react";

export default function SearchMovies(){
    
    return (
        <form className="form">
            <label htmlFor="query" className="Label">Movie name</label>
            <input className="input" type="text" name="query" placeholder="i.e. Jurassic Park"/>

            <button className="button" type="submit">Search</button>
            
            
            
            
        </form>
    )
}

