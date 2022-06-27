import { CityStatisticsFactory } from '../utils/CityStatisticsFactory'

export const Vinnytsa = new CityStatisticsFactory({
  coordinates: [
    28.513156561836155, 49.188618041051
  ],
  city: 'Vinnytsa',
  content: {
    label: 'Станом на 1 січня 2022 року (відносно січня 2021)',
    results: [
      {
        name: 'Доходи населення',
        value: '16.8',
        isGrowth: true
      },
      {
        name: 'Правопорушення',
        value: '15.6',
        isGrowth: false
      },
      {
        name: 'Промисловість',
        value: '3,7',
        isGrowth: true
      },
      {
        name: 'Сільське господарство',
        value: '111,5',
        isGrowth: true
      },
      {
        name: 'Капітальні інвестиції',
        value: '2,7',
        isGrowth: false
      },
      {
        name: 'Будівництво',
        value: '6.5',
        isGrowth: false
      },
      {
        name: 'Внутрішня торгівля',
        value: '22,1',
        isGrowth: true
      }
    ]
  }
})