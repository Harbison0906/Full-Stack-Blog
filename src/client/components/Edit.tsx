import React, { Component } from 'react';
import { RouteComponentProps } from 'react-router';

export default class Edit extends Component<IEditProps, IEditState> {

  constructor(props: IEditProps) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <h1>Edit Page</h1>
      </div>
    );
  }

}

interface IEditProps extends RouteComponentProps {}
interface IEditState {}