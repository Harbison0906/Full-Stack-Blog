import React, { Component } from 'react';
import { RouteComponentProps } from 'react-router';
import { IBlog } from '../utils/interfaces';


export default class BlogPost extends Component<IBlogPostProps, IBlogPostState> {

  constructor(props: IBlogPostProps) {
    super(props);
    this.state = {
      title: '',
      content: ''
    };
  }
  
  componentDidMount() {
    fetch(`/api/blogs/${this.props.match.params.id}`)
      .then(res => res.json())
      .then((blog: IBlog) => this.setState({ title: blog.title, content: blog.content }));
  }

  render() {
    return (

      <section className="row justify-content-center">
        <div className="card shadow-sm">
          <div className="card-body">
            <h5 className="card-title">{this.state.title}</h5>
            <h6 className="card-author">By Seth Harbison</h6>
            {/* <p className="card-date">{blog._created}</p> */}
            <p className="card-text">{this.state.content}</p>
          </div>
        </div>
      </section>
    );
  }

}

interface IBlogPostProps extends RouteComponentProps<{ id: string }> { }
interface IBlogPostState {
  title: string,
  content: string
}