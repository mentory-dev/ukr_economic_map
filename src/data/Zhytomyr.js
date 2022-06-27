



import { CityStatisticsFactory } from '../utils/CityStatisticsFactory'

export const Zhytomyr = new CityStatisticsFactory({
  coordinates: [
    28.6819738220656, 50.27364726094348
  ],
  city: 'Zhytomyr',
  content: {
    label: 'Станом на 1 січня 2022 року (відносно січня 2021)',
    results: [
      {
        name: 'Доходи населення',
        value: '3.5',
        isGrowth: false
      },
      {
        name: 'Правопорушення',
        value: '6.2',
        isGrowth: false
      },
      {
        name: 'Сільське господарство',
        value: '5',
        isGrowth: false
      },
      {
        name: 'Капітальні інвестиції',
        value: '2,7',
        isGrowth: false
      },
      {
        name: 'Будівництво',
        value: '7.5',
        isGrowth: true
      },
      {
        name: 'Перевезення',
        value: '4,1',
        isGrowth: true
      }
    ]
  }
})