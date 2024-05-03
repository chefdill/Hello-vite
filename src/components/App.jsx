import './App.css'
import  Header from'./Header'
import Main from './Main'
import Animal from './Animals'

function App() {
  return (
    <div className="page">
      <Header />
      <Main />
      <Animal selectedAnimal="duck"/>
      </div>

  )
}

export default App;
