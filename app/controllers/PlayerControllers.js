import { AppState } from "../AppState.js"
import { playerService } from "../services/PlayersService.js"
import { getFormData } from "../utils/FormHandler.js"
import { setHTML } from "../utils/Writer.js"


export function _drawPage() {
    const player = AppState.players
    // console.log(player)
    let content = ''
    player.forEach(play => content += play.PlayerCard)
    // console.log('content', content)
    setHTML('makePageAwesome', content)
}
export class PlayerController {
    constructor() {
        console.log('???')
        console.log(AppState.players)
        _drawPage()
    }

    increaseScore(thing) {

        // console.log('score increase', thing)
        playerService.increaseScore(thing)
        _drawPage()
    }

    decreaseScore(thing) {

        playerService.decreaseScore(thing)
        _drawPage()
    }

    createPlayer(event) {
        event.preventDefault()
        // console.log('submitted', event)
        const info = event.target
        // console.log('info', info)
        const playerData = getFormData(info)
        console.log('player data', playerData)
        playerService.createPlayer(playerData)
        _drawPage()
    }


}
