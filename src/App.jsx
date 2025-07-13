import Loader from "./components/custom/Loader"
import HeroSection from "./components/section/Hero"
import MarqueeSection from "./components/section/MarqueeSection"
import Navbar from "./components/section/Navbar"
import useLoader from "./hooks/useLoader"

const App = () => {
  const { loading, textShowing } = useLoader()

  return (
    <div className="relative overflow-hidden">
      <Loader loading={loading} textShowing={textShowing} />
      {!loading && (
        <>
          <Navbar />
          <HeroSection />
          <MarqueeSection topText="FULLSTACK • DEVELOPER • " bottomText="FRONT • END • DEVELOPER" className="bg-gray-50" />

        </>
      )}
    </div>
  )
}

export default App