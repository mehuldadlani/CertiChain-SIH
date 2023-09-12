import { Request, Response } from "express";
import { createUser, getUser, updateUser, deleteUser } from "./user.services";

const createUserController = async (req: Request, res: Response) => {
  try {
    const user = await createUser(req.body);
    res.status(201).json(user);
  } catch (err: any) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
};

const getUserController = async (req: Request, res: Response) => {
  try {
    const user = await getUser(req.params.walletAddress);
    if (!user) {
      return res
        .status(200)
        .json({ success: false, message: "User not found" });
    }
    res.status(200).json({ success: false, data: user });
  } catch (err: any) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
};

const updateUserController = async (req: Request, res: Response) => {
  try {
    const user = await updateUser(
      req.params.walletAddress,
      req.body.certificate
    );
    res.status(200).json(user);
  } catch (err: any) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
};

const deleteUserController = async (req: Request, res: Response) => {
  try {
    const user = await deleteUser(req.params.walletAddress);
    res.status(200).json(user);
  } catch (err: any) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
};

export {
  createUserController,
  getUserController,
  updateUserController,
  deleteUserController,
};
