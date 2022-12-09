import React, {useState} from 'react';

const Form = ({title, handleClick}) => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');


	return (
		<form>
			<input 
				type="email" 
				value={email}
				placeholder='email'
				autoComplete='current-email'
				onChange={(e) => setEmail(e.target.value)}
			/>
			<input 
				type="password"
				value={password} 
				placeholder='password'
				autoComplete='current-password'
				onChange={(e) => setPassword(e.target.value)}
			/>
			<button 
				onClick={(e) => handleClick(email, password)}
			>
				{title}
			</button>
		</form>
	)
}

export default Form;