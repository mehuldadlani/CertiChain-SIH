import User from "./user.schema";

const createUser = async (user: any) => {
  try {
    const newUser = new User(user);
    const savedUser = await newUser.save();
    return savedUser;
  } catch (err: any) {
    console.error(err);
    throw new Error(err);
  }
};

const getUser = async (walletAddress: string) => {
  try {
    const user = await User.findOne({ walletAddress: walletAddress });
    return user;
  } catch (err: any) {
    console.error(err);
    throw new Error(err);
  }
};

const updateUser = async (walletAddress: string, certificate: string) => {
  try {
    if (!certificate) {
      throw new Error();
    }
    const user = await User.findOne({ walletAddress: walletAddress });
    user?.certificates.push(certificate);
    const updatedUser = await user?.save();
    return updatedUser;
  } catch (err: any) {
    console.error(err);
    throw new Error(err);
  }
};

const deleteUser = async (walletAddress: string) => {
  try {
    const user = await User.findOne({ walletAddress: walletAddress });
    const deletedUser = await user?.deleteOne();
    return deletedUser;
  } catch (err: any) {
    console.error(err);
    throw new Error(err);
  }
};

export { createUser, getUser, updateUser, deleteUser };
