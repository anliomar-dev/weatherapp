import Navbar from "./components/navbar.jsx";
import CurrentWeatherCard from "./components/currentWeatherCard.jsx";
import {ThemeContext} from "./hooks/themeContext.jsx";

import {useContext} from "react";
function App() {
    const {darkMode} = useContext(ThemeContext);
  return (
    <div className={`w-full h-[100%] flex flex-col items-center py-8 px-6 lg:px-0 ${darkMode ? 'bg-dark-theme' : 'bg-light-theme'}`}>
      <div className="border-1 border-gray-200 lg:w-3/4 w-full test" id="test">
          <Navbar />
          <CurrentWeatherCard />
      </div>
    </div>
  )
}

export default App
