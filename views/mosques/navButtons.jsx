var React = require("react");

class NavButtons extends React.Component {
  render() {
    return (
        <div className="navButtons">
            <form className="formButtons" action="/mosques" method="get">
                <button className="backButtons">Back to mosques</button>
            </form>
            <form className="formButtons" action="/" method="get">
                <button className="backButtons">Back to map</button>
            </form>
        </div>
    );
  }
}

module.exports = NavButtons;