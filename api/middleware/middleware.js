const Users = require('./../users/users-model')

function logger(req, res, next) {
  // DO YOUR MAGIC
  const time = new Date().toLocaleString()

  console.log(`request method:${req.method}
  \n request url: ${req.originalURL}
  \n timestamp: ${time}`)
  next()
}

async function validateUserId(req, res, next) {
  const { id } = req.params

  try {
    const user = await Users.getById(id)

    if (!user) {
      res.status(404).json({message:"user not found"})
    } else {
      req.user = user
      next()
    }
  } catch(err) {
    next(err)
  }
}

function validateUser(req, res, next) {
  const { name } = req.body

  if (!name || name.trim() === '' || typeof name !== 'string') {
    res.status(400).json({message: "missing required name field"})
  } else {
    req.name = name.trim()
    next()
  }
}

function validatePost(req, res, next) {
  const { text } = req.body

  if (!text || text.trim() === '' || typeof text !== 'string') {
    res.status(400).json({message: "missing required text field"})
  } else {
    req.text = text.trim()
    next()
  }
}

// do not forget to expose these functions to other modules
module.exports = {
  logger,
  validatePost,
  validateUser,
  validateUserId
}