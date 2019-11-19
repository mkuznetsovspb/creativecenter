import React from 'react'
import { Link, Redirect } from 'react-router-dom'

export default class extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			login : '',
			password : '',
			wrongLogin : false,
			wrongPassword : false			
		}
	}
	
	handleLoginChange(e) {
		this.setState({ login : e.target.value, wrongLogin : false });
		if (e.keyCode === 13) this.handleSend();
	}
	
	handlePasswordChange(e) {
		this.setState({ password : e.target.value, wrongPassword : false });
		if (e.keyCode === 13) this.handleSend();
	}
	
	handleSend() {
		const wrongLogin = this.state.login === '' ? true : false;
		const wrongPassword = this.state.password === '' ? true : false;
		
		this.setState({
			wrongLogin : wrongLogin,
			wrongPassword : wrongPassword
		});		
		
		if (!wrongLogin && !wrongPassword) this.setState({ success : true });
		
	}
	
	render() {
		/*if (this.stea<Redirect to="/somewhere/else" />
to: object*/
		return (
			<div className="content">
				{this.state.success ? <Redirect to="/cabinet" /> : null}
				<div className="page-title">Вход в личный кабинет</div>
				<div className="sign-in__form">
					<p>
						<input
							className={"form-field" + (this.state.wrongLogin ? " _error" : "")}
							onChange={this.handleLoginChange.bind(this)}
							onKeyDown={this.handleLoginChange.bind(this)}
							autoFocus={true}
							type="text"
						/>
					</p>
					<p>
						<input
							className={"form-field" + (this.state.wrongPassword ? " _error" : "")}
							onChange={this.handlePasswordChange.bind(this)}
							onKeyDown={this.handlePasswordChange.bind(this)}
							type="password"
						/>
					</p>
					<div className="btn" onClick={this.handleSend.bind(this)}>Войти</div>
					<p>
						<Link to="/sign-in">Восстановить пароль</Link>
					</p>
				</div>
			</div>
		)
	}
}