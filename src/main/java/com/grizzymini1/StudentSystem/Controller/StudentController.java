package com.grizzymini1.StudentSystem.Controller;

import com.grizzymini1.StudentSystem.Model.Student;
import com.grizzymini1.StudentSystem.Service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/student")
@CrossOrigin
public class StudentController {
    @Autowired
    private StudentService studentService;

    @PostMapping("/add")
    public String add(@RequestBody Student student){
        studentService.saveStudent(student);
        return "New Student is Added";
    }

    @GetMapping("/getAll")
    public List<Student> getAllStudents(){
        return studentService.getAllStudent();

    }


}
