'use strict';

import React from 'react';
import PropTypes from 'prop-types';

export default class List extends React.Component {
  render () {
    const result = this.props.parser(this.props.data);

    return (
      <ul>
        {
          result.map((item, i) => {
            return <li key={i}>{item}</li>;
          })
        }
      </ul>
    );
  }
}

List.propTypes = {
  data: PropTypes.object.isRequired,
  parser: PropTypes.func.isRequired
};
