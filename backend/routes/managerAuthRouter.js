require('dotenv').config()
const express = require('express')
const router = express.Router()
const authManagerController = require('../controllers/authManagerController')
const { authorize } = require('../middleware/authorize')

// Request: POST auth/manager/login
// Process: check the credentials
// Response: JWT in the cookie
router.route('/login')
  .post(authManagerController.login)

// Request: POST auth/manager/logout
// Process: Nothing
// Response: Remove the JWT from the cookie
router.route('/logout')
  .post(authManagerController.logout)

// Request: POST auth/manager/forgotPassword
// Process: Generate new password for manager, update the manager doucment with the new password, send email with new password to smeployee
// Response: Message that the email has been sent
router.route('/forgotPassword')
  .post(authManagerController.forgotPassword)

// Request: PUT auth/manager/updatePassword
// Process: check the credentials and update password in database
// Response: Message that the password has been updated
router.route('/updatePassword')
  .put(authManagerController.updatePassword) //TODO: Authorize

//  TODO: Delete this route. Only for testing
router.post('/test', authorize, (req, res) => {
  res.send(req.user)
})

module.exports = router
