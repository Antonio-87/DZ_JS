class Good {
    constructor(id, name, description, sizes, price, available=true) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.sizes = sizes;
        this.price = price;
        this.available = available; /**true - достуно для продажи, false - недоступно */
    }

    setAvailable() {
        if (this.available === false) {
            this.available = true;
        } else {
            this.available = false;
        }
    }
}

class GoodsList {
    #goods;
    constructor(sortPrice=true, sortDir=true) {
        this.#goods = [];
        this.filter = /[a-zA-Zа-яА-ЯёЁ']?/i;
        this.sortPrice = sortPrice; /**включение сортировки по цене*/
        this.sortDir = sortDir; /**true - сортировка по возрастанию, false - по убыванию */                        
    }

    get list() {
        const goods = this.#goods.filter(good => (this.filter.test(good.name)) && (good.available === true))
        if (this.sortPrice === true) {
            goods.sort((a, b) => (this.sortDir === true)  ? a.price - b.price : b.price - a.price);
            return goods;
        } else {
            return goods;
        }
    }

    add(good) {
        this.#goods.push(good);
    }

    remove(id) {
        for (let i = 0; i < this.#goods.length; i++) {
            if (this.#goods[i].id === id) {
                this.#goods.splice(i, 1);
            }
        }
    }
}

class BasketGood extends Good {
    constructor(Good, amount) {
        super(Good.id, Good.name, Good.description, Good.sizes, Good.price);
        this.amount = amount;
    }
}

class Basket {
    constructor() {
        this.goods = [];
    }

    get totalAmount() {
        const price_list = []
        this.goods.forEach(good => price_list.push(good.amount * good.price))
        const total = price_list.reduce((a, b) => a + b);
        return total;
    }

    get totalSum() {
        const amount_list = []
        this.goods.forEach(good => amount_list.push(good.amount))
        const total = amount_list.reduce((a, b) => a + b);
        return total;
    }

    add(good, amount) {
        const index = this.goods.findIndex(item => item.id == good.id);
        if (index == -1) {
            this.goods.push(new BasketGood(good, amount));
        } else {
            this.goods[index].amount += amount;
        }
    } 

    remove(good, amount) {
        for (let i = 0; i < this.goods.length; i++) {
            if (this.goods[i].id === good.id) {
                if (this.goods[i].amount > 1) {
                    this.goods[i].amount -= amount;
                } else {
                    this.goods.splice(i, 1);
                }
            }
        }
    }

    clear() {
        this.goods.splice(0, this.goods.length);
    }

    removeUnavailable() {
        const unavailable = this.goods.filter(good => good.available == true);
        this.goods = unavailable;
        // unavailable.forEach(good => this.goods.splice((this.goods.findIndex(good)), 1))
    }
}

const g = new Good(1, "Ананас", "Фрукт", "a", 150);
const g1 = new Good(2, "Яблоко", "Фрукт", "б", 100);
const g2 = new Good(3, "Помидор", "Овощ", "a", 200);
const g3 = new Good(4, "Фундук", "Орех", "в", 300);
const g4 = new Good(5, "Кефир", "Молочный продукт", "г", 50);

console.log('Добавляем товары в каталог и выводим их отсортированный список:');
const gl = new GoodsList();
const gl_list = [g, g1, g2, g3, g4];
gl_list.forEach(good => gl.add(good));
console.log(gl.list);

// console.log("Удалим товар из каталога:");
gl.remove(1);
// console.log(gl.list);

// console.log("Поместим в корзину товары, в том числе несколько одинаковых:");
const b = new Basket();
gl.list.forEach(good => b.add(good, 1));
b.add(g, 1);
b.add(g, 1);
// console.log(b.goods);

// console.log("Сделаем один товар недоступным для продажи :");
b.goods.forEach(good => {
    if (good.id === 4) {
        good.setAvailable();
    }
});
// console.log(b.goods);

// console.log("Уменьшим количество товара");
b.remove(g, 1);
b.remove(g, 1);
// console.log(b.goods);

// console.log("Удалим из карзины недоступные товары");
b.removeUnavailable();
// console.log(b.goods);

console.log("Общая стоимость товаров в корзине");
console.log(b.totalAmount);

console.log("Общee количество товаров в корзине");
console.log(b.totalSum);

// console.log("Очистим корзину");
b.clear();
// console.log(b.goods);