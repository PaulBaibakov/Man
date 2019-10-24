import React, { PureComponent } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import TopPanel from './TopPanel';
import BottomPanel from './BottomPanel';
import CenterPanel from './CenterPanel';
import './CSS/Style.css';

export default class ProdMain extends PureComponent {
	componentDidMount() {

<<<<<<< HEAD
		const options = {
			method: 'PUT', 
=======
		let options = {
			method: 'POST', 
>>>>>>> f1bfbe76ebc6901e68d89e29a78bd66a4b686681
			headers: {
				'Content-Type': 'application/json;charset=utf-8'
			},
			body: JSON.stringify({
				SQLcommand: 'select top 1 workstation_name from sp_workstations'
			})
		};
<<<<<<< HEAD

		fetch('/api/getSQL', options)
			.then(response => response.json())
			.then(result => alert(result));
=======
		console.log('1ok&&&&&&&&&&');
		fetch('/api/getSQL', options)
			.then(response => response.text())
			.then(err => console.log(err.text));
		console.log('ok2');
		console.log(response);
		
>>>>>>> f1bfbe76ebc6901e68d89e29a78bd66a4b686681
			
		
		
		
		
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