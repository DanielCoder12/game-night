import { AppState } from "../AppState.js";

export class Player {
  constructor(name, imgUrl) {
    this.name = name;
    this.imgUrl = imgUrl;
    this.score = 0;

  }

  get PlayerCard() {
    return `<div class="col-12 d-flex justify-content-evenly">
      <div class="d-flex align-items-center">
        <img class="Img-Display"
          src="${this.imgUrl}"
          alt="">
        <p>${this.name}</p>
      </div>
      <div class="d-flex align-items-center">
        <button onclick="app.PlayerController.decreaseScore('${this.name}')" class="btn btn-danger btn">-</button>
        <p class="mb-0">${this.score}</p>
        <button onclick="app.PlayerController.increaseScore('${this.name}')" class="btn btn-success">+</button>
      </div>
    </div>`
  }

}




// export class Player {
//     constructor(name) {
//         this.name = name;
//         this.score = 0;
//     }
// }