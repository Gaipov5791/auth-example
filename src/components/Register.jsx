import React from 'react';
import Form from './Form';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from 'react-redux';
import {useNavigate} from 'react-router-dom';
import {setUser} from '../store/slices/userSlice';

const Register = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	
	const handleRegister = (email, password) => {
		const auth = getAuth();
		console.log(auth);
		createUserWithEmailAndPassword (auth, email, password)
			.then(({user}) => {
				console.log(user);
				dispatch(setUser({
					email: user.email,
					id: user.uid,
					token: user.accessToken,
				}));
				navigate('/');
			})
			.catch(console.error)
	}
	return (
		
			<Form
				title="register"
				handleClick={handleRegister}
			/>
		
	)
}

export default Register;