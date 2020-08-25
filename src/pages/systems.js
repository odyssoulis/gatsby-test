import React from 'react';
import {graphql} from 'gatsby';

export const query = graphql`
  {
    systems: allContentfulSystem {
      edges {
        node {
          title
        }
      }
    }
  }
`

const Systems = ({ data }) => {
  const systems = data.systems.edges.map(s => s.node);
  return (
    <ul>
      <h3>Systems</h3>
      {systems.map(s => (
        <li key={s.title}>
          {s.title}
        </li>
      ))}
    </ul>
  )
}

export default Systems;
