var Student = /** @class */ (function () {
    //constructor
    function Student(sid, sname, course) {
        //properties
        this.sid = 0;
        this.sname = "";
        this.course = "";
        this.sid = sid;
        this.sname = sname;
        this.course = course;
    }
    Student.prototype.showDetail = function () {
        var str = "";
        str = "ID: ".concat(this.sid, ", Name: ").concat(this.sname, ", Course:").concat(this.course);
        console.log(str);
    };
    return Student;
}());
var s1 = new Student(3434, "scott", "jquery");
var s2 = new Student(4545, "tc", "angular");
s1.showDetail();
s2.showDetail();
