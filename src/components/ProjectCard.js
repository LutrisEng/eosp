import React from 'react';
import { Link } from 'gatsby';
import Card from 'react-bootstrap/Card';

const SearchResult = ({ project }) => {
  return (
    <Card>
      <Card.Body>
        <Card.Title>{project.name}</Card.Title>
        <Card.Text>{project.description}</Card.Text>
        <Link class="btn btn-primary" to={`/projects/${project.slug}`}>Details</Link>
      </Card.Body>
    </Card>
  );
};

export default SearchResult;