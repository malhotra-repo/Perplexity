import { Router } from "express";

const authrouter = Router();

authRouter.post("/register" , registerValidator , register);

authRouter.get('/verify-email', verifyEmail)

export default authRouter;