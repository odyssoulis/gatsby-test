import React from 'react';
import {ICta} from '../../domain/cta';
import {navigate} from "@reach/router"  

const CTA: React.FC<ICta> = ({title, subtitle, cta_text, color, goto}) => (
  <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
    <h1>{title}</h1>
    <p>{subtitle}</p>
    <button
      style={{
        padding: '6px 12px',
        backgroundColor: color
      }}
      onClick={() => navigate(goto)}
      >
        {cta_text}
      </button>
  </div>
);

export default CTA;
