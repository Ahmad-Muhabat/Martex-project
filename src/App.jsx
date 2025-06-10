
import './App.css'
import Brands from './components/Brands'
import CardFeature from './components/CardFeature'
import CruselCard from './components/CruselCard'
import DescriptionLeft from './components/DescriptionLeft'
import DescriptionRight from './components/DescriptionRight'
import DiscoverInsight from './components/DiscoverInsight'
import Features from './components/Features'
import Hero from './components/Hero'
import ImageContent from './components/ImageContent'
import Integration from './components/Integration'
import IntegrationLogos from './components/IntegrationLogos'
import Navbar from './components/Navbar'
import ProductFocus from './components/ProductFocus'
import RatingStars from './components/RatingStars'
import SecondFeatures from './components/secondFeatures'
import Solution from './components/Solution'
import WayOfWork from './components/WayOfWork'
import FAQs from './components/FAQs'
import Banner from './components/Banner'
import Footer from './components/Footer'
import AnimeContent from './components/AnimeContent'



function App() {
  

  return (
    <div className='w-full h-screen'>
      <Navbar/>
      <Hero/>
      <Features />
      <DescriptionLeft />
      <DescriptionRight/>
      <SecondFeatures/>
      <WayOfWork/>
      <CardFeature/>
      <Integration/>
      <ImageContent/>
      <Brands/>
      <Solution/>
      <ProductFocus/>
      <DiscoverInsight/>
      <AnimeContent/>
      <CruselCard/>
      <RatingStars/>
      <IntegrationLogos/>
      <FAQs/>
      <Banner/>
      <Footer/>
    </div>
  )
}

export default App
