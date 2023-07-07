import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:5000/api',
})

export const insertResponse = payload => api.post(`/response`, payload)
export const getAllResponses = () => api.get(`/responses`)
export const updateResponseById = (id, payload) => api.put(`/response/${id}`, payload)
export const deleteResponseById = id => api.delete(`/response/${id}`)
export const getResponseById = id => api.get(`/response/${id}`)

const apis = {
  insertResponse,
  getAllResponses,
  updateResponseById,
  deleteResponseById,
  getResponseById,
}

export default apis
