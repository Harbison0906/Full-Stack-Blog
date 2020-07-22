import React, { Component } from 'react';
import { RouteComponentProps } from 'react-router';

export default class Tags extends Component<ITagsProps, ITagsState> {

  constructor(props: ITagsProps) {
    super(props);
    this.state = {
      tag: ''
    };
  }

  render() {
    return (
      <div>
        <h1>Tags Page</h1>
      </div>
    );
  }

}

interface ITagsProps extends RouteComponentProps {}
interface ITagsState {
  tag: string
}