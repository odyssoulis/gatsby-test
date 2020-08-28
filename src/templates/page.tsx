import React from 'react';
import {graphql} from 'gatsby';
import {getPage} from './__generated__/getPage';
import {sectionType} from '../../domain/sections';
import CTA from '../components/Cta';

export const query = graphql`
  query getPage (
    $slug: String!,
    $ctaIds: [String],
    $testimonialIds: [String]
  ) {
    page: cosmicjsPages(slug: {eq: $slug}) {
      slug
      metadata {
        sections {
          _id
        }
      }
    }
    ctas: allCosmicjsCtas(filter: {id: {in: $ctaIds}}) {
      nodes {
        id
        slug
        type_slug
        metadata {
          color
          title
          subtitle
          cta_text
          goto
        }
      }
    }
    testimonials: allCosmicjsTestimonials(filter: {id: {in: $testimonialIds}}) {
      nodes {
        id
        slug
        type_slug
        metadata {
          author
          text
          avatar {
            url
          }
        }
      }
    }
  } 
`

const Testimonial = ({author, text, avatar}) => (
  <div style={{display: 'flex', justifyContent: 'center'}}>
    <h3>{author}:</h3>
    <p>{`"${text}"`}</p>
  </div>
)

const getSectionComponent: (type: sectionType) => React.ReactType = (type) => {
  switch(type) {
    case 'ctas': return CTA
    case 'testimonials': return Testimonial
  }
}

interface PageProps {
  data: getPage;
}

const Page: React.FC<PageProps> = ({data}) => {
  const pageOrderedSectionIds = data.page.metadata.sections.map(s => s._id);
  const pageSections = [...data.ctas.nodes, ...data.testimonials.nodes];
  return (
    <>
      <h1>{`This is a page`}</h1>
      {pageOrderedSectionIds.map(id => {
        const section = pageSections.find(s => s.id === id);
        const Component = getSectionComponent(section.type_slug as sectionType);
        const props = {
          ...section.metadata,
          slug: section.slug
        };
        return <Component {...props} key={section.id}/>
      })}
    </>
  );
}

export default Page;
