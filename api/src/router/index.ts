import { Router } from "express";

const mainRouter = Router();

mainRouter.get("/", (req, res) => {
  res.send("API is running 🚀");
});

export default mainRouter;
