import React, { useState } from "react"
import authWithAxios from "../utils/authWithAxios"
import FriendForm from "./FriendForm"

const Friend = ({ friend, setFriends }) => {
    const [isEditing, setIsEditing] = useState(false)

    const deleteFriend = (id) => {
        authWithAxios().delete(`/friends/${id}`)
            .then(res => setFriends(res.data))
            .catch(err => console.log(err))
    }

    return (
       !isEditing ? 
        <div>
            <h2>{friend.name}</h2>
            <p>Age: {friend.age}</p>
            <p>Email: {friend.email}</p>
            <button onClick={() => deleteFriend(friend.id)}>Remove</button>
            <button onClick={() => setIsEditing(!isEditing)}>Edit</button>
        </div> 
        : <FriendForm friendToUpdate={friend} setFriends={setFriends} setIsEditing={setIsEditing} />
    )
}

export default Friend