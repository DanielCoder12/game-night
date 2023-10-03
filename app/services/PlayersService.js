import { AppState } from "../AppState.js"
import { Player } from "../models/PlayerModel.js"

class PlayerService {

    increaseScore(PlayerName) {
        const foundPlayer = AppState.players.find(player => player.name == PlayerName)
        // console.log('services', foundPlayer)
        foundPlayer.score++
    }

    decreaseScore(PlayerName) {
        const foundPlayer = AppState.players.find(player => player.name == PlayerName)
        foundPlayer.score--
        // console.log('decrease in service', foundPlayer)
    }

    createPlayer(PlayerInfo) {
        const newPlayer = new Player(PlayerInfo.name, PlayerInfo.imgUrl)
        console.log('new data', newPlayer)
        AppState.players.push(newPlayer)
    }

}

export const playerService = new PlayerService