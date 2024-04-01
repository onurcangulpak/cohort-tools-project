const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
<<<<<<< HEAD
  password: { type: String, required: true },
  name: { type: String, required: true },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
=======
  password: {type: String, required: true},
  name: {type: String, required: true}
});

const User = mongoose.model('User', userSchema)

module.exports = User
>>>>>>> ee4ed805658e728898429b702ddfb0ed5767fa94
