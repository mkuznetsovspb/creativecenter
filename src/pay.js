import React from 'react'
import { Link } from 'react-router-dom'

export default class extends React.Component {
	constructor(props) {
		super(props);
	}
	
	render() {
		return (
			<div className="content">
				<div className="page-title">— Вы спросили про какие-то деньги?</div>
				<div className="pay">
					<p>На нашем портале пока нет возможности оплатить обучение онлайн. Поэтому идите в Сбербанк и скажите там:</p>
					<p>— Здрасьте, хотел бы перевести деньги на расчетный счет 6125333100000000000000000000000012612823613234498129, сумма такая-то.</p>
					<p>Еще можете на занятиях оплатить обучение. Только не показывайте деньги преподавателю, оплачивайте девочке на ресепшене.</p>
					<p><img className="pay__pict" src="public/money.jpg" alt="" /></p>
					<p><Link to="/cabinet">Вернуться в личный кабинет</Link></p>
				</div>
			</div>
		)
	}
}