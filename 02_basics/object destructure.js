//****************** OBJECT DESTRUCTURE ************ */
const course = {
    coursename : "js in hindi",
    courseprice : "999",
    courseinstructor : "Abhay"
}

course.courseinstructor // there is anotherway also

const {courseinstructor} = course
console.log(courseinstructor); // output :- Abhay

const {courseinstructor : instructor} = course
console.log(instructor); // output :- Abhay

