import React from 'react';
import {
        BrowserRouter as Router,
        Switch,
        Route,
        Link
} from "react-router-dom";
import Login from "./Login";



const AboutPage = () => {

        return (
                <>
                        <h1>AboutPage</h1>
                       
                </>
        )
}

function Home() {
        return (
          <div>
            <h2>Home</h2>
          </div>
        );
      }
      
      function About() {
        return (
          <div>
            <h2>About</h2>
          </div>
        );
      }
      
      function Dashboard() {
        return (
          <div>
            <h2>Dashboard</h2>
          </div>
        );
      }
export default AboutPage

