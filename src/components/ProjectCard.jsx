// SPDX-License-Identifier: GPL-3.0+

import React from 'react';
import { Link } from 'gatsby';
import Card from 'react-bootstrap/Card';
import PropTypes from 'prop-types';

const SearchResult = ({ project }) => (
  <Card>
    <Card.Body>
      <Card.Title>{project.name}</Card.Title>
      <Card.Text>{project.description}</Card.Text>
      <Link class="btn btn-primary" to={`/projects/${project.slug}`}>Details</Link>
    </Card.Body>
  </Card>
);

SearchResult.propTypes = {
  project: PropTypes.shape({
    name: PropTypes.string,
    description: PropTypes.string,
    slug: PropTypes.string,
  }).isRequired,
};

export default SearchResult;
