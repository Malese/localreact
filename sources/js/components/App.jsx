'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import List from './List.jsx';

class App extends React.Component {
  render () {
    const data = {
      school: 'Laröd skola',
      week: [
        'potatis',
        'soppa',
        this.props.testa
      ]
    };

    return <List data={data} />;
  }
}

App.propTypes = {
  testa: PropTypes.string.isRequired
};

module.exports = App;
