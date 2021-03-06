const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    unique: true,
    required: true,
    trim: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error('Invalid email!')
      }
    }
  },
  password: {
    type: String,
    unique: true,
    minlength: 7,
    required: true,
    validate(value) {
      if (value.toLowerCase().includes('password')) {
        throw new Error("Can't have password in password!")
      }
    }
  },
  tokens : [{
    token: {
      type: String,
      required: true
    }
  }]
})

userSchema.methods.toJSON = function() {
  const user = this
  const userObj = user.toObject()

  delete userObj.password
  delete userObj.tokens

  return userObj
}

// methods are used for User instances
userSchema.methods.generateAuthToken = async function() {
  const user = this
  const token = jwt.sign({ _id: user._id.toString()}, process.env.JWT_SECRET)

  user.tokens = user.tokens.concat({ token })
  await user.save()

  return token

}

// statics is used for User model
userSchema.statics.findByCredentials = async (email, password) => {
  const user = await User.findOne({ email })

  if (!user) {
    throw new Error('Unable to login')
  }

  const isMatch = await bcrypt.compare(password, user.password)

  if (!isMatch) {
    throw new Error('Unable to login')
  }

  return user
}

userSchema.pre('save', async function (next) {
    const user = this

    if (user.isModified('password')) {
      user.password = await bcrypt.hash(user.password, 8)
    }

    next()
})

const User = mongoose.model("User", userSchema)


module.exports = User
