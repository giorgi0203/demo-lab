import { AutoMap } from "@automapper/classes";

/**
 * api model for user
 */
export class UserHttpDto {
    @AutoMap()
    id: number;
    @AutoMap()
    name: string;
    @AutoMap()
    username: string;
    @AutoMap()
    age: number;

    password: string;

    extraData: string;

    constructor(id: number, name: string, username: string, age: number, password: string, extraData: string) {
        this.id = id;
        this.name = name;
        this.username = username;
        this.age = age;
        this.password = password;
        this.extraData = extraData;
    }
}
