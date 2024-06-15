const books = [
    { title: "C++", author: "Bjarne" },
    { title: "Java", author: "x" },
    { title: "Java", author: "James" },
    { title: "Python", author: "Guido" },
];

const unique = books.filter((obj, index) => {
    return index === books.findIndex(o => obj.title === o.title);
});

console.log(unique);