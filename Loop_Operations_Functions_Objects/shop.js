const goods = {
    1: {
        id: 1,
        name: 'Рубашка',      
        description: 'белая',
        sizes: ['l', 'm', 's', 'xl'],        
        price: 300,    
        available: true,    
    },
    2: {
        id: 2,
        name: 'Футболка',      
        description: 'красная',
        sizes: ['l', 'm', 's', 'xl'],        
        price: 250,    
        available: true,    
    },
    3: {
        id: 3,
        name: 'Майка',      
        description: 'серая',
        sizes: ['l', 'm', 's', 'xl'],        
        price: 200,    
        available: true,    
    },
    4: {
        id: 4,
        name: 'Свитер',      
        description: 'синий',
        sizes: ['l', 'm', 's', 'xl'],        
        price: 100,    
        available: true,    
    },
    5: {
        id: 5,
        name: 'Бейсболка',      
        description: 'В клеточку',
        sizes: ['l', 'm', 's', 'xl'],        
        price: 100,    
        available: true,    
    },
};

const basket = [
    {
        goodID: 1,
        amount: 10,
    },
    {
        goodID: 3,
        amount: 20,
    },
];


function create(ID , count) {

   const basket_new = {
            goodID: ID,
            amount: count,
        }

    let i = 0;  
    
    const double = []

    while (i < basket.length) {
        if ((basket[i].goodID == basket_new.goodID) && (basket[i].amount == basket_new.amount)) {
            double.push(basket_new) 
        }
        i++;
    }
    
    if (double.length == 0) {
            basket.push(basket_new);
            console.log('Заказ создан');
    } else {
        console.log('Заказ уже существует');
    }
    
}

function removal(ID) {
    for (let i = 0; i < basket.length; i++) {
        if (basket[i].goodID == ID) {
            basket.splice(i, 1)
        }     
    }
    console.log('Заказ удален :')
}

function clianing(basket) {

    basket.splice(0, basket.length)     
    console.log('Корзина очищена :')
}

function total_cost() {
    sum = {
        totalAmount: 0,
        totalSum: 0, 
    }
    
    for (let i = 0; i < basket.length; i++) {
        sum.totalAmount += basket[i].amount
        sum.totalSum += goods[basket[i].goodID].price
    }

    console.log(`Колличество и общая стоимость товаров в корзине:`)
    console.log(sum) 
}


total_cost()
create(4, 20) 
console.log(basket)
removal(4)
console.log(basket)
clianing(basket)
console.log(basket)



// function sum(...c) {
//     console.log(arguments);
//     const d = Array.from(arguments);
//     console.log(d);
//     return c.reduce((acc, n) => acc + n);
// }

// console.log(sum(1, 2, 3, 4, 10, 20, 50))
