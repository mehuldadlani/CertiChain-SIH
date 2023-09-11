import Organisation from "./organisation.schema";

const createOrganisation = async (organisation: any) => {
  try {
    const newOrganisation = new Organisation(organisation);
    const savedOrganisation = await newOrganisation.save();
    return savedOrganisation;
  } catch (err: any) {
    console.error(err);
    throw new Error(err);
  }
};

const getOrganisation = async (walletAddress: string) => {
  try {
    const organisation = await Organisation.findOne({
      walletAddress: walletAddress,
    });
    return organisation;
  } catch (err: any) {
    console.error(err);
    throw new Error(err);
  }
};

const getAllOrganisations = async () => {
  try {
    const organisations = await Organisation.find({});
    return organisations;
  } catch (err: any) {
    console.error(err);
    throw new Error(err);
  }
};

const updateOrganisation = async (
  walletAddress: string,
  certificate: string
) => {
  try {
    const organisation = await Organisation.findOne({
      walletAddress: walletAddress,
    });
    organisation?.certificates.push(certificate);
    const updatedOrganisation = await organisation?.save();
    return updatedOrganisation;
  } catch (err: any) {
    console.error(err);
    throw new Error(err);
  }
};

const deleteOrganisation = async (walletAddress: string) => {
  try {
    const organisation = await Organisation.findOne({
      walletAddress: walletAddress,
    });
    const deletedOrganisation = await organisation?.remove();
    return deletedOrganisation;
  } catch (err: any) {
    console.error(err);
    throw new Error(err);
  }
};

export {
  createOrganisation,
  getOrganisation,
  getAllOrganisations,
  updateOrganisation,
  deleteOrganisation,
};
