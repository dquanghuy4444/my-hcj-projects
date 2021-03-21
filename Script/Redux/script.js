import renHTML from "./core.js";

const cars = [
    'BMW',
    'Mercebenz',
    'Posche',
];

const isSuccess = false;

const output = renHTML`
    <h1>${ isSuccess && 'Thành công' }</h1>
    <ul>
        ${ cars.map(car => `<li>${ car }</li>`) }
    </ul>
`

console.log(output)