package com.grizzymini1.StudentSystem.Service;

import com.grizzymini1.StudentSystem.Model.Student;
import com.grizzymini1.StudentSystem.Repository.Studentrepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StudentServiceImplementation implements StudentService{

    @Autowired
    private Studentrepo studentrepo;
    @Override
    public Student saveStudent(Student student) {
        return studentrepo.save(student);
    }

    @Override
    public List<Student> getAllStudent() {
        return studentrepo.findAll();    }
}
