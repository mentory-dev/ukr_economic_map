import { CityStatisticsFactory } from '../utils/CityStatisticsFactory'

// TODO
export const Kharkiv = new CityStatisticsFactory({
  coordinates: [
    36.22156871013274,
    49.97816164541575,

  ],
  city: 'Kharkiv',
  content: {
    label: 'Станом на 1 січня 2022 року (відносно січня 2021)',
    results: [
      {
        name: 'Доходи населення',
        value: '8,3',
        isGrowth: false
      },
      {
        name: 'Внутрішня торгівля',
        value: '11,7',
        isGrowth: true
      },
      {
        name: 'Промисловість',
        value: '6,7',
        isGrowth: true
      },
      {
        name: 'Сільське господарство',
        value: '1,8',
        isGrowth: true
      },
      {
        name: 'Капітальні інвестиції',
        value: '2,7',
        isGrowth: false
      },
      {
        name: 'Будівництво',
        value: '14.2',
        isGrowth: false
      },
      {
        name: 'Транспорт',
        value: '8.5',
        isGrowth: true
      }
    ]
  }
})