'use strict';

import React from 'react';
import Axios from 'axios';
// import PropTypes from 'prop-types';

import List from './List.jsx';

export default class ListHandler extends React.Component {
  constructor () {
    super();
    this.state = {
      data: null
    };
  }

  componentDidMount () {
    Axios.get('http://meny.dinskolmat.se/api/openmeal/v2/meals.json?distributorID=6351592588574720')
      .catch(err => {
        console.log(err);
      })
      // .then(res => res.json())
      .then(data => this.setState({ data }));
  }

  mealsParser (data) {
    console.log(data);
  }

  render () {
    const { data } = this.state;

    return (
      <div>
        <h1>Laröd skola</h1>
        {
          data ? (
            <List data={data} parser={this.mealsParser} />
          ) : (
            <p>Sorry, no data yet!</p>
          )
        }
      </div>
    );
  }
}

// ListHandler.propTypes = {
//   endpoint: PropTypes.string.isRequired,
//   parser: PropTypes.function.isRequired
//
//   // data: PropTypes.shape({
//   //   school: PropTypes.string.isRequired,
//   //   week: PropTypes.array.isRequired
//   // })
// };
