var React = require('react');
var Timeline = require('../../lib/react/timeline');

React.renderComponent(
  Timeline({url: 'http://life-server.herokuapp.com/api/v1/exploits.json'}),
  document.getElementById('timeline')
);
