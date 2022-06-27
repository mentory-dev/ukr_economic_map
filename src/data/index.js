
import { Vinnytsa } from './Vinnytsa'
import { Kyiv } from './Kyiv'
import { Zaporizhzhia } from './Zaporizhzhia'
import { Dnipro } from './Dnipro'
import { Zhytomyr } from './Zhytomyr'
import { Uzhhorod } from './Uzhhorod'
import { Odesa } from './Odesa'
import { Kharkiv } from './Kharkiv'
import { Lutsk } from './Lutsk'

export const MapPoints = {
  'type': 'FeatureCollection',
  'features': [
      Zaporizhzhia,
      Kyiv,
      Vinnytsa,
      Dnipro,
      Zhytomyr,
      Uzhhorod,
      Odesa,
      Kharkiv,
      Lutsk
  ]
}
