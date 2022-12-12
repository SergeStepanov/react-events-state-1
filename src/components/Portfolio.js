import PropTypes from 'prop-types';
import React, { Component } from 'react';
import data from '../data';
import Toolbar from './Toolbar';
import ProjectList from '../components/ProjectList';

export class Portfolio extends Component {
  static propTypes = {
    selected: PropTypes.string,
    data: PropTypes.array,
  };

  constructor(props) {
    super(props);
    this.filters = ['All', 'Websites', 'Flayers', 'Business Cards'];
    this.state = { selected: this.filters[0], data: data };
  }

  onSelectFilter = (category) => {
    if (this.state.selected === category) return;

    this.setState({
      selected: category,
      data:
        category === 'All'
          ? data
          : data.filter((item) => item.category === category),
    });
  };

  render() {
    return (
      <>
        <Toolbar
          filters={this.filters}
          selected={this.state.selected}
          onSelectFilter={this.onSelectFilter}
        />
        <ProjectList project={this.state.data} />
      </>
    );
  }
}

export default Portfolio;
