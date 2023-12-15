import React from 'react';

interface ISectionTitleProps {
    title: string;
}

function SectionTitle({title}: ISectionTitleProps) {
 return (
  <h1 className={'text-dracula-comment text-2xl font-medium mb-5'}>
      {title.toUpperCase()}
  </h1>
 );}

export default SectionTitle;
