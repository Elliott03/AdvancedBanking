package com.advacedbanking.advancedbanking.dao;

import com.advacedbanking.advancedbanking.entity.CompactUser;
import com.advacedbanking.advancedbanking.entity.User;

public interface UserDAO {
    boolean signup(User theUser);

    User login(User theUser);

    User deposit(User theUser);


    boolean transfer(CompactUser sendUser);
}
