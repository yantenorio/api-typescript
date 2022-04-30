import { Request, Response } from "express";
import CreateCourseService from "./CreateCourseService";

// @route    GET /
//@desc  this function inserts values inside de functions and exports it
export function CreateCourse(request: Request, response: Response) {
    CreateCourseService.execute({
        name: "nodejs",
        educator: "yan",
        duration: 10 
    });

    return response.send();
}