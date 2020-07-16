import React, { Component } from 'react';
import { RouteComponentProps } from 'react-router';

export default class Admin extends Component<IAdminProps, IAdminState> {

  constructor(props: IAdminProps) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <h1>Admin Page</h1>
      </div>
    );
  }

}

interface IAdminProps extends RouteComponentProps {}
interface IAdminState {}