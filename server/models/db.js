const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://gmostertpot:nrusWoxXJWkNQAgk@clusterj.equocxz.mongodb.net/Jubilee?retryWrites=true&w=majority&appName=ClusterJ', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log('Connected to MongoDB');
})
.catch((error) => {
  console.error('Error connecting to MongoDB:', error);
});


module.exports = mongoose;
