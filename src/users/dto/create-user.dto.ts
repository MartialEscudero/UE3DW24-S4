export class CreateUserDto {
    id: number;
    firstname: string;
    lastname: string;
    password: string;
    email: string;
    roles: string;
    createdAt: Date;
    updatedAt: Date;
}
