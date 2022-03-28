var express = require('express');
var router = express.Router();
const User = require('../models/user')

/* GET users listing. */

router.get('/', async (req, res) => {
  try {
    const user = await User.find()
    res.json(user)
  } catch (err) {
    res.json.status(500).json({ message: err.message })
  }
});
router.get('/:id', async (req, res) => {
  const user = await User.where('name').equals(`${req.params.id}`)
  res.json(user)
});

router.post('/', async (req, res) => {
  
let danas = new Date()
let date = danas.getFullYear() + '-' + (danas.getMonth() + 1) + '-' + danas.getDate()
console.log(date)

  let data = req.body
  console.log(data)
  const user = new User({ name: data.username, email: data.email, role: data.role, date: date })
  await user.save()
  console.log(user)
});

router.delete('/', async (req, res) => {
  console.log(req.body)
  await User.where('_id').equals(`${req.body.id}`).remove()
  res.send()
})

module.exports = router;
