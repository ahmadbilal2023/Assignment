let guest_person2 = ["Rao_Safdar", "Javed_Khan_Lashari", "Dilawar", "Adil"]
console.log(guest_person2);

let guest_Removedd = guest_person2.pop();
console.log(guest_Removedd + " will not come to dinner");

guest_person2.push("Imran (New guest)")
console.log(guest_person2);
console.log(`I have a biger dinner so i am inviting more guest for dinner`);

guest_person2.splice(3,0,"Sohail","Waheed","Umair")
console.log(guest_person2);

 
console.log(guest_person2.length);

console.log(guest_person2.pop() + " Sorry I can't invite you");
console.log(guest_person2.pop() + " Sorry I can't invite you");
console.log(guest_person2.pop() + " Sorry I can't invite you");
console.log(guest_person2.pop() + " Sorry I can't invite you");
console.log(guest_person2.pop() + " Sorry I can't invite you");


console.log('hi, '+guest_person2[0]+ " you are invited for dinner");
console.log('hi, '+guest_person2[1]+ " you are invited for dinner");

console.log(guest_person2.pop() + " Sorry I can't invite you");
console.log(guest_person2.pop() + " Sorry I can't invite you");

console.log(guest_person2);



