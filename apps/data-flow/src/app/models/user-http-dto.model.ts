import { AutoMap } from "@automapper/classes";
import { ApiAccountDto, ApiUserDto } from "@demo-lab/api-interfaces";
import { UserHttpAccountDto } from "./account-models/account-http.model";

/**
 * api model for user
 */
export class UserHttpDto implements ApiUserDto {
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

    @AutoMap(() => [UserHttpAccountDto])
    accounts: UserHttpAccountDto[];

    constructor(id: number, name: string, username: string, age: number, password: string, extraData: string, accounts: ApiAccountDto[]) {
        this.id = id;
        this.name = name;
        this.username = username;
        this.age = age;
        this.password = password;
        this.extraData = extraData;
        this.accounts = accounts;
    }

}


