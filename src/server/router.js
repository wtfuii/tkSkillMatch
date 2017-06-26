import express from 'express'
import Specialist, {SkillSchema} from './models/Specialist'

const router = express.Router()

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'ThyssenKrupp Match' })
})

router.get('/user/:email', (req, res, next) => {
  const email = req.params.email
  const user = Specialist.findOne({email: email}, function (err, user) {
    logError(err)
    res.json(user)
  })
})

router.post('/user', (req, res, next) => {
  const newUser = new Specialist(req.body)
  newUser.save(logError)
  res.sendStatus(200)
})

router.post('/user/:email/skill', (req, res, next) => {
  const email = req.params.email
  Specialist.findOne({email: email}, function (err, user) {
    logError(err)
    user.skills.push(req.body)
    user.save(logError)
    res.json(user)
  })
})

router.put('/user/:email/skill', (req, res, next) => {
  const email = req.params.email
  Specialist.findOne({email: email}, function (err, user) {
    logError(err)
    const skill = user.skills.id(req.body._id)
    Object.assign(skill, req.body)
    user.save(logError)
    res.json(user)
  })
})

router.delete('/user/:email/skill/:id', (req, res, next) => {
  const email = req.params.email
  const id = req.params.id
  Specialist.findOne({email: email}, function (err, user) {
    logError(err)
    const skill = user.skills.id(id)
    console.log(skill)
    skill.remove()
    user.save()
    res.sendStatus(200)
  })
})

function logError(err) {
  if (err) {
    console.log(err)
  }
}

export default router
