import * as mongoose from 'mongoose';
import autoIncrementId from './Counter';

const { Schema } = mongoose;

const contactSchema = new Schema({
	firstName: {
		type: String,
		required: true
	},
	lastName: {
		type: String,
		required: true
	},
	phone: {
		type: String,
		required: true
	}
});

export type IContact = {
	id: string;
	firstName: string;
	lastName: string;
	phone: string;
} & mongoose.Document;

type IUser = {
	uid: number;
	password: string;
	firstName: string;
	lastName: string;
	phone: {
		number: string;
		blacklist: string[];
		contacts: IContact[];
	};
	socialClub: string;
	serial: string;
	ip: string;
	loginAt: any;
	token?: {
		code: string;
		expiresDate: string;
	};
} & mongoose.Document;

const userSchema = new Schema({
	uid: {
		type: Number,
		unique: true
	},
	firstName: {
		type: String,
		required: true
	},
	lastName: {
		type: String,
		required: true
	},
	tempName: {
		firstName: String,
		lastName: String,
		expiresDate: Date
	},
	socialClub: {
		type: String,
		required: true
	},
	serial: String,
	ip: String,
	email: {
		type: String,
		unique: true,
		required: true
	},
	password: {
		type: String,
		required: true
	},
	adminLvl: {
		type: Number,
		default: 0
	},
	token: {
		code: String,
		expiresDate: Date
	},
	money: {
		cash: {
			type: Number,
			default: 0
		},
		bank: {
			type: Number,
			default: 0
		},
		drivepoints: {
			type: Number,
			default: 0
		}
	},
	cardNumber: Number,
	phone: {
		number: String,
		contacts: [contactSchema],
		blackList: [String]
	},
	mute: {
		type: Date,
		default: null
	},
	health: {
		type: Number,
		default: 100
	},
	hunger: {
		type: Number,
		default: 100
	},
	position: {
		type: Object,
		required: true
	},
	loginAt: Date,
	exitAt: Date,
	playedTime: {
		type: Number,
		default: 0
	},
	paydayTime: {
		type: Number,
		default: 0
	},
	registrationAt: {
		type: Date,
		default: Date.now
	},
	ban: {
		adminId: Schema.Types.ObjectId,
		reason: String,
		term: Date,
		perm: Boolean
	},
	licenses: [],
	character: {
		gender: {
			type: Number,
			default: 0
		},
		skindata: [],
		facedata: [],
		headOverlayData: [],
		tattoos: [],
		hair: {},
		brow: {},
		beard: {}
	},
	inventory: [],
	vehicleSlots: {
		type: Number,
		default: 1
	},
	jobs: {
		type: Object,
		default: {}
	}
});

userSchema.pre('save', function(next) {
	if (!this.isNew) {
		next();
		return;
	}

	autoIncrementId(this, 'uid', next);
});

const User = mongoose.model<IUser>('User', userSchema);

export default User;
