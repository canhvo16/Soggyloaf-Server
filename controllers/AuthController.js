const { User } = require('../models')
const middleware = require('../middleware')

const Login = async (req, res) => {
  try {
    const user = await User.findOne({
      where: { email: req.body.email },
      raw: true
    })
    if (
      user &&
      (await middleware.comparePassword(user.passwordDigest, req.body.password))
    ) {
      let payload = {
        id: user.id,
        email: user.email
      }
      let token = middleware.createToken(payload)
      return res.send({ user: payload, token })
    }
    res.status(401).send({ status: 'Error', msg: 'Unauthorized' })
  } catch (error) {
    throw error
  }
}

const Register = async (req, res) => {
  try {
    const existingUser = await User.findOne({
      where: { email: req.body.email }
    })
    if (existingUser) {
      res.status(201).send({
        msg: 'Account with this email already exists! Please register with a unique email!'
      })
    } else {
      const { email, password, name } = req.body
      let passwordDigest = await middleware.hashPassword(password)
      const user = await User.create({ email, passwordDigest, name })
      res.send(user)
    }
  } catch (error) {
    throw error
  }
}

const CheckSession = async (req, res) => {
  const { payload } = res.locals
  res.send(payload)
}

const updatePassword = async (req, res) => {
  try {
    const user = await User.findOne({ where: { email: req.body.email } })
    if (
      user &&
      (await middleware.comparePassword(
        user.dataValues.passwordDigest,
        req.body.oldPassword
      ))
    ) {
      let passwordDigest = await middleware.hashPassword(req.body.newPassword)
      await user.update({ passwordDigest })
      return res.send({ status: 'Success', payload: user })
    }
    res.status(401).send({ status: 'Error', msg: 'Invalid credentials!' })
  } catch (error) {
    throw error
  }
}

const updateName = async (req, res) => {
  try {
    let name = req.body.name
    const user = await User.findOne({ where: { email: req.body.email } })
    if (user) {
      await user.update({ name })
      res.send({ status: 'Success', msg: 'Name updated!' })
    }
    else { res.status(401).send({ status: 'Error', msg: 'Invalid email!' }) }
  } catch (error) {
    throw error
  }
}

const destroyAccount = async (req, res) => {
  try {
    await User.destroy({ where: { id: req.params.id } })
    res.send({ status: 'Success', msg: 'Account Destroyed!' })
  } catch (error) {
    throw error
  }
}

const getUserById = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id)
    res.send(user)
  } catch (error) {
    throw error
  }
}

module.exports = {
  Login,
  Register,
  CheckSession,
  updatePassword,
  updateName,
  destroyAccount,
  getUserById
}
