import { useState } from 'react';

export default function Form() {
	const [dataForm, setDataForm] = useState({
		username: '',
		email: '',
		occupation: 'select',
		gender: '',
		languages: [],
	});

	const handleChangeValue = (event) => {
		if (event.target.name === 'languages') {
			let formDataNew = { ...dataForm };

			if (event.target.checked) {
				formDataNew.languages.push(event.target.value);
			} else {
				formDataNew.languages = formDataNew.languages.filter(
					(language) => event.targer.value !== language
				)
			}

			setDataForm(formDataNew)
		} else {
			setDataForm((dataForm) => ({
				...dataForm,
				[event.target.name]: event.target.value,
			}))
		}
	};

	console.log(dataForm);

	const handleSubmit = () => {
		event.preventDefault()
		console.log(dataForm)
	};

	return (
		<div className="App">
			<form onSubmit={handleSubmit}>
				<div>
					<label htmlFor="username">User Name</label>
					<input name="username" onChange={handleChangeValue} />
				</div>
				<div>
					<label htmlFor="email">Email</label>
					<input name="email" onChange={handleChangeValue} />
				</div>
				<div>
					<label htmlFor="occupation">Occupation</label>
					<select name="occupation" onChange={handleChangeValue}>
						<option value="select"> -- Select -- </option>
						<option value="student">Student</option>
						<option value="employee">Employee</option>
						<option value="other">Other</option>
					</select>
				</div>
				<div>
					<label htmlFor="gender">Gender</label>
					<div>
						<div>
							<input
								type="radio"
								name="gender"
								value="male"
								onChange={handleChangeValue}
							/>
							<label htmlFor="male">Male</label>
						</div>
						<div>
							<input
								type="radio"
								name="gender"
								value="female"
								onChange={handleChangeValue}
							/>
							<label htmlFor="female">Female</label>
						</div>
						<div>
							<input
								type="radio"
								name="gender"
								value="other"
								onChange={handleChangeValue}
							/>
							<label htmlFor="other">Other</label>
						</div>
					</div>
				</div>
				<div>
					<label htmlFor="gender">Languages</label>
					<div>
						<div>
							<input
								type="checkbox"
								name="languages"
								value="html"
								onChange={handleChangeValue}
							/>
							<label htmlFor="html">HTML</label>
						</div>
						<div>
							<input
								type="checkbox"
								name="languages"
								value="css"
								onChange={handleChangeValue}
							/>
							<label htmlFor="css">CSS</label>
						</div>
						<div>
							<input
								type="checkbox"
								name="languages"
								value="javascript"
								onChange={handleChangeValue}
							/>
							<label htmlFor="javascript">Javascript</label>
						</div>
					</div>
				</div>
				<div>
					<button type="submit">Submit</button>
				</div>
			</form>
		</div>
	);
}
