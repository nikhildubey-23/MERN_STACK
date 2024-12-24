// De-Structure In Object 

const  course = {
    coursename : "jsHindi",
    price : 999,
    courseInstructor : "Nikhil"
}

const {courseInstructor} = course
console.log(courseInstructor)

// suppose this name is too large we want a shorter name
const {courseInstructor : instructor} = course
console.log(instructor)
