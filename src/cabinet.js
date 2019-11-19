import React from 'react'
import { Link } from 'react-router-dom'

export default class extends React.Component {
	constructor(props) {
		super(props);
	}
	
	render() {
		console.log(this.data);
		return (
			<div className="content">
				<div className="page-title">Личный кабинет</div>
				<div className="course-data__options"><span className="_selected">Мои курсы</span><span>Пройденные курсы</span><span>Персональные данные</span></div>
				<table className="my-courses">
					<tbody>
						<tr>
							<th style={{ width : '300px' }}>Модуль</th>
							<th>Курс</th>
							<th style={{ width : '100px', textAlign: 'right' }}>Стоимость</th>
							<th style={{ width : '100px' }} className="my-courses__action"></th>
						</tr>
						<tr>
							<td>Оранжевая осень</td>
							<td>Бизнес-анализ в IT</td>
							<td className="my-courses__price"><s>18 900 &#8381;</s></td>
							<td className="my-courses__action _done">Оплачено</td>
						</tr>
						<tr>
							<td>Оранжевая осень</td>
							<td>Переговоры с трудным заказчиком</td>
							<td className="my-courses__price">32 990 &#8381;</td>
							<td className="my-courses__action"><div className="btn _size_s">Оплатить</div></td>
						</tr>
						<tr>
							<td>Оранжевая осень</td>
							<td>Основы риторики</td>
							<td className="my-courses__price">57 900 &#8381;</td>
							<td className="my-courses__action"><div className="btn _size_s ">Оплатить</div></td>
						</tr>
						<tr>
							<td>Зимний Оливье</td>
							<td>Всемирная история</td>
							<td className="my-courses__price">32 800 &#8381;</td>
							<td className="my-courses__action"><div className="btn _size_s _secondary">Отказаться</div></td>
						</tr>
						<tr>
							<td>Зимний Оливье</td>
							<td>Как успевать вовремя</td>
							<td className="my-courses__price">38 100 &#8381;</td>
							<td className="my-courses__action"><div className="btn _size_s _secondary">Отказаться</div></td>
						</tr>
					</tbody>
				</table>
			</div>
		)
	}
}