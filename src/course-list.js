import React from 'react'
import { Link } from 'react-router-dom'

export default class extends React.Component {
	constructor(props) {
		super(props);
	}
	
	render() {
		return (
			<div className="content">
				<div className="menu">
					<span className="menu__item"><Link to="/sign-in"><div className="btn _size_s">Войти</div></Link></span>
				</div>
				<div className="module">
					<div className="module-title">
						<div className="module-name">Учебный модуль &laquo;Оранжевая осень&raquo;</div>
						<div className="module-date">Начало 1 октября 2020</div>
						
					</div>
					<div className="course-tiasers">								
						<div className="course-tiaser">
							<Link to="/courses">
								<div className="course-tiaser__img _img-1"></div>
								<div className="course-tiaser__price">18 900 &#8381;</div>
								<div className="course-tiaser__title">Бизнес-анализ в IT</div>
							</Link>
						</div>
						<div className="course-tiaser">
							<Link to="/courses">
								<div className="course-tiaser__img _img-2"></div>
								<div className="course-tiaser__price">27 500 &#8381;</div>
								<div className="course-tiaser__title">Рисование шаржей</div>
							</Link>
						</div>
						<div className="course-tiaser">
							<Link to="/courses">
								<div className="course-tiaser__img _img-3"></div>
								<div className="course-tiaser__price">32 990 &#8381;</div>
								<div className="course-tiaser__title">Переговоры с трудным заказчиком</div>
							</Link>
						</div>
						<div className="course-tiaser">
							<Link to="/courses">
								<div className="course-tiaser__img _img-4"></div>
								<div className="course-tiaser__price">57 900 &#8381;</div>
								<div className="course-tiaser__title">Основы риторики</div>
							</Link>
						</div>
						<div className="course-tiaser">
							<Link to="/courses">
								<div className="course-tiaser__img _img-5"></div>
								<div className="course-tiaser__price">10 900 &#8381;</div>
								<div className="course-tiaser__title">Создание комиксов</div>
							</Link>
						</div>
						<div className="course-tiaser">
							<Link to="/courses">
								<div className="course-tiaser__img _img-6"></div>
								<div className="course-tiaser__price">4 500 &#8381;</div>
								<div className="course-tiaser__title">Лепка горшков из глины</div>
							</Link>
						</div>
						<div className="course-tiaser">
							<Link to="/courses">
								<div className="course-tiaser__img _img-7"></div>
								<div className="course-tiaser__price">19 999 &#8381;</div>
								<div className="course-tiaser__title">Как перестать откладывать дела на потом (курс отложен до лета)</div>
							</Link>
						</div>
					</div>
					<div className="module-title">
						<div className="module-name">Учебный модуль &laquo;Зимний Оливье&raquo;</div>
						<div className="module-date">Начало 1 января 2020 (да, именно первого)</div>
					</div>
					<div className="course-tiasers">
						<div className="course-tiaser">
							<div className="course-tiaser__img _img-8"></div>
							<div className="course-tiaser__price">32 800 &#8381;</div>
							<div className="course-tiaser__title">Всемирная история</div>
						</div>
						<div className="course-tiaser">
							<div className="course-tiaser__img _img-9"></div>
							<div className="course-tiaser__price">25 590 &#8381;</div>
							<div className="course-tiaser__title">История Древнего Египта</div>
						</div>
						<div className="course-tiaser">
							<div className="course-tiaser__img _img-10"></div>
							<div className="course-tiaser__price">38 100 &#8381;</div>
							<div className="course-tiaser__title">Как успевать вовремя</div>
						</div>
						<div className="course-tiaser">
							<div className="course-tiaser__img _img-11"></div>
							<div className="course-tiaser__price">17 790 &#8381;</div>
							<div className="course-tiaser__title">Сторителлинг: вводный курс</div>
						</div>
						<div className="course-tiaser">
							<div className="course-tiaser__img _img-12"></div>
							<div className="course-tiaser__price">53 100 &#8381;</div>
							<div className="course-tiaser__title">Сторителлинг: продвинутый курс</div>
						</div>
						<div className="course-tiaser">
							<div className="course-tiaser__img _img-13"></div>
							<div className="course-tiaser__price">12 700 &#8381;</div>
							<div className="course-tiaser__title">Вязание шапок</div>
						</div>
					</div>
					<div className="module-title">
						<div className="module-name">Учебный модуль &laquo;Весенняя спячка&raquo;</div>
						<div className="module-date">Начало 13 марта 2020</div>
					</div>
					<div className="course-tiasers">
						<div className="course-tiaser">
							<div className="course-tiaser__img _img-14"></div>
							<div className="course-tiaser__price">72 900 &#8381;</div>
							<div className="course-tiaser__title">Создание сайтов для&nbsp;творческих центров</div>
						</div>
						<div className="course-tiaser">
							<div className="course-tiaser__img _img-15"></div>
							<div className="course-tiaser__price">9 900 &#8381;</div>
							<div className="course-tiaser__title">Инвестиции для&nbsp;начинающих</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}