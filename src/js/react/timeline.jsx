var Timeline = React.createClass({
  getInitialState: function() {
    return {
      data: []
    };
  },
  componentDidMount: function () {
    $.getJSON(this.props.url, function(data){
      this.setState({data: data});
    }.bind(this));
  },
  render: function() {
    return (
      <ExploitList data={this.state.data} />
    );
  }
});
