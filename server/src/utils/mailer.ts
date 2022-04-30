import * as nodemailer from 'nodemailer';

class Mailer {
	private transporter: any;

	sendMail(email: string, subject: string, text: string) {
		const mail = {
			subject,
			text,
			from: `NEPALOI PROJECT | HELP | ${'nepaloi.help@gmail.com'}`,
			to: `${email}`
		};

		this.transporter.sendMail(mail);
	}

	init() {
		this.transporter = nodemailer.createTransport({
			service: 'gmail',
			host: 'smtp.gmail.com',
			auth: {
				user: process.env.MAIL_USER,
				pass: process.env.MAIL_PASS
			}
		});

		this.transporter.verify((error) => {
			if (error) console.log(error);
			else console.log('Email server ready!');
		});
	}
}
const mailer = new Mailer();

export default mailer;