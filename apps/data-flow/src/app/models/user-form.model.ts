import { FormControl } from "@angular/forms";
import { AutoMap } from "@automapper/classes";

export class UserDto {
    @AutoMap()
    id?: FormControl<number>;
    @AutoMap()
    name: FormControl<string>
    @AutoMap()
    username: FormControl<string>
    @AutoMap()
    age: FormControl<number>;

    constructor(id: number, name: string, username: string, age: number) {
        this.id = new FormControl(id, { nonNullable: true });
        this.name = new FormControl(name, { nonNullable: true });
        this.username = new FormControl(username, { nonNullable: true });
        this.age = new FormControl(age, { nonNullable: true });
    }
}
