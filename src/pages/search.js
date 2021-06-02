import React, { useMemo } from 'react';
import { Index } from 'elasticlunr';
import { graphql } from 'gatsby';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Header from '../components/Header';
import ProjectCard from '../components/ProjectCard';
import { getQuery } from '../lib/query.js';

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
      <Header location={location} />
      <main>
        <Container>
          <h1>Search results for {query}</h1>
          <Row>
            {results.map(x => (
              <Col md="4"><ProjectCard project={x} key={x.slug} /></Col>
            ))}
          </Row>
        </Container>
      </main>
    </>
  );
};

export default SearchPage;

export const query = graphql`
  query {
    siteSearchIndex {
      index
    }
  }
`;