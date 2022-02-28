const bioData = {
    name: 'Zerin',
    age: 19,
    isBeutifull: true,

    education: {
        quality: 'student',
        study: 'Hons 2nd year',
        subject: 'Mangement'
    },
    details: ['5feet', '60kg', '19year'],
    bioDey: function (old) {
        this.age = this.age + old;
        console.log(this);
        return this.age;
    }
}
// bioData.bioDey(3)

const templateString = `
Hello guys my name is ${bioData.name}.I am ${bioData.age} years old, and i am a ${bioData.education.quality}.I study in Shiddeshwari Girls Collage ${bioData.education.study} in ${bioData.education.subject}.My hight is ${bioData.details[0]} and wight is ${bioData.details[1]}.I love my self Alhamdulillah.
`;
console.log(templateString);

const annonymous = () => {
    const a = 35;
    const b = 54;
    const add = a + b;
    console.log(add);
}
annonymous();

const add = num => num / 7;
const result = add(2);
console.log(result)

const number = (num1, num2) => (num1 + num2) / 2




const numbers = [21, 14, 56, 7, 28];
const map = numbers.map(x => x / 7);
console.log(map)

const numbers = [21, 14, 56, 7, 28];
const filter = numbers.filter(x => x > 7);
const find = numbers.find(x => x > 7);
console.log(filter)

const fish = {
    id: 58,
    name: 'king Hilsha',
    price: 9000,
    phone: '01717555555',
    address: {
        village: 'Chandpur',
        homeCity: 'padma'
    },
    dress: 'silver'
};

const { id, name, dress } = fish;
const { village, homeCity } = fish.address;
console.log(id, village, homeCity);

const [a, b] = [2, 6];
const ab = b;
console.log(ab)


