exports.createPages = async ({ actions, graphql }) => {
  const {createPage} = actions;
  const res = await graphql(`
    {
      pages: allCosmicjsPages {
        nodes {
          metadata {
            sections {
              _id
              type_slug
            }
          }
          slug
        }
      }
    }
  `)
  res.data.pages.nodes.forEach(({slug, metadata: {sections}}) => {
    createPage({
      path: `/${slug}`,
      component: require.resolve('./src/templates/page.tsx'),
      context: {
        slug,
        ctaIds: sections.filter(s => s.type_slug === 'ctas').map(cta => cta._id),
        testimonialIds: sections.filter(s => s.type_slug === 'testimonials').map(testimonial => testimonial._id)
      }
    })
  })
}
