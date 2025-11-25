import { Controller } from '@nestjs/common';

@Controller('courses')
export class CoursesController {
    findAll() {
        return "Listagem de cursos";
    }
}
