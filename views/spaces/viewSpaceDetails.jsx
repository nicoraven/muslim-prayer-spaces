var React = require("react");
var NavButtons = require("./spaceNavButtons");

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
}

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
                        <h1 className="spaceName">Masjid {space.name}</h1>
                        <div className="spaceDetails">
                            <p>Address: {space.address}</p>
                            <p>Telephone: {space.telephone}</p>
                            <p>Email: {space.email}</p>
                            <p>Website: <a href={space.website}>{space.website}</a></p>
                        </div>
                        <NavButtons/>
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
                        <h1 className="spaceName">{space.name}</h1>
                        <div className="spaceDetails">
                            <p>Address: {space.address}</p>
                            <p>Directions: {space.directions}</p>
                            <p>Details: {space.details}</p>
                        </div>
                        <EditButton id={space.id}/>
                        <NavButtons/>
                    </body>
                </html>
            );
        };

    }
}

module.exports = ViewSpaceDetails;