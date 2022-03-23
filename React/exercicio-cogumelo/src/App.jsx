import './App.css'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import AboutScreen from './Screens/AboutScreen'
import ContactScreen from './Screens/ContactScreen'
import HomeScreen from './screens/HomeScreen'

function App() {

  return (
    <div className="App">
      <Header />
      {/* <HomeScreen /> */}
      {/* <AboutScreen /> */}
      <ContactScreen />
      <Footer />
    </div>
  )
}

export default App
