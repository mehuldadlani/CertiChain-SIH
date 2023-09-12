import Request from "./request.schema";

const createRequest = async (request: any) => {
  try {
    const newRequest = new Request(request);
    const savedRequest = await newRequest.save();
    return savedRequest;
  } catch (err: any) {
    console.error(err);
    throw new Error(err);
  }
};

const getRequest = async (id: string) => {
  try {
    const request = await Request.findById(id);
    return request;
  } catch (err: any) {
    console.error(err);
    throw new Error(err);
  }
};

const updateRequest = async (id: string, status: string) => {
  try {
    const request = await Request.findByIdAndUpdate(id, { status: status });
    const updatedRequest = await request?.save();
    return updatedRequest;
  } catch (err: any) {
    console.error(err);
    throw new Error(err);
  }
};

const deleteRequest = async (id: string) => {
  try {
    const request = await Request.findById(id);
    const deletedRequest = await request?.deleteOne();
    return deletedRequest;
  } catch (err: any) {
    console.error(err);
    throw new Error(err);
  }
};

export { createRequest, getRequest, updateRequest, deleteRequest };
