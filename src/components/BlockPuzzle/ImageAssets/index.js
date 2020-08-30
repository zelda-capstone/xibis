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

function Piece(index, image, width, height) {
  this.index = index
  this.image = image
  this.width = width
  this.height = height
}

const PieceObj01 = new Piece(1, Piece01, 150, 100)

const PieceObj02 = new Piece(2, Piece02, 250, 50)

const PieceObj03 = new Piece(3, Piece03, 150, 150)

const PieceObj04 = new Piece(4, Piece04, 100, 200)

const PieceObj05 = new Piece(5, Piece05, 200, 100)

const PieceObj06 = new Piece(6, Piece06, 200, 150)

const PieceObj07 = new Piece(7, Piece07, 100, 200)

const PieceObj08 = new Piece(8, Piece08, 150, 150)

const PieceObj09 = new Piece(9, Piece09, 150, 100)

const PieceObj10 = new Piece(10, Piece10, 150, 150)

const PieceObj11 = new Piece(11, Piece11, 150, 150)

const PieceObj12 = new Piece(12, Piece12, 150, 150)

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
