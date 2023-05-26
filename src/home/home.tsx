import React from "react";
import { FaSass, FaHtml5, FaCss3Alt, FaReact } from "react-icons/fa";
import "./Home.scss";
import me from "../assets/img/me.jpg";
import Ball from "../compoent/ball";
import { motion } from "framer-motion";




// interface iconItem {
//   name: string,
//   color: string,
// }

// const icons: iconItem[] = [
//   {
//     name: 'FaSass',
//     color: 'blueviolet',
//   },
//   {
//     name: 'FaHtml5',
//     color: '#FFA500',
//   },
//   {
//     name: 'FaCss3Alt',
//     color: 'yellow',
//   },
//   {
//     name: 'FaReact',
//     color: 'blue',
//   }
// ];

// const iconItems = () => {
//   return (
//     <>
//       {icons.map((icon) => {
//         const Icon = {
//           FaSass,
//           FaHtml5,
//           FaCss3Alt,
//           FaReact,
//         }[icon.name];
//         return Icon?<Icon key={icon.name} color={icon.color}/> :null;
//       })}
//     </>
//   );
// };
const MyName = () => {
  return (
    <React.Fragment>
      <h2>
        {" "}
        I’m A Front-end <br />
        Developer.
      </h2>
      <p>Hi, I’m Luong Thanh Thang. A Front-end React Deverloper</p>
    </React.Fragment>
  );
};
const Icon = () => {
  return (
    <React.Fragment>
      <FaSass className="iconItems" style={{ color: "blueviolet" }} />
      <FaHtml5 className="iconItems" style={{ color: "#FFA500" }} />
      <FaCss3Alt className="iconItems" style={{ color: "yellow" }} />
      <FaReact className="iconItems" style={{ color: "blue" }} />
    </React.Fragment>
  );
};
const Home = () => {
  return (
    <div className="hero-img">
      <div className="hero-img">
        <motion.div> 
        <img src={me} alt="me" />
        <Ball/>
        </motion.div>
       
      </div>
      <div className="hero-right">
        <MyName />
        <div className="icon-flex">
          <p>TECK STOCK |</p>
          <Icon/>
          <Ball/>
          
        </div>
        
      </div>
    </div>
  );
};

export default Home;
