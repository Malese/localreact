'use strict';

var React = require('react');

const App = React.createClass({
  render () {
    return (
      <div style={{display: 'flex'}}>
        <h1>Yolox {process.env.NODE_ENV}</h1>
      </div>
    );
  }
});

module.exports = App;
