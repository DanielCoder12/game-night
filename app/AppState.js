import { Player } from "./models/PlayerModel.js"
import { Value } from "./models/Value.js"
import { EventEmitter } from "./utils/EventEmitter.js"
import { isValidProp } from "./utils/isValidProp.js"
import { loadState } from "./utils/Store.js"

class ObservableAppState extends EventEmitter {
  page = ''

  /** @type {import('./models/Value.js').Value[]} */
  values = loadState('values', [Value])

  // NOTE Used to load initial data
  init() {

  }





  players = [new Player('Hunter', 'https://hips.hearstapps.com/hmg-prod/images/free-guy-ryan-reynolds-1628082188.jpg?crop=0.529xw:0.353xh;0.237xw,0&resize=1200:*'),
  new Player('Jake', 'https://politics.georgetown.edu/wp-content/uploads/sites/24/2021/01/guy-benson.jpg')]



}



export const AppState = new Proxy(new ObservableAppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
