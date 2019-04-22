var React = require("react");
var AllSpacesNavButtons = require("./allSpacesNavButtons");

class SpacesList extends React.Component {
    render() {
        let list = this.props.spacesList;
        let row = list.map( space => {
            return (
                <tr>
                    <td>{space.id}</td>
                    <td>{space.name}</td>
                    <td>{space.address}</td>
                    <td>{space.type}</td>
                    <td><AllSpacesNavButtons space={space}/></td>
                </tr>
            )
        });

        return (
            <tbody>
                {row}
            </tbody>
        );
    }
}

class Spaces extends React.Component {
  render() {
    let list = this.props.list;

    return (
      <html>
        <head>
            <link rel="stylesheet" type="text/css" href="/style.css" />
        </head>
        <body>
            <h1>List of prayer spaces in Singapore</h1>
            <div id="tableWrapper">
                <table className="listTable">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Address</th>
                            <th>Type</th>
                            <th>View</th>
                        </tr>
                    </thead>
                    <SpacesList spacesList={list} />
                </table>
            </div>
        </body>
      </html>
    );
  }
}

module.exports = Spaces;