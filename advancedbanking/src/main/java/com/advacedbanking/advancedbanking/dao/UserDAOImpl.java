package com.advacedbanking.advancedbanking.dao;

import com.advacedbanking.advancedbanking.entity.CompactUser;
import com.advacedbanking.advancedbanking.entity.User;
import org.hibernate.Session;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;

@Repository
public class UserDAOImpl implements UserDAO{

    private EntityManager entityManager;

    @Autowired
    public UserDAOImpl(EntityManager theEntityManager) {
        entityManager = theEntityManager;
    }

    public boolean signup(User theUser) {
        Session currentSession = entityManager.unwrap(Session.class);
        Query theQuery = currentSession.createQuery("from User where username=:username", User.class);
        theQuery.setParameter("username", theUser.getUsername());

        try {
            theQuery.getSingleResult();
        } catch (Exception e) {

            theUser.setBalance("0");
            currentSession.saveOrUpdate(theUser);
            return true;
        }

        return false;


    }


    public User login(User theUser) {
        Session currentSession = entityManager.unwrap(Session.class);

        Query theQuery = currentSession.createQuery("from User where username=:username", User.class);
        theQuery.setParameter("username", theUser.getUsername());

        User tempUser = (User) theQuery.getSingleResult();

        if ((tempUser != null) && (tempUser.getPassword().equals(theUser.getPassword()))) {
            return tempUser;

        } else {
            theUser.setUsername("");
            theUser.setPassword("");
            theUser.setBalance("");
            return theUser;
        }
    }

    @Override
    public User deposit(User theUser) {
        Session currentSession = entityManager.unwrap(Session.class);


        Query theQuery = currentSession.createQuery("from User where username=:username", User.class);

        theQuery.setParameter("username", theUser.getUsername());

        User tempUser = (User) theQuery.getSingleResult();

        tempUser.setBalance(theUser.getBalance());

        return theUser;

    }

    @Override
    public boolean transfer(CompactUser sendUser) {
        Session currentSession = entityManager.unwrap(Session.class);

        User thisUser = sendUser.getThisUser();
        User transferUser = sendUser.getTransferUser();

        Query theQuery = currentSession.createQuery("from User where username=:username", User.class);
        theQuery.setParameter("username", thisUser.getUsername());
        User tempUser = (User) theQuery.getSingleResult();

        tempUser.setBalance(Double.toString(Double.parseDouble(thisUser.getBalance()) - Double.parseDouble(transferUser.getBalance())));

        Query transferQuery = currentSession.createQuery("from User where username=:username", User.class);
        transferQuery.setParameter("username", transferUser.getUsername());
        User transferTempUser = (User) transferQuery.getSingleResult();
        transferTempUser.setBalance(Double.toString(Double.parseDouble(transferTempUser.getBalance()) + Double.parseDouble(transferUser.getBalance())));



        return true;
    }
}
