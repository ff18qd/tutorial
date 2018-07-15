import React from 'react';
import { PageHeader, PageDescription } from '../styles';

const PageTemplate = (props) =>
  <div>
    <PageHeader>{ props.title }</PageHeader>
    <PageDescription>{ props.description }</PageDescription>
  </div>

export default PageTemplate;
