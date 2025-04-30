class Student{
    constructor(roll, fname, lname, add){
        this.roll = roll;
        this.fname = fname;
        this.lname = lname;
        this.add = add;
    }

    fullName(){
        console.log(this.fname + " "+ this.lname);
    }
}

let std1 = new Student(101, 'rohith','gudelli','San bernardino')
console.log(std1);
std1.fullName();