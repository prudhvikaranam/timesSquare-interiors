import './App.css';
import { Header } from './components/Header';
import workDesign from './assets/images/work-design.png'
import theme1 from './assets/images/theme1.JPG'
import theme3 from './assets/images/theme3.JPG'
import theme2 from './assets/images/theme2.JPG'
import theme4 from './assets/images/theme4.JPG'
import user1 from './assets/images/user1.png'
import user2 from './assets/images/user2.png'
import project_1_2 from './assets/images/project_1_2.JPG';
import project_1_3 from './assets/images/project_1_3.JPG';
import whyus from './assets/images/whyus.png';




function App() {
  return (
    <div className="app-container">

      {/* Home and Landing page */}
      <div className="home-container">
        <Header />
      </div>


      {/* work */}

      <div className="our-work-container">
        <div className="heading-container">
          <h2 className='heading-section'>HOW WE WORK</h2>
          <p className='heading-section-light'>Designing your newly-bought home has never been this simple before.</p>
        </div>
        <div className='work-container-layout'>
          <div className='work-container'>
            <p className='container-heading'>WE DESIGN FOR YOU</p>
            <img src={workDesign} alt='we-design' />
            <p className='container-paragraph'>Book a design consultation with some of Bangalore’s best designers. Get your home designed for the dreams of tomorrow</p>
          </div>
          <div className='work-container'>
            <p className='container-heading'>YOU VISUALIZE OUR DESIGN</p>
            <img src={workDesign} alt='you-visualize' />
            <p className='container-paragraph'>See your home in every angle and “try before you buy” furniture, using our Virtual Reality walkthrough</p>
          </div>
          <div className='work-container'>
            <p className='container-heading'>WE IMPLEMENT THE DESIGN</p>
            <img src={workDesign} alt='we-design' />
            <p className='container-paragraph'> Sit back & Relax. In just 60 days, an army of experts will make the Virtual Reality a glorious reality</p>
          </div>
        </div>
      </div>



      {/* Themes */}


      <div className='design-theme-container dark-container'>
        <div className="heading-container">
          <h2 className='heading-section'>OUR DESIGN THEMES</h2>
          <p className='heading-section-dark'>When you choose an home interior design theme from here, not only are you are telling us what tastes, colors and preferences move you. You are also giving yourself a fantastic head start on the journey of turning your house into a ‘home’</p>
        </div>


        <div className='themes-container-layout'>
          <div className='theme-container'>
            <img src={theme1} alt='we-design' />
            <p className='theme-heading'>THEME ONE</p>
          </div>

          <div className='theme-container'>
            <img src={theme3} alt='we-design' />
            <p className='theme-heading'>THEME THREE</p>
          </div>
          <div className='theme-container'>
            <img src={theme4} alt='we-design' />
            <p className='theme-heading'>THEME FOUR</p>
          </div>
          <div className='theme-container'>
            <img src={theme2} alt='we-design' />
            <p className='theme-heading'>THEME TWO</p>
          </div>
        </div>
      </div>




      {/* Our Projects */}



      <div className='our-projects-container'>
        <div className="heading-container">
          <h2 className='heading-section'>OUR PROJECTS</h2>
          <p className='heading-section-light'>Designing your newly-bought home has never been this simple before.</p>
        </div>

        <div className='projects-container-layout designer-primary' id='projects-container-layout'>
          <div className='project-images'>
            <div className='column-primary'>
              <img src={theme3} alt='' className='image' />
            </div>
            <div className='column-secondary'>
              <img src={project_1_2} alt='' className='image' />
              <img src={project_1_3} alt='' className='image' />
            </div>
          </div>
          <div className='project-designer heading-section-light'>
            <div className='designer-profile'>
              <img src={user1} alt='designer' />
              <h4 className='designer-name heading-section'>John Doe</h4>
            </div>
            <div className='designer-about'>
              <h3 className='designer-designation heading-section'>Designer</h3>
              <p className='designer-about-content'>
                Lorem ipsum is a dummy or placeholder text commonly used in graphic design, publishing, and web development to fill empty spaces in a layout that does not yet have content.
                Lorem ipsum is a dummy or placeholder text commonly used in graphic design, publishing, and web development to fill empty spaces in a layout that does not yet have content.
              </p>

            </div>

          </div>
        </div>



        <div className='divider-section'>
          <div className='divider'></div>
        </div>

        <div className='projects-container-layout ' id='projects-container-layout'>
          <div className='project-images'>
            <div className='column-primary'>
              <img src={theme1} alt='' />
            </div>
            <div className='column-secondary'>
              <img src={theme2} alt='' />
              <img src={theme4} alt='' />
            </div>

          </div>
          <div className='project-designer heading-section-light'>
            <div className='designer-profile'>
              <img src={user2} alt='designer' />
              <h4 className='designer-name heading-section'>John Doe</h4>
            </div>
            <div className='designer-about'>
              <h3 className='designer-designation heading-section'>Designer</h3>
              <p>
                Lorem ipsum is a dummy or placeholder text commonly used in graphic design, publishing, and web development to fill empty spaces in a layout that does not yet have content.
                Lorem ipsum is a dummy or placeholder text commonly used in graphic design, publishing, and web development to fill empty spaces in a layout that does not yet have content.
              </p>

            </div>

          </div>
        </div>


      </div>






      {/* Why Us */}



      <div className='whyus-container dark-container'>
        <div className="heading-container">
          <h2 className='heading-section'>WHY US</h2>
          <p className='heading-section-dark'>We use next-gen Design, Technology, Furniture & Implementation methods, to solve not just today’s Home Interior design needs, but even the ones you don’t foresee for tomorrow</p>
        </div>


        <div className="whyUs-container-layout">

          <div className='container'>
            <img src={whyus} alt='' />
            <h4 className='heading-section'>Personal Designer</h4>
            <p>Will transform your every need into functional & aesthetic design, and help you plan your space intelligently</p>
          </div>




          <div className='container'>
            <img src={whyus} alt='' />
            <h4 className='heading-section'>VR Experience</h4>
            <p>Will transform your every need into functional & aesthetic design, and help you plan your space intelligently</p>
          </div>



          <div className='container'>
            <img src={whyus} alt='' />
            <h4 className='heading-section'>Impeccable Implementation</h4>
            <p>Will transform your every need into functional & aesthetic design, and help you plan your space intelligently</p>
          </div>




          <div className='container'>
            <img src={whyus} alt='' />
            <h4 className='heading-section'>Reputed Partners</h4>
            <p>Will transform your every need into functional & aesthetic design, and help you plan your space intelligently</p>
          </div>







          <div className='container'>
            <img src={whyus} alt='' />
            <h4 className='heading-section'>Personal Designer</h4>
            <p>Will transform your every need into functional & aesthetic design, and help you plan your space intelligently</p>
          </div>




          <div className='container'>
            <img src={whyus} alt='' />
            <h4 className='heading-section'>VR Experience</h4>
            <p>Will transform your every need into functional & aesthetic design, and help you plan your space intelligently</p>
          </div>



          <div className='container'>
            <img src={whyus} alt='' />
            <h4 className='heading-section'>Impeccable Implementation</h4>
            <p>Will transform your every need into functional & aesthetic design, and help you plan your space intelligently</p>
          </div>




          <div className='container'>
            <img src={whyus} alt='' />
            <h4 className='heading-section'>Reputed Partners</h4>
            <p>Will transform your every need into functional & aesthetic design, and help you plan your space intelligently</p>
          </div>











        </div>


      </div>




      {/* What Customers Say */}


      <div className='our-customers-feedback-container'>
        <div className="heading-container">
          <h2 className='heading-section'>WHAT OUR CUSTOMERS SAY</h2>
          <p className='heading-section-light'>Customer Delight. Delivered</p>
        </div>


        <div className='customer-feedback-container'>
          <div className='customer-feedback'>
            <p className='name heading-section'>Mr. Shiva Ram</p>
            <p className='feedback'>"This is our first home & AJ Times Sqaure did a brilliant job in designing our dream home. My wife had a lot of design related inputs and they incorporated all of it in the design plan.."</p>
          </div>
          <div className='customer-feedback'>
            <p className='name heading-section'>Mr. Shiva Ram</p>
            <p className='feedback'>"This is our first home & AJ Times Sqaure did a brilliant job in designing our dream home. My wife had a lot of design related inputs and they incorporated all of it in the design plan.."</p>
          </div>
        </div>

      </div>



      {/* What Customers Say */}

      <div className='our-location dark-container'>
        <div className="heading-container">
          <h2 className='heading-section'>INTERIOR DESIGN SERVICES IN HYDERABAD</h2>
        </div>
        <div className='location-address'>
          <div className='address'>
            <address>
              Times Sqaure Interiors<br />
              Mindspace Building, 2nd Floor,<br />
              Gachibowli, Hyderabad  500001<br />
            </address>
          </div>
          <div className='map'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.3667194125474!2d78.37231208553285!3d17.44215335857927!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93001b75ba2b%3A0x72aef5ac3f2e4e9a!2sRaidurg%20Metro%20Station!5e0!3m2!1sen!2sin!4v1734203775113!5m2!1sen!2sin" width="100%" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title='location'></iframe>
          </div>
        </div>
      </div>
    </div >

  );
}

export default App;
