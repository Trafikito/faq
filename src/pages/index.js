import React from 'react';
import {Link, graphql} from 'gatsby';
import Layout from '../components/Layout';
import SEO from '../components/seo';
import Typography from '@material-ui/core/Typography';
import Footer from '../components/Footer';
import layoutCss from '../components/Layout/style.module.scss';

const removeMd = require('remove-markdown');

class BlogIndex extends React.Component {
  render() {
    const {data} = this.props;
    const siteTitle = data.site.siteMetadata.title;
    const posts = data.allMarkdownRemark.edges;

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Help & Support"
          keywords={[`knowledge`, `help`, `support`, `trafikito`, `monitoring`]}
        />

        <div className={layoutCss.content_holder}>

          {posts.map(({node}) => {
            const url = `/${node.frontmatter.uri}.html`;
            const title = node.frontmatter.title || url;
            return (
              <div style={{margin: 6}} key={node.frontmatter.uri}>
                <Typography variant={'h5'}>
                  <Link style={{boxShadow: `none`}} to={url}>
                    {title}
                  </Link>
                </Typography>
                <Typography variant={'body2'} component={'div'}>
                  <p dangerouslySetInnerHTML={{__html: removeMd(node.excerpt)}}/>
                </Typography>
              </div>
            );
          })}
        </div>
        <Footer/>
      </Layout>
    );
  }
}

export default BlogIndex;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___sort], order: DESC }) {
      edges {
        node {
          excerpt(format: PLAIN)
          frontmatter {
            title
            uri
            tags
          }
        }
      }
    }
  }
`;
