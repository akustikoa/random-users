import Person from './Person';

const People = ({
  people,
  toggleGender,
  activeGender,
  addToFavorites,
  favorites,
}) => {
  return (
    <div className='people-container'>
      {people.map((person) => (
        <Person
          key={person.email}
          person={person}
          picture={person.picture.large}
          name={person.name.first}
          last={person.name.last}
          nickName={person.email.split('@')[0]}
          email={person.email}
          cell={person.cell}
          gender={person.gender}
          toogleGender={toggleGender}
          activeGender={activeGender}
          addToFavorites={addToFavorites}
          isFavorite={favorites.some((fav) => fav.email === person.email)}
        />
      ))}
    </div>
  );
};

export default People;
