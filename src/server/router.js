import express from 'express'
import Specialist from './models/Specialist'

const router = express.Router()

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'ThyssenKrupp Match' })
})

router.get('/user/:email', (req, res, next) => {
  const email = req.params.email
  const user = Specialist.findOne({email: email}, logError);
  res.json(user)
})

router.post('/user', (req, res, next) => {
  const newUser = new Specialist(req.body)
  newUser.save(logError)
  res.sendStatus(200)
})

router.post('/user/:email/skill', (req, res, next) => {
  const email = req.params.email
  Specialist.findOne({email: email}).exec(function (err, user) {
    logError(err)
    user.skills.push(req.body)
    user.save(logError)
    res.json(user)
  })
})

function logError(err) {
  if (err) {
    console.log(err)
  }
}

export default router
