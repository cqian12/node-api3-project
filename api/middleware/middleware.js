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

  } catch(err) {
    
  }
}

function validateUser(req, res, next) {
  // DO YOUR MAGIC
}

function validatePost(req, res, next) {
  // DO YOUR MAGIC
}

// do not forget to expose these functions to other modules
module.exports = {
  logger,
  validatePost,
  validateUser,
  validateUserId
}