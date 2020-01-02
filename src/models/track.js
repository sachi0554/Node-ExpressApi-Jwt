const mongooes = require('mongoose');

const pointSchema= new mongooes.Schema({
  timestamp:Number,
  coords:{
      lattitude:Number,
      longittiude:Number,
      altitude:Number,
      accuracy:Number,
      heading:Number,
      speed:Number
  }
});

const trackSchema= new mongooes.Schema({
  userId:{
      type:mongooes.Schema.Types.ObjectId,
      ref:'User'
  },
  name:{
      type:String,
      default:''
  },
  locations:[pointSchema]
});

mongooes.model('Track', trackSchema);