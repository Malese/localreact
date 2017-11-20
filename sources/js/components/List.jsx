'use strict';

import React from 'react';
import PropTypes from 'prop-types';

export default class List extends React.Component {
  render () {
    return (
      <div>
        <h1>{this.props.data.school}</h1>
        <ul>
          {
            this.props.data.week.map((day, i) => {
              return <li key={i}>{day}</li>;
            })
          }
        </ul>
      </div>
    );
  }
}

List.propTypes = {
  data: PropTypes.shape({
    school: PropTypes.string.isRequired,
    week: PropTypes.array.isRequired
  })
};

// module.exports = List;
