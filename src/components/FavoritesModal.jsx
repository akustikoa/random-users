const FavoritesModal = ({ people, onClose, isOpen, removeFavorite }) => {
  if (!isOpen) return null;

  const handOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className='favorites-container' onClick={handOverlayClick}>
      <div className='favorites-people-list'>
        <header>
          <h1>Favorites</h1>
          <button className='favorites-close-button' onClick={onClose}>
            <i className='fa-solid fa-xmark'></i>
          </button>
        </header>
        
        {/* MOSTRAR LOADING SI PEOPLE ESTÀ BUID */}
        {people.length === 0 ? (
          <div className='favorite-person-item no-favorites'>
            <h2>Loading favorites...</h2>
          </div>
        ) : (
          <>
            {/* MOSTRAR LLISTA QUAN HI HA DADES */}
            {people.map((person) => (
              <div key={person.email} className='favorite-person-item'>
                <div className='favorite-left'>
                  <img
                    className='favorite-person-picture'
                    src={person.picture.medium}
                    alt={`${person.name.first} ${person.name.last}`}
                  />
                </div>
                <div className='favorite-right'>
                  <h2 className='favorite-person-name'>
                    {person.name.first} {person.name.last}
                  </h2>
                  <p className='favorite-person-email'>{person.email}</p>
                  <p className='favorite-person-phone'>{person.cell}</p>

                  <button
                    className='favorite-person-close'
                    onClick={() => removeFavorite(person.email)}
                  >
                    <i className='fa-solid fa-xmark'></i>
                  </button>
                </div>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default FavoritesModal;
