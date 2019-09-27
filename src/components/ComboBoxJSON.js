import React, { PureComponent } from 'react';


export default class ComboBox extends PureComponent {
wsList() {
	let xhr = new XMLHttpRequest();
	xhr.open('PUT', 'RouteSQL.js/sql', true);
	xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
	let body = 'reqValue=GetWorkstations';
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