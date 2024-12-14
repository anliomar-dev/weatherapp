import Navbar from "./components/navbar.jsx";
import CurrentWeatherCard from "./components/currentWeatherCard.jsx";
import {ThemeContext} from "./hooks/themeContext.jsx";
import WeatherMap from "./components/WeatherMap.jsx";
import {useContext} from "react";
function App() {
    const {darkMode} = useContext(ThemeContext);
  return (
    <div className={`w-full h-[100%] flex flex-col items-center py-8 ${darkMode ? 'bg-dark-theme' : 'bg-light-theme'}`}>
      <div className="border-1 border-gray-200 w-3/4">
          <Navbar />
          <div className="flex flex-col lg:flex-row gap-4 py-5">
              <CurrentWeatherCard />
              <WeatherMap />
          </div>
      </div>
    </div>
  )
}

export default App
