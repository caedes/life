var Timeline = React.createClass({
  getInitialState: function() {
    return {
      exploits: []
    };
  },
  componentDidMount: function () {
    $.getJSON(this.props.url, function(data){
      this.setState({exploits: data});
    }.bind(this));
  },
  render: function() {
    return (
      <ExploitList exploits={this.state.exploits} />
    );
  }
});
