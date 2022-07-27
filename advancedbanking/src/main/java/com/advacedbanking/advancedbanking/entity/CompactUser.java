package com.advacedbanking.advancedbanking.entity;

public class CompactUser {

    private User thisUser, transferUser;

    public CompactUser(User thisUser, User transferUser) {
        this.thisUser = thisUser;
        this.transferUser = transferUser;
    }

    public User getThisUser() {
        return thisUser;
    }

    public void setThisUser(User thisUser) {
        this.thisUser = thisUser;
    }

    public User getTransferUser() {
        return transferUser;
    }

    public void setTransferUser(User transferUser) {
        this.transferUser = transferUser;
    }

    @Override
    public String toString() {
        return "CompactUser{" +
                "theUser1=" + thisUser.toString() +
                ", theUser2=" + transferUser.toString() +
                '}';
    }
}
