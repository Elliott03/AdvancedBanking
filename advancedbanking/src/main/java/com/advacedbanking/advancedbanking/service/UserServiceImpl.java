package com.advacedbanking.advancedbanking.service;

import com.advacedbanking.advancedbanking.dao.UserDAO;
import com.advacedbanking.advancedbanking.entity.CompactUser;
import com.advacedbanking.advancedbanking.entity.User;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
public class UserServiceImpl implements UserService {

    private UserDAO userDAO;

    public UserServiceImpl(UserDAO theUserDAO) {
        userDAO = theUserDAO;
    }

    @Transactional
    public boolean signup(User theUser) {
        return userDAO.signup(theUser);
    }

    @Transactional
    public User login(User theUser) {
        return userDAO.login(theUser);

    }

    @Transactional
    public User deposit(User theUser) {
        return userDAO.deposit(theUser);
    }

    @Transactional
    public boolean transfer(CompactUser sendUser) {
        return userDAO.transfer(sendUser);
    }
}
