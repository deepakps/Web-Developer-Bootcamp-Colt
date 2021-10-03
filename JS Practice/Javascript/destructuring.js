const oscars = ['Gladiator', 'Lagaan', 'Lincoln', 'Broke Back Mountain', 'Final Destination'];

//destructuring arrays
const [winner, runnerup, ...everythingelse] = oscars;

//destructuring objects
const user = {
    firstName: 'David',
    lastName: 'Parsons',
    // fullName: () => `${this.firstName} ${this.lastName}`,
    dob: '11/10/1991',
    email: 'deepakps.shinde@gmail.com'
};

const { firstName, lastName, city = 'Karad', died: deathDate = 'N/A', ...elseother } = user;
const { dob: birthDate } = user;

function fullName({ firstName, lastName }) {
    return `${firstName} ${lastName}`;
}