import React, { PureComponent } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import TopPanel from './TopPanel';
import BottomPanel from './BottomPanel';
import CenterPanel from './CenterPanel';
import './CSS/Style.css';

export default class ProdMain extends PureComponent {
	componentDidMount() {
		
		const _sql = { SQLcommand: 'select top 1 workstation_name from sp_workstations' };
		
		const options = {
			method: 'POST', 
			mode: 'no-cors',
			headers: {
				'Content-Type': 'application/json; charset=utf-8'
			},
			body: JSON.stringify(_sql)
		};


		fetch('/api/getSQL/', options)
			.then(response => response.text())
			.then(result => alert(result));
	}
	render() {
		return (
			<div className="container-fluid flex">
				<div className="row header">
					<div className="col-12"><TopPanel /></div>
				</div>
				<div className="row h100">
					<div className="col-12" style={{ border: '4px double black' }}>
						<CenterPanel />
					</div>
				</div>
				<div className="row footer">
					<div className="col-12" style={{ border: '4px double black' }}>
						<BottomPanel />
					</div>
				</div>
			</div>
		)
	}
}