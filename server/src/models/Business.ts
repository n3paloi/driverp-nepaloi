import * as mongoose from 'mongoose';

const { Schema } = mongoose;

const pointSchema = new Schema({
  x: Number,
  y: Number,
  z: Number
});

const businessSchema = new Schema({
  ownerId: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  name: {
    type: String,
    required: true
  },
  cost: {
    type: Number,
    required: true
  },
  customCost: {
    type: Number,
    default: 0
  },
  forSale: {
    type: Boolean,
    default: true
  },
  position: {
    type: pointSchema,
    required: true
  },
  income: {
    type: Number,
    required: true
  },
  paymentTime: {
    type: Date,
    default: null
  },
  paidDays: {
    type: Number,
    default: 1
  }
});

export default mongoose.model('Business', businessSchema);
