import React from "react";
import "./card.css";

// Add images to dictionary
const dict = {};

dict.image1 = "../images/Tarot/majorArcana/death.jpg";
dict.image2 = "../images/Tarot/majorArcana/judgment.jpg";
dict.image3 = "../images/Tarot/majorArcana/justice.jpg";
dict.image4 = "../images/Tarot/majorArcana/strength.jpg";
dict.image5 = "../images/Tarot/majorArcana/temperance.jpg";
dict.image6 = "../images/Tarot/majorArcana/theChariot.jpg";
dict.image7 = "../images/Tarot/majorArcana/theDevil.jpg";
dict.image8 = "../images/Tarot/majorArcana/theEmperor.jpg";
dict.image9 = "../images/Tarot/majorArcana/theEmpress.jpg";
dict.image10 = "../images/Tarot/majorArcana/theFool.jpg";
dict.image11 = "../images/Tarot/majorArcana/theHangedMan.jpg";
dict.image12 = "../images/Tarot/majorArcana/theHermit.jpg";
dict.image13 = "../images/Tarot/majorArcana/theHierophant.jpg";
dict.image14 = "../images/Tarot/majorArcana/theHighPriestess.jpg";
dict.image15 = "../images/Tarot/majorArcana/theLovers.jpg";
dict.image16 = "../images/Tarot/majorArcana/theMagician.jpg";
dict.image17 = "../images/Tarot/majorArcana/theMoon.jpg";
dict.image18 = "../images/Tarot/majorArcana/theStar.jpg";
dict.image19 = "../images/Tarot/majorArcana/theSun.jpg";
dict.image20 = "../images/Tarot/majorArcana/theTower.jpg";
dict.image21 = "../images/Tarot/majorArcana/theWheelOfFortune.jpg";
dict.image22 = "../images/Tarot/majorArcana/theWorld.jpg";

dict.image23 = "../images/Tarot/suitOfCups/aceOfCups.jpg";
dict.image24 = "../images/Tarot/suitOfCups/eightOfCups.jpg";
dict.image25 = "../images/Tarot/suitOfCups/fiveOfCups.jpg";
dict.image26 = "../images/Tarot/suitOfCups/fourOfCups.jpg";
dict.image27 = "../images/Tarot/suitOfCups/kingOfCups.jpg";
dict.image28 = "../images/Tarot/suitOfCups/knightOfCups.jpg";
dict.image29 = "../images/Tarot/suitOfCups/nineOfCups.jpg";
dict.image30 = "../images/Tarot/suitOfCups/pageOfCups.jpg";
dict.image31 = "../images/Tarot/suitOfCups/queenOfCups.jpg";
dict.image32 = "../images/Tarot/suitOfCups/sevenOfCups.jpg";
dict.image33 = "../images/Tarot/suitOfCups/sixOfCups.jpg";
dict.image34 = "../images/Tarot/suitOfCups/tenOfCups.jpg";
dict.image35 = "../images/Tarot/suitOfCups/threeOfCups.jpg";
dict.image36 = "../images/Tarot/suitOfCups/twoOfCups.jpg";

dict.image37 = "../images/Tarot/suitOfPentacles/aceOfPentacles.jpg";
dict.image38 = "../images/Tarot/suitOfPentacles/eightOfPentacles.jpg";
dict.image39 = "../images/Tarot/suitOfPentacles/fiveOfPentacles.jpg";
dict.image40 = "../images/Tarot/suitOfPentacles/fourOfPentacles.jpg";
dict.image41 = "../images/Tarot/suitOfPentacles/kingOfPentacles.jpg";
dict.image42 = "../images/Tarot/suitOfPentacles/knightOfPentacles.jpg";
dict.image43 = "../images/Tarot/suitOfPentacles/nineOfPentacles.jpg";
dict.image44 = "../images/Tarot/suitOfPentacles/pageOfPentacles.jpg";
dict.image45 = "../images/Tarot/suitOfPentacles/queenOfPentacles.jpg";
dict.image46 = "../images/Tarot/suitOfPentacles/sevenOfPentacles.jpg";
dict.image47 = "../images/Tarot/suitOfPentacles/sixOfPentacles.jpg";
dict.image48 = "../images/Tarot/suitOfPentacles/tenOfPentacles.jpg";
dict.image49 = "../images/Tarot/suitOfPentacles/threeOfPentacles.jpg";
dict.image50 = "../images/Tarot/suitOfPentacles/twoOfPentacles.jpg";

dict.image51 = "../images/Tarot/suitOfSwords/aceOfSwords.jpg";
dict.image52 = "../images/Tarot/suitOfSwords/eightOfSwords.jpg";
dict.image53 = "../images/Tarot/suitOfSwords/fiveOfSwords.jpg";
dict.image54 = "../images/Tarot/suitOfSwords/fourOfSwords.jpg";
dict.image55 = "../images/Tarot/suitOfSwords/kingOfSwords.jpg";
dict.image56 = "../images/Tarot/suitOfSwords/knightOfSwords.jpg";
dict.image57 = "../images/Tarot/suitOfSwords/nineOfSwords.jpg";
dict.image58 = "../images/Tarot/suitOfSwords/pageOfSwords.jpg";
dict.image59 = "../images/Tarot/suitOfSwords/queenOfSwords.jpg";
dict.image60 = "../images/Tarot/suitOfSwords/sevenOfSwords.jpg";
dict.image61 = "../images/Tarot/suitOfSwords/sixOfSwords.jpg";
dict.image62 = "../images/Tarot/suitOfSwords/tenOfSwords.jpg";
dict.image63 = "../images/Tarot/suitOfSwords/threeOfSwords.jpg";
dict.image64 = "../images/Tarot/suitOfSwords/twoOfSwords.jpg";

dict.image65 = "../images/Tarot/suitOfWands/aceOfWands.jpg";
dict.image66 = "../images/Tarot/suitOfWands/eightOfWands.jpg";
dict.image67 = "../images/Tarot/suitOfWands/fiveOfWands.jpg";
dict.image68 = "../images/Tarot/suitOfWands/fourOfWands.jpg";
dict.image69 = "../images/Tarot/suitOfWands/kingOfWands.jpg";
dict.image70 = "../images/Tarot/suitOfWands/knightOfWands.jpg";
dict.image71 = "../images/Tarot/suitOfWands/nineOfWands.jpg";
dict.image72 = "../images/Tarot/suitOfWands/pageOfWands.jpg";
dict.image73 = "../images/Tarot/suitOfWands/queenOfWands.jpg";
dict.image74 = "../images/Tarot/suitOfWands/sevenOfWands.jpg";
dict.image75 = "../images/Tarot/suitOfWands/sixOfWands.jpg";
dict.image76 = "../images/Tarot/suitOfWands/tenOfWands.jpg";
dict.image77 = "../images/Tarot/suitOfWands/threeOfWands.jpg";
dict.image78 = "../images/Tarot/suitOfWands/twoOfWands.jpg";

const imageArray = [];
const randNumGen = [];

let status;

const randImg = () => {
  const newNum = Math.floor(Math.random() * 78) + 1;

  if (!imageArray.includes(newNum)) {
    imageArray.push(newNum);
    return newNum;
  } else {
    return randImg();
  }
};

const randNum = () => {
  const newNum = Math.floor(Math.random() * 78) + 1;

  if (!randNumGen.includes(newNum)) {
    randNumGen.push(newNum);
    return newNum;
  } else {
    return randNum();
  }
};

class Image extends React.Component {
  render() {
    return (
      <div>
        <img
          onClick={this.props.onClick}
          width="100"
          height="150"
          src={this.props.src}
          style={{ opacity: this.props.opacity }}
        />
      </div>
    );
  }
}

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      cards: [
        {
          id: 0,
          key: randNum(),
          opacity: 1
        },
        {
          id: 1,
          key: randNum(),
          opacity: 1
        },
        {
          id: 2,
          key: randNum(),
          opacity: 1
        },
        {
          id: 3,
          key: randNum(),
          opacity: 1
        },
        {
          id: 4,
          key: randNum(),
          opacity: 1
        },
        {
          id: 5,
          key: randNum(),
          opacity: 1
        },
        {
          id: 6,
          key: randNum(),
          opacity: 1
        },
        {
          id: 7,
          key: randNum(),
          opacity: 1
        },
        {
          id: 8,
          key: randNum(),
          opacity: 1
        },
        {
          id: 9,
          key: randNum(),
          opacity: 1
        },
        {
          id: 10,
          key: randNum(),
          opacity: 1
        },
        {
          id: 11,
          key: randNum(),
          opacity: 1
        },
        {
          id: 12,
          key: randNum(),
          opacity: 1
        },
        {
          id: 13,
          key: randNum(),
          opacity: 1
        },
        {
          id: 14,
          key: randNum(),
          opacity: 1
        },
        {
          id: 15,
          key: randNum(),
          opacity: 1
        }
      ]
    };
  }

  handleClick = id => {
    const clickedCard = this.state.cards.filter(c => c.id === id)[0];

    console.log(clickedCard);

    if (imageArray.includes(clickedCard.key)) {
      console.log("Numbers: " + randNumGen);
      const squares = this.state.squares;
      if (calculateWinner(squares) || squares[id]) {
        return;
      }
      squares[id] = "X";
      console.log(id + ": " + squares);
      const newCards = this.state.cards.map(card => {
        if (card.id === id) {
          return Object.assign({}, card, { opacity: 0.5 });
        }

        return card;
      });

      this.setState({
        cards: newCards,
        squares: squares
      });
    }
  };

  renderSquare(card) {
    return (
      <Image
        onClick={() => this.handleClick(card.id)}
        src={dict["image" + card.key]}
        opacity={card.opacity}
      />
    );
  }

  render() {
    const winner = calculateWinner(this.state.squares);
    // let status;
    if (winner) {
      status = "You win!";
    }

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(this.state.cards[0])}
          {this.renderSquare(this.state.cards[1])}
          {this.renderSquare(this.state.cards[2])}
          {this.renderSquare(this.state.cards[3])}
        </div>
        <div className="board-row">
          {this.renderSquare(this.state.cards[4])}
          {this.renderSquare(this.state.cards[5])}
          {this.renderSquare(this.state.cards[6])}
          {this.renderSquare(this.state.cards[7])}
        </div>
        <div className="board-row">
          {this.renderSquare(this.state.cards[8])}
          {this.renderSquare(this.state.cards[9])}
          {this.renderSquare(this.state.cards[10])}
          {this.renderSquare(this.state.cards[11])}
        </div>
        <div className="board-row">
          {this.renderSquare(this.state.cards[12])}
          {this.renderSquare(this.state.cards[13])}
          {this.renderSquare(this.state.cards[14])}
          {this.renderSquare(this.state.cards[15])}
        </div>
      </div>
    );
  }
}

class Caller extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      caller: {
        src: dict["image" + randImg()],
        opacity: 1
      }
    };
  }

  componentDidMount() {
    setInterval(() => {
      console.log("Images: " + imageArray);
      if (status) {
        return;
      }
      this.setState({
        caller: {
          src: dict["image" + randImg()],
          opacity: 1
        }
      });
    }, 4000);
  }

  render() {
    return (
      <Image src={this.state.caller.src} opacity={this.state.caller.opacity} />
    );
  }
}

export default class Game extends React.Component {
  randNumGen = [];
  render() {
    return (
      <div className="game">
        <div className="game-caller">
          <Caller />
        </div>
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
        </div>
      </div>
    );
  }
}

// ========================================

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2, 3],
    [4, 5, 6, 7],
    [8, 9, 10, 11],
    [12, 13, 14, 15],
    [0, 4, 8, 12],
    [1, 5, 9, 13],
    [2, 6, 10, 14],
    [3, 7, 11, 15],
    [0, 5, 10, 15],
    [3, 6, 9, 12]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c, d] = lines[i];
    if (
      squares[a] &&
      squares[a] === squares[b] &&
      squares[a] === squares[c] &&
      squares[a] === squares[d]
    ) {
      return squares[a];
    }
  }
  return null;
}
