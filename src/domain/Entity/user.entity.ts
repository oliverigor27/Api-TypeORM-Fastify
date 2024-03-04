import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User
{   
    @PrimaryGeneratedColumn()
    Id: number;

    @Column()
    Username: string;
    
    @Column()
    Email: string;

    @Column()
    createdAt: Date;

    constructor(id: number, username: string, email: string)
    {
        this.Id = id;
        this.Username = username;
        this.Email = email;
        this.createdAt = new Date();
    }
}