var React = require("react");

var Marker = require('./marker');
var Header = require('./header');

class Home extends React.Component {
  render() {
    // console.log(this.props.list[0].name+': '+this.props.list[0].latitude+', '+this.props.list[0].longitude);
    let list = this.props.list;

    return (
      <html>
        <head>
            <link rel="stylesheet" type="text/css" href="style.css" />
            <script type="text/javascript" src="/mapScript.js" />
            <script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDRGDK5TfXG2N0IM2eejYs61iXm6BKHbMw&libraries=places,geometry&callback=initMap" />
            <title>SG Prayer Space Finder</title>
        </head>
        <body>
        <div className="pageWrapper">
            <Header/>
            <div className="mapContainer">
                <div id="map"></div>
                <input type="text" id="userInput" name="mapsearch" placeholder="Enter your current location here" />
            </div>
        </div>
        <Marker list={list} />
        </body>
      </html>
    );
  }
}

module.exports = Home;