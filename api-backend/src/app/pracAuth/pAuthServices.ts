import { UserDto } from "./pDTO";

interface User {
  id: number;
  name: string;
  email: string;
}

class AuthService {
    private users: User[] = [];
    private id = 1;

    register(userData: UserDto) {
        const existinguser = this.users.find(
            (user) => user.email === userData.email
        );

        if(existinguser) {
            throw new Error ("User already registered")
        }

        const newUser = {
            id: this.id++,
            ...userData
        }

        this.users.push(newUser)
        return newUser

    }

 getAllUsers() {
    console.log(this.users)
    return this.users
 }

}

export const pAuthServices = new AuthService()