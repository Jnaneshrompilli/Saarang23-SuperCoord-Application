import React, { Component } from "react";
import Select from "react-select";

import "./card.css";
import Shirt from "../../images/Shirt.png";

var cards = [];

export {cards}

export default class Card extends Component {
	constructor(props) {
		super(props);
		this.state = {
			cards: [],
		};
	}

	handleChange = (e) => {
		var name = e.target.name;
		var count = e.target.value;
		var index = this.props.index;

		cards[index] = { name: name, count: count };

		console.log(cards);
	};

	render() {
		return (
			<div className="card" id={this.props.data.name}>
				<div className="title">{this.props.data.name}</div>
				<div className="image">
					<img src={Shirt}></img>
				</div>
				<form className="flexb">
					<select
						className="input"
						name={this.props.data.name}
						onChange={this.handleChange}
					>
						<option value="" disabled selected hidden>
							{this.props.data.count}
						</option>
						<option value="0">0</option>
						<option value="1">1</option>
						<option value="2">2</option>
						<option value="3">3</option>
						<option value="4">4</option>
						<option value="5">5</option>
					</select>
				</form>
			</div>
		);
	}
}
