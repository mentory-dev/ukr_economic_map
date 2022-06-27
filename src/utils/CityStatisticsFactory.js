import { POINTER_NAME } from "../constants"
import { v4 as uuidv4 } from 'uuid';

export class CityStatisticsFactory {
  constructor({
    coordinates,
    city,
    content
  }){
    this.type = 'Feature';
    this.geometry = {
      type: 'Point',
      coordinates
    };
    this.properties = {
      id: uuidv4(),
      [POINTER_NAME]: city,
      content,
      opacity: this.calculateOpacity(content)
    }
  }

  calculateOpacity({results}) {
    const positive = results.reduce((acc, {isGrowth}) => acc += Number(isGrowth), 0);
    const opacity = positive / results.length
    const res = opacity.toFixed(2)
    return Number(res)
  }
}