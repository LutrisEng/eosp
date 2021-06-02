// SPDX-License-Identifier: GPL-3.0+

import React from 'react';
import { graphql } from 'gatsby';
import Container from 'react-bootstrap/Container';
import PropTypes from 'prop-types';

import Header from '../../components/Header';

const Project = ({ data }) => (
  <>
    <Header title={data.projectsYaml.name} />
    <main>
      <Container>
        <h1>{data.projectsYaml.name}</h1>
        {data.projectsYaml.description}
        <ul>
          {data.projectsYaml.links.map(({ name, href }) => (
            <li key={name}><a href={href}>{name}</a></li>
          ))}
        </ul>
      </Container>
    </main>
  </>
);

Project.propTypes = {
  data: PropTypes.shape({
    projectsYaml: PropTypes.shape({
      name: PropTypes.string,
      slug: PropTypes.string,
      description: PropTypes.string,
      links: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string,
        href: PropTypes.string,
      })),
    }),
  }).isRequired,
};

export default Project;

export const query = graphql`
  query($slug: String) {
    projectsYaml(slug: { eq: $slug }) {
      name
      slug
      description
      links {
        name
        href
      }
    }
  }
`;
