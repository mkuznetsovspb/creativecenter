import React from 'react'
import { Link } from 'react-router-dom'

export default class extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			active : false,
			rejected : false
		};
	}
	
	handleChangeOption() {
		this.setState({ active : true });
	}
	
	handleReject() {
		if (this.state.active) this.setState({ rejected : true });
	}
	
	render() {
		let component;
		
		if (this.state.rejected) {
			component = (
				<div className="content">
					<div className="page-title">Готово</div>
					<div className="reject">						
						<p>Спасибо, что предупредили об отказе от обучения. Мы, конечно, немного обиделись, но все равно ждем вас снова в нашем творческом центре.</p>
					</div>
					<p><Link to="/cabinet">Вернуться в личный кабинет</Link></p>
				</div>
			)
		} else {
			component = (
				<div className="content">
					<div className="page-title">— Че такое?</div>
					<div className="reject">
						<p>Во время демонстрационного периода от курса можно отказаться бесплатно. Пожалуйста, укажите причину отказа от обучения:</p>
						<p className="reject__option"><label><input type="radio" name="why" onChange={this.handleChangeOption.bind(this)} /> Ваши курсы — полная чушь</label></p>
						<p className="reject__option"><label><input type="radio" name="why" onChange={this.handleChangeOption.bind(this)} /> Ваш сайт общается со мной как гопник</label></p>
						<p className="reject__option"><label><input type="radio" name="why" onChange={this.handleChangeOption.bind(this)} /> Нашел более интересное обучение</label></p>
						<p className="reject__option"><label><input type="radio" name="why" onChange={this.handleChangeOption.bind(this)} /> Я вообще люблю сначала пообещать, а потом такой: &laquo;не, я такого не говорил&raquo;</label></p>
						<p className="reject__option"><label><input type="radio" name="why" onChange={this.handleChangeOption.bind(this)} /> Компания, которая оплачивает мне курсы, обанкротилась</label></p>
						<div className="reject__options">
							<div className={'btn' + (this.state.active ? '' : ' _disabled')} onClick={this.handleReject.bind(this)}>Отказаться от возможности поумнеть</div>
						</div>
						<p><Link to="/cabinet">Вернуться в личный кабинет</Link></p>
					</div>
				</div>
			)
		}
		
		return component;
	}
}