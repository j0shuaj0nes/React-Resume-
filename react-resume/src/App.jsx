import { useState } from 'react'
import './App.css'
import wavesBoulders from './assets/images/wavesBoulders.jpg'
import dreamySunset from './assets/images/dreamySunset.jpg'
import glisteningWater from './assets/images/glisteningWater.jpg'
import beachBabes from './assets/images/beachBabes.jpg'
import computorGeeks from './assets/images/computorGeeks.png'
import boat from './assets/images/boat.jpg'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
         <header class="header">
        <h1>Joshua Jones</h1>
        <nav>
            <ul>
                <li>
                    <a href="#about-me">About Me</a>
                </li>
                <li>
                    <a href="#my-work">My Work</a>
                </li>
                <li>
                    <a href="#contact-me">Contact Me</a>
                </li>
                <li>
                    <a href="#">Resume</a>
                </li>
           </ul>
        </nav>
    </header>
    <section class="second-bar">
            <h2>Young Developer in the Making</h2>
    </section>
    <main>
        <section class="about-me">
            <div id="about-me">
                <h2>About Me</h2>
                <p>
                    Joshua works in wine business & export in Margaret River, Western Australia.
                    He is an aspiring web developer with a keen interest in design and front end development. 
                    He is currently completing a 6 month course in coding and programming.
                </p>
                <p>
                    Integer placerat, lacus eget aliquam faucibus, arcu lorem porttitor sapien, a mollis ante mi ut
                    erat. Fusce convallis feugiat pretium. In varius egestas sollicitudin. Suspendisse gravida libero
                    nec arcu dictum gravida. Fusce elementum diam purus, ut commodo neque gravida ac. Sed lacinia metus
                    augue, non commodo ex ultrices placerat. Donec volutpat rhoncus velit. Orci varius natoque penatibus
                    et magnis dis parturient montes, nascetur ridiculus mus. Praesent egestas feugiat lacus vitae
                    molestie.
                </p>
            </div>    
        </section>
        <section id="my-work" class="work">
            <h2>Work</h2>
            <div class="work1">
                <a class="main-box"href="https://github.com/j0shuaj0nes/Horizon-marketing">
                    <div>
                        <h4>Horiseon Marketing</h4>
                        <h6>Accessible HTML</h6>

                    </div>
                </a>
                <a class="small-box" id='box1' href="https://tech-blogau-7fbfbd85ee67.herokuapp.com/">
                    <div>
                        <h4>Tech Blog</h4>
                        <h6>Node/IoT</h6>
                    </div>
                </a>
                <a class="small-box" id='box2' href="https://gallivant-17c406878ae5.herokuapp.com/">
                    <div>
                        <h4>Gallivant</h4>
                        <h6>React/JavaScript/CSS</h6>
                    </div>
                </a>
                <a class="small-box" id='box3' href="https://desolate-escarpment-64746-ab097503a655.herokuapp.com/">
                    <div>
                        <h4>Note Taker</h4>
                        <h6>MERN Stack</h6>
                    </div>
                </a>
                <a class="small-box" id='box4' href="https://j0shuaj0nes.github.io/Calendar-Application-/">
                    <div>
                        <h4>Calendar App</h4>
                        <h6>Node/IoT</h6>
                    </div>
                </a>
            </div>
        </section>
        <footer id="contact-me">
            <h2>Contact Me</h2>
            <div>
                <a href='https://github.com/j0shuaj0nes' id='ghub'>
                    GitHub 
                </a>
            </div>
            <div>
                <a id='insta'>
                    Instagram
                </a>
            </div>
            <div>
                <a id='fb'>
                    FaceBook 
                </a>
            </div>
            <div>
                <a href='mailto:9joshuajones5@gmail.com' id='email'>
                    Email 
                </a>
            </div>
            <div>
                <a id='linkin'>
                    LinkedIn
                </a>
            </div>
        </footer>
    </main>
    </>
  )
}

export default App
