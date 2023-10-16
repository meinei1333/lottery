import React, { useState } from 'react';
import coffeeImage from './coffee.svg'; 

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
      <img src="./coffee.svg" alt="" />
      {showCoffeeModal && (
        <div className="fixed top-0 left-0 w-screen h-screen flex justify-center items-center bg-gray-900 bg-opacity-70">
          <div className="bg-white p-4 rounded shadow-md">
            <p>
              如果你覺得這個網頁對你有幫助，歡迎請我喝杯咖啡，鼓勵我。
              帳號：013 6995 0382 1030
            </p>
            <button onClick={handleModalClose} className="bg-blue-500 text-white p-2 rounded mt-4">
              關閉
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default CoffeeButton;
