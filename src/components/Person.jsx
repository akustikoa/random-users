const Person = ({
  picture,
  name,
  last,
  email,
  nickName,
  cell,
  gender,
  filteredFavorites,
  isFavorite,
}) => {
  const genderCapitalized = gender.charAt(0).toUpperCase() + gender.slice(1);
  
  return (
    <div
      className={`person-container ${isFavorite ? 'person-favorite' : ''} `}
      onClick={() => filteredFavorites(email)}
    >
      <img className='person-picture' src={picture} alt={name} />

      <div className='person-info'>
        <h2>
          {name} {last}
        </h2>
        <p className=''> @{nickName}</p>
        <p>{email}</p>
        <p>{cell}</p>
        <p>
          {gender === 'male' ? '♂️' : '♀️'} {genderCapitalized}
        </p>
      </div>
    </div>
  );
};

export default Person;
