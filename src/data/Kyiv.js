import { CityStatisticsFactory } from '../utils/CityStatisticsFactory'

export const Kyiv = new CityStatisticsFactory({
  coordinates: [
    30.52675157811433, 50.414611244597324
  ],
  city: 'Kyiv',
  content: {
    label: 'Станом на 1 січня 2022 року (відносно січня 2021)',
    results: [
      {
        name: 'Доходи населення',
        value: '27.6',
        isGrowth: true
      },
      {
        name: 'Правопорушення',
        value: '-5.6',
        isGrowth: true
      },
      {
        name: 'Промисловість',
        value: '8,7',
        isGrowth: true
      },
      {
        name: 'Сільське господарство',
        value: '9,5',
        isGrowth: true
      },
      {
        name: 'Капітальні інвестиції',
        value: '2,7',
        isGrowth: true
      },
      {
        name: 'Будівництво',
        value: '25.5',
        isGrowth: true
      },
      {
        name: 'Внутрішня торгівля',
        value: '16,4',
        isGrowth: true
      }
    ]
  }
})