import React from 'react';
import './HeroImage.css';

var recognizeMic = require('watson-speech/speech-to-text/recognize-microphone');
class HeroImage extends React.Component {

    constructor() {
    super()
    this.state = {}
  }
  onListenClick() {

    fetch('https://speecho.mybluemix.net/api/speech-to-text/token')

      .then(function(response) {
          return response.text();
      }).then((token) => {
        //console.log('token is', token)
        var stream = recognizeMic({
            token: token,
            objectMode: false, // send objects instead of text
            extractResults: false, // convert {results: [{alternatives:[...]}], result_index: 0} to {alternatives: [...], index: 0}
            format: false // optional - performs basic formatting on the results such as capitals an periods

        });
        stream.setEncoding('utf8');
        stream.on('data', (data) => {
            this.setState({
            text: data
            
          })
          console.log(this.state.text);
          var txt = JSON.stringify(this.state.text);
          console.log(txt);
            if (txt.includes("Facebook") || txt.includes("facebook")){
                //console.log("Success");
                window.open("https://www.facebook.com/CreativeTim") 
            } else if (txt.includes("Twitter") || txt.includes("facebook")){
                window.open("https://twitter.com/CreativeTim");
            } else if (txt.includes("Github") || txt.includes("get hub")){
                window.open("https://www.github.com/CreativeTimOfficial/paper-kit");
            } else if (txt.includes("Instagram") || txt.includes("instagram")){
                window.open("https://www.instagram.com/CreativeTimOfficial");
            
            } 
            if (txt.includes("Down") || txt.includes("down")){
                {this.down()
            }

            } 
            else if (txt.includes("Up") || txt.includes("up")){
                {this.up()}
            }
            else if (txt.includes("Bottom") || txt.includes("bottom")){
                {this.bottom()
            }

            } else if (txt.includes("Name") || txt.includes("name")){
                document.querySelector('#name').innerHTML = "Waqar Ahmed"
            } else if (txt.includes("Creative") || txt.includes("creative")){
                window.open("https://www.creative-tim.com/")
            } else if (txt.includes("Blog") || txt.includes("blog")){
                window.open("https://blog.creative-tim.com/")
            } else if (txt.includes("License") || txt.includes("license")){
                window.open("https://www.creative-tim.com/license")
            }
        });
        stream.on('error', function(err) {
            console.log(err);
        });
        //document.querySelector('#stop').onclick = stream.stop.bind(stream);
      }).catch(function(error) {
          console.log(error);
      });
  }

down() {
    var body = document.body; // For Safari
    var html = document.documentElement; // Chrome, Firefox, IE and Opera places the overflow at the html level, unless else is specified. Therefore, we use the documentElement property for these browsers
    
    body.scrollTop += 50;
    html.scrollTop += 50;
}
bottom() {
    var body = document.body; // For Safari
    var html = document.documentElement; // Chrome, Firefox, IE and Opera places the overflow at the html level, unless else is specified. Therefore, we use the documentElement property for these browsers
    
    body.scrollTop += 1000;
    html.scrollTop += 1000;
}
up() {
    var body = document.body; // For Safari
    var html = document.documentElement; // Chrome, Firefox, IE and Opera places the overflow at the html level, unless else is specified. Therefore, we use the documentElement property for these browsers
    body.scrollTop -= 1000;
    html.scrollTop -= 1000;
}

    render(){
    return(
    <div className="wrapper">
        <div className="page-header section-dark background-image">
            <div className="filter"></div>
            <div className="content-center">
                <div className="container">
                    <div className="title-brand">
                        <h1 className="presentation-title">{this.state.text}</h1>
                        <div className="fog-low">
                            <img src="https://cdn.rawgit.com/creativetimofficial/paper-kit/bootstrap4-development/assets/img/fog-low.png" alt=""/>
                        </div>
                        <div className="fog-low right">
                            <img src="https://cdn.rawgit.com/creativetimofficial/paper-kit/bootstrap4-development/assets/img/fog-low.png" alt="" />
                        </div>
                    </div>

                    <h2 className="presentation-subtitle text-center">Say Bottom or Scroll down to check the voice list</h2>
                </div>
            </div>
            <div className="moving-clouds" styles="background-image: url('https://cdn.rawgit.com/creativetimofficial/paper-kit/bootstrap4-development/assets/img/clouds.png'); " />
            </div>
            {this.onListenClick()}
        </div>
        );
}

}
export default HeroImage;