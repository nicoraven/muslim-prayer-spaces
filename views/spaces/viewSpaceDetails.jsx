var React = require("react");
var NavButtons = require("./spaceNavButtons");

var Header = require('../main/header');

class EditButton extends React.Component {
    render() {
        let id = this.props.id;
        return (
            <div className="editButton">
                <form className="formButtons" action={"/spaces/"+id+"/edit"} method="get">
                    <button className="backButtons">Edit</button>
                </form>
            </div>
        )
    }
};

class DeleteButton extends React.Component {
    render() {
        let id = this.props.id;
        return (
            <div className="editButton">
                <form className="formButtons" action={"/spaces/"+id+"/delete"} method="get">
                    <button className="backButtons">Delete</button>
                </form>
            </div>
        )
    }
};

class ViewSpaceDetails extends React.Component {
    render() {
        let space = this.props.space[0];
        // console.log(space.name);

        if (space.type === "mosque") {
            return (
                <html>
                    <head>
                        <link rel="stylesheet" type="text/css" href="/style.css" />
                    </head>
                    <body>
                        <Header/>
                        <div className="pageWrapper">
                            <h1 className="spaceName">Masjid {space.name}</h1>
                            <div className="spaceDetails">
                                <div className="infoBar">
                                    <p>Address: {space.address}</p>
                                    <p>Telephone: {space.telephone}</p>
                                    <p>Email: {space.email}</p>
                                    <p>Website: <a href={space.website}>{space.website}</a></p>
                                </div>
                                <div className="miniMap">
                                    Minimap of space's location
                                </div>
                            </div>
                            <NavButtons/>
                        </div>

                    </body>
                </html>
            );
        }
        else {
            return (
                <html>
                    <head>
                        <link rel="stylesheet" type="text/css" href="/style.css" />
                    </head>
                    <body>
                    <Header/>
                    <div className="pageWrapper">
                        <h1 className="spaceName">{space.name}</h1>
                        <div className="spaceDetails">
                                <div className="infoBar">
                                    <p>Address: {space.address}</p>
                                    <p>Directions: {space.directions}</p>
                                    <p>Details: {space.details}</p>
                                </div>
                                <div className="miniMap">
                                    Minimap of space's location
                                </div>
                        </div>
                        <EditButton id={space.id}/>
                        <DeleteButton id={space.id}/>
                        <NavButtons/>
                    </div>

                    </body>
                </html>
            );
        };

    }
}

module.exports = ViewSpaceDetails;