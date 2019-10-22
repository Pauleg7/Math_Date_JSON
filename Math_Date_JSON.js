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