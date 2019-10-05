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
dict.image24 = "../images/Tarot/suitOfCups/twoOfCups.jpg";
dict.image25 = "../images/Tarot/suitOfCups/threeOfCups.jpg";
dict.image26 = "../images/Tarot/suitOfCups/fourOfCups.jpg";
dict.image27 = "../images/Tarot/suitOfCups/fiveOfCups.jpg";
dict.image28 = "../images/Tarot/suitOfCups/sixOfCups.jpg";
dict.image29 = "../images/Tarot/suitOfCups/sevenOfCups.jpg";
dict.image30 = "../images/Tarot/suitOfCups/eightOfCups.jpg";
dict.image31 = "../images/Tarot/suitOfCups/nineOfCups.jpg";
dict.image32 = "../images/Tarot/suitOfCups/tenOfCups.jpg";
dict.image33 = "../images/Tarot/suitOfCups/pageOfCups.jpg";
dict.image34 = "../images/Tarot/suitOfCups/knightOfCups.jpg";
dict.image35 = "../images/Tarot/suitOfCups/queenOfCups.jpg";
dict.image36 = "../images/Tarot/suitOfCups/kingOfCups.jpg";

dict.image37 = "../images/Tarot/suitOfPentacles/aceOfPentacles.jpg";
dict.image38 = "../images/Tarot/suitOfPentacles/twoOfPentacles.jpg";
dict.image39 = "../images/Tarot/suitOfPentacles/threeOfPentacles.jpg";
dict.image40 = "../images/Tarot/suitOfPentacles/fourOfPentacles.jpg";
dict.image41 = "../images/Tarot/suitOfPentacles/fiveOfPentacles.jpg";
dict.image42 = "../images/Tarot/suitOfPentacles/sixOfPentacles.jpg";
dict.image43 = "../images/Tarot/suitOfPentacles/sevenOfPentacles.jpg";
dict.image44 = "../images/Tarot/suitOfPentacles/eightOfPentacles.jpg";
dict.image45 = "../images/Tarot/suitOfPentacles/nineOfPentacles.jpg";
dict.image46 = "../images/Tarot/suitOfPentacles/tenOfPentacles.jpg";
dict.image47 = "../images/Tarot/suitOfPentacles/pageOfPentacles.jpg";
dict.image48 = "../images/Tarot/suitOfPentacles/knightOfPentacles.jpg";
dict.image49 = "../images/Tarot/suitOfPentacles/queenOfPentacles.jpg";
dict.image50 = "../images/Tarot/suitOfPentacles/kingOfPentacles.jpg";

dict.image51 = "../images/Tarot/suitOfSwords/aceOfSwords.jpg";
dict.image52 = "../images/Tarot/suitOfSwords/twoOfSwords.jpg";
dict.image53 = "../images/Tarot/suitOfSwords/threeOfSwords.jpg";
dict.image54 = "../images/Tarot/suitOfSwords/fourOfSwords.jpg";
dict.image55 = "../images/Tarot/suitOfSwords/fiveOfSwords.jpg";
dict.image56 = "../images/Tarot/suitOfSwords/sixOfSwords.jpg";
dict.image57 = "../images/Tarot/suitOfSwords/sevenOfSwords.jpg";
dict.image58 = "../images/Tarot/suitOfSwords/eightOfSwords.jpg";
dict.image59 = "../images/Tarot/suitOfSwords/nineOfSwords.jpg";
dict.image60 = "../images/Tarot/suitOfSwords/tenOfSwords.jpg";
dict.image61 = "../images/Tarot/suitOfSwords/pageOfSwords.jpg";
dict.image62 = "../images/Tarot/suitOfSwords/knightOfSwords.jpg";
dict.image63 = "../images/Tarot/suitOfSwords/queenOfSwords.jpg";
dict.image64 = "../images/Tarot/suitOfSwords/kingOfSwords.jpg";

dict.image65 = "../images/Tarot/suitOfWands/aceOfWands.jpg";
dict.image66 = "../images/Tarot/suitOfWands/twoOfWands.jpg";
dict.image67 = "../images/Tarot/suitOfWands/threeOfWands.jpg";
dict.image68 = "../images/Tarot/suitOfWands/fourOfWands.jpg";
dict.image69 = "../images/Tarot/suitOfWands/fiveOfWands.jpg";
dict.image70 = "../images/Tarot/suitOfWands/sixOfWands.jpg";
dict.image71 = "../images/Tarot/suitOfWands/sevenOfWands.jpg";
dict.image72 = "../images/Tarot/suitOfWands/eightOfWands.jpg";
dict.image73 = "../images/Tarot/suitOfWands/nineOfWands.jpg";
dict.image74 = "../images/Tarot/suitOfWands/tenOfWands.jpg";
dict.image75 = "../images/Tarot/suitOfWands/pageOfWands.jpg";
dict.image76 = "../images/Tarot/suitOfWands/knightOfWands.jpg";
dict.image77 = "../images/Tarot/suitOfWands/queenOfWands.jpg";
dict.image78 = "../images/Tarot/suitOfWands/kingOfWands.jpg";


const reading = {};

reading.f1 = "Here the card Death is the key in your win. This is a reminder to you that no one can destroy Death. You must also remember that Death purifies everyone and that death does not differentiate between class, race, gender.";
reading.f2 = "Judgment shows enrgy in your winning row. This card depicts what one would imagine the last judgment would be, in the various forms that takes in many mythologies. Their outstretched arms symbolize that they are ready to be judged by the universe. They are about to meet their creator, their actions weighed, and find out where they will spend the remainder of eternity: in heaven or in hell. There are echoes of this card in Death, for they both remind us that everything comes to an end and that a new beginning is coming.";
reading.f3 = "Your win brings The Justice tarot car. It is a symbol of truth, fairness, and law. Remember intuition should balance logic. When making decision's impartiality is your strength. The clarity in thought which is required to dispense justice are your powers. This is a spiritual reminder that what you deliver are the outcomes of their actions.";
reading.f4 = "In this victory the Strength tarot card appears. Despite the fact that the lion looks menacing and strong, you seem to have dominion over it. What is captivating is how gracefully you control the lion. You are calm and collected, which is representative for being in control and disciplined especially in times of great adversities. You have great courage but control of the lion without being too rough shows love and compassion. These traits shows stability and the kind of calmness that comes with being stable but if these feelings are not put in check can lead to our eventual destruction.";
reading.f5 = "On the Temperance card is most important in your victory. Remember there is a balance between the sexes. Everything about this card represents balance, the perfect harmony that comes from the union of dualities. The advice to remember from this is to test any new waters, before jumping into the deep end.";
reading.f6 = "Your win brings the Chariot tarot card. You have a major spiritual influence under which you are being guided. Your journey has brought enlightenment, and that your will is pure. Elements of the material world, grounds you and your actions. Opposing forces that you must learn to control. Currently they are calm, but they frequently get you into scuffles as they seem to want to move in different directions. Your task is to guide these forces towards a destination.";
reading.f7 = "Your win brings the Devil card. Your confidence has been taken from you through the loss of free will, the moore time you spend with your demons the more the become a part of you and the less human you become. The chains around you make you feel like a captive. You're addiction to power and finer things in life, respectively have made you unhappy.";
reading.f8 = "In the Emperor tarot card is the key in you winning row. You have strength, representing your reign and your right to rule the kingdom that you watches over. Over time you have learned much about what it takes to rule, to establish power, authority and complete order for the benefit of your family. This has taken great determination, your ambition for greater heights and your leadership capability will make all things posible.";
reading.f9 = "The Empress is glowing with strength in your win and it depicts a woman sitting on a throne. This dipicts your nature of a earth archetype, a god/goddess of fertility. Your life is filled with complete love, harmony, fertility and luxury by the grace of this goddess. You have the ability to bring abundance and blessings in the readings of those she meets.";
reading.f10 = "You have recieved The Fool and it depicts you joyfully into the world. Just like a baby taking it's first steps, exuberant, joyful, excited. Remember caring nothing for the possible dangers that lie in his path is the action of a fool. Be mindful of the signs that are warning you, if you do not become more aware of your surroundings soon, you may never see all the adventures that you dream of encountering.";
reading.f11 = "In this win the Hanged Man takes notice. It is believed that the hanging man is actually positioned there by his own free will. You have found yourself comfortable in all sitatutions and from the outsie it looks like your life is out of balance but you have a strong connection to your beliefs and the spirtual world that allows you to be free";
reading.f12 = "The Hermit apprears in your winning row. You have overcome a large mountain ad its given you a sense of accomplishment, development, and success. This journey also is a level of spiritual knowledge that you have attained, and that you are ready to impart that knowledge to everyone. There is also a deep commitment you have to your goal and a solid awareness of the path that you are taking.";
reading.f13 = "The HIerophant card depicts a important revalation in your row. You are entering a time in your life where there are different worlds appearing. You are bound to embark on the transfer of sacred knowledge within institutions. The card also comes to represent following the path to knowledge and education.";
reading.f14 = "You've most likely encountered the High Priestess before and is the power card in your win. You are the person skilled enough to understand both sides between the Pillar of Establishment and Pillar of Strength. The pillars also depict the duality of nature; masculine and feminine, good and evil, negative and positive. You find yourself in the middle and that suggests that it is your responsibility to serve as a mediator between the depths of the reality. You are the third pillar - the path between. You know that both pillars are equal and there is knowledge to be learned in both worlds.";
reading.f15 = "The Universe brings forward the Lovers card, Your relationship brings a secure and happy feeling in your home, similar to the Garden of Eden. Don't fall into temptation and into the realm of flesh and sensuality. If there are issues in your relationship communication in particular is key, which is the foundation for healthy relationships.";
reading.f16 = "The Magician is one tarot card that is filled with symbolism and the card with the most power in you win. The main message for you being 'as above, so below'. This is a rather complicated phrase, but its summarization is that earth reflects heaven, the outer world reflects within, the microcosm reflects the macrocosm, earth reflects God.";
reading.f17 = "When we encounter the Moon in your win, think about a split path that leads off into the distance this a represention our animalistic nature - one is civilized, and the other wild and feral. Everything in this card seems to echo the other, as if to allude to two possibilities. When you walk down the path, you walk the fine line between conscious and unconscious, between the tamed side of civilization of the dog, and the forces of nature represented by the wolf. The towers on the opposing ends represent the forces of good and evil, and their similarity in appearance can allude to the difficulties that we face in distinguishing between them.";
reading.f18 = "The Star card shows importance in your win.  Your hard work is showing its harvest your land which was once dry is now lush. Be aware of your practical abilities and strengths, it is a good time to tend to your chakras. Take a yoga class and remember to meditate.";
reading.f19 = "The Sun card in your victory presents an feeling of optimism and fulfillment. You have overcome and the dawn which follows the darkest of nights is close. The Sun is the source of all the life on our planet, and it represents life energy itself. Your innocence returned from your fortitude represents the happiness that occurs when you are in alignment with your true self and you have absolutely nothing to hide.";
reading.f20 = "The Tower is the power card in you win. In a act of desperationThey you want to escape the turmoil and destruction within. The Tower is a symbol for the ambition that is constructed on faulty premises. You must be able to destroy what you have built in order to clear out the old ways and welcome something new. Its revelations can come in a flash of truth or inspiration.";
reading.f21 = "The Wheel of Fortune is one of the most highly symbolic cards in the deck and is the key card in your win. At the center of the card, lies a giant wheel, covered in esoteric symbols. There are different creatures that surround the wheel; the angel, the eagle, the bull and the lion. They are related to four fixed signs in the zodiac - leo, taurus, scorpio and aquarius. These four animals are also representatives for the four evangelists in Christian traditions, which is perhaps the reason that they are all adorned with wings. The books that each of the creatures hold represents the Torah which communicates wisdom and self-understanding. The snake indicates the act of descending into material world. On the wheel itself, rides a sphinx that sits at the top, and what appears to be either a devil, or Anubis himself arising at the bottom. These two Egyptian figures are representative of both the wisdom of the gods and kings (in the case of the sphinx) and the underworld (Anubis). They are rotating forever, in a cycle, and suggests that as one comes up, the other goes down.";
reading.f22 = "The World card in the tarot deck has danced its way to your winning row. You find balance and evolution in movement. The fulfillment and unity that you find is not one that is static, but ever-changing, dynamic and eternal. Together, you symbolize the harmony between all of their energies.";

reading.f23 = "In the winning row Ace of Cups card is showing the highest importance. This cup is being offered to you and is overflowing with sparkling water which symbolizes pure and pristine emotion. If you take this offer, drinking from this cup will surely bring you nothing short of emotional as well as spiritual fulfillment. These five streams represent the power of intuition and show the importance of listening to your inner voice. In order to obtain the kind of emotional or spiritual fulfillment that is depicted in the Ace of Cups, the querent will need to follow this inner voice, and remain true to it, regardless of the situation. This will require emotional discipline, but the rewards that this can bring are hinted at within the card itself: overflowing joy and happiness.";
reading.f24 = "The Two of Cups in your winning row is related to negotiation, trade, cosmic energy, protection, proper conduct, and duality. The Two of Cups refers to something quite positive, it is telling you to look closely at relationships, whether romantic, business or otherwise. It suggests a new partnership is in the works, and it will be created with balance, respect, and honor.";
reading.f25 = "When you draw the Three of Cups in this winning row, you will see three women lifting their cups up in the air in a celebration of some sort. Good times are in the air, wreaths are often associated with success and victory, so your happiness is well deserved. There are feelings of beauty, growth, compassion that can be shared between your family and friends.";
reading.f26 = "The Four of Cups displays power in your win. The Four of Cups represents your tendency to take for granted the things that you have, making it hard for you to see what treasures the universe presents you with. You tend to have the answers to our troubles right around you, but you tend to focus too much on what you do not have.";
reading.f27 = "The Five of Cups carries such a heavy weight in this row. This card signifies loss as well as the painful challenges which stem from that particular loss. You may be in a great deal of despair in this time you must remember the blessing still in your life so you dint find your self to far removed from your home and loved ones.";
reading.f28 = "The Six of Cups smiles upon you with your win, it symbolizes the joy of nostalgia and the comfort of home and childhood innocence. Feel confidence that you give a sense of security and comfort.";
reading.f29 = "Rising to the top of your victory The Seven of Cups symbolizes imagination, choice, wishful thinking, illusion and fantasy. Believe in your dreams, thoughts and imagination. There are numerous fantasies that are appearing from the cups, which are representative of the many visions that you see while dreaming. The Seven of Cups may imply that you have a number of options to choose from.";
reading.f30 = "WIth this win In the Eight of Cups, you are confronted with the moment of transition. You may be tired of the time you have collecting items, and now you are setting out to seeking a higher purpose. It may be a result of a boredom or unhappiness that comes with realizing that whatever you have been looking for in life isn't as pleasurable or as satisfying as you once assumed it would be. You maybe seeking excitement in the unknown or trying out new things that have the potential to help one grow both mentally as well as spiritually. It also shows the willingness to detach oneself from others so that you can work on self-improvement, self-understanding and growth.";
reading.f31 = "The Nine of Cups is strong in this win. In this card you have found true satisfaction. The Nine of Cups symbolizes a representation of fulfillment and success, both spiritually and materially. Feel free to show the expression of success after achieving your innermost desire.";
reading.f32 = "Oh the Ten of Cups is key to you victory. You are currently in a strong and stable relationship, while also blessed with the abundance of a comfortable home and beautiful children. Your future is bright and rest assure your relationship will be quite peaceful. Above in the sky are blessings from heaven and the end of hard times and sorrows, look forward to a new happy life where each and every one of the family will enjoy.";
reading.f33 = "The Page of Cups is the key card in this victory it represents the unexpected inspiration that comes to us from the unconscious, perhaps in ways that you may not truly understand. You will find it difficult to celebrate or understand your somber mood until you can realize the levity of your unconcious mind.";
reading.f34 = "The Knight of Cups is your power card in this winning row you maybe a messenger of a certain sort. Take your steps confidently moving slowly forward which provides an overall impression of peace and calmness. You will be viewed as a symbol of spirituality, light, and purity.";
reading.f35 = "The Queen of Cups rules is key in this row and the emotional realm. This cup is closed, which is why the Queen of Cups symbolizes the thoughts that come with our unconscious mind. Do not be fearful of being alone this will allow you to think. Allow yourself to recognize your thoughts and feelings from a outside perspective.";
reading.f36 = "The King of Cups is a card in the tarot that shows generosity, control, and emotional balance. Be open to creativity and spirit, which thrives on the calmness you cultivate. There will be a steady balance between the conscious and unconscious as a result.";

reading.f37 = "In this victory, there is a single mysterious hand that comes out of the clouds. In the hand is what looks like a gold coin and seen as a sign of wealth and all things material, fertility, growth and prosperity. Increase your ambition required to drive one's search for the goal. All signs indicate that emotions are flowing towards ambition.";
reading.f38 = "The Two of Pentacles is flowing with energy in this win. This is telling you that you can handle all the issues that come your way and you can manage your life with grace. Remember that you need to remain balanced even if things get rough or choppy, your grace manages to keep you afloat. Through all the ups and downs in life despite all the chaos that surrounds you, the man lives a very carefree life you dance, and handle all that comes to you with joy.";
reading.f39 = "The Three of Pentacles displays importance in your win. You may be undertaking a massive rebuilding. Your friends are listening to you in order to more clearly understand what is needed of them and how they can provide guidance. Your input is vital to the completion of the whole task. The Three of Pentacles therefore represents the coming together of different kinds of knowledge in order to build something together.";
reading.f40 = "The Four of Pentacles is showing a great deal of importance in this win. You may be hoarding objects out of fear of loss. Hoarding will only lead to more confusion clear your path of these objects and move forward with confidence.";
reading.f41 = "The Five of Pentacles is is giving a great deal of energy in this win, the Five of Pentacles symbolizes adversity you maybe cold, sick, poor, tired, and hungry. It looks as you are lacking the basic necessities of life. You might relate to this in more ways than one. More often than not, the Five of Pentacles is a bad omen. However, do not fret, as it can change depending on your ability to show remorse.";
reading.f42 = "The Six of Pentacles is showing the greatest energy in this row. This symbolizes that status and wealth gained through equality and fairness. You should be reminded this card suggests karma, cause and effect, and that we receive what we give. The Six of Pentacles suggests that you are in a secure enough position to give to others without affecting your own stability.";
reading.f43 = "The Seven of Pentacles wants you to recognize to take a break from your hard labor to admire the fruit and blossoms that you have cultivated. This card seems to suggest also a kind of fatigue, because you are focused on long term goals, it will be difficult to enjoy everything right now, choosing to invest the others. With great efforts, you hope to grow your crop for the long term.";
reading.f44 = "The Eight of Pentacles is bringing a tremendous amount of energy in this win. You are completely focused and absorbed in what you are doing. You have successfully isolated yourself from the distractions so that you can fully concentrate on your task. The Eight of Pentacles refers to that moments in your life when you are dedicated to completing a certain task. You are fully-immersed, and you are committed in delivering the best version of your work.";
reading.f45 = "The Nine of Pentacles is a power in this win. The vines behind her are rich and filled with grapes and golden coins, signaling that you have been very successful in your ventures, which are yielding a great and plentiful harvest.";
reading.f46 = "In this row the Ten of Pentacles card is powerful . You may find yourself surrounded by younger loved ones indicating the joining of spirit and matter. You may find great joy with family and pets. Find time in your busy day for those that love you the most";
reading.f47 = "The Page of Pentacles finds its way to the top in your win. The card shows your fortune is being held closely, and all that it represents: ambition, security, wealth, nature, and sensuality. The Page of Pentacles symbolizes a person that and shows you are grounded, loyal and diligent.";
reading.f48 = "The Knight of Pentacles is abudent with energy in your victoy and this card tells you thaat you are revolved around work, effort, and a general responsibility.You may be prepareing for the next big moment in your life. You are more concerned about the long term future of your kingdom.";
reading.f49 = "The Queen of Pentacles card finds its way to the top in this row. The Queen of Pentacles, is telling you that you have a certain level of success and prosperity in your future. But you should be careful of where we leap when you are chasing that success.";
reading.f50 = "The King of Pentacles is telling you to keep high ambition, this will lead to materialistic satisfaction, and worldly success. You have a look of sophistication and of being regal. This will only become available through your determination and effort.";

reading.f51 = "The Ace of Swords is pulling great energy in this win. Be prepared for victory, success and great achievement. Reach for distant lands the power of the swords can be used to conquer, as well as ambition.";
reading.f52 = "The Two of Swords is telling you that you may be confused and are being forced to make difficult choices. Realize that all of your worries are stalling progress and action. Don't let the situation prevent you from seeing both the problem and the solution with clarity. Two choices that lead in different directions and are mutually exclusive to one another, your problem should be addressed with a logical and rational thinking everything else is an illusion and your intuition should be your guide.";
reading.f53 = "Your energy is pulling one of the most iconic images in the tarot to the forfront. The symbolism is pretty opaque, and the emotional effect that it has is immediate. The heart is the seat of warmth, affection and spirit, and the three swords indicate the power to harm, cause pain, and create suffering to what it pierces. This is an image of grief, loss and literally heartbreak. You are in one of the most difficult parts in your life, stay strong.";
reading.f54 = "With your win be sure there is a quiet stillness that is present in the Four of Swords, a sense of calm peace. The position of the fourth sword seems to be a signal that the fight has ended and you feel a sense of warmth and welcoming after a retreat.";
reading.f55 = "The Five of Swords is showing the most power in this win and you probably have a convenient look of contempt on your face. You are in a position to overcome your enemies but be weary even in victory there can be moments of loss and sadness.";
reading.f56 = "The Six of Swords is prevelent in this win and we can gather from the images that the woman and the child are leaving something behind, as their backs are faced towards us. The woman's head is covered with a cloak - perhaps she is fleeing something, and must go without others knowing her true identity. We can assume that because of this, she is undergoing great loss or sadness. You may have recently dealt with loss or change, it's important to move towards a future that looks more promising than the one that we left behind.";
reading.f57 = "The Seven of Swords card is the card showing the most energy, Have you recently been getting away with something, deception or betrayal. You may have been able to do this quite a bit of and have gained confidence. Unfortunately these acts may be catching up with you and it is time to change your ways.";
reading.f58 = "In this victory the Eight of Swords is most important. You may feel restricted and your movement is slowed as though you are in some kind of trap or jail. However, it seems as though whoever built the trap was a little lazy or hasty, leaving some open space where she could escape. But because of the blindfold it is preventing you from seeing, you may not be able to find a way out of this trap. Realize that it is just a simple act of lifting the blindfold embrace your creativity and walk away from the problem with new found enthusiasm.";
reading.f59 = "The Nine of Swords is the card in this set with the most importance. It appears as though you have been having very bad nightmares. You are upset, anxious and fearful haunted by the nightmares of the suffering you endured while you were left and deserted.";
reading.f60 = "Another one of the most striking and ominous cards in the deck, be prepared to be stabbed in the back, this may be something you never saw coming. This also could be indicating the fear and negativity associated with death. At least, even in this state, the sun is rising.";
reading.f61 = "The Page of Swords is showing the most importance in this win. It is representative of youthful energy. Embrace your new determination, and perhaps a little bit of defiance.";
reading.f62 = "What a rush when we see this Knight in your winning deck! The white color of the horse is a reference to the overall purity and intellectual energy which motivates you to move forward confidently.";
reading.f63 = "The Queen of Swords is the card with the most energy in this winning row. This card shows that no one can trick or fool you. The Queen of Swords gives you the gift of judgment for everyday decisions and having the flexibility to take in knowledge from others.";
reading.f64 = "The King of Swords tarot card is full of energy with your win. The King of Swords radiates intellectual power, clear thinking, truth, and authority. You need to understand your power holds great responsibility. You may also be welcoming spiritual understanding and the butterflies on the back of his throne are indicative of transformation.";

reading.f65 = "Wands are associated with fire energy, and the Ace of Wands is the representation of fire within your winning row. You have a fire to reach for new goals and take your life into your own hands and create a balance.";
reading.f66 = "Your card of significance is the Two of Wands which signifies having two paths. You have decisions to make or a choice between two options but remember the grass isn't always greener on the other side!";
reading.f67 = "The Three of Wands is directly in your path. From the cliff edge, you see everything that is ahead of you. You look forward and reflect on both the commitment that you have for plans, as well as the method of execution in order to bring them to reality.";
reading.f68 = "The Four of Wands depicts is strong in your win. There seems to be a party that is going on, or some kind of welcome committee for your relationship. You can see from the image that it represents a time which is sprinkled with feelings of fulfillment, satisfaction brought by the actual attainment of a goal.";
reading.f69 = "The Five of Wands is giving the highest energy. You maybe in some kind of disagreement that is facing the querent. This disagreement can either be taken to be as a sign of conflict or that you are enjoying the adrenaline rush of this conflict, and that the competition amongst your friends is a good natured rivalry, not anger.";
reading.f70 = "The Six of Wands is the most telling in this set. The horse is powerful, which is a well-known symbol of strength, purity as well as success. The crowd is there to show the public recognition for the achievements. You should be proud of your accomplishments. To this, the crowd you will react with cheerfulness and enthusiasm.";
reading.f71 = "The Seven of Wands has made its way to the forefront. You maybe in a position where you are defending a position and attacking in retaliation. If you feel like you are on uneven ground or not having a stable footing in life press forward things will change soon";
reading.f72 = "The Eight of Wands is brimmimg with energy. Your new found success is coming at you with maximum speed. There is likely nothing that will stand in the way of you making it to your destination. If it has been a long journey rejoice in the all you have learned on your journey.";
reading.f73 = "The Nine of Wands is showing the most energy. You have been through it all and you desire strongly to win. Hope and determination will find you through all your challenges, hope will turn into triumph.";
reading.f74 = "This image on the ten of wands indicates a person who has already struggled in life and has succeeded, and now you will be carrying the harvests to your final destination. Although you are not near the destination, you have finished the hardest part of life struggle and you just needs a place to relax and revel in his success.";
reading.f75 = "The Page of Wands is significant in this set and a symbol of transformation from bad to good. You have been passionate advocator, who is constantly spreading spiritual and social advancement ideas that lift up your fellow man. You may be living in a world that has not bared fruit yet. The purity of your heart could lead you to find better fortunes.";
reading.f76 = "The Knight of Wands is seen on his horse that is reared up and ready for action and is the power card in your set. You are ready for battle and ready for any future battles that in front of you find confidence in you postion and press forward with the knowledge you have gained.";
reading.f77 = "The Queen of Wands shows a queen sitting proudly on a throne while facing forward meaning happiness, satisfaction, and fertility. In her right hand, she is holding her wand which is starting to blossom, symbolizes life, fidelity, sustenance, and warmth. You shoul grasp you deep intuition and trust it will lead you to a positive decision.";
reading.f78 = "The King of Wands is glowing bright in this win, which is set to represent creativity and life's passion and are key symbols of fire and strength. The salamander that is biting his tail represents the infinity as well as the overall drive to move through all obstacles.";

const imageArray = []; // Holds all unique keys associated to images to ensure no repeats in 4x4 board
const randNumGen = []; // Holds all unique keys associated to images to ensure no repeats in caller for each of the 78 cards

let status;
let clickedCard;

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
    }, 3000);
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
    clickedCard = this.state.cards.filter(c => c.id === id)[0];
    // console.log(clickedCard);

    if (imageArray.includes(clickedCard.key)) {
      const squares = this.state.squares;
      squares[id] = "X";
      console.log(id + ": " + squares);
      const newCards = this.state.cards.map(card => {
        if (card.id === id) {
          return Object.assign({}, card, { opacity: 0.5 });
        }

        return card;
      });

      if (calculateWinner(squares)) {
        this.props.updateFuture();
        this.setState({
          cards: newCards,
          squares: squares
        });
        return;
      }

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
  render() {
    return <div className="reading">{this.props.future}</div>
  }
}

// Game component holds all the other components 
export default class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      future: "Your future awaits..."
    }
  }

  updateFuture = () => {
    console.log(clickedCard);
    const key = clickedCard.key;
    console.log(key);
    this.setState({
      future: reading["f" + key]
    })
  }

  randNumGen = [];

  render() {
    console.log(this.state);
    return (
      <div className="game">
        <div className="game-caller">
          <Caller />
        </div>
        <div className="game-board">
          <Board updateFuture={this.updateFuture} />
        </div>
        <div className="game-info">
          <Reading future={this.state.future} />
        </div>
      </div>
    );
  }
}