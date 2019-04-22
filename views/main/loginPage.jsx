var React = require("react");

class LoginPage extends React.Component {
    render() {
        return (
            <html>
                <head>
                    <link rel="stylesheet" type="text/css" href="/style.css" />
                </head>
                <body>
                    <h1>Login</h1>
                    <div className="loginForm">
                        <form className="formButtons" action="/spaces" method="post">
                            <button className="backButtons">Back to Prayer Spaces</button>
                        </form>
                    </div>
                </body>
            </html>
        )
    }
}

module.exports = LoginPage;