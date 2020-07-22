import * as React from 'react';
import { BrowserRouter, Switch, Route, Link, Redirect } from 'react-router-dom';
import Home from './components/Home';
import Admin from './components/Admin';
import Edit from './components/Edit';
import BlogPost from './components/BlogPost';
import Tags from './components/Tags';

export default class App extends React.Component {

	render() {
		return (
			<main className="container my-5">
				<BrowserRouter>
					<section className="header">
						<div className="jumbotron-primary jumbotron-fluid header">
							<div className="container text-center">

								<h1 className="display-4 align-middle">Attack of the Blog</h1>

							</div>
							<br />
						</div>
						<Link className="link" to="/">Home</Link>
						<Link className="link" to="/admin">Admin</Link>
					</section>
					<Switch>
						<Route exact path="/" component={Home} />
						<Route exact path="/admin" component={Admin} />
						<Route exact path="/edit/:id" component={Edit}/>
						<Route exact path="/blogpost/:id" component={BlogPost} />
						<Redirect from="*" to="/"/>
					</Switch>
				</BrowserRouter>

			</main>
		);
	}
}


