import React from 'react';
import './Content.css';
const Content = () => {

    return(
        <div className="main">
            <div className="section text-center">

              <p id="txtAlign">To Perform a task on this website using voice/speech you have to say these words one at a time slowly and clearly with proper pronunciation because ibm watson speech sometimes do not recognize the words properly</p>
              <ul>
                <li>Name</li>
                <li>Bottom</li>
                <li>Up</li>
                <li>Down</li>
                <li>Facebook</li>
                <li>Instagram</li>
                <li>Twitter</li>
                <li>Github</li>
                <li>Creative</li>
                <li>Blog</li>
                <li>License</li>
              </ul>
              <p> * From above listed words 'name' will change the speecho logo to my name and 'down' will slowly scroll down to the website in the step of 50 pixels  </p>
              <p>P.S Please use a word single time with clear pronunciation</p>
            </div>
        </div>
        );
}


export default Content;