import Piece01 from './puzzle-piece-01.svg'
import Piece02 from './puzzle-piece-02.svg'
import Piece03 from './puzzle-piece-03.svg'
import Piece04 from './puzzle-piece-04.svg'
import Piece05 from './puzzle-piece-05.svg'
import Piece06 from './puzzle-piece-06.svg'
import Piece07 from './puzzle-piece-07.svg'
import Piece08 from './puzzle-piece-08.svg'
import Piece09 from './puzzle-piece-09.svg'

function Piece(index, image, width, height) {
  this.index = index
  this.image = image
  this.width = width
  this.height = height
}

const PieceObj01 = new Piece(1, Piece01, 300, 200)

const PieceObj02 = new Piece(2, Piece02, 500, 100)

const PieceObj03 = new Piece(3, Piece03, 300, 300)

const PieceObj04 = new Piece(4, Piece04, 200, 400)

const PieceObj05 = new Piece(5, Piece05, 400, 200)

const PieceObj06 = new Piece(6, Piece06, 400, 300)

const PieceObj07 = new Piece(7, Piece07, 200, 400)

const PieceObj08 = new Piece(8, Piece08, 300, 300)

const PieceObj09 = new Piece(9, Piece09, 300, 200)

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
]
