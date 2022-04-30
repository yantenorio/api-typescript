interface Course {
    name: string;
    duration: number; 
    educator: string;
}

// @route    GET /
//@desc this function creates the course using the interface params 
class CreateCourseService {
    execute({ duration, educator, name }: Course) {
        console.log();
    }
}

//export the function instenced already
export default new CreateCourseService()