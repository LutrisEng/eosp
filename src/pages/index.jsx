// SPDX-License-Identifier: GPL-3.0+

import React from 'react';
import { graphql } from 'gatsby';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import PropTypes from 'prop-types';

import Header from '../components/Header';
import ProjectCard from '../components/ProjectCard';

const IndexPage = ({ data }) => (
  <>
    <Header />
    <main>
      <Container>
        <h1>Lutris Open Software Portal</h1>
        <h2>Featured Projects:</h2>
        <Row>
          {data.allProjectsYaml.nodes.map((x) => (
            <Col md="4"><ProjectCard project={x} key={x.slug} /></Col>
          ))}
        </Row>
      </Container>
    </main>
  </>
);

IndexPage.propTypes = {
  data: PropTypes.shape({
    allProjectsYaml: PropTypes.shape({
      nodes: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string,
        slug: PropTypes.string,
        description: PropTypes.string,
      })),
    }),
  }).isRequired,
};

export default IndexPage;

export const query = graphql`
  query {
    allProjectsYaml(filter: {featured: { eq: true }}) {
      nodes {
        name
        slug
        description
      }
    }
  }
`;
