import React, { useState } from 'react';
import coffeeImage from './coffee.png';
import buyCoffee from './buyCoffee.png';

function CoffeeButton() {
  const [showCoffeeModal, setShowCoffeeModal] = useState(false);

  const handleCoffeeButtonClick = () => {
    setShowCoffeeModal(true);
  };

  const handleModalClose = () => {
    setShowCoffeeModal(false);
  };

  return (
    <div>
      <img
        onClick={handleCoffeeButtonClick}
        src={coffeeImage}
        alt="請我喝咖啡"
        className="cursor-pointer"
      />
      {showCoffeeModal && (
        <div className="fixed top-0 left-0 w-screen h-screen flex justify-center items-center bg-gray-900 bg-opacity-70 bg-white">
          <button onClick={handleModalClose} className="bg-transparent text-gray-500 hover:text-gray-700 p-2 rounded-full absolute top-2 right-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <img src={buyCoffee} alt="" />
          <div className="p-4 flex flex-col">
            <img src="./buyCoffee.png" alt="" />
            <h1>如果你喜歡這個網站，贊助我，請我喝咖啡</h1>
          </div>
        </div>
      )}
    </div>
  );
}

export default CoffeeButton;
