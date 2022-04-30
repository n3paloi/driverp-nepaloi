import * as moment from 'moment';
import { escape } from 'lodash';
import User from '../../models/User';
import Mailer from '../../utils/mailer';

type Token = {
	code: string;
	expiresDate: string;
};

class AuthToken {
	isValid(token: Token, code: string) {
		return (
			token &&
			token.code === escape(code) &&
			moment().diff(token.expiresDate, 'minutes') < 0
		);
	}

	async send(type: 'login' | 'recovery', email: string) {
		const user = await User.findOne({ email });

		if (!user || !user.token || this.isValid(user.token, user.token.code)) return;

		const code = Math.floor(100000 + Math.random() * 900000).toString();

		await User.findOneAndUpdate(
			{ email },
			{
				$set: {
					token: {
						code,
						expiresDate: Date.now() + 300000
					}
				}
			}
		);

		Mailer.sendMail(
			email,
			type === 'login' ? 'Вход с неизвестного устройства' : 'Восстановление пароля',
			type === 'login'
				? `Код для подтверждения авторизации: ${code}`
				: `Код восстановления: ${code}`
		);
	}
}

export default new AuthToken();
