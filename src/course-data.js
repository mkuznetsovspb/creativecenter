import React from 'react'
import { Link } from 'react-router-dom'

export default class extends React.Component {
	constructor(props) {
		super(props);
		this.state = { reg : false };
	}
	
	componentDidMount() {
		this.timer = setTimeout(this.tooLate.bind(this), 5000);
	}
	
	componentWillUnmount() {
		clearTimeout(this.timer);
	}
	
	reg() {
		this.setState({ reg : true });
		clearTimeout(this.timer);
	}
	
	tooLate() {
		this.setState({ tooLate : true });
	}
	
	render() {
		let component;
		
		if (this.state.reg && this.state.tooLate) {
			component = (
				<div className="content">
					<div className="course-data">
						<div className="course-data__title">Вы не тормоз, но вы не&nbsp;успели</div>
						<div className="course-data__details">
							<p>На курсе не осталось свободных мест.</p>
							<p><Link to="/">Вернуться к курсам</Link></p>
						</div>
					</div>
				</div>
			)
		} else if (this.state.reg) {
			component = (
				<div className="content">
					<div className="course-data">
						<div className="course-data__title">— Поздравляю, Шарик! Ты&nbsp;—&nbsp;студент.</div>
						<div className="course-data__details">
							<p>Первое занятия пройдет 1 октября 2019 в 19:00.</p>
							<p>Адрес Творческого центра: Новгородская улица, дом 5.</p>
							<p>На первое занятие нужно взять с собой паспорт.</p>
							<p><Link to="/">Вернуться к курсам</Link></p>
						</div>
					</div>
				</div>
			)
		} else {
			component = (
				<div className="content">
					<div className="course-data">
						<div className="course-data__title">Бизнес-анализ в IT</div>
						<div className="course-data__options"><span className="_selected">О&nbsp;курсе</span><span>Преподаватель</span><span>Расписание</span><span>Оплата</span></div>
						<div className="course-data__details">Программа освоения профессии IT-аналитика. Для специалистов в сфере IT, вовлеченных в создание высокотехнологичных продуктов, оптимизацию бизнес-процессов.
							<li>Практикующим аналитикам участие в курсе поможет систематизировать имеющийся опыт</li>
							<li>IT-специалистам смежных ролей участие в курсе поможет освоить методы системного и бизнес-анализа</li>
							<li>Менеджерам продуктов и проектов позволит эффективнее выстраивать работу команды, взаимодействовать с заказчиками, управлять ресурсами</li>
						</div>
						<div className="course-data__reg"><div className={'btn' + (this.state.tooLate ? ' _secondary' : '')} onClick={this.reg.bind(this)}>Записаться на курс</div></div>
					</div>
				</div>
			)
		}
		
		return component;
	}
}