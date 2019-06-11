var React = require("react");

var Header = require('../main/header');

class BackButton extends React.Component {
    render() {
        let id = this.props.id;
        return (
                <form className="formButtons" action={"/spaces/"+id} method="get">
                    <button className="backButtons">Cancel</button>
                </form>
        )
    }
}

class EditSpaceForm  extends React.Component {
    render() {
        let space = this.props.space[0];
        // console.log(space);
        let id = space.id;
        return (
            <html>
                <head>
                    <link rel="stylesheet" type="text/css" href="/style.css" />
                    <script type="text/javascript" src="/tbd.js" />
                </head>
                <body>
                <Header/>
                <div className="pageWrapper">
                    <h1 className="spaceName">Edit {space.name}'s Musollah</h1>
                    <div className="editForm">
                        <form action={"/spaces/"+id+"?_method=PUT"} method="POST">
                            <div className="inputContainer">
                                <p>Name: </p>
                                <textarea type="text" name="name" className="inputBox" defaultValue={space.name}/>
                            </div>
                            <div className="inputContainer">
                                <p>Address: </p>
                                <textarea rows="1" cols="20" name="address" defaultValue={space.address}/>
                            </div>
                            <div className="inputContainer">
                                <p>Directions: </p>
                                <textarea rows="1" cols="20" name="directions" defaultValue={space.directions}/>
                            </div>
                            <div className="inputContainer">
                                <p>Details: </p>
                                <textarea rows="1" cols="20" name="details" defaultValue={space.details}/>
                            </div>
                            <input type="hidden" name="id" value={space.id}/>
                            <input type="hidden" name="modifiedBy" value="user"/>
                            <div className="formButtons" >
                                <input type="submit" className="backButtons" value="Submit"/>
                                <BackButton id={id}/>
                            </div>
                        </form>
                    </div>
                </div>
                </body>
            </html>
        );
    }
}

module.exports = EditSpaceForm;