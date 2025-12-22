package com.grizzymini1.StudentSystem.Repository;

import com.grizzymini1.StudentSystem.Model.Student;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface Studentrepo extends JpaRepository<Student,Integer> {


}