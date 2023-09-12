import { Request, Response } from "express";
import {
  createRequest,
  getRequest,
  updateRequest,
  deleteRequest,
} from "./request.services";

const createRequestController = async (req: Request, res: Response) => {
  try {
    const request = await createRequest(req.body);
    res.status(201).json(request);
  } catch (err: any) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
};

const getRequestController = async (req: Request, res: Response) => {
  try {
    const request = await getRequest(req.params.id);
    if (!request) {
      return res
        .status(200)
        .json({ success: false, message: "Request not found" });
    }
    res.status(200).json({ success: true, data: request });
  } catch (err: any) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
};

const updateRequestController = async (req: Request, res: Response) => {
  try {
    const Request = await updateRequest(req.params.id, req.params.status);
    res.status(200).json(Request);
  } catch (err: any) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
};

const deleteRequestController = async (req: Request, res: Response) => {
  try {
    const request = await deleteRequest(req.params.id);
    res.status(200).json(request);
  } catch (err: any) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
};

export {
  createRequestController,
  getRequestController,
  updateRequestController,
  deleteRequestController,
};
