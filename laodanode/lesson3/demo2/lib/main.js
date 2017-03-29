var stu = require('./student');
var tea = require('./teacher');
var classes= function(){
	return{
		"student":stu.createStudent("fangfang"),
		"teacher":tea.createTeacher("dangdang")
	}
}
module.exports.classes=classes;