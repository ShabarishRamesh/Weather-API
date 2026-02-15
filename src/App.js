import { createContext ,useState } from "react";
import Api from "./components/Api";
// Creating Context
const ApiData =createContext();


function App() {
  // state for city
  const [city , setcity]=useState('');

  return (
    <ApiData.Provider value={{ city , setcity }}>
    <div className="bg-gray-500 p-10">
      <Api></Api>
    </div>
    </ApiData.Provider> 
  );
}

export default App;
export {ApiData}
