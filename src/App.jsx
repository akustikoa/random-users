import { useEffect, useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import People from './components/People';
import FavoritesModal from './components/FavoritesModal';
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  const [people, setPeople] = useState([]);
  const [activeGender, setActiveGender] = useState(null);
  const [favorites, setFavorites] = useState(
    JSON.parse(localStorage.getItem('favorites')) || []
  );
  const favoritePeople = people.filter((fav) => favorites.includes(fav.email));

  const [showModal, setShowModal] = useState(false);
  const [refresh, setRefreshTrigger] = useState(0);
  const seed = () => {
    return Math.floor(Math.random() * 10_000);
  };

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  useEffect(() => {
    async function fetchPeople() {
      const res = await fetch(
        `https://randomuser.me/api/?seed=${seed()}&results=50`
      );
      const data = await res.json();
      const peopleFetched = data.results;
      setPeople(peopleFetched);
    }
    fetchPeople();
  }, [refresh]);

  // REFRESH PEOPLE LIST
  const refreshTrigger = () => {
    setRefreshTrigger((prev) => prev + 1);
  };

  // ACTUALITZEM activeGender
  const toggleGender = (gender) => {
    setActiveGender((current) => (current === gender ? null : gender));
  };

  // MALE - FEMALE - ALL
  const filteredPeople = (activeGender) => {
    if (!activeGender) return people;
    return people.filter((person) => person.gender === activeGender);
  };

  // ADD TO FAVORITES
  const filteredFavorites = (email) => {
    let newFavorites = [...favorites];
    if (favorites.includes(email)) {
      newFavorites = newFavorites.filter((fav) => fav !== email);
    } else {
      newFavorites.push(email);
    }
    setFavorites(newFavorites);
  };

  // REMOVE FROM FAVORITES
  const removeFavorite = (email) => {
    const newFavorites = favorites.filter((fav) => fav !== email);
    setFavorites(newFavorites);
  };

  //MODAL

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  console.log('Favorites emails:', favorites);
  console.log(
    'People emails:',
    people.map((p) => p.email)
  );

  return (
    <>
      <Header
        toggleGender={toggleGender}
        activeGender={activeGender}
        toggleModal={toggleModal}
        isOpen={showModal}
        refreshTrigger={refreshTrigger}
      />
      <People
        toggleGender={toggleGender}
        people={filteredPeople(activeGender)}
        filteredFavorites={filteredFavorites}
        favorites={favorites}
      />
      <Footer />
      <FavoritesModal
        people={favoritePeople}
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        removeFavorite={removeFavorite}
      />
    </>
  );
}

export default App;
