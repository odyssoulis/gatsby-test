import React from 'react';
import {ITestimonial} from '../../domain/testimonial';

const Testimonial: React.FC<ITestimonial> = ({author, text}) => (
  <div style={{display: 'flex', justifyContent: 'center'}}>
    <h3>{author}:</h3>
    <p>{`"${text}"`}</p>
  </div>
)

export default Testimonial;
