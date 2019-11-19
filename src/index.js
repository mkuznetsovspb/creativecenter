import React from 'react'
import { render } from 'react-dom'
import { HashRouter as Router, Switch, Route, Link } from 'react-router-dom'

import CourseList from 'course-list'
import CourseData from 'course-data'
import SingIn from 'sign-in'
import Cabinet from 'cabinet'

/*
Соскочить, пока бесплатно

- А деньги?

- А че такое?

- Свободная касса!

На нашем портале пока нет возможности оплатить обучение онлайн. Поэтому идите в Сбербанк и скажите там:
- Здрасьте, хотел бы перевести деньги на расчетный счет 6125333100000000000000000000000012612823666234498129, сумма такая-то.

Еще можете на занятиях оплатить обучение. Только не показывайте деньги преподавателю, оплачиваейте девушке на ресепшене.

Во время демонстационного периода от курса можно отказаться бесплатно. Пожалуйста, укажите причину, по которой вы отказываетесь о обучения:

Ваши курсы - полная чушь

Компания, которая оплачивает мне курсы, обанкротилась
*/

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
			</Switch>
		</div>
	</Router>
)

render(app, document.getElementById('root'));