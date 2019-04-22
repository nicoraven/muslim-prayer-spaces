var React = require("react");

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
                </head>
                <body>
                    <h1 className="spaceName">Edit {space.name}'s Musollah</h1>
                    <div className="editForm">
                        <form className="formButtons" action={"/spaces/"+id+"?_method=PUT"} method="POST">
                            <p>Name: </p>
                            <input type="text" name="name" className="inputBox" defaultValue={space.name}/>
                            <p>Address: </p>
                            <textarea rows="1" cols="20" name="address" defaultValue={space.address}/>
                            <p>Directions: </p>
                            <textarea rows="1" cols="20" name="directions" defaultValue={space.directions}/>
                            <p>Details: </p>
                            <textarea rows="1" cols="20" name="details" defaultValue={space.details}/>
                            <input type="hidden" name="id" value={space.id}/>
                            <input type="hidden" name="modifiedBy" value="user"/>
                            <input type="submit" className="submitButton" value="Submit"/>
                        </form>
                    </div>
                    <BackButton id={id}/>
                </body>
            </html>
        );
    }
}

module.exports = EditSpaceForm;