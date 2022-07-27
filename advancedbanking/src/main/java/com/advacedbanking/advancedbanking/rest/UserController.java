package com.advacedbanking.advancedbanking.rest;

import com.advacedbanking.advancedbanking.entity.CompactUser;
import com.advacedbanking.advancedbanking.entity.User;
import com.advacedbanking.advancedbanking.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class UserController {

    private UserService userService;

    @Autowired
    public UserController(UserService theUserService) {
        userService = theUserService;
    }


    @PostMapping("/signup")
    public boolean signup(@RequestBody User theUser) {
        theUser.hashPassword();

        return userService.signup(theUser);
    }

    @PostMapping("/login")
    public User login(@RequestBody User theUser) {
        theUser.hashPassword();

        return userService.login(theUser);

    }

    @PostMapping("/update")
    public User deposit(@RequestBody User theUser) {

        return userService.deposit(theUser);

    }

    @PostMapping("/transfer")
    public boolean transfer(@RequestBody CompactUser sendUser) {

        userService.transfer(sendUser);
        return true;
    }

}
