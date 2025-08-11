const users=[];

const addUser=({id,name,room})=>{
const name= name.trim().toLowerCase();
const room= room.trim().toLowerCase();

const existingUser=users.find((user)=>user.room===room && user.name === name)


}