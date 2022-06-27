import { CityStatisticsFactory } from '../utils/CityStatisticsFactory'

export const Zaporizhzhia = new CityStatisticsFactory({
  coordinates: [
    35.13078209187955, 47.81759140337141 
  ],
  city: 'Zaporizhzhia',
  content: {
    label: 'Станом на січень-лютий 2018 року',
    results: [
      {
        name: 'Доходи населення',
        value: '12.4',
        isGrowth: true
      },
      {
        name: 'Правопорушення',
        value: '7.3',
        isGrowth: false
      },
      {
        name: 'Промисловість',
        value: '3,7',
        isGrowth: true
      },
      {
        name: 'Сільське господарство',
        value: '5.2',
        isGrowth: true
      },
      {
        name: 'Капітальні інвестиції',
        value: '2,7',
        isGrowth: false
      },
      {
        name: 'Будівництво',
        value: '13.2',
        isGrowth: false
      },
      {
        name: 'Внутрішня торгівля',
        value: '2.6',
        isGrowth: true
      },
      {
        name: 'Транспорт',
        value: '27.1',
        isGrowth: true
      }
    ]
  }
})