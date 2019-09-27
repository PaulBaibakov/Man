import React, { PureComponent } from 'react';
import 'bootstrap/dist/css/bootstrap.css'


export default class CenterPanel extends PureComponent {
	render() {
		return (
			<div className="row row100rest">
				<div className="col-2 h100" style={{ border: '4px double black' }}>
						Меню
				</div>
				<div className="col-10 h100" style={{ border: '4px double black' }}>
						Рабочая зона
				</div>
			</div>
		)
	}
}
