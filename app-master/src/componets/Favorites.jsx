import React from "react";
import '../App'
import { useAppContext } from "./context/appContext";

import { useNavigate } from 'react-router-dom';

const Favorites = () => {
    const{favorites , addToFavorites, removeFromFavorites} = useAppContext();   

    const navigate = useNavigate();

    const favoriteChecker = (id)=>{
        const boolean = favorites.some((book) => book.id === id);
        return boolean;

    }
    return(
        <div className="favorites">
           {favorites.length > 0 ? favorites.map((book)=>(
                <div key={book.id} className="book">
                    <div><h4>{book.title}</h4></div>
                    <div><img src={book.image_url} alt="#" onClick={() => navigate(`/book/${book.id}`)}/></div>
                    <div>
                        {favoriteChecker(book.id) ?(
                          <button className="button" onClick={() => removeFromFavorites(book.id)}>
                            Remove  from Favorites
                            </button>
                        ): (
                            <button onClick={() => addToFavorites(book)}>
                            Add Favorites
                            </button>
                        )}
                    </div>
                </div>
            )): <h1> you dont have any favorite  books</h1>}
        </div>
    )
}
export default Favorites