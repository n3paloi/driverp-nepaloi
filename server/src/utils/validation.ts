import * as Validator from 'validator';
import User from '../models/User';

export async function validateName(firstName: string, lastName: string) {
	let error;

	if (Validator.isEmpty(firstName) || Validator.isEmpty(lastName)) {
		error = 'Введите имя и фамилию';
	}

	const regexp = /^[a-z\s]+$/i;

	if (!regexp.test(firstName) || !regexp.test(lastName)) {
		error = 'Используйте только латинские символы';
	}

	const isExist = await User.findOne({ firstName, lastName }).countDocuments();

	if (isExist) {
		error = 'Имя и фамилия уже используется';
	}

	return error;
}