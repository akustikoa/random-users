const Header = ({
  toggleGender,
  activeGender,
  toggleModal,
  isOpen,
  refreshTrigger,
}) => {
  return (
    <header>
      <h1>Random users</h1>

      <div className='header-buttons-container'>
        <button
          className={`header-button ${isOpen === true ? 'is-active' : ''}`}
          onClick={() => refreshTrigger()}
        >
          <i className='fa-solid fa-arrows-rotate'></i> Refresh
        </button>
        <button
          className={`header-button ${isOpen === true ? 'is-active' : ''}`}
          onClick={() => toggleModal()}
        >
          <i className='fa-solid fa-heart'></i> Favorites
        </button>
        <button
          className={`header-button ${
            activeGender === 'male' ? 'is-active' : ''
          } `}
          onClick={() => toggleGender('male')}
        >
          Male
        </button>
        <button
          className={`header-button ${
            activeGender === 'female' ? 'is-active' : ''
          } `}
          onClick={() => toggleGender('female')}
        >
          Female
        </button>
      </div>
    </header>
  );
};

export default Header;
