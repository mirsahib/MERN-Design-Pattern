import express from 'express'
import companyCtrl from '../controllers/company.controller'
import authCtrl from '../controllers/auth.controller'

const router = express.Router()

router.route('/api/company')
  .get(companyCtrl.list)
  .post(companyCtrl.create)

router.route('/api/company/:companyId')
  .get(authCtrl.requireSignin, companyCtrl.read)
  .put(authCtrl.requireSignin, authCtrl.hasAuthorization, companyCtrl.update)
  .delete(authCtrl.requireSignin, authCtrl.hasAuthorization, companyCtrl.remove)

router.param('companyId', companyCtrl.companyByID)

export default router