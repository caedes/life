var Timeline = React.createClass({
  getInitialState: function() {
    return {
      data: []
    };
  },
  componentDidMount: function () {
    // AJAX on Life API
  },
  render: function() {
    return (
      <ExploitList data={this.state.data} />
    );
  }
});
