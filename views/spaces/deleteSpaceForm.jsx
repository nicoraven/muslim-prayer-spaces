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

class DeleteSpaceForm  extends React.Component {
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
                    <h1 className="spaceName">Delete {space.name}'s musollah?</h1>
                    <div className="editForm">
                        <form className="formButtons" action={"/spaces/"+id+"?_method=DELETE"} method="POST">
                            <p>Please provide the reason for deletion:</p>
                            <textarea rows="1" cols="20" name="reason" />
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

module.exports = DeleteSpaceForm;