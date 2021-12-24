import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class User {

    @PrimaryGeneratedColumn('uuid')
    id: number;

    @Column()
    first_name: string;

    @Column()
    last_name: string;

    @Column()
    age: number;

}
