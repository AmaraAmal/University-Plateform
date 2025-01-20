package com.issatso.partie_back.Services;

import com.issatso.partie_back.DTO.UserDTO;
import com.issatso.partie_back.Entities.*;
import com.issatso.partie_back.Repo.ClassesRepository;
import com.issatso.partie_back.Repo.UserRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private ClassesRepository classesRepository;

    public List<User> getAllUsers(){return userRepository.findAll();}

    public Optional<User> getUserById(Integer id){
        boolean exist = userRepository.existsById(id);
        if(!exist){
            throw new IllegalStateException("USER WITH ID = " + id + " DOESN'T EXIST !");
        }
        return userRepository.findById(id);}

    public List<User> getUserByRole(Role role){return userRepository.findByRole(role);}

    public List<User> getUserByClass(String class_name){
        Optional<Classes> classes = classesRepository.findByClassName(class_name);
        return userRepository.findByClass(classes);}

    public void deleteUser(Integer id){
        boolean exist = userRepository.existsById(id);
        if(!exist){
            throw new IllegalStateException("USER WITH ID = " + id + " DOESN'T EXIST !");
        }
        userRepository.deleteById(id);
    }
    /*@Transactional
    public void updateUSer(Integer id, String first_name, String last_name, String mail, String password, String phone_number, Role role){
        User user = userRepository.findById(id).orElseThrow(() ->
                new IllegalStateException("USER WITH ID = " + id + " DOESN'T EXIST !"));
        user.setFirstName(first_name);
        user.setLastName(last_name);
        user.setEmail(mail);
        user.setPassword(password);
        user.setPhoneNumber(phone_number);
        user.setRole(role);
    }*/

    //GEZZ
    @Transactional
    public void updateUser(Integer id, UserDTO userDto) {
        User user = userRepository.findById(id).orElseThrow(() ->
                new IllegalStateException("USER WITH ID = " + id + " DOESN'T EXIST !"));

        user.setFirstName(userDto.getFirstName());
        user.setLastName(userDto.getLastName());
        user.setEmail(userDto.getEmail());
        user.setPhoneNumber(userDto.getPhoneNumber());

        if (userDto.getPassword() == null) {
            User existingUser = userRepository.findById(id).orElseThrow(() ->
                    new IllegalStateException("USER WITH ID = " + id + " DOESN'T EXIST !"));
            user.setPassword(existingUser.getPassword());
        } else {
            user.setPassword(userDto.getPassword());
        }

        userRepository.save(user);
    }



    public void addUser(UserDTO userDto) {
        User user = new User();
        user.setFirstName(userDto.getFirstName());
        user.setLastName(userDto.getLastName());
        user.setEmail(userDto.getEmail());
        user.setPhoneNumber(userDto.getPhoneNumber());
        user.setPassword(userDto.getPassword());
        user.setRole(Role.valueOf(userDto.getRole()));
        userRepository.save(user);
    }
}
