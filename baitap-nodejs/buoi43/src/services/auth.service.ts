import { Login, User } from "../types/user.type";

const users: User[] = []

export const authService = {
  register(userData: User) {
    const sameEmail = users.some(
      (user) => user.email === userData.email
    );
    if (sameEmail){
        console.log("chua tay dau")
        throw new Error("Email da ton tai");

    } else {
        users.push(userData);
        return users
    }
  },
  login(userData: Login) {
    const checkUser = users.find(
      (user) => user.email === userData.email && user.password === userData.password
    );
    if (checkUser){
        return checkUser
    } else {
        throw new Error("Email hoac Password khong dung")
    }
  },
};
