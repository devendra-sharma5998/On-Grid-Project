const Router=require('express')
const router=Router()
const UserController=require('../Controller/UserController')

router.post('/register',UserController.register)
router.post('/login',UserController.Login)




module.exports=router