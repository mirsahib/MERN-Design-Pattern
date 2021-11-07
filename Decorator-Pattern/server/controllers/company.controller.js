import Company from '../models/company.model'
import extend from 'lodash/extend'
import errorHandler from './../helpers/dbErrorHandler'

const create = async (req, res) => {
  console.log('company body',req.body)
  const company = new Company(req.body)
  console.log('model company',company)
  try {
    await company.save()
    return res.status(200).json({
      message: "Company created successfully!"
    })
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err)
    })
  }
}

/**
 * Load company and append to req.
 */
const companyByID = async (req, res, next, id) => {
  try {
    let company = await Company.findById(id)
    if (!company)
      return res.status('400').json({
        error: "company not found"
      })
    req.profile = company
    next()
  } catch (err) {
    return res.status('400').json({
      error: "Could not retrieve company"
    })
  }
}

const read = (req, res) => {
  req.profile.hashed_password = undefined
  req.profile.salt = undefined
  return res.json(req.profile)
}

const list = async (req, res) => {
  try {
    let companys = await Company.find()
    res.json(companys)
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err)
    })
  }
}

const update = async (req, res) => {
  try {
    let company = req.profile
    company = extend(company, req.body)
    company.updated = Date.now()
    await company.save()
    company.hashed_password = undefined
    company.salt = undefined
    res.json(company)
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err)
    })
  }
}

const remove = async (req, res) => {
  try {
    let company = req.profile
    let deletedCompany = await company.remove()
    deletedCompany.hashed_password = undefined
    deletedCompany.salt = undefined
    res.json(deletedCompany)
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err)
    })
  }
}

export default {
  create,
  companyByID,
  read,
  list,
  remove,
  update
}