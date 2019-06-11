var React = require("react");
var NavButtons = require("./spaceNavButtons");

var Header = require('../main/header');
var Marker = require('../main/marker');

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
        console.log(space);
        // console.log(space.name);

        if (space.type === "mosque") {
            return (
                <html>
                    <head>
                        <link rel="stylesheet" type="text/css" href="/style.css" />
                        <script type="text/javascript" src="/tbd.js" />
                        <script type="text/javascript" src="/miniMapScript.js" />
                        <script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDRGDK5TfXG2N0IM2eejYs61iXm6BKHbMw&libraries=places,geometry&callback=initMap" />
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
                                <div id="miniMap" className="miniMap">
                                </div>
                            </div>
                            <NavButtons/>
                        </div>
                        <Marker list={space} />
                    </body>
                </html>
            );
        }
        else {
            return (
                <html>
                    <head>
                        <link rel="stylesheet" type="text/css" href="/style.css" />
                        <script type="text/javascript" src="/miniMapScript.js" />
                        <script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDRGDK5TfXG2N0IM2eejYs61iXm6BKHbMw&libraries=places,geometry&callback=initMap" />
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
                                    <div className="spaceEditButtons">
                            <EditButton id={space.id}/>
                            <DeleteButton id={space.id}/>
                        </div>
                                </div>
                                <div id="miniMap" className="miniMap">
                                </div>
                        </div>
                        <NavButtons/>
                    </div>
                    <Marker list={space} />
                    </body>
                </html>
            );
        };

    }
}

module.exports = ViewSpaceDetails;