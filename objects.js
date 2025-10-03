// const student ={
//     fullname:"Abiko Resty",
//     yob:2001,
//     regNo:"M25B13/044",
//     AccessNo:"B33453"
//     gender:"FEMALE",
//     phone:"0786335853"
//     isRegistered: false;
// };
// console.log(student.regNo,student.fullname);
// console.log(student.yob,student.AccessNo,student.isRegistered);

class student {
    constructor(fullname,yob,accessNo,regNo,gender,phone,isRegistered){
        this.fullname = fullname,
        this.yob = yob,
        this.accessNo = accessNo,
        this.gender = gender,
        this.phone = phone,
        this.isRegistered =isRegistered,
    }
}
StudentAge = function(){
    // AGE = CURRENT YEAR - STUDENT YEAR OF BIRTH
    const currentyear =newdate().getfullyear();
    const age =currentyear -yob;
    console.log("The student is $(age) year old")
}

const student = newStudent1 ( 
    "Abiko Resty",
    "B33453",
    "M25B13/044",
    "2001",
    "Female",
    "078633583",
    true
);

const student = newStudent2(
    "Napasiri Juliet",
    "B33496",
    "M25B13/053",
    "2005",
    "Female",
    "0787938158",
    true
);