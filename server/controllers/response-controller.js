import Response from '../models/response-model.js'

const createResponse = (req, res) => {
  const body = req.body

  if (!body) {
    return res.status(412).json({
      success: false,
      message: 'The client has indicated preconditions in its headers which the server does not meet.',
    })
  }

  const response = new Response(body)

  if (!response) {
    return res.status(422).json({
      success: false,
      message: 'The request was well-formed but was unable to be followed due to semantic errors.'
    })
  }

  response.save().then(() => {
    return res.status(201).json({
      id: response._id,
      success: true,
      message: 'The request succeeded, and a new resource was created as a result.',
    })
  }).catch(error => {
    return res.status(400).json({
      error,
      success: false,
      message: 'The server cannot or will not process the request due to something that is perceived to be a client error.',
    })
  })
}

const updateResponse = async (req, res) => {
  const body = req.body

  if (!body) {
    return res.status(412).json({
      success: false,
      message: 'The client has indicated preconditions in its headers which the server does not meet.',
    })
  }

  const response = await Response.findOneAndUpdate({
    _id: req.params.id
  }, {
    code: body.code,
    score: body.score,
    message: body.message
  }, {
    new: true
  })

  if (!response) {
    return res.status(404).json({
      success: false,
      message: 'The server cannot find the requested resource.',
    })
  }

  return res.status(200).json({
    id: response._id,
    success: true,
    message: 'The request succeeded.',
  })
}

const deleteResponse = async (req, res) => {
  const response = await Response.findOneAndDelete({ _id: req.params.id })
  if (!response) {
    return res.status(202).json({ success: true })
  }
  return res.status(200).json({ success: true, data: response })
}

const getResponse = async (req, res) => {
  const response = await Response.findOne({ _id: req.params.id })
  if (!response) {
    return res.status(404).json({ success: false })
  }
  return res.status(200).json({ success: true, data: response })
}

const getResponses = async (_req, res) => {
  const responses = await Response.find({})
  if (!responses.length) {
    return res.status(204).json({ success: true })
  }
  return res.status(200).json({ success: true, data: responses })
}

export {
  createResponse,
  updateResponse,
  deleteResponse,
  getResponse,
  getResponses
}
