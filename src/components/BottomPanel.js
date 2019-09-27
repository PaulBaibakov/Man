import React, { PureComponent } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

export default class BottomPanel extends PureComponent {
	render() {
		return (
			<div className="row justify-content-end" style={{backgroundColor: '#F6CAF0' }}>
				<div className="col-2" style={{ border: '4px double black' }}>Версия 0.0.0.2</div>
				<div className="col-10" style={{ border: '4px double black' }}>Пользователь:</div>
			</div>
		)
	}
}
