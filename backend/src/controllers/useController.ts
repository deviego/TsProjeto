import { Request, Response } from "express";
import EmailServices from "../services/EmailServices";
const user = [
  {
    name: "deviego",
    email: "deviego4@gmail.com",
  },
];
export default {
  async index(req: Request, res: Response) {
    return res.json(user);
  },

  async crete(req: Request, res: Response) {
    const emailServices = new EmailServices();
    emailServices.sendEmail({
      to: {
        name: "deviego",
        email: "deviego4@gmail.com",
      },
      message: {
        subject: "bem vindo",
        body: "seja bem vindo ao sistema",
      },
    });
    res.send();
  },
};
