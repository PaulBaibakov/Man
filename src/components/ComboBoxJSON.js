import React, { PureComponent } from 'react';


export default class ComboBox extends PureComponent {
wsList() {
	let xhr = new XMLHttpRequest();
	xhr.open('PUT', '/api/getSQL', true);
	xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
	let body = 'reqValue=GetWorkstations';
	console.log('1');
	xhr.send(body);
	let r = '';
	xhr.onreadystatechange = function () {
		if (this.readyState !== 4) return;
		r = this.responseText;
	};
	return r;
};
	render() {
		return (
			<div>
				{this.wsList()}
			</div>
		);
	};
	//componentDidMount() { fetch() };
}