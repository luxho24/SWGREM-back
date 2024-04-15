import { Router } from 'express';
import { newUser } from '../controllers/user.controller/userRegister.contrller';
import { loginUser } from '../controllers/user.controller/userSingIn.controller';


const userRoutes =Router();

userRoutes.post('/', newUser);
userRoutes.post('/login', loginUser);

 
export default userRoutes;