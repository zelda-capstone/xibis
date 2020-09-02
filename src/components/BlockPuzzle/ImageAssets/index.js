import Piece01 from './puzzle-piece-01.svg'
import Piece02 from './puzzle-piece-02.svg'
import Piece03 from './puzzle-piece-03.svg'
import Piece04 from './puzzle-piece-04.svg'
import Piece05 from './puzzle-piece-05.svg'
import Piece06 from './puzzle-piece-06.svg'
import Piece07 from './puzzle-piece-07.svg'
import Piece08 from './puzzle-piece-08.svg'
import Piece09 from './puzzle-piece-09.svg'
import Piece10 from './puzzle-piece-10.svg'
import Piece11 from './puzzle-piece-11.svg'
import Piece12 from './puzzle-piece-12.svg'

function Piece(image, width, height, location) {
  this.image = image
  this.width = width
  this.height = height
  this.location = location
}

const PieceObj01 = new Piece(Piece01, 150, 100, [0, -300])

const PieceObj02 = new Piece(Piece02, 250, 50, [-50, -300])

const PieceObj03 = new Piece(Piece03, 150, 150, [350, -400])

const PieceObj04 = new Piece(Piece04, 100, 200, [-150, -300])

const PieceObj05 = new Piece(Piece05, 200, 100, [-100, -350])

const PieceObj06 = new Piece(Piece06, 200, 150, [250, -550])

const PieceObj07 = new Piece(Piece07, 100, 200, [200, -550])

const PieceObj08 = new Piece(Piece08, 150, 150, [50, -450])

const PieceObj09 = new Piece(Piece09, 150, 100, [50, -700])

const PieceObj10 = new Piece(Piece10, 150, 150, [-100, -650])

const PieceObj11 = new Piece(Piece11, 150, 150, [-150, -650])

const PieceObj12 = new Piece(Piece12, 150, 150, [250, -800])

export const PiecesArray = [
  PieceObj01,
  PieceObj02,
  PieceObj03,
  PieceObj04,
  PieceObj05,
  PieceObj06,
  PieceObj07,
  PieceObj08,
  PieceObj09,
  PieceObj10,
  PieceObj11,
  PieceObj12,
]
