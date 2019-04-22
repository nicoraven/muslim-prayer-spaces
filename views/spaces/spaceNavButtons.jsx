var React = require("react");

class SpaceNavButtons extends React.Component {
  render() {
    return (
        <div className="spaceNavButtons">
            <form className="formButtons" action="/spaces" method="get">
                <button className="backButtons">Back to Prayer Spaces</button>
            </form>
            <form className="formButtons" action="/" method="get">
                <button className="backButtons">Back to map</button>
            </form>
        </div>
    );
  }
}

module.exports = SpaceNavButtons;