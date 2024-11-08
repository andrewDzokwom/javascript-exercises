const findTheOldest = function(persons) {
    return persons.reduce((oldest, person) => {
        const oldestAge = person.yearOfDeath - person.yearOfBirth;
        const personAge = person.yearOfDeath - person.yearOfBirth;
        return oldestAge < personAge ? person : oldest;
    });

};

// Do not edit below this line
module.exports = findTheOldest;
