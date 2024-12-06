import About from "./component/About";
import Contact from "./component/Contact";
import Footer from "./component/Footer";
import Navbar from "./component/Navbar";
import Portfolio from "./component/Portfolio";
import Skills from "./component/Skills";

import WebImage1 from "./assets/image1.png" 
import WebImage2 from "./assets/image2.png" 

import { FaCss3Alt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaJsSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaRegCopyright } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
import { SiAdobephotoshop } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { SiTypescript } from "react-icons/si";



const App = () => {

  const navigationList = ["About Me", "Skills", "Portfolio", "Contact Me"];
  const icons = [
    {
      id : 1,
      icon : <FaPhoneAlt/>,
    },
    {
      id : 2,
      icon : <FaWhatsappSquare/>,
    },
    {
      id : 3,
      icon : <FaInstagramSquare/>,
    },
    {
      id : 4,
      icon :<FaLinkedin/>,
    },
    {
      id : 5,
      icon :<FaGithub/>,
    },
    {
      id : 6,
      icon :<FaRegCopyright/>,
    },
  ];
  const skillSet = [
    {
      id: 1,
      skillIcon: <FaJsSquare />,
      primary: "#F0DB4F",
      secondary: "#000000",

    },
    {
      id: 2,
      skillIcon: <SiTypescript />,
      primary: "#007acc",
      secondary: "#fafbfc",
    },
    {
      id: 3,
      skillIcon: <FaHtml5 />,
      primary: "#f06529",
      secondary: "#fafbfc",
    },
    {
      id: 4,
      skillIcon: <FaCss3Alt />,
      primary: "#2965f1",
      secondary: "#fafbfc",
    },
    {
      id: 5,
      skillIcon: <SiTailwindcss />,
      primary: "#06b6d4",
      secondary: "#fafbfc",
    },
    {
      id: 6,
      skillIcon: <FaNodeJs />,
      primary: "#3c873a",
      secondary: "#fafbfc",
    },
    {
      id: 7,
      skillIcon: <FaReact />,
      primary: "#61DBFB",
      secondary: "#fafbfc",
    },
    {
      id: 8,
      skillIcon: <SiNextdotjs />,
      primary: "#24292e",
      secondary: "#fafbfc",
    },
    {
      id: 9,
      skillIcon: <FaGithub />,
      primary: "#24292e",
      secondary: "#fafbfc",
    },
    {
      id: 10,
      skillIcon: <SiAdobephotoshop />,
      primary: "#0b2631",
      secondary: "#5cd0fa",
    },
  ];
  const portfolioCard = [
    {
      id : 1,
      imageUrl : WebImage1,
      title : "Landing Page With Tailwind",
      description : "Creating a website for a cafe using Tailwind CSS, which enables responsive design and a modern aesthetic, while speeding up the development process with ready-to-use utility classes.",
    },
    {
      id : 2,
      imageUrl : WebImage2,
      title : "React : Movie Streaming Website With API Integration",
      description : "Creating a website for movie streaming with API integration, which allows users to access and watch a variety of films directly, as well as automatically update the movie list from external sources.",
    },
  ];

  return (
    <div className="font-[nunito] bg-[#48ceff] text-white">
      <Navbar navList={navigationList} icons={icons}/>
      <div className="mx-40">
      <About/>
      <Skills skillSet={skillSet}/>
      <Portfolio portfolioCard={portfolioCard}/>
      <Contact/>
      </div>
      <Footer icons={icons}/>
    </div>
  )
}

export default App;