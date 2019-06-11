var React = require("react");

class Header extends React.Component {

    render() {

        return (
            <div className="header">
                <a href="/"><h1 className="siteTitle">SG Prayer Space Finder</h1></a>
                <ul className="right">
                    <li><a href="/spaces"><h3>Prayer Spaces List</h3></a></li>
                    <li id="newMusollah"><a ><h3>New Musollah</h3></a></li>
                    <li id="loginButton"><a ><h3>Login</h3></a></li>
                </ul>
            </div>
        );
    }
}

module.exports = Header;