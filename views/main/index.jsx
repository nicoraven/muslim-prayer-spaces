var React = require("react");

class Home extends React.Component {
  render() {
    // console.log(this.props.types);
    return (
      <html>
        <head>
            <link rel="stylesheet" type="text/css" href="style.css" />
            <script type="text/javascript" src="mapScript.js"></script>
        </head>
        <body>
            <h3>My Google Maps Demo</h3>
            <div id="map"></div>
            <script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAnBOYJBzWadraaw8RhlZjNNtF11K2kBl4&callback=initMap">
            </script>
        </body>
      </html>
    );
  }
}

module.exports = Home;