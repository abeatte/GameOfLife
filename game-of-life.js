/**
 * Created by art.beatte on 12/11/15.
 */
var GameOfLife = React.createClass({
  render: function() {
    return (
        <div className="gameOfLife">
          Game of Life
        </div>
    );
  }
});

var OtherGame = React.createClass({
  render: function() {
    return (
        <div className="otherGame">
          {marked(this.props.gameName.toString())}
          <GameOfLife />
        </div>
    );
  }
});
ReactDOM.render(
    <GameOfLife />,
    document.getElementById('content')
)