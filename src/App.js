import './App.css';
import Home from './Components/Home/Home';
import Shipment from './Components/Shipment/Shipment';
import Header from './Components/Header/Header';
import { createContext, useState } from 'react';
export const CategoryContext = createContext();

function App() {
  const [category, setCategory] = useState(0);
  return (
    <CategoryContext.Provider value={[category, setCategory]}>
      <Header></Header>
      <Home></Home>
      <Shipment></Shipment>
    </CategoryContext.Provider>
  );
}

export default App;
