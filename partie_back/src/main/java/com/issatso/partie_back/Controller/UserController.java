package com.issatso.partie_back.Controller;

import com.issatso.partie_back.DTO.UserDTO;
import com.issatso.partie_back.Entities.News;
import com.issatso.partie_back.Entities.Role;
import com.issatso.partie_back.Entities.Schedule;
import com.issatso.partie_back.Entities.User;
import com.issatso.partie_back.Services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(path = "api/users")
@CrossOrigin(origins = "http://localhost:4200")
public class UserController {
    @Autowired
    private UserService userService;

    @GetMapping
    public List<User> getAllUsers(){return userService.getAllUsers();}

    @GetMapping(path = "/find/{id}")
    public Optional<User> getUserById(@PathVariable("id") Integer id){return userService.getUserById(id);}

    @GetMapping(path = "/{role}")
    public List<User> getUserByRole(@PathVariable("role") Role role){return userService.getUserByRole(role);}

    @GetMapping(path = "/class/{name}")
    public List<User> getUserByClass(@PathVariable("name") String class_name){return userService.getUserByClass(class_name);}

    @DeleteMapping(path = "/delete/{id}")
    public void deleteUser(@PathVariable("id") Integer id){userService.deleteUser(id);}

    //AMAL
    /*@PutMapping(path = "/update/{id}")
    public void updateUser(@PathVariable("id") Integer id, @RequestBody User user){
        userService.updateUSer(id,user.getFirstName(),user.getLastName(),user.getEmail(),user.getPassword(),user.getPhoneNumber(),user.getRole());
    }*/

    //GEZZ
    @PutMapping(path = "/update/{id}")
    public void updateUser(@PathVariable("id") Integer id, @RequestBody UserDTO userDTO){
        userService.updateUser(id, userDTO);
    }

    @PostMapping(path = "/add")
    public void addUser(@RequestBody UserDTO userDTO){
        userService.addUser(userDTO);
    }



}
