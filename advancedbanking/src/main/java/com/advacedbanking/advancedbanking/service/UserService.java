package com.advacedbanking.advancedbanking.service;

import com.advacedbanking.advancedbanking.entity.CompactUser;
import com.advacedbanking.advancedbanking.entity.User;
import org.springframework.stereotype.Service;

public interface UserService {

    boolean signup(User theUser);

    User login(User theUser);

    User deposit(User theUser);

    boolean transfer(CompactUser sendUser);
}
