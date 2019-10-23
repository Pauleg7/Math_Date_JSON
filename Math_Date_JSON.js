'use strict';

/*----- Задание № 1 -----*/

console.log(`/*----- Задание № 1 -----*/`);

let positions = [
  {
    title: 'Телепорт бытовой VZHIH-101',
    producer: {
      name: 'Рязанский телепортостроительный завод',
      deferPeriod: 10,
      lot: 3
    },
    price: 10000
  },
  {
    title: 'Ховерборд Mattel 2016',
    producer: {
      name: 'Волжский Ховерборд Завод',
      deferPeriod: 24,
      lot: 14
    },
    price: 9200
  },
  {
    title: 'Меч световой FORCE (синий луч)',
    producer: {
      name: 'Тульский оружейный комбинат',
      deferPeriod: 5,
      lot: 1
    },
    price: 57000
  }
];

function lotCalculator(product, amount) {
  let amountLots = Math.ceil(amount / product.producer.lot);
  let totalPrices = amountLots * product.producer.lot * product.price;

  return {lots: amountLots, total: totalPrices}
}

function printLotCalc(product, amount) {
  if(product) {
    console.log(`${product.title} ${amount} штук: заказать партий ${lotCalculator(product, amount).lots}, стоимость ${lotCalculator(product, amount).total} Q`);
  } else {
    console.log(`Такого товара не существует!`);
  }
}

printLotCalc(positions[1], 15);
printLotCalc(positions[2], 1);
printLotCalc(positions[0], 2);
printLotCalc(positions[0], 9);
printLotCalc(positions[3], 9);

/*----- Задание № 2 -----*/

console.log(`/*----- Задание № 2 -----*/`);

const deferedPayments = [];

function deferPay(provider, summShipment, dateShipment) {
  let datePay = new Date(dateShipment);
  datePay.setDate(datePay.getDate() + provider.deferPeriod);

  deferedPayments.push({
    producer: provider,
    amount: summShipment,
    paymentDate: datePay
  })
}

deferPay(positions[0].producer, 7200, new Date(2031, 4 - 1, 10));
deferPay(positions[1].producer, 152589, new Date(2033, 5 - 1, 1));
deferPay(positions[2].producer, 98410, new Date(2035, 6 - 1, 21));

deferedPayments.forEach((element) =>
  console.log(`${element.paymentDate.getDate()}.${element.paymentDate.getMonth() + 1}.${element.paymentDate.getFullYear()}: ${element.producer.name}, сумма ${element.amount} Q;`)
)

/*----- Задание № 3 -----*/

console.log(`/*----- Задание № 3 -----*/`);

function loadCurrencyJSON() {
  return '{"AUD":44.95,"AZN":33.73,"GBP":73.42,"AMD":0.12,"BYN":30.96,"BGN":32.01,"BRL":18.8,"HUF":0.2,"DKK":8.42,"USD":58.85,"EUR":62.68,"INR":0.88,"KZT":0.18,"CAD":44.74,"KGS":0.85,"CNY":8.55,"MDL":2.94,"NOK":7.02,"PLN":14.55,"RON":13.92,"ZZZ":79.91,"SGD":41.36,"TJS":7.43,"TRY":15.97,"TMT":16.84,"UZS":0.02,"UAH":2.16,"CZK":2.32,"SEK":6.6,"CHF":58.69,"ZAR":4.4,"KRW":0.05,"JPY":0.52}';
}

function convertCurrency(amount, from, to) {
  let currency = JSON.parse(loadCurrencyJSON());

  return (amount * currency[from] / currency[to]).toFixed(2);
}

let price1 = convertCurrency(7000, 'ZZZ', 'USD');
console.log(`Сумма ${price1} USD`);
// Сумма 9505.01 USD

let price2 = convertCurrency(790, 'EUR', 'ZZZ');
console.log(`Сумма ${price2} ZZZ`);
// Сумма 619.66 ZZZ