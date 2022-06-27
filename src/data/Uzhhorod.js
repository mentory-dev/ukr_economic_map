

import { CityStatisticsFactory } from '../utils/CityStatisticsFactory'

export const Uzhhorod = new CityStatisticsFactory({
  coordinates: [
    22.334125368611097, 48.63309114318747 
  ],
  city: 'Uzhhorod',
  content: {
    label: 'Станом на 1 січня 2022 року (відносно січня 2021)',
    results: [
      {
        name: 'Доходи населення',
        value: '190',
        isGrowth: true
      },
      {
        name: 'Промисловість',
        value: '3,7',
        isGrowth: true
      },
      {
        name: 'Сільське господарство',
        value: '4',
        isGrowth: false
      },
      {
        name: 'Капітальні інвестиції',
        value: '2,7',
        isGrowth: false
      },
      {
        name: 'Будівництво',
        value: '30.1',
        isGrowth: true
      },
      {
        name: 'Внутрішня торгівля',
        value: '16,7',
        isGrowth: false
      },
      {
        name: 'Транспорт',
        value: '27.1',
        isGrowth: true
      }
    ]
  }
})