var Model = require('../models')

const medicines = {

  getAllMedicines: async (req, res) => {
    let medicines = []

    try {
      medicines = await Model.Medicines.findAll()
    } catch (err) {
      console.log(err)
    }
    res.json(medicines)
  },

  getMedicineByName: async (req, res) => {
    let medicine = []

    try {
      medicine = await Model.Medicines.findAll({
        where: {
          name: req.params.name
        }
      })
    } catch (err) {
      console.log(err)
    }
    res.json(medicine)
  },

  getMedicineById: async (req, res) => {
    let medicine = []

    try {
      medicine = await Model.Medicines.findAll({
        where: {
          id: req.params.id
        }
      })
    } catch (err) {
      console.log(err)
    }
    res.json(medicine)
  },

  createMedicine: async (req, res) => {
    let medicine = {}

    try {
      medicine = await Model.Medicines.create(req.body)
    } catch (err) {
      console.log(err)
    }
    res.json(medicine)
  },

  updateMedicine: async (req, res) => {
    let medicine = {}
    
    try {
      medicine = await Model.Medicines.update(req.body, {
        where: {
          id: req.params.id
        }
      })
    } catch (err) {
      console.log(err)
    }
    res.json(medicine)
  },

  deleteMedicine: async (req, res) => {
    await Model.Medicines.destroy({
      where: {
        id: req.params.id
      }
    })

    res.status(200).json({
      status: 'Success!'
    })
  }
}

module.exports = medicines
