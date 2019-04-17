var React = require("react");

class Mosques extends React.Component {
  render() {
    let list = this.props.list;
    let mosqueList = list.map(mosque => {
        return (
            <li><a href={"/mosques/"+mosque.id}>{mosque.name}</a></li>
        )
    });

    return (
      <html>
        <head>
            <link rel="stylesheet" type="text/css" href="style.css" />
        </head>
        <body>
            <h1>List of Mosques in Singapore</h1>
            <div id="mosqueList">
                <ul>
                    {mosqueList}
                </ul>
            </div>
        </body>
      </html>
    );
  }
}

module.exports = Mosques;