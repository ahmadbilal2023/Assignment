let guest_person1 = ["Rao_Safdar", "Javed_Khan_Lashari", "Dilawar", "Adil"]
console.log(guest_person1);

let guest_Removed = guest_person1.pop();
console.log(guest_Removed + " will not come to dinner");

guest_person1.push("Imran (New guest)")
console.log(guest_person1);
console.log(`I have a biger dinner so i am inviting more guest for dinner`);

guest_person1.splice(3,0,"Sohail","Waheed","Umair")
console.log(guest_person1);

 
console.log(guest_person1.length);

console.log('hi, '+guest_person1[0]+ " would you like to invite a dinner?");
console.log('hi, '+guest_person1[1]+ " would you like to invite a dinner?");
console.log('hi, '+guest_person1[2]+ " would you like to invite a dinner?");
console.log('hi, '+guest_person1[3]+ " would you like to invite a dinner?");
console.log('hi, '+guest_person1[4]+ " would you like to invite a dinner?");
console.log('hi, '+guest_person1[5]+ " would you like to invite a dinner?");
console.log('hi, '+guest_person1[6]+ " would you like to invite a dinner?");

