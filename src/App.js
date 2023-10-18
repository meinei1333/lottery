import React, { useState } from 'react';
import XLSX from 'xlsx';
import CoffeeButton from './CoffeeButton';
import './tailwind.css';

function App() {
  const [file, setFile] = useState(null);
  const [winners, setWinners] = useState([]);
  const [numWinners, setNumWinners] = useState(1);
  const [showWaiting, setShowWaiting] = useState(false);

  const handleFileUpload = (e) => {
    console.log("handleFileUpload");
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  const handleDrawWinners = () => {
    console.log("file", file);
    if (!file) {
      alert("請上傳Excel檔案")
    } else {
      setWinners([]);
      setShowWaiting(true);
      setTimeout(() => {
        if (file) {
          setShowWaiting(false);

          const fileReader = new FileReader();
          fileReader.onload = (e) => {
            const data = new Uint8Array(e.target.result);
            const workbook = XLSX.read(data, { type: 'array' });
            const sheetName = workbook.SheetNames[0];
            const worksheet = workbook.Sheets[sheetName];
            const jsonData = XLSX.utils.sheet_to_json(worksheet);

            const shuffledData = jsonData.sort(() => 0.5 - Math.random());
            const selectedWinners = shuffledData.slice(0, numWinners);
            console.log("setWinners");
            setWinners(selectedWinners);
          };

          fileReader.readAsArrayBuffer(file);
        }
      }, 3000);
    }
  };

  const fileClick = () => {
    setWinners([]);
  }

  return (
    <div className="relative h-screen mx-auto mt-10 ml-10">
      <h3 className='text-3xl text-sky-500'>抽獎遊戲</h3>
      <div className="mb-4 mt-10">
        <input type="file" onClick={fileClick} onChange={handleFileUpload} />
      </div>
      <div className="flex items-center mb-4">
        <span className="mr-2">抽</span>
        <input
          type="number"
          value={numWinners}
          onChange={(e) => setNumWinners(e.target.value)}
          className="w-16 p-2 border rounded"
        />
        <span className="ml-2">人</span>
      </div>
      <button
        onClick={handleDrawWinners}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
      >
        抽獎
      </button>
      {showWaiting && <img src="./waitting.gif" alt="Loading..." />}
      {winners.length > 0 && (
        <div className="mt-4">
          <h2 className="text-xl font-bold">得獎者:</h2>
          <ul>
            {winners.map((winner, index) => (
              <li key={index} className="mt-2">
                {winner.A}
              </li>
            ))}
          </ul>
        </div>
      )}
      <div className="absolute left-0 bottom-1/4">
        <CoffeeButton />
      </div>
    </div>
  );
}

export default App;
