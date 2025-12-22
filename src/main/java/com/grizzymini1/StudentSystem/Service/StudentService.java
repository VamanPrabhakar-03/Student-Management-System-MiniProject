package com.grizzymini1.StudentSystem.Service;

import com.grizzymini1.StudentSystem.Model.Student;

import java.util.List;

public interface StudentService {

    public Student saveStudent(Student student);
    public List<Student> getAllStudent();

}
