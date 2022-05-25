import React, { Component } from "react";
import axios from "axios";

import Card from "../Card/card";
import { cards } from "../Card/card";
import "./Tshirt.css";

export default class Tshirt extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			category: 1,
			array: [],
		};
	}
	componentDidMount = async () => {
		var headers = { "Content-Type": "application/json" };
		var query = `query {
            cards {
                count
                name
            }
        }`;

		await axios
			.post(
				"https://bird.hasura.app/v1/graphql",
				{ query: query },
				{ headers: headers }
			)
			.then((r) => {
				this.splitter(r.data.data.cards);
			});
	};

	handlesubmit = async (e) => {
		e.preventDefault();
		if (cards.length < 2) {
			alert("Enter both input fields!!!");
		} else {
			console.log(cards);
			var headers = {
				"Content-Type": "application/json",
			};
			var data = cards;
			var query = `mutation update_cards{
                insert_card(objects: [
                    {name: ${cards[0].name}, count: ${cards[0].count}},
                    {name: ${cards[1].name}, count: ${cards[1].count}}
                ],
                on_conflict: {
                    constraint: name,
                    update_columns: [count]
                }
                ){
                    affected_rows
                }
            }`;

			await axios
				.post(
					"https://bird.hasura.app/v1/graphql",
					{ query: query },
					{ headers: headers }
				)
				.then((r) => {
					if (r.data.data != undefined) alert("Updated");
				});
		}
	};

	splitter = (data) => {
		var arr = [];
		for (var i = 0; i < data.length; i++) {
			arr.push(data[i]);
		}
		this.setState({ array: arr });
	};

	render() {
		// var cards = [];
		// this.state.array.forEach((item) => cards.push(item));

		return (
			<div>
				<div className="contents">
					{this.state.array.map((d, i) => {
						return (
							<div>
								<Card data={d} index={i} />
							</div>
						);
					})}
				</div>
				<button onClick={this.handlesubmit}>SUBMIT</button>
			</div>
		);
	}
}
