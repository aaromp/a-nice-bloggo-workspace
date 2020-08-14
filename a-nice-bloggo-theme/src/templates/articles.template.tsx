import React from "react";
import styled from "@emotion/styled";

import Section from "@components/Section";
import Layout from "@components/Layout";
import Paginator from "@components/Navigation/Navigation.Paginator";

import ArticlesHero from "../sections/articles/Articles.Hero";
import ArticlesList from "../sections/articles/Articles.List";

import { Template} from "@types";
import { MetaData } from "@components/meta";
import mediaqueries from "@styles/media";


/* template for a page featuring a list of public posts */
const PublicPostsPage: Template = ({ location, pageContext }) => {
  const articles = pageContext.group;

  return (
    <Layout>
      <MetaData location={location} />
      <ArticlesHero />
      <Section narrow>
        <ArticlesList articles={articles} />
        <PublicPostsPaginator show={pageContext.pageCount > 1}>
          <Paginator {...pageContext} />
        </PublicPostsPaginator>
      </Section>
    </Layout>
  );
};

export default PublicPostsPage;

const PublicPostsPaginator = styled.div<{ show: boolean }>`
  ${(p) => p.show && `margin-top: 95px;`}

  ${mediaqueries.phablet`
      margin-top: 0;
      display: flex;
      justify-content: center;
    `};
`;
