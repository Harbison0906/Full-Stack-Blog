import React, { Component } from 'react';
import { IBlog } from '../utils/interfaces';
import { Link, RouteComponentProps } from 'react-router-dom';

export default class Home extends Component<IHomeProps, IHomeState> {

  constructor(props: IHomeProps) {
    super(props);
    this.state = {
      blogs: []
    };
  }

  componentDidMount() {
    fetch('/api/blogs')
    .then(res => res.json())
    .then(blogs => this.setState({ blogs }));
  }

  render() {
    return (
      <main className="container timeline">
        <section className="row justify-content-center">
          <>
            {/* modifies and styles each new blog */}
            {this.state.blogs.map(blog => {
              return (
                <div key={blog.id} className="col-md-7">
                  <div className="card shadow-sm">
                    <div className="card-body">
                      <h5 className="card-title">{blog.title}</h5>
                      <h6 className="card-title">{blog.title}</h6>
                      <p className="card-text">{blog.content}</p>
                      <Link className="link" to={`/edit/${blog.id}`} >
                        <button
                          id="editButton"
                          className="btn" 
                        >Edit</button>
                      </Link>

                    </div>
                  </div>
                </div>
              )
            })}
          </>
        </section>
      </main>
    );
  }

}

export interface IHomeProps extends RouteComponentProps <{ id: string }>{ }

export interface IHomeState {
  blogs: IBlog[]
}