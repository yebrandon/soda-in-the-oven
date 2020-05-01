import React, { useContext, Component } from 'react';
import { GlobalContext } from '../context/GlobalState';

export class Producer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			numUnits: 0,
			price: props.price
		};
	}

	static contextType = GlobalContext;

	buy() {
		this.setState({
			numUnits: this.state.numUnits + 1,
			price: this.state.price * 1.5
		});
		GlobalContext.removeSodas(this.state.price);
	}

	sell() {
		this.setState({
			numUnits: this.state.numUnits - 1,
			price: this.state.price / 1.5
		});
		GlobalContext.addSodas(this.state.price);
	}

	render() {
		return (
			<div>
				<h1>{this.props.title}</h1>
				{this.props.price} sodas
				<br />
				{this.props.cakesPerSecond} cakes per second
				<br />
				{this.numUnits}
				<button onClick={this.buy}>Buy</button>
				<button onClick={this.sell}>Sell</button>
				<img
					src={this.props.img}
					alt={this.props.title}
					height='100'
					width='100'
				/>
			</div>
		);
	}
}

export default Producer;
