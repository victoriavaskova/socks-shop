import React from 'react'
import FavoriteForm from '../../features/FavoriteForm/FavoriteForm';



export default function FavoritePage({setUser}) {
    return (
      <>
      <FavoriteForm setUser={setUser}/>
      </>
    );
  }
  