import React, { PureComponent } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import TopPanel from './TopPanel';
import BottomPanel from './BottomPanel';
import CenterPanel from './CenterPanel';
import './CSS/Style.css';

export default class ProdMain extends PureComponent {
	async componentDidMount() {

		let options = {
			method: 'PUT', 
			headers: {
				'Content-Type': 'application/json;charset=utf-8'
			},
			body: JSON.stringify({
				SQLcommand: 'select top 1 workstation_name from sp_workstations'
			}),
		};

		let response = await fetch('/api/getSQL', options);
		if (response.ok) {
			let json = await response.json();
			console.log('ok&&&&&&&&&&');
		}
			
		
		
		
		
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