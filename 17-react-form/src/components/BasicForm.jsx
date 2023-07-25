import React from 'react';
import { useState } from 'react';

const BasicForm = () => {

	const [text, setText] = useState('');

	const handleChangeText = (event) => {
		setText(event.target.value);
	};

	return (
		<div>
			<h2>Form</h2>
			<h3>{text}</h3>
			<input type="text" name="text" onChange={handleChangeText} />
		</div>
	);
};

export default BasicForm;
