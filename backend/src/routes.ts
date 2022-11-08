import { Router } from "express";
import useController from "./controllers/useController";

const routes = Router()

routes.get("/user", useController.index)
routes.post("/user/create", useController.crete)


export default routes