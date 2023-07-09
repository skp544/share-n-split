import React from "react";
import { initialFriends } from "../constants/data";
import Friend from "./Friend";

const FriendList = () => {
  const friends = initialFriends;
  return (
    <ul>
      {friends.map((friend) => (
        <Friend key={friend.id} friend={friend} />
      ))}
    </ul>
  );
};

export default FriendList;
