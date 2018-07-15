import React, { Component } from 'react';
import { MarkdownWrapper } from '../styles';
import Markdown from 'markdown-to-jsx';
import axios from 'axios';

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
      <MarkdownWrapper>
        <Markdown>{markdown}</Markdown>
      </MarkdownWrapper>
    )
  }
}

export default PageTemplate;
