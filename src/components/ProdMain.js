import React, { PureComponent } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import TopPanel from './TopPanel';
import BottomPanel from './BottomPanel';
import CenterPanel from './CenterPanel';
import './CSS/Style.css';

export default class ProdMain extends PureComponent {
	componentDidMount() {
		/*
		fetch('/api/bypass-example')
			.then(res => res.json())
			.then(data => console.log(data));
		*/
		let options = {
			method: 'PUT', 
			headers: {
				'Content-Type': 'application/json;charset=utf-8'
			},
			body: JSON.stringify({ name: 'Paul', sname: 'Pa' }),
		};

		fetch('/api/getSQL', options)
			.then(response => console.log(response.json()))
			.then(result => console.log(result));
		
		
		
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