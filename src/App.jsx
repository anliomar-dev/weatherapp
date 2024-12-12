import Navbar from "./components/navbar.jsx";
import CurrentWeatherCard from "./components/currentWeatherCard.jsx";
function App() {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center py-8">
      <div className="border-1 border-gray-200 w-3/4">
          <Navbar />
          <CurrentWeatherCard />
      </div>
    </div>
  )
}

export default App
