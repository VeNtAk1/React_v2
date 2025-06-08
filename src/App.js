import React from 'react';
import uuid from 'react-uuid';

function App() {
	function id(){
		<p key={uuid()}></p>
	}

	const users = [
		{id: id(), name: 'product1', cost: 100},
		{id: id(), name: 'product2', cost: 200},
		{id: id(), name: 'product3', cost: 300},
	];
	const res = users.map(function(item, index){
		return <li key={id()}>{item.name}, {item.cost}</li>
		
	})

	return <>
		<ul>
			{res}
		</ul>
	</>;
}
export default App; 
export const LineItem = (item) => <li key={uuid()}>{item}</li>;