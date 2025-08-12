const users=[];

const addUser=({id,name,room})=>{
const name= name.trim().toLowerCase();
const room= room.trim().toLowerCase();

const existingUser=users.find((user)=>user.room===room && user.name === name)

if (existingUser){
    return {error:"User already exists"}
}

const user={id,room,name}
users.push(user);
return user;

}

const removeUser=({id})=>{
    const index=users.findIndex((user)=> user.id===id)

    if (index===-1){
        return {error:"user id Not found for deletion"}
    }
     
    return users.splice(index,1)[0];
}

const getUser=({id})=>{
    const user=users.find((user)=>user.id===id)
    if(!user){
        return {error:"User not found"}
    }

    return user;

}

const getUsersInRoom=({room})=>{
    userInRoom=users.filter((user)=>user.room===room)

    if(userInRoom.length===0){
        return{error:"room doesnt exist"}
    }

    return userInRoom;
}

module.exports= {addUser,getUser,removeUser,getUsersInRoom}