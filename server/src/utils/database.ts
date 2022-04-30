import * as mongoose from 'mongoose';

function initDatabase() {
	mongoose
		.connect(process.env.DB_URI, {
			useNewUrlParser: true,
			useCreateIndex: true,
			useFindAndModify: false,
			useUnifiedTopology: true
		})
		.then(() => {
			console.log('MongoDB connected...');
			mp.events.call('databaseConnected');
		})
		.catch((err) => console.log(err));
}

export default initDatabase;