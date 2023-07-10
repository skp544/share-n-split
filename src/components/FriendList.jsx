import React from "react";
import { Friend } from "./";
// import { initialFriends } from "../constants/data";

const FriendList = ({ friends, onSelection, selectedFriend }) => {
  // const freinds = initialFriends         // dummy data
  return (
    <ul>
      {friends.map((friend) => (
        <Friend
          key={friend.id}
          friend={friend}
          onSelection={onSelection}
          selectedFriend={selectedFriend}
        />
      ))}
    </ul>
  );
};

export default FriendList;
