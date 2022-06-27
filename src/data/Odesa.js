import { CityStatisticsFactory } from '../utils/CityStatisticsFactory'

export const Odesa = new CityStatisticsFactory({
  coordinates: [
    30.702401200113997,
    46.47877075403542
  ],
  city: 'Odesa',
  content: {
    label: 'Станом на 1 січня 2022 року (відносно січня 2021)',
    results: [
      {
        name: 'Доходи населення',
        value: '19.6',
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
        value: '79,5',
        isGrowth: true
      },
      {
        name: 'Капітальні інвестиції',
        value: '2,7',
        isGrowth: true
      },
      {
        name: 'Будівництво',
        value: '6.5',
        isGrowth: true
      },
      {
        name: 'Внутрішня торгівля',
        value: '12,4',
        isGrowth: true
      }
    ]
  }
})