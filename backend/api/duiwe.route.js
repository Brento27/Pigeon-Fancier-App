import express from "express";
import DuiweController from "./duiwe.controller.js";


const router = express.Router(); // get access to express router

router.route("/").get(DuiweController.apiGetDuiwe);
router.route("/id/:id").get(DuiweController.apiGetDuiweById)
router.route("/letters").get(DuiweController.apiGetLetters)

export default router;
