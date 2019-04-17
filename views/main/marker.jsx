var React = require("react");

function componentDidMount() {
            const script = document.getElementById('myScript').innerHTML;
            window.eval(script);
        }

class Marker extends React.Component {
    render() {
        let list = this.props.list;
        // console.log("marker: "+this.props.list[0].name+': '+this.props.list[0].latitude+', '+this.props.list[0].longitude);
        let jList = JSON.stringify(list);
        // console.log(jList);

        return (
            <div dangerouslySetInnerHTML={{__html: `<html>
                <script id="myScript">
                    var jList = '${jList}';
                </script>
            </html>`}} />
        );
    }
}

module.exports = Marker;