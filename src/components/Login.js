import React, { PureComponent } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './CSS/StyleLogin.css';
//import './ComboBoxJSON';





export default class LoginForm extends PureComponent {
	render() {
		return (
			<div className="row row100rest">

				<button className="btn btn-primary btn-sm" data-toggle="modal" data-target="#myModal">Рег</button>

				<div className="modal fade" id="myModal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
					<div className="modal-center">
						<div className="modal-dialog .modal-align-center">
							<div className="modal-content">
								<div className="modal-header">
									<h4 className="modal-title" id="myModalLabel">Регистрация на машине</h4>
									<button type="button" className="close" data-dismiss="modal"><span aria-hidden="true">×</span><span className="sr-only">Close</span>

									</button>


								</div>
								
								<div className="modal-body">

									<input type="text" placeholder="Пользователь" className="form-control validate"></input>
									<br></br>
									<input type="password" placeholder="Пароль" className="form-control validate"></input>
									<br></br>
									<div className="dropdown">agvsdv
										<button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
											Dropdown button
										</button>
										<div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
											<a className="dropdown-item" href="#">Action</a>
											<a className="dropdown-item" href="#">Another action</a>
											<a className="dropdown-item" href="#">Something else here</a>
										</div>
									</div>
								</div>
								<div className="modal-footer">
									<button type="button" className="btn btn-primary">Регистрация</button>
									<button type="button" className="btn btn-default" data-dismiss="modal">Отмена</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}