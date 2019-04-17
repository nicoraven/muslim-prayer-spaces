var React = require("react");

var Marker = require('./marker');

class Home extends React.Component {
  render() {
    // console.log(this.props.list[0].name+': '+this.props.list[0].latitude+', '+this.props.list[0].longitude);
    let list = this.props.list;

    return (
      <html>
        <head>
            <link rel="stylesheet" type="text/css" href="style.css" />
            <script type="text/javascript" src="mapScript.js" />
            <script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDRGDK5TfXG2N0IM2eejYs61iXm6BKHbMw&callback=initMap" />
        </head>
        <body>
            <h1>Mosque Finder</h1>
            <Marker list={list} />
            <div id="map"></div>
        </body>
      </html>
    );
  }
}

module.exports = Home;