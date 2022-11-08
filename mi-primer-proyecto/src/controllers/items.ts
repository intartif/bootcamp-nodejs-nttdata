import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handler";

const getItem = ({ body }: Request, response: Response) => {
  try {

  } catch (e) {
    handleHttp(response, "ERROR_GET_ITEM");
  }
};

const getItems = ({ body }: Request, response: Response) => {
  try {

  } catch (e) {
    handleHttp(response, "ERROR_GET_ITEMS");
  }
};

const updateItem = ({ body }: Request, response: Response) => {
  try {

  } catch (e) {
    handleHttp(response, "ERROR_UPDATE_ITEM");
  }
};

const addItem = ({ body }: Request, response: Response) => {
  try {
    response.send(body);
  } catch (e) {
    handleHttp(response, "ERROR_ADD_ITEM");
  }
};

const deleteItem = ({ body }: Request, response: Response) => {
  try {

  } catch (e) {
    handleHttp(response, "ERROR_DELETE_ITEM");
  }
};

export { getItem, getItems, addItem, updateItem, deleteItem };
