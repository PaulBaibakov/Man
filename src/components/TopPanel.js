import React, { PureComponent } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import LoginForm from './Login';

export default class TopPanel extends PureComponent {
	render() {
		return (
			<div className="row">
				<div className="col-4" style={{ border: '4px double black' }}> 
					<input type="text" placeholder="№ заказа" />
				</div>
				<div className="col-4" style={{ border: '4px double black' }}>
					<input type="text" placeholder="Номенклатура" />
				</div>
				<div className="col-4" style={{ border: '4px double black' }}>
					<div className="container-fluid flex">
						<div className="row">
							<div className="col-6" id="weightValue">dfg</div>
							<div className="col-6"><LoginForm /></div>
						</div>
					</div>
				</div>				
			</div>
		)
	}
}
