// Fav Button

function FavButton({ kittenObj, remove = false, handleFavClick }) {
  function handleAddFav() {
    handleFavClick(true, kittenObj);
  }

  function handleRemoveFav() {
    handleFavClick(false, kittenObj);
  }

  return (
    <>
      {remove === false ? (
        <button onClick={handleAddFav}>Add To Favs</button>
      ) : (
        <button onClick={handleRemoveFav}>Remove From Favs</button>
      )}
    </>
  );
}

export default FavButton;
