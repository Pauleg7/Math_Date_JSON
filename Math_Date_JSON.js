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

