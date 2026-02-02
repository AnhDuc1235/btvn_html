"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authService = void 0;
const users = [];
exports.authService = {
    register(userData) {
        const sameEmail = users.some((user) => user.email === userData.email);
        if (sameEmail) {
            console.log("chua tay dau");
            throw new Error("Email da ton tai");
        }
        else {
            users.push(userData);
            return users;
        }
    },
    login(userData) {
        const checkUser = users.find((user) => user.email === userData.email && user.password === userData.password);
        if (checkUser) {
            return checkUser;
        }
        else {
            throw new Error("Email hoac Password khong dung");
        }
    },
};
//# sourceMappingURL=auth.service.js.map