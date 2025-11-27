const Person = ({
  picture,
  name,
  last,
  email,
  nickName,
  cell,
  gender,
  addToFavorites,
  isFavorite,
  person,
}) => {
  const genderCapitalized = gender.charAt(0).toUpperCase() + gender.slice(1);

  return (
    <div
      className={`person-container ${isFavorite ? 'person-favorite' : ''} `}
      onClick={() => addToFavorites(person)}
    >
      <img className='person-picture' src={picture} alt={name} />
      <div className='person-info'>
        <h2>
          {name} {last}
        </h2>
        <p>
          <i class='fa-solid fa-user'></i> @{nickName}
        </p>
        <p>
          <i class='fa-solid fa-envelope'></i> {email}
        </p>
        <p>
          <i class='fa-solid fa-mobile-screen-button'></i> {cell}
        </p>
        <p>
          {gender === 'male' ? (
            <i className='fa-solid fa-mars'></i>
          ) : (
            <i className='fa-solid fa-venus'></i>
          )}{' '}
          {genderCapitalized}
        </p>
      </div>
    </div>
  );
};

export default Person;
