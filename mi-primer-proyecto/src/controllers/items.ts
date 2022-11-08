import { Request, Response } from "express";
import { insertCar, getCar } from "../services/item";
import { handleHttp } from "../utils/error.handler";

const getItem = async ({ params }: Request, res: Response) => {
  try {
    const { id } = params;
    const response = await getCar(id);
    const data = response ? response : 'NOT_FOUND';
    res.send(data);
  } catch (e) {
    handleHttp(res, "ERROR_GET_ITEM", e);
  }
};

const getItems = ({ body }: Request, res: Response) => {
  try {

  } catch (e) {
    handleHttp(res, "ERROR_GET_ITEMS", e);
  }
};

const updateItem = ({ body }: Request, res: Response) => {
  try {

  } catch (e) {
    handleHttp(res, "ERROR_UPDATE_ITEM", e);
  }
};

const addItem = async ({ body }: Request, res: Response) => {
  try {
    const responseItem = await insertCar(body);
    res.send(responseItem);
  } catch (e) {
    handleHttp(res, "ERROR_ADD_ITEM", e);
  }
};

const deleteItem = ({ body }: Request, res: Response) => {
  try {

  } catch (e) {
    handleHttp(res, "ERROR_DELETE_ITEM", e);
  }
};

export { getItem, getItems, addItem, updateItem, deleteItem };
