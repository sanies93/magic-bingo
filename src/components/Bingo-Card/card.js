import React from "react";
import Card from "@material-ui/core/Card";
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

const imageArray = []; // Holds all unique keys associated to images to ensure no repeats in 4x4 board
const randNumGen = []; // Holds all unique keys associated to images to ensure no repeats in caller for each of the 78 cards

let status;

// Generate randum number for imageArray
const randImg = () => {
  const newNum = Math.floor(Math.random() * 78) + 1;

  if (!imageArray.includes(newNum)) {
    imageArray.push(newNum);
    return newNum;
  } else {
    return randImg();
  }
};

// Generate randum number for randNumGen
const randNum = () => {
  const newNum = Math.floor(Math.random() * 78) + 1;

  if (!randNumGen.includes(newNum)) {
    randNumGen.push(newNum);
    return newNum;
  } else {
    return randNum();
  }
};

// Image component renders an image with specific properties
class Image extends React.Component {
  render() {
    return (
      <div>
        <img onClick={this.props.onClick}
          width={this.props.width}
          height={this.props.height}
          src={this.props.src}
          style={{ opacity: this.props.opacity }}
        />
      </div>
    );
  }
}

// Caller component renders a new image every few seconds
class Caller extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      width: "200",
      height: "300",
      caller: {
        src: dict["image" + randImg()],
        opacity: 1
      }
    };
  }

  componentDidMount() {
    setInterval(() => {
      console.log("Images: " + imageArray);
      if (status) { // stop if game won 
        return;
      }
      this.setState({
        caller: {
          src: dict["image" + randImg()],
          opacity: 1
        }
      });
    }, 1000);
  }

  render() {
    return <Image
      width={this.state.width}
      height={this.state.height}
      src={this.state.caller.src}
      opacity={this.state.caller.opacity} />;
  }
}

// Board component renders a 4x4
class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      width: "100",
      height: "150",
      cards: [
        {
          id: 0,
          key: randNum(), // Unique keys for each of the 16 images used in Board
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

  // Change opacity on a clicked card only if the card has been called in the Caller component
  handleClick = id => {
    // filters the clicked card to grab the associated key
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
        width={this.state.width}
        height={this.state.height}
        src={dict["image" + (card.key)]}
        opacity={card.opacity}
      />
    );
  }

  render() {
    const winner = calculateWinner(this.state.squares);
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

// Reading component renders a string from the reading dictionary
class Reading extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      future: "Your future awaits..."
    }
  }

  c
  componentDidMount() {
    if (true) {
      this.setState({
        future: reading.Judgement
      })
    }
  }

  render() {
    return <Card body>{this.state.future}</Card>
  }
}

// Game component holds all the other components 
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
          <Reading />
        </div>
      </div>
    );
  }
}

// ========================================

function calculateWinner(squares) {
  // all possible wins
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

//**************************************************************************************************/

const reading = {};

reading.aceOfWands = "Wands are associated with fire energy, and the Ace of Wands is the representation of fire within your winning row. You have a fire to reach for new goals and take your life into your own hands and create a balance.";
reading.twoOfWands = "Your card of significance is the Two of Wands which signifies having two paths. You have decisions to make or a choice between two options but remember the grass isn't always greener on the other side!";
reading.threeOfWands = "The Three of Wands is directly in your path. From the cliff edge, you see everything that is ahead of you. You look forward and reflect on both the commitment that you have for plans, as well as the method of execution in order to bring them to reality.";
reading.fourOfWands = "The Four of Wands depicts is strong in your win. There seems to be a party that is going on, or some kind of welcome committee for your relationship. You can see from the image that it represents a time which is sprinkled with feelings of fulfillment, satisfaction brought by the actual attainment of a goal.";
reading.fiveOfWands = "The Five of Wands is giving the highest energy. You maybe in some kind of disagreement that is facing the querent. This disagreement can either be taken to be as a sign of conflict or that you are enjoying the adrenaline rush of this conflict, and that the competition amongst your friends is a good natured rivalry, not anger.";
reading.sixOfWands = "The Six of Wands is the most telling in this set. The horse is powerful, which is a well-known symbol of strength, purity as well as success. The crowd is there to show the public recognition for the achievements. You should be proud of your accomplishments. To this, the crowd you will react with cheerfulness and enthusiasm.";
reading.sevenOfWands = "The Seven of Wands has made its way to the forefront. You maybe in a position where you are defending a position and attacking in retaliation. If you feel like you are on uneven ground or not having a stable footing in life press forward things will change soon";
reading.eightOfWands = "The Eight of Wands is brimmimg with energy. Your new found success is coming at you with maximum speed. There is likely nothing that will stand in the way of you making it to your destination. If it has been a long journey rejoice in the all you have learned on your journey.";
reading.nineOfWands = "The Nine of Wands is showing the most energy. You have been through it all and you desire strongly to win. Hope and determination will find you through all your challenges, hope will turn into triumph.";
reading.tenOfWands = "This image on the ten of wands indicates a person who has already struggled in life and has succeeded, and now you will be carrying the harvests to your final destination. Although you are not near the destination, you have finished the hardest part of life struggle and you just needs a place to relax and revel in his success.";
reading.pageOfWands = "The Page of Wands is significant in this set and a symbol of transformation from bad to good. You have been passionate advocator, who is constantly spreading spiritual and social advancement ideas that lift up your fellow man. You may be living in a world that has not bared fruit yet. The purity of your heart could lead you to find better fortunes.";
reading.knightOfWands = "The Knight of Wands is seen on his horse that is reared up and ready for action and is the power card in your set. You are ready for battle and ready for any future battles that in front of you find confidence in you postion and press forward with the knowledge you have gained.";
reading.queenOfWands = "The Queen of Wands shows a queen sitting proudly on a throne while facing forward meaning happiness, satisfaction, and fertility. In her right hand, she is holding her wand which is starting to blossom, symbolizes life, fidelity, sustenance, and warmth. You shoul grasp you deep intuition and trust it will lead you to a positive decision.";
reading.kingOfWands = "The King of Wands is glowing bright in this win, which is set to represent creativity and life's passion and are key symbols of fire and strength. The salamander that is biting his tail represents the infinity as well as the overall drive to move through all obstacles.";

reading.aceOfSwords = "The Ace of Swords is pulling great energy in this win. Be prepared for victory, success and great achievement. Reach for distant lands the power of the swords can be used to conquer, as well as ambition.";
reading.twoOfSwords = "The Two of Swords is telling you that you may be confused and are being forced to make difficult choices. Realize that all of your worries are stalling progress and action. Don't let the situation prevent you from seeing both the problem and the solution with clarity. Two choices that lead in different directions and are mutually exclusive to one another, your problem should be addressed with a logical and rational thinking everything else is an illusion and your intuition should be your guide.";
reading.threeOfSwords = "Your energy is pulling one of the most iconic images in the tarot to the forfront. The symbolism is pretty opaque, and the emotional effect that it has is immediate. The heart is the seat of warmth, affection and spirit, and the three swords indicate the power to harm, cause pain, and create suffering to what it pierces. This is an image of grief, loss and literally heartbreak. You are in one of the most difficult parts in your life, stay strong.";
reading.fourOfSwords = "With your win be sure there is a quiet stillness that is present in the Four of Swords, a sense of calm peace. The position of the fourth sword seems to be a signal that the fight has ended and you feel a sense of warmth and welcoming after a retreat.";
reading.fiveOfSwords = "The Five of Swords is showing the most power in this win and you probably have a convenient look of contempt on your face. You are in a position to overcome your enemies but be weary even in victory there can be moments of loss and sadness.";
reading.sixOfSwords = "The Six of Swords is prevelent in this win and we can gather from the images that the woman and the child are leaving something behind, as their backs are faced towards us. The woman's head is covered with a cloak - perhaps she is fleeing something, and must go without others knowing her true identity. We can assume that because of this, she is undergoing great loss or sadness. You may have recently dealt with loss or change, it's important to move towards a future that looks more promising than the one that we left behind.";
reading.sevenOfSwords = "The Seven of Swords card is the card showing the most energy, Have you recently been getting away with something, deception or betrayal. You may have been able to do this quite a bit of and have gained confidence. Unfortunately these acts may be catching up with you and it is time to change your ways.";
reading.eightOfSwords = "In this victory the Eight of Swords is most important. You may feel restricted and your movement is slowed as though you are in some kind of trap or jail. However, it seems as though whoever built the trap was a little lazy or hasty, leaving some open space where she could escape. But because of the blindfold it is preventing you from seeing, you may not be able to find a way out of this trap. Realize that it is just a simple act of lifting the blindfold embrace your creativity and walk away from the problem with new found enthusiasm.";
reading.nineOfSwords = "The Nine of Swords is the card in this set with the most importance. It appears as though you have been having very bad nightmares. You are upset, anxious and fearful haunted by the nightmares of the suffering you endured while you were left and deserted.";
reading.tenOfSwords = "Another one of the most striking and ominous cards in the deck, be prepared to be stabbed in the back, this may be something you never saw coming. This also could be indicating the fear and negativity associated with death. At least, even in this state, the sun is rising.";
reading.pageOfSwords = "The Page of Swords is showing the most importance in this win. It is representative of youthful energy. Embrace your new determination, and perhaps a little bit of defiance.";
reading.knightOfSwords = "What a rush when we see this Knight in your winning deck! The white color of the horse is a reference to the overall purity and intellectual energy which motivates you to move forward confidently.";
reading.queenOfSwords = "The Queen of Swords is the card with the most energy in this winning row. This card shows that no one can trick or fool you. The Queen of Swords gives you the gift of judgment for everyday decisions and having the flexibility to take in knowledge from others.";
reading.kingOfSwords = "The King of Swords tarot card is full of energy with your win. The King of Swords radiates intellectual power, clear thinking, truth, and authority. You need to understand your power holds great responsibility. You may also be welcoming spiritual understanding and the butterflies on the back of his throne are indicative of transformation.";

reading.aceOfPentacles = "In this victory, there is a single mysterious hand that comes out of the clouds. In the hand is what looks like a gold coin and seen as a sign of wealth and all things material, fertility, growth and prosperity. Increase your ambition required to drive one's search for the goal. All signs indicate that emotions are flowing towards ambition.";
reading.twoOfPentacles = "The Two of Pentacles is flowing with energy in this win. This is telling you that you can handle all the issues that come your way and you can manage your life with grace. Remember that you need to remain balanced even if things get rough or choppy, your grace manages to keep you afloat. Through all the ups and downs in life despite all the chaos that surrounds you, the man lives a very carefree life you dance, and handle all that comes to you with joy.";
reading.threeOfPentacles = "The Three of Pentacles displays importance in your win. You may be undertaking a massive rebuilding. Your friends are listening to you in order to more clearly understand what is needed of them and how they can provide guidance. Your input is vital to the completion of the whole task. The Three of Pentacles therefore represents the coming together of different kinds of knowledge in order to build something together.";
reading.fourOfPentacles = "The Four of Pentacles is showing a great deal of importance in this win. You may be hoarding objects out of fear of loss. Hoarding will only lead to more confusion clear your path of these objects and move forward with confidence.";
reading.fiveOfPentacles = "The Five of Pentacles is is giving a great deal of energy in this win, the Five of Pentacles symbolizes adversity you maybe cold, sick, poor, tired, and hungry. It looks as you are lacking the basic necessities of life. You might relate to this in more ways than one. More often than not, the Five of Pentacles is a bad omen. However, do not fret, as it can change depending on your ability to show remorse.";
reading.sixOfPentacles = "The Six of Pentacles is showing the greatest energy in this row. This symbolizes that status and wealth gained through equality and fairness. You should be reminded this card suggests karma, cause and effect, and that we receive what we give. The Six of Pentacles suggests that you are in a secure enough position to give to others without affecting your own stability.";
reading.sevenOfPentacles = "The Seven of Pentacles wants you to recognize to take a break from your hard labor to admire the fruit and blossoms that you have cultivated. This card seems to suggest also a kind of fatigue, because you are focused on long term goals, it will be difficult to enjoy everything right now, choosing to invest the others. With great efforts, you hope to grow your crop for the long term.";
reading.eightOfPentacles = "The Eight of Pentacles is bringing a tremendous amount of energy in this win. You are completely focused and absorbed in what you are doing. You have successfully isolated yourself from the distractions so that you can fully concentrate on your task. The Eight of Pentacles refers to that moments in your life when you are dedicated to completing a certain task. You are fully-immersed, and you are committed in delivering the best version of your work.";
reading.nineOfPentacles = "The Nine of Pentacles is a power in this win. The vines behind her are rich and filled with grapes and golden coins, signaling that you have been very successful in your ventures, which are yielding a great and plentiful harvest.";
reading.tenOfPentacles = "In this row the Ten of Pentacles card is powerful . You may find yourself surrounded by younger loved ones indicating the joining of spirit and matter. You may find great joy with family and pets. Find time in your busy day for those that love you the most";
reading.pageOfPentacles = "The Page of Pentacles finds its way to the top in your win. The card shows your fortune is being held closely, and all that it represents: ambition, security, wealth, nature, and sensuality. The Page of Pentacles symbolizes a person that you are grounded, loyal and diligent.";
reading.knightOfPentacles = "The Knight of Pentacles is abudent with energy in your victoy and this card tells you thaat you are revolved around work, effort, and a general responsibility.You may be prepareing for the next big moment in your life. You are more concerned about the long term future of your kingdom.";
reading.queenOfPentacles = "The Queen of Pentacles card finds its way to the top in this row. The Queen of Pentacles, is telling you that you have a certain level of success and prosperity in your future. But you should be careful of where we leap when you are chasing that success.";
reading.kingOfPentacles = "The King of Pentacles is telling you to keep high ambition, this will lead to materialistic satisfaction, and worldly success. You have a look of sophistication and of being regal. This will only become available through your determination and effort.";

reading.aceOfCups = "In the Ace of Cups card, there is a hand emanating from the clouds holding out a cup, as if in a offer to the querent to take a drink. This cup is overflowing with sparkling water which symbolizes pure and pristine emotion. If you take this offer, drinking from this cup will surely bring you nothing short of emotional as well as spiritual fulfillment. The cup has five streams of water overflowing from the brim. These five streams represent the power of intuition and show the importance of listening to your inner voice. In order to obtain the kind of emotional or spiritual fulfillment that is depicted in the Ace of Cups, the querent will need to follow this inner voice, and remain true to it, regardless of the situation. This will require emotional discipline, but the rewards that this can bring are hinted at within the card itself: overflowing joy and happiness.";
reading.twoOfcups = "This card shows an image of a man and a woman that are exchanging their cups in a ceremony. There is the symbol of Hermes� caduceus in between which is often related to negotiation, trade, cosmic energy, protection, proper conduct, and duality. The Two of Cups refers to something quite positive, for it is one of the most auspicious cards in the tarot for relationships, whether romantic, business or otherwise. It suggests a new partnership is in the works, and it will be created with balance, respect, and honor. Above the caduceus is a chimera, which symbolizes fire and passion also governs this partnership.";
reading.threeOfCups = "When you draw the Three of Cups, you will see three women lifting their cups up in the air in a celebration of some sort. Good times are in the air, for the three ladies have wreaths made of flowers in their hair. Wreaths are often associated with success and victory, so their happiness is well deserved. The ladies are also seen standing on top of a field of flowers and fruit, further adding to the joyful feelings in this card. There are feelings of beauty, growth, compassion and happiness that the women share between each other. An interesting note though, in the Rider-Waite the woman in the middle is turned away from the reader and her face hidden from view. However, the two other maidens are seen smiling";
reading.fourOfCups = "The Four of Cups displays a young man sitting under a tree on a mountaintop, far from others. He seems to be in contemplation and meditation. In front of him are three cups laying on the grass while another cup is being offered to him by a hand in the air. The man has crossed his hand and legs, and he is looking down at the three cups, unimpressed, such that he cannot see the cup being presented to him by the stretched arm. The Four of Cups represents our tendency to take for granted the things that we have, making it hard for us to see what treasures the universe presents us with. We tend to have the answers to our troubles right around us, but we tend to focus too much on what we do not have.";
reading.fiveOfCups = "There are certain Tarot cards whose imagery immediately conjure up negative emotions, and the Five of Cups carries such weight. This is a card which signifies loss as well as the painful challenges which stem from that particular loss. The card depicts a figure that is wearing a black cloak. The person hides his face in what seems to be despair. There are five cups on the ground, three of which have fallen while the other two remain standing. The person, however, seem to notice that there are two standing cups as is too busy mourning over those which are fallen. There is a powerful river which flows between him and a house or a castle in the distance, indicating that a torrent of emotions have separated him from home.";
reading.sixofCups = "The Six of Cups symbolize the joy of nostalgia, the comfort of home and childhood innocence. In the card itself, there are six cups filled with white flowers. Two children are depicted in the foreground, and one is passing a cup to another. This handing of the flowers from the boy to the girl shows the passing of traditions and happy reunions. The children seem to be in a castle of sorts, that we can imagine give them a sense of security and comfort.";
reading.sevenOfCups = "The Seven of Cups symbolizes imagination, choice, wishful thinking, illusion and fantasy. The card shows person with their back turned towards us, contemplating 7 images that are creeping out of the cups, all of which are floating in the clouds. Clouds are a representation of dreams, illusions, thoughts and imagination. There are numerous fantasies that are appearing from the cups, which are representative of the many visions that one sees while dreaming. The Seven of Cups may imply that you have a number of options to choose from.";
reading.eightOfCups = "In the Eight of Cups, we are confronted with the moment of transition. We see a cloaked figure taking off to a barren land leaving behind eight golden cups. He is tired of what those cups that he has spent so much time collecting, and is now setting out to seeking a higher purpose. It may be a result of a boredom or unhappiness that comes with realizing that whatever they have been looking for in life isn�t as pleasurable or as satisfying as they once assumed it would be. The person undertaking this journey might also signify be seeking excitement in the unknown. The mountainous barren lands that he sets off to can also be symbols of facing new challenges. Their stark emptiness seem to indicate that they are waiting for one to come and shape the. The journey that is taken can be done in the guise of trying out new things that have the potential to help one grow both mentally as well as spiritually. It also shows the willingness to detach oneself from others so that one can work on self-improvement, self-understanding and growth.";
reading.nineOfCups = "In this card, a middle-aged man is sitting on a wooden bench while his arms are crossed, and his face are showing quite a level of contentment. He is dressed elegantly and has the look of the true satisfaction. The head-dress on his head is red, and is a depiction of his active mind. At his background, you will notice there are nine golden cups, structured and arranged in an orderly manner. The Nine of Cups symbolizes a representation of fulfillment and success, both spiritually and materially. The man shows that expression of success after achieving his innermost desire.";
reading.tenOfCups = "On the Ten of Cups, there is a couple holding each other while facing a beautiful house and a green garden. Beside them, there are two children playing joyously. The couple is seen holding each other in a loving and romantic embrace, while the children are freely playing. The couple seems to be in a stable relationship, while also blessed with the abundance of a comfortable home and beautiful children. The green land signifies fertility, and the river shows how freely the feelings of the couple are flowing, meaning that their relationship is quite peaceful. Above in the sky, there are ten cups, shaped in an arc, which are meant to symbolize blessings from heaven. The rainbow behind them shows the end of hard times and sorrows, and a new happy life where each and every one of the family will enjoy. The Ten of Cups card depicts �having it all�.";
reading.pageOfCups = "The Page of Cups represents the unexpected inspiration that comes to us from the unconscious, perhaps in ways that we may not truly understand. In this card, a youth at the seashore wears a blue tunic adorned with floral prints, and holds a golden cup. She also wears a beret that looks quite bohemian, and a long flowing scarf. She is surprised by a fish that pops out of the cup, as if to greet her from a fairytale. She can neither drink nor toast with the cup as the fish stares at her and seemingly tries to engage with her.";
reading.knightOfCups = "The Knight of Cups is a card which depicts a young knight who is gloriously riding a white horse while at the same time holding a cup as if he is a messenger of a certain sort. Unlike the Knight of Wands or the Knight of Swords, this particular one isn�t charging along with his horse. He is instead moving slowly forward which provides the entire setting an overall impression of peace and calmness. The horse is known to represent one's drive, energy, and power. The horse's color is white, which is a well-known symbol of spirituality, light, and purity.";
reading.queenOfCups = "The Queen of Cups rules the emotional realm. She is the woman whose throne is right on the ocean�s edge, and water is typically symbolic of the unconscious and feeling. Her position at the shore indicates that she lies between land and sea, the place where feeling and thought exist. She holds a cup that has handles shaped like an angel. This cup is closed, which is why the Queen of Cups symbolizes the thoughts that come with our unconscious mind. The queen sits alone, which allows her to think. The calmness of the water and the sky symbolizes the serene mind of the queen. Her feet are not touching the water, which stands for her looking at her thoughts and feelings from the outside.";
reading.kingOfCups = "The King of Cups is a card in the tarot that shows generosity, control, and emotional balance. The card itself depicts a king seated on a throne, who has an amulet that is shaped like a fish. The fish in his necklace represents his creativity and spirit, which thrives on the calm waters that surround him. We can see from the background that there is a steady balance between the conscious and unconscious.";

reading.theFool = "The Fool depicts a youth walking joyfully into the world. He is taking his first steps, and he is exuberant, joyful, excited. He carries nothing with him except a small sack, caring nothing for the possible dangers that lie in his path. Indeed, he is soon to encounter the first of these possible dangers, for if he takes just a step more, he he topple over the cliff that he is reaching. But this doesn't seem to concern him - we are unsure whether he is just naive or simply unaware. The dog at his heels barks at him in warning, and if he does not become more aware of his surroundings soon, he may never see all the adventures that he dreams of encountering.";
reading.theMagician = "The Magician is one tarot card that is filled with symbolism. The central figure depicts someone with one hand pointed to the sky, while the other hand points to the ground, as if to say 'as above, so below'. This is a rather complicated phrase, but its summarization is that earth reflects heaven, the outer world reflects within, the microcosm reflects the macrocosm, earth reflects God. It can also be interpreted here that the magician symbolizes the ability to act as a go-between between the world above and the contemporary, human world. On his table, the magician also wields all the suits of the tarot. This symbolizes the four elements being connected by this magician - the four elements being earth, water, air, and fire. The infinity sign on his head indicates the infinite possibilities of creation with the will.";
reading.theHighPriestess = "You've most likely encountered the High Priestess before, but in other forms - she can be seen in the archetypes of Persephone, Artemis, Isis and many more. When you encounter her, you will see her sitting on a cubic stone between the two pillars at Solomon�s Temple, Jachin, and Boaz. Jachin (right) is generally referred to as the Pillar of Establishment and Boaz (left) is the Pillar of Strength. The pillars also depict the duality of nature; masculine and feminine, good and evil, negative and positive.The High Priestess's location between the two suggests that it is her responsibility to serve as a mediator between the depths of the reality. She is the third pillar - the path between. She believes that both pillars are equal and there is knowledge to be learned in both worlds. You will also notice that she wears the crown of Isis which can mean that she is a believer of magic. The high priestess wearing of the solar cross denotes that she is connected to the season of the earth and the earth itself. The crescent moon at her feet is seen also in many depictions of the Virgin Mary, and means that she has a complete grasp over her emotion and the pomegranates refer to the ambition of the priestess.";
reading.theEmpress = "The Empress depicts a woman sitting on a throne. From the abundant nature that surrounds her, we can assume that this woman represents the Earth Mother archetype, a goddess of fertility. Her world is ruled by venus which means that there is complete love, harmony, fertility and luxury by the grace of this goddess. The woman herself has blonde hair crowned with stars, signaling her divine connection with the mystical realm. She is dressed in a pomegranate-patterned robe that represents fertility, and she is seated on cushions embroidered with a venus sign. She is surrounded by an enchanting green forest with a river streaming through it. The Empress brings abundance and blessings in the readings of those she meets.";
reading.theEmperor = "In the Emperor tarot card, a stoic ruler figure can be seen on his throne, which is adorned with the heads of four rams, representing his astrological sign - Aries. In one hand, he carries a scepter, representing his reign and his right to rule, and in the other an orb, a symbol of the kingdom that he watches over. The long beard of the emperor represents his vast experience; over time he has learned much about what it takes to rule, to establish power, authority and complete order for the benefit of his people. Behind him, the barren mountains shows his determination, his ambition for greater heights and his leadership capability. Contrast this with his complement, the Empress, whose flowing fields are filled with nurturing kindness. The Emperor instead rules with grit, strength and force.";
reading.theHierophant = "The card depicts a religious figure that sits in a rather formal environment characteristic for a church. He is wearing three elaborate vestments which are designated to represent the three different worlds. His right hand is properly raised in an act of benediction, a sign of blessing � it�s the same hand that the Magician has raised. In his other hand, he carries a triple cross, which is associated traditionally with the pope. Each of the horizontal bars in the cross are thought to represent the Father, the Son and the Holy Ghost. Beneath him, two acolytes are seated, representing the transfer of sacred knowledge within institutions. Through these acolytes, the card also comes to represent following the path to knowledge and education. This card is also known as the High Priest in certain decks - as well as the Pope. He is acting as the masculine counterpart of another card which is known as the High Priestess. This card is ruled by Taurus.";
reading.theLovers = "In the Lovers card, the man and the woman in the image are being protected and blessed by an angel above. The couple seems secure and happy in their home, which appears to be the Garden of Eden. The fruit tree with the snake behind the woman is a reference to that story, which tells of humanity's fall into temptation and into the realm of flesh and sensuality. The angel depicted here is Raphael, the angel of air - who is of the same element of the zodiac sign that governs this card: Gemini. Air is associated with mental activity, and communication in particular, which is the foundation for healthy relationships. His blessing seems to give this card a sense of balance and harmony, the symbolization of union in a grand and cosmic sense between two opposing forces.";
reading.theChariot = "The Chariot tarot card depicts a figure sitting inside a vehicle that is being driven by two black and white sphinxes. The whole card has a bit of a celestial influence; the figure sits underneath a blue canopy adorned by white stars. On his shoulders, he carries the sign of the crescent moon, representing the spiritual influence under which he is guided. On his head sits a crown, meaning that he is enlightened, and that his will is pure. Emblazoned on his chest is a square, denoting the element of earth, of the material world, which grounds him and his actions. The sphinxes are colored in black and white, a symbol of opposing forces that the charioteer must learn to control. Here they are calm, but they frequently get into scuffles as they seem to want to move in different directions. His task is to guide these sphinxes towards a destination, one that is marked by the cosmic forces that he represents.The Chariot is linked to the Cancer zodiac sign.";
reading.Strength = "In this tarot card, you will see a woman who calmly holds the jaws of a fully grown lion. Despite the fact that the lion looks menacing and strong, the woman seems to have dominion over it. What is captivating is how gracefully she controls the lion. She is calm and collected, which is representative for being in control and disciplined especially in times of great adversities. The fact that she is also holding the jaws of a lion also shows that she has courage. Her control of the lion without being too rough shows love and compassion. The blue background over the mountains shows stability and the kind of calmness that comes with being stable. The lion is a symbol of courage, passion and desire which are very much part of the human feelings that are necessary for survival. But if these feelings are not put in check can lead to our eventual destruction.";
reading.theHermit = "The Hermit depicts an old man standing alone at the peak of the mountain while holding a lantern in one of his hands and a staff on the other. The mountain denotes accomplishment, development, and success. The hermit tarot card refers to the level of spiritual knowledge that he attained, and that he is ready to impart that knowledge to everyone. There is also a deep commitment he has to his goal and a solid awareness of the path that he is taking. Inside the lantern, you will notice a star with 6 points which is also known as the Seal of Solomon. This symbol represents wisdom. The staff that he holds depicts authority and power.";
reading.theWheelOfFortune = "The Wheel of Fortune is one of the most highly symbolic cards in the deck, filled with signs that each have its own meaning. At the center of the card, lies a giant wheel, covered in esoteric symbols. There are different creatures that surround the wheel; the angel, the eagle, the bull and the lion. They are related to four fixed signs in the zodiac - leo, taurus, scorpio and aquarius. These four animals are also representatives for the four evangelists in Christian traditions, which is perhaps the reason that they are all adorned with wings. The books that each of the creatures hold represents the Torah which communicates wisdom and self-understanding. The snake indicates the act of descending into material world. On the wheel itself, rides a sphinx that sits at the top, and what appears to be either a devil, or Anubis himself arising at the bottom. These two Egyptian figures are representative of both the wisdom of the gods and kings (in the case of the sphinx) and the underworld (Anubis). They are rotating forever, in a cycle, and suggests that as one comes up, the other goes down.";
reading.justice = "The Justice tarot card is a symbol of truth, fairness, and law. As she sits in her chair, the scales in her left hand represent how intuition should balance logic. She symbolizes impartiality with the double-edged sword in her right hand. The clarity in thought which is required to dispense justice are symbolized by the square on the crown she wears. Behind her, there is a purple cloak and standing grey pillars. Beneath her red cloak, which is held together by a clasp, she shows the tip of a white shoe. This is a spiritual reminder that what she delivers are the outcomes of their actions.";
reading.theHangedMan = "In this card, it depicts a man who is suspended upside-down, and he is hanging by his foot from the living world tree. This tree is rooted deep down in the underworld, and it is known to support the heavens. It is believed that the hanging man is actually positioned there by his own free will. We believe this because of the serene expression which is on his face. His right foot is bound to the branches, but his left foot remains perfectly free. At the same time, he is holding his hands behind his back in a way which forms an inverted triangle. His wearing of red pants are a representation of the physical body and human�s passion, while the blue that he wears in his shirt are representative of calm emotions, a color combination that is commonly seen in saints. His intellect is symbolized by the yellow color of his shoes, hair and halo.";
reading.death = "Here, we see Death riding a beautiful white horse while holding up a black flag with a white pattern. It is portrayed as a living skeleton, the bones being the only part of the human body existing after death. He wears armor, which gives him his invincibility - signaling that no one can destroy Death. The white horse that he rides stands for purity, as Death purifies everyone. Beneath him, all classes of humans lie in the dirt - a king, and a pauper, meant to remind us that death does not differentiate between class, race, gender.";
reading.temperance = "On the Temperance card, there is an angel with wings, whose gender is not immediately obvious, which suggests that there is a balance between the sexes. One foot of the angel is in water, to represent the subconscious, while the other foot is on dry land, a representation of the material world. On her robe, there is a square, which has a triangle inscribed inside, another echo of the tangible earth in union with the holy trinity. She holds two cups in a manner where she can mix the waters, which represent the super and subconscious minds. The water flows between them, suggesting union and infinity. Everything about this card represents balance, the perfect harmony that comes from the union of dualities. Her advice is to test any new waters, before jumping into the deep end.";
reading.theDevil = "This card shows the Devil represented in his most well-known satyr form, otherwise known as Baphomet. Along with being half goat and half man, the devil has bat wings and an inverted pentagram on his forehead. He is standing on a pedestal, to which are chained a nude man and woman, as if to show that he has dominion over them. Both the man and the woman have horns, as if to show that the more time they spend with the Devil, the less human they become. The chains make it appear as though the devil has taken them captive. The man has a flame on his tail while a woman has a bowl of grapes on her tail, which symbolizes their addiction to power and finer things in life, respectively.Looking closely, both the man and the woman don�t look happy.  Their individual power has been taken from them, leaving them exposed and ashamed in their nakedness.";
reading.theTower = "The Tower card depicts a high spire nestled on top of the mountain. A lightning bolt strikes the tower which sets it ablaze. Flames are bursting in the windows and people are jumping out of the windows as an act of desperation. They perhaps signal the same figures we see chained in the Devil card earlier. They want to escape the turmoil and destruction within. The Tower is a symbol for the ambition that is constructed on faulty premises. The destruction of the tower must happen in order to clear out the old ways and welcome something new. Its revelations can come in a flash of truth or inspiration.";
reading.theStar = "The Star card shows a woman kneeling at the edge of a small pond. She is holding two containers of water. One container pours the water out to the dry land, as if to to nourish it and ensure its fertility. The lush green land around her seems to say that it is working. One foot is inside the water which shows the spiritual abilities and inner strength of the woman. The other foot on the ground shows her practical abilities and strengths. Behind her, there is a large central star surrounded by seven small stars which represent the chakras. There is bird standing at a tree branch which represents the holy ibis of thought. The Star's astrological correspondent is Aquarius.";
reading.theMoon = "When we encounter the Moon, we see a path that leads off into the distance. On either side of the path stand a wolf and a dog, representing our animalistic nature - one is civilized, and the other wild and feral. There is a crawfish that is crawling out of the pond from which the path stems from. In the distance, we can see two towers flanking the central path, once again alluding to the doubles visible in this card. Everything in this card seems to echo the other, as if to allude to two possibilities. When we walk down the path, we walk the fine line between conscious and unconscious, between the tamed side of civilization of the dog, and the forces of nature represented by the wolf. The towers on the opposing ends represent the forces of good and evil, and their similarity in appearance can allude to the difficulties that we face in distinguishing between them.";
reading.theSun = "The Sun card presents an feeling of optimism and fulfillment. This card represents the dawn which follows the darkest of nights. The Sun is the source of all the life on our planet, and it represents life energy itself. There is a child depicted in the card, playing joyfully in the foreground. A symbol of our innocence, it represents the happiness that occurs when you are in alignment with your true self. The child is naked, meaning that he has absolutely nothing to hide. The card also depicts the childhood innocence and absolute purity. This is particularly emphasized through the white horse upon which the child is riding. The horse here is also a symbol of strength and nobility.";
reading.Judgement = "This card depicts what one would imagine the last judgment would be, in the various forms that takes in many mythologies. The image in the Judgement card shows women, men, and children who are rising from the grave to respond to Gabriel�s trumpet call. Their outstretched arms symbolize that they are ready to be judged by the universe. They are about to meet their creator, their actions weighed, and find out where they will spend the remainder of eternity: in heaven or in hell. The massive tidal wave in the background signify that judgement is unavoidable, and that this judgement will be final. Judgement is ruled by Pluto, who is the underworld�s ruler. There are echoes of this card in Death, for they both remind us that everything comes to an end and that a new beginning is coming.";
reading.theWorld = "The World card in the tarot deck has a dancing figure at the center. The dancing figure on the card has one leg crossed over the other and holds a wand in either hand. She symbolizes balance and evolution in movement. The fulfillment and unity that she represents is not one that is static, but ever-changing, dynamic and eternal. The green wreath of flowers that surrounds the central figure is a symbol of success, while the red ribbons that wrap around it are reminiscent of infinity. There are four figures on each corner of the card - and they are the same ones that are in the Wheel of Fortune. The four figures represent Scorpio, Leo, Aquarius and Taurus  representative of the four corners of the universe, the four elements, and the four evangelicals. Together, they symbolize the harmony between all of their energies.";