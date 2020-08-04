import React, { Component } from 'react';
import TagList from './components/TagList';
import './index.css';
class TagsView extends Component {
  render() {
    return (
      <div className="tagsView-container">
        <TagList></TagList>
      </div>
    );
  }
}

export default TagsView;
