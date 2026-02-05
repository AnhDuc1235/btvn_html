import { Login, User } from "../types/user.type"

const user: User[] = [
    {
        id: 1,
        name: "Anh Đức",
        email: "anhduc@gmail.com",
        password: "duc123"
    }
]

export const authService = {
    login(data: Login) {
        const userData = user.find(user => user.email === data.email && user.password === data.password);
        return userData
    },
}