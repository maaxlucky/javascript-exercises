
const findTheOldest = function(people) {
    const oldest  = people.sort(function(a, b){
        let currentDate = new Date()
        if(typeof(a.yearOfDeath) === 'undefined'){
            a.yearOfDeath = currentDate.getFullYear()
        }
        if(typeof(b.yearOfDeath) === 'undefined'){
            b.yearOfDeath = currentDate.getFullYear()
        }
        const lastGuy = a.yearOfDeath - a.yearOfBirth
        const nextGuy = b.yearOfDeath - b.yearOfBirth
        return lastGuy > nextGuy ? -1 : 1
    });
    return oldest[0]
};



// Do not edit below this line
module.exports = findTheOldest;
