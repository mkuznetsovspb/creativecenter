import React from 'react'
import { Link } from 'react-router-dom'

export default class extends React.Component {
	constructor(props) {
		super(props);
	}
	
	render() {
		return (
			<div className="content">
				<div className="page-title">Личный кабинет</div>
				<div className="course-data__options"><span className="_selected">Мои курсы</span><span>Пройденные курсы</span><span>Персональные данные</span></div>
				<table className="my-courses">
					<tbody>
						<tr className="my-courses__module-row">
							<td>Модуль &laquo;Оранжевая осень&raquo;</td>
							<td className="my-courses__price"><s>109 790 &#8381;</s></td>
							<td style={{ width : '100px' }} className="my-courses__action _done">Оплачено</td>
						</tr>
						<tr>
							<td className="my-courses__course-name">Бизнес-анализ в IT</td>
							<td className="my-courses__price"><s>18 900 &#8381;</s></td>
							<td className="my-courses__action _done"></td>
						</tr>
						<tr>
							<td className="my-courses__course-name">Переговоры с трудным заказчиком</td>
							<td className="my-courses__price"><s>32 990 &#8381;</s></td>
							<td className="my-courses__action _done"></td>
						</tr>
						<tr>
							<td className="my-courses__course-name">Основы риторики</td>
							<td className="my-courses__price"><s>57 900 &#8381;</s></td>
							<td className="my-courses__action _done"></td>
						</tr>
						<tr className="my-courses__module-row">
							<td>Модуль &laquo;Зимний Оливье&raquo;</td>
							<td className="my-courses__price">70 900 &#8381;</td>
							<td className="my-courses__action"><Link to="/pay"><div className="btn _size_s">Оплатить</div></Link></td>
						</tr>
						<tr>
							<td className="my-courses__course-name">Всемирная история</td>
							<td className="my-courses__price">32 800 &#8381;</td>
							<td className="my-courses__action"></td>
						</tr>
						<tr>
							<td className="my-courses__course-name">Как успевать вовремя</td>
							<td className="my-courses__price">38 100 &#8381;</td>
							<td className="my-courses__action"></td>
						</tr>
						<tr className="my-courses__module-row">
							<td>Модуль &laquo;Весенняя спячка&raquo;</td>
							<td className="my-courses__price">82 800 &#8381;</td>
							<td className="my-courses__action"></td>
						</tr>
						<tr>
							<td className="my-courses__course-name">Создание сайтов для творческих центров</td>
							<td className="my-courses__price">72 900 &#8381;</td>
							<td className="my-courses__action"><Link to="/reject"><div className="btn _size_s _secondary">Отказаться</div></Link></td>
						</tr>
						<tr>
							<td className="my-courses__course-name">Инвестиции для начинающих</td>
							<td className="my-courses__price">9 900 &#8381;</td>
							<td className="my-courses__action"><Link to="/reject"><div className="btn _size_s _secondary">Отказаться</div></Link></td>
						</tr>
						
					</tbody>
				</table>
			</div>
		)
	}
}