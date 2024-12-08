import './App.css';
import { Header } from './components/Header';
import workDesign from './assets/images/work-design.png'


function App() {
  return (
    <div className="app-container">
      <div className="home-container">
        <Header />
      </div>

      <div className="our-work-container">
        <div className="heading-container">
          <h2 className='heading-section'>HOW WE WORK</h2>
          <p>Designing your newly-bought home has never been this simple before.</p>
        </div>
        <div className='work-container-layout'>


          <div className='work-container'>

            <p className='container-heading'>WE DESIGN</p>
            <img src={workDesign} alt='we-design' />
            <p className='container-paragraph'>Book a design consultation with some of Bangalore’s best designers. Get your home designed for the dreams of tomorrow</p>
          </div>


          <div className='work-container'>

            <p className='container-heading'>YOU VISUALIZE</p>
            <img src={workDesign} alt='you-visualize' />
            <p className='container-paragraph'>See your home in every angle and “try before you buy” furniture, using our Virtual Reality walkthrough</p>
          </div>




          <div className='work-container'>

            <p className='container-heading'>WE IMPLEMENT</p>
            <img src={workDesign} alt='we-design' />
            <p className='container-paragraph'> Sit back & Relax. In just 60 days, an army of experts will make the Virtual Reality a glorious reality</p>
          </div>



        </div>
      </div>


    </div>

  );
}

export default App;
