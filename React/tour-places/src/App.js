import './App.scss'
import Header from './components/header/Header'
import NavBar from './components/navbar/NavBar'
import Body from './components/body/Body'

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <Header />
      <Body />
    </div>
  )
}

export default App
