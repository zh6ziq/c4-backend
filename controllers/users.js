var Model = require('../models')

const users = {
  
  getAllUsers: async (req, res) => {
    let users = []

    try {
      users = await Model.Users.findAll()
    } catch (err) {
      console.log(err)
    }
    res.json(users)
  },

  getUserByPhone: async (req, res) => {
    let user = []

    try {
      user = await Model.Users.findAll({
        where: {
          phone: req.params.phone
        }
      })
    } catch (err) {
      console.log(err)
    }
    res.json(user)
  },

  getUserById: async (req, res) => {
    let user = []

    try {
      user = await Model.Users.findAll({
        where: {
          id: req.params.id
        }
      })
    } catch (err) {
      console.log(err)
    }
    res.json(user)
  },

  createUser: async (req, res) => {
    let user = {}
    
    try {
      user = await Model.Users.create(req.body)
    } catch (err) {
      console.log(err)
    }
    res.json(user)
  },

  updateUser: async (req, res) => {
    let user = {}

    try {
      user = await Model.Users.update(req.body, {
        where: {
          id: req.params.id
        }
      })
    } catch (err) {
      console.log(err)
    }
    res.json(user)
  },

  deleteUser: async (req, res) => {
    await Model.Users.destroy({
      where: {
        id: req.params.id
      }
    })

    res.status(200).json({
      status: 'Success!'
    })
  }
}

module.exports = users
