export class CreateUserDto {
    id: number;
    firstname: string;
    lastname: string;
    password: string;
    email: string;
    role: string;
    createdAt: Date;
    updatedAt: Date;
}
