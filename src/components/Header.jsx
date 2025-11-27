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
        <button className={`header-button`} onClick={() => refreshTrigger()}>
          <i className='fa-solid fa-arrows-rotate'></i> <p>Refresh</p>
        </button>
        <button
          className={`header-button ${isOpen ? 'is-active' : ''}`}
          onClick={() => toggleModal()}
        >
          <i className='fa-solid fa-heart'></i> <p>Favorites</p>
        </button>
        <button
          className={`header-button ${
            activeGender === 'male' ? 'is-active' : ''
          }`}
          onClick={() => toggleGender('male')}
        >
          <i className='fa-solid fa-mars'></i> <p>Male</p>
        </button>
        <button
          className={`header-button ${
            activeGender === 'female' ? 'is-active' : ''
          }`}
          onClick={() => toggleGender('female')}
        >
          <i className='fa-solid fa-venus'></i> <p>Female</p>
        </button>
      </div>
    </header>
  );
};

export default Header;
