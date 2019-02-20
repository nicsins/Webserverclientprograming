// //create objecr use Json syntax
// let user={username:'Nic',password:'MeowShwitz'};
//Read Data


var user = {
    username:'Nic',
    password:'MeowShwitz',
    userid : 1,
    location:'Minneapolis',
    roles : [ "user" , "server admin" ],
    contact : {
        phone:"123-456-7890",
        office:"T306"

} ,salary:1234567};
//prints object as is
console.log(user);
// prints all data in one line
console.log(JSON.stringify(user));
//multiple lines w 2 spac indent
console.log(JSON.stringify(user,null,2));