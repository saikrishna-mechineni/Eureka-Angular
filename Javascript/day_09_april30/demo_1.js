function Student(roll,name, add, course){
    this.roll = roll;
    this.name = name;
    this.course = course;
    this.add = add;
}

let std1 = new Student(101,'sai','milwaukee','cse')
let std2 = new Student(102,'krishna','wisconsin','masters')

console.log(std1,std2);


class Student2{
    constructor(roll,name, add, course){
        this.roll = roll;
        this.name = name;
        this.add = add;
        this.course = course;
    }
}

let std3 = new Student2(103,'rohtih','')
