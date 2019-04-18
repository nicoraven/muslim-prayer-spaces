var React = require("react");
var NavButtons = require("./navButtons");

class ViewMosque extends React.Component {
  render() {
    let mosque = this.props.mosque[0];
    // console.log(mosque.name);

    return (
      <html>
        <head>
            <link rel="stylesheet" type="text/css" href="/style.css" />
        </head>
        <body>
            <h1 className="mosqueName">{mosque.name}</h1>
            <div className="mosqueDetails">
                <p>Address: {mosque.address}</p>
                <p>Telephone: {mosque.telephone}</p>
                <p>Email: {mosque.email}</p>
                <p>Website: {mosque.website}</p>
            </div>
            <NavButtons/>
        </body>
      </html>
    );
  }
}

module.exports = ViewMosque;