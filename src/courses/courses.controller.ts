import { Controller, Get } from '@nestjs/common';

@Controller('courses')
export class CoursesController {
    @Get('list/id')
    findAll() {
        return "Listagem de cursos";
    }
}

// localhost:3000/courses/list
