interface Course {
    name: string;
    duration?: number; //it will define this attribute as optional 
    educator: string;
}

// @route    GET /
//@desc this function creates the course using the interface attribute 
class CreateCourseService {
    execute({ duration, educator, name }: Course) {
        console.log();
    }
}

//export the function instenced already
export default new CreateCourseService()