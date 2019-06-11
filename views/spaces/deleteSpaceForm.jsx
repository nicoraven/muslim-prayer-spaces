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

class DeleteSpaceForm  extends React.Component {
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
                    <h1 className="spaceName">Delete {space.name}'s musollah?</h1>
                    <form className="deleteForm" action={"/spaces/"+id+"?_method=DELETE"} method="POST">
                        <p>Please provide the reason for deletion:</p>
                        <textarea rows="1" cols="20" name="reason" />
                        <input type="hidden" name="id" value={space.id}/>
                        <input type="hidden" name="modifiedBy" value="user"/>
                        <div className="formButtons" >
                            <input type="submit" className="backButtons" value="Submit"/>
                            <BackButton id={id}/>
                        </div>
                    </form>
                </div>
                </body>
            </html>
        );
    }
}

module.exports = DeleteSpaceForm;