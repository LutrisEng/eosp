// SPDX-License-Identifier: GPL-3.0+

import React, { useMemo } from 'react';
import { Index } from 'elasticlunr';
import { graphql } from 'gatsby';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import PropTypes from 'prop-types';

import Header from '../components/Header';
import ProjectCard from '../components/ProjectCard';
import getQuery from '../lib/query';

const SearchPage = ({ data, location }) => {
  const indexSource = data.siteSearchIndex.index;
  const index = useMemo(() => Index.load(indexSource), [indexSource]);
  const query = getQuery(location);
  const results = useMemo(() => (
    index
      .search(query, {})
      .map(({ ref }) => index.documentStore.getDoc(ref))
  ), [query, index]);

  return (
    <>
      <Header title={`Search for ${query}`} location={location} />
      <main>
        <Container>
          <h1>
            Search results for
            {query}
          </h1>
          <Row>
            {results.map((x) => (
              <Col md="4"><ProjectCard project={x} key={x.slug} /></Col>
            ))}
          </Row>
        </Container>
      </main>
    </>
  );
};

SearchPage.propTypes = {
  data: PropTypes.shape({
    siteSearchIndex: PropTypes.shape({
      // eslint-disable-next-line react/forbid-prop-types
      index: PropTypes.object,
    }),
  }).isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  location: PropTypes.object.isRequired,
};

export default SearchPage;

export const query = graphql`
  query {
    siteSearchIndex {
      index
    }
  }
`;
