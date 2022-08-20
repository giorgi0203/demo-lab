import { Injectable } from '@angular/core';
import { classes } from '@automapper/classes';
import { createMapper, Mapper } from '@automapper/core';

@Injectable({
    providedIn: 'root',
})
export class MapperService {
    private static mapper: Mapper;
    // constructor() { }

    public static getMapper() {
        if (!MapperService.mapper) {
            MapperService.mapper = createMapper({ strategyInitializer: classes(), });
        }
        return MapperService.mapper
    }
}
