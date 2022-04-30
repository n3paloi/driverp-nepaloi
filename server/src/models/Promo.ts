import * as mongoose from 'mongoose';

const { Schema } = mongoose;

const promoSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  code: {
    type: String,
    required: true
  },
  used: [
    {
      userId: Schema.Types.ObjectId,
      date: {
        type: Date,
        default: Date.now
      }
    }
  ],
  income: {
    type: Number,
    required: true
  },
  award: {
    type: Number,
    required: true
  }
});

export default mongoose.model('Promo', promoSchema);
