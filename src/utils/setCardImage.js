export function setCardImage(cardId) {
    if (cardId === 1) {
      return (
        <img src="cards/ThePhantomMenace.svg" alt="The Phantom Menace"></img>
      );
    }
    if (cardId === 2) {
      return (
        <img src="cards/AttackOfTheClones.svg" alt="Attack Of The Clones"></img>
      );
    }
    if (cardId === 3) {
      return (
        <img src="cards/RevengeOfTheSith.svg" alt="Revenge Of The Sith"></img>
      );
    }
    if (cardId === 4) {
      return <img src="cards/ANewHope.svg" alt="A new Hope"></img>;
    }
    if (cardId === 5) {
      return (
        <img
          src="cards/TheEmpireStrikesBack.svg"
          alt="The Empire Strikes Back"
        ></img>
      );
    }
    if (cardId === 6) {
      return (
        <img src="cards/ReturnOfTheJedi.svg" alt="Return of the Jedi"></img>
      );
    }
  }