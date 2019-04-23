var React = require("react");

class AllSpacesNavButtons extends React.Component {
  render() {
    let space = this.props.space;
    return (
        <div className="spaceNavButtons">
            <form className="formButtons" action={"/spaces/"+space.id} method="get">
                <button className="detailButton">View details</button>
            </form>
            <form className="formButtons" action={"/"} method="get">
                <button className="viewMapButton">View in map</button>
            </form>
        </div>
    );
  }
}

module.exports = AllSpacesNavButtons;