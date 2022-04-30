interface Course {
    name: string;
    duration: number; 
    educator: string;
}

class CreateCourseService {
    execute({ duration, educator, name }: Course) {
        console.log();
    }
}

//export the function instenced already
export default new CreateCourseService()