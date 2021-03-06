var _ = require('lodash');

 
/* generated this from mockaroo.com*/
var people = [{
    "id": 1,
    "first_name": "Cori",
    "last_name": "Lyste",
    "email": "clyste0@mlb.com",
    "gender": "Male",
    "ip_address": "186.82.47.132"
  }, {
    "id": 2,
    "first_name": "Nickie",
    "last_name": "Hazeldene",
    "email": "nhazeldene1@ezinearticles.com",
    "gender": "Male",
    "ip_address": "218.225.129.221"
  }, {
    "id": 3,
    "first_name": "Izzy",
    "last_name": "Golds",
    "email": "igolds2@army.mil",
    "gender": "Male",
    "ip_address": "174.174.24.110"
  }, {
    "id": 4,
    "first_name": "Amye",
    "last_name": "Linnell",
    "email": "alinnell3@census.gov",
    "gender": "Female",
    "ip_address": "189.63.57.155"
  }, {
    "id": 5,
    "first_name": "Mandie",
    "last_name": "Skurray",
    "email": "mskurray4@epa.gov",
    "gender": "Female",
    "ip_address": "220.219.200.9"
  }, {
    "id": 6,
    "first_name": "Brandi",
    "last_name": "Edgett",
    "email": "bedgett5@nifty.com",
    "gender": "Female",
    "ip_address": "136.254.195.247"
  }, {
    "id": 7,
    "first_name": "Felizio",
    "last_name": "Evamy",
    "email": "fevamy6@ehow.com",
    "gender": "Male",
    "ip_address": "210.122.153.240"
  }, {
    "id": 8,
    "first_name": "Cyb",
    "last_name": "Baker",
    "email": "cbaker7@bing.com",
    "gender": "Female",
    "ip_address": "163.218.80.171"
  }, {
    "id": 9,
    "first_name": "Antons",
    "last_name": "Pyrah",
    "email": "apyrah8@samsung.com",
    "gender": "Male",
    "ip_address": "134.177.162.17"
  }, {
    "id": 10,
    "first_name": "Slade",
    "last_name": "Seyers",
    "email": "sseyers9@weebly.com",
    "gender": "Male",
    "ip_address": "171.249.14.199"
  }, {
    "id": 11,
    "first_name": "Gray",
    "last_name": "Wallett",
    "email": "gwalletta@pcworld.com",
    "gender": "Female",
    "ip_address": "124.195.37.216"
  }, {
    "id": 12,
    "first_name": "Bent",
    "last_name": "Muller",
    "email": "bmullerb@ebay.co.uk",
    "gender": "Male",
    "ip_address": "167.43.231.215"
  }, {
    "id": 13,
    "first_name": "Emiline",
    "last_name": "Gother",
    "email": "egotherc@state.gov",
    "gender": "Female",
    "ip_address": "4.172.53.215"
  }, {
    "id": 14,
    "first_name": "Ynez",
    "last_name": "Boullen",
    "email": "yboullend@ibm.com",
    "gender": "Female",
    "ip_address": "235.189.222.176"
  }, {
    "id": 15,
    "first_name": "Kalvin",
    "last_name": "Heinrich",
    "email": "kheinriche@seattletimes.com",
    "gender": "Male",
    "ip_address": "250.132.198.33"
  }, {
    "id": 16,
    "first_name": "Kat",
    "last_name": "Fulcher",
    "email": "kfulcherf@tripadvisor.com",
    "gender": "Female",
    "ip_address": "228.144.170.196"
  }, {
    "id": 17,
    "first_name": "Leann",
    "last_name": "Smethurst",
    "email": "lsmethurstg@google.cn",
    "gender": "Female",
    "ip_address": "128.54.107.64"
  }, {
    "id": 18,
    "first_name": "Angeli",
    "last_name": "Frayn",
    "email": "afraynh@woothemes.com",
    "gender": "Male",
    "ip_address": "167.135.183.191"
  }, {
    "id": 19,
    "first_name": "Melinda",
    "last_name": "Shave",
    "email": "mshavei@tmall.com",
    "gender": "Female",
    "ip_address": "156.182.63.109"
  }, {
    "id": 20,
    "first_name": "Miles",
    "last_name": "Hiseman",
    "email": "mhisemanj@creativecommons.org",
    "gender": "Male",
    "ip_address": "215.54.2.183"
  }];

  var arr = _.filter(people, {gender: "Female"});
console.log(arr);
 
var femaleCount = _.filter(people, {gender: "Female"}).length;
//_.filter return new filtered array
alert(femaleCount + " females!");
console.log("Number of females is: "+femaleCount);