import './App.css'
import Navbar from './Components/Shared/Navbar'
import Jumbotron from './Jumbotron'
import Card from './Card'
import Footer from './Components/Shared/Footer'

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Jumbotron
          title="A Warm Welcome!"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor."
          label="Call to action!"
        />
        <div className="d-flex flex-row">
          <Card
            title="Who's a good boy?"
            description="A picture of a good boy."
            label="See more"
            imagen="237"
          />
          <Card
            title="The Big Apple."
            description="NY in B&W."
            label="See more"
            imagen="238"
          />
          <Card
            title="The last of a kind."
            description="Should I blow it?"
            label="See more"
            imagen="239"
          />
          <Card
            title="The Wall."
            description="Do I need to say somethig else?"
            label="See more"
            imagen="240"
          />
        </div>
      </div>
      <div>
        <Footer footerInfo = "Landing w React."/>
      </div>
    </>
  )
}


export default App
