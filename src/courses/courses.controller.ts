import { Controller, Get, Param } from '@nestjs/common';

@Controller('courses')
export class CoursesController {
    @Get()
    findAll(): string {
        return 'Listagem de cursos';
    }

    @Get(':id')
    findOne(@Param('id') id: string): string {
        return `Curso com ID ${id}`;
    }
}

