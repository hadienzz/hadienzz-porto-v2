import Loader from "./components/custom/Loader"
import HeroSection from "./components/section/Hero"
import Navbar from "./components/section/Navbar"
import useLoader from "./hooks/useLoader"

const App = () => {
  const { loading, textShowing } = useLoader()

  return (
    <div className="relative overflow-hidden">
      <Loader loading={loading} textShowing={textShowing} />
      <Navbar />
      <HeroSection />
    </div>
  )
}

export default App