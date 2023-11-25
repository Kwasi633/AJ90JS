// console.log("Hello")

// console.log("Welcome to AJ90JS Challenge")

// console.log('My name is Ezra')

// console.log("Hello")

// setTimeout(() => console.log("Welcome to AJ90JS Challenge"), 2000)

// console.log("My name is Ezra")

let isShopOpen = true

const time = (ms) => {
    return new Promise((resolve, reject) => {
        isShopOpen ? setTimeout(resolve, ms) :
            reject(new Error('Bookshop is closed'));
    });
};

const students = {
    names: ['Kofi', 'Ama', 'John'],
};

const sch = async () => {
    try {
        await time(5000);
        console.log(`
        ${students.names} came to the bookshop today
        `);
    } catch (error) {
        console.log("Student left", error.message);
    } finally {
        console.log('Day ended, bookshop closed');
    }
};

sch();
