import * as mongoose from 'mongoose';

const { Schema } = mongoose;

const memberSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  },
  rank: {
    type: Number,
    default: 1
  },
  statistics: {
    type: Object,
    default: {}
  }
});

const factionSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  money: {
    type: Number,
    default: 0
  },
  members: [memberSchema],
  inventory: []
});

export default mongoose.model('Faction', factionSchema);
