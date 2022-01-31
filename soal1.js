const myUsers = [
    { name: 'jellyfish', likes: 'ocean' },
    { name: 'fish', likes: 'ocean' },
    { name: 'dolphins', likes: 'ocean' }
]

const usersByLikes = myUsers.map(item => {
    const container = {};

    container[item.name] = item.likes;
    container.age = item.name.length * 3;

    return container;
})

console.log(usersByLikes);