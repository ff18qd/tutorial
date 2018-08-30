import React, { Component } from 'react';
import { MarkdownWrapper, MainContent } from '../styles';
import Markdown from 'markdown-to-jsx';
import axios from 'axios';
import AppWorkspace from './AppWorkspace';

class PageTemplate extends Component {

  state = {
    markdown: ''
  }

  // async call to fetch markdown file and set markdown string to state
  async componentDidMount(){
    const getMarkdown = axios.get(this.props.md_path);
    const markdown = await getMarkdown;
    this.setState({markdown: markdown.data});
  }

  render(){
    const { markdown } = this.state;
    return (
      <MainContent className="main-content">
        <MarkdownWrapper className="markdown-wrapper">
          <Markdown>{markdown}</Markdown>
        </MarkdownWrapper>
        <AppWorkspace/>
      </MainContent>
    )
  }
}

export default PageTemplate;
