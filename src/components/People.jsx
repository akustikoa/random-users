import Person from './Person';

const People = ({
  people,
  toggleGender,
  activeGender,
  filteredFavorites,
  favorites,
}) => {
  return (
    <>
      <div className='people-container'>
        {people.map((person) => (
          <Person
            key={person.email}
            picture={person.picture.large}
            name={person.name.first}
            last={person.name.last}
            nickName={person.email.split('@')[0]}
            email={person.email}
            cell={person.cell}
            gender={person.gender}
            toogleGender={toggleGender}
            activeGender={activeGender}
            filteredFavorites={filteredFavorites}
            isFavorite={favorites.includes(person.email)}
          />
        ))}
      </div>
    </>
  );
};

export default People;
