import { useEffect, useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import People from './components/People';
import FavoritesModal from './components/FavoritesModal';
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  //============ USE STATES ============
  const [people, setPeople] = useState([]);
  const [activeGender, setActiveGender] = useState(null);
  const [favorites, setFavorites] = useState(
    JSON.parse(localStorage.getItem('favorites')) || []
  );
  const [showModal, setShowModal] = useState(false);
  const [refresh, setRefreshTrigger] = useState(0);

  //============ HELPER FUNCTIONS ============
  const seed = () => {
    return Math.floor(Math.random() * 10_000);
  };

  //============ EFFECTS ============
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

  //============ HANDLERS ============

  // REFRESH PEOPLE
  const refreshTrigger = () => {
    setRefreshTrigger((prev) => prev + 1);
  };

  const toggleGender = (gender) => {
    setActiveGender((current) => (current === gender ? null : gender));
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  //============ BUSINESS LOGIC =======
  const filteredPeople = (activeGender) => {
    if (!activeGender) return people;
    return people.filter((person) => person.gender === activeGender);
  };

  const addToFavorites = (person) => {
    let newFavorites = [...favorites];
    if (favorites.some((fav) => fav.email === person.email)) {
      newFavorites = newFavorites.filter((fav) => fav.email !== person.email);
    } else {
      newFavorites.push(person);
    }
    setFavorites(newFavorites);
  };

  const removeFavorite = (email) => {
    const newFavorites = favorites.filter((fav) => fav.email !== email);
    setFavorites(newFavorites);
  };

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
        addToFavorites={addToFavorites}
        favorites={favorites}
      />
      <Footer />
      <FavoritesModal
        people={favorites}
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        removeFavorite={removeFavorite}
      />
    </>
  );
}

export default App;
