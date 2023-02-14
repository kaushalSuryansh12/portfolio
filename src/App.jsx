
import { useState, useEffect } from 'react'
import logoImage from './assets/logosuri.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGitlab, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faAt, faLightbulb } from '@fortawesome/free-solid-svg-icons'
import Typewriter from 'typewriter-effect';

const App = () => {

  const [backgroundColorScreen, setBackgroundColorScreen] = useState('black');
  const [textColorScreen, setTextColorScreen] = useState('white');

  const changeColor = (e) => {
       e.preventDefault();
      if (backgroundColorScreen === 'black') {
        setBackgroundColorScreen('white');
        setTextColorScreen('black');
      } else {
        setBackgroundColorScreen('black');
        setTextColorScreen('white');
      }
  }

  return (
    <div className="App">
      <div className="pt-10 flex flex-row font-semibold relative list-none font-mono ..." style={{ backgroundColor: backgroundColorScreen, color: textColorScreen }}>
          <div className="w-3/12 fixed left-0 bottom-0">
              <div className="fixed top-14 ml-12"><a href="#" onClick={changeColor}><FontAwesomeIcon className="text-2xl mb-5" icon={faLightbulb} /></a></div>
              <div className="flex flex-col">
              <li><a href="mailto:suryanshkaushal19.98@gmail.com"><FontAwesomeIcon className="text-2xl motion-safe:animate-bounce mb-5 ml-10" icon={faAt} /></a></li>
              <li><a href="https://gitlab.com/kaushalSuryansh12" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className="text-2xl mb-5 ml-10" icon={faGitlab} /></a></li>
              <li><a href="https://www.linkedin.com/in/suryansh-kaushal-85206517b/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className="text-2xl mb-5 ml-10" icon={faLinkedin} /></a></li>
              <li><a href="https://www.instagram.com/notsoquietanymore/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className="text-2xl mb-5 ml-10" icon={faInstagram} /></a></li>
           </div>
      </div>
          <div className="m-auto mt-24 text-5xl scroll-smooth">                 
            <img className="m-auto rounded-full h-720 w-72" src={logoImage} alt="noimage" />
            <div className="m-auto">
              <h2 className="mt-6 ml-0 text-left text-3xl">Hi! I'm</h2>
              <Typewriter
                onInit={(typewriter) => {
                  typewriter.typeString('Suryansh Kaushal!')
                    .pauseFor(2000)
                    .start();
                }}
              />
              <h1 className="mt-2 text-3xl">Coding holds a special place in my heart.</h1>
              <h1 className="text-xl mt-4">I wrote my first code in 2017. My long term goal is to make it <br /> to become a proficient full stack developer. </h1>
            </div>
            <h1 className="text-5xl mt-72">I can write
            <span className="before:block before:absolute ml-2 mr-2 before:-inset-1 before:-skew-y-3 before:bg-pink-500 relative inline-block">
            <span className="relative">code</span>
            </span>
             in the following</h1>
            <div class="pt-10 mb-36 flex flex-col list-none">
              <li><div className="text-2xl ml-5 mt-5"><span className="text-3xl">Languages: </span>JavaScript, C#, HTML5/CSS3, PHP, MySQL </div></li>
              <li><div className="text-2xl ml-5 mt-10"><span className="text-3xl">Front-end: </span>React.js, JQuery, Ajax, Redux, Tailwind, Bootstrap </div></li>
              <li><div className="text-2xl ml-5 mt-10"><span className="text-3xl">Back-end: </span>Codeigniter, Node.js, Express, Asp.NET, MongoDB </div></li>
              <li><div className="text-2xl ml-5 mt-10"><span className="text-3xl">Tools: </span>Git, Postman, Apache, Jest, LAMP, Heroku, AWS, WorkBench </div></li>
            </div>
          </div>
          <div className="fixed right-5 top-0 mt-10 text-2xl flex flex-row float-right list-none w-3/12">
            <li className="ml-6"><a href="#">Home</a></li>
            <li className="ml-6"><a href="#">Projects</a></li>
            <li className="ml-6"><a href="#">About me</a></li>
          </div>
      </div>
    </div>
  )

}

export default App;
