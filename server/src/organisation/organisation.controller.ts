import { Response, Request } from "express";
import {
  createOrganisation,
  getOrganisation,
  updateOrganisation,
  deleteOrganisation,
  getAllOrganisations,
} from "./organisation.services";

const createOrganisationController = async (req: Request, res: Response) => {
  try {
    const organisation = await createOrganisation(req.body);
    res.status(201).json(organisation);
  } catch (err: any) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
};

const getAllOrganisationsController = async (req: Request, res: Response) => {
  try {
    const organisations = await getAllOrganisations();
    res.status(200).json(organisations);
  } catch (err: any) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
};

const getOrganisationController = async (req: Request, res: Response) => {
  try {
    const organisation = await getOrganisation(req.params.walletAddress);
    if (!organisation) {
      return res
        .status(200)
        .json({ success: false, message: "Organisation not found" });
    }
    res.status(200).json({ success: true, data: organisation });
  } catch (err: any) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
};

const updateOrganisationController = async (req: Request, res: Response) => {
  try {
    const organisation = await updateOrganisation(
      req.params.walletAddress,
      req.body.certificate
    );
    res.status(200).json(organisation);
  } catch (err: any) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
};

const deleteOrganisationController = async (req: Request, res: Response) => {
  try {
    const organisation = await deleteOrganisation(req.params.walletAddress);
    res.status(200).json(organisation);
  } catch (err: any) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
};

export {
  createOrganisationController,
  getOrganisationController,
  getAllOrganisationsController,
  updateOrganisationController,
  deleteOrganisationController,
};
