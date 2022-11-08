import { Router, Request, Response } from "express";
import { addItem, getItem, getItems } from "../controllers/items";

const router = Router();

// http://localhost:3000/items [GET|POST|DELETE|PUT]
router.get('/', getItem);
router.get('/', getItems);
router.post('/', addItem);

export { router };
