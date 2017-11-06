'use strict';

var React = require('react');
var ReactDOM = require('react-dom');
var App = require('./components/App.jsx');

Raven.config('https://a04fec6b6a794786bcdfbc90b52a43b9@sentry.io/240834').install();

ReactDOM.render(<App />, document.getElementById('root'));
