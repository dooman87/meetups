export class Login {
    email: string;
    password: string;

    toString() {
        return this.email + " " + this.password
    }
}