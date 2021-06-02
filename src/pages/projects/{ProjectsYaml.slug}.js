// SPDX-License-Identifier: GPL-3.0+

import React from 'react';
import { graphql } from 'gatsby';
import Container from 'react-bootstrap/Container';

import Header from '../../components/Header';

const Project = ({ data }) => {
  return (
    <>
      <Header />
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