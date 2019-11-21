import React from 'react'
import { render } from 'react-dom'
import { HashRouter as Router, Switch, Route, Link } from 'react-router-dom'

import CourseList from 'course-list'
import CourseData from 'course-data'
import SingIn from 'sign-in'
import Cabinet from 'cabinet'
import Pay from 'pay'
import Reject from 'reject'

const app = (
	<Router>
		<div className="page">
			<h1><Link to="/"><span className="h0">Творческий центр</span><br/>Александра Захарова</Link></h1>
			<Switch>
				<Route exact path="/">
					<CourseList />
				</Route>
				<Route path="/courses">
					<CourseData />
				</Route>
				<Route path="/sign-in">
					<SingIn />
				</Route>
				<Route path="/cabinet">
					<Cabinet />
				</Route>
				<Route path="/pay">
					<Pay />
				</Route>
				<Route path="/reject">
					<Reject />
				</Route>
			</Switch>
		</div>
	</Router>
)

render(app, document.getElementById('root'));