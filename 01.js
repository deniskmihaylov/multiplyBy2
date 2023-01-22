function solve (day, age) {

    let price = 0;

    switch (day) {
        case 'Weekday':
        if (age >= 0 && age <= 18) {
            price = 12
        } else if (age > 18 && age <= 64) {
            price = 18;
        }
        console.log(price)
    }
    console.log(price)
    }

    solve ('Weekday', 18)