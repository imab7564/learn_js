//object De-structure 
const course={
    coursename:"js in hindi",
    price:"999",
    courseInstructor:"abhishek"
}

//course.courseInstructor

const {courseInstructor}=course //const{kya nikalna h}=kahan se nikalna h
console.log(courseInstructor);

//destructure
const{courseInstructor:inst}=course
console.log(inst);

