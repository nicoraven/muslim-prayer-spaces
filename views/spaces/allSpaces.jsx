var React = require("react");
var AllSpacesNavButtons = require("./allSpacesNavButtons");

var Header = require('../main/header');

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
                    <td><form action={"/spaces/"+space.id} method="get">
                <button className="detailButton">View details</button>
            </form></td>
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
            <title>SG Prayer Spaces</title>
            <script type="text/javascript" src="/tbd.js" />
        </head>
        <body>
            <Header/>
            <div class="pageWrapper">
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
            </div>
        </body>
      </html>
    );
  }
}

module.exports = Spaces;