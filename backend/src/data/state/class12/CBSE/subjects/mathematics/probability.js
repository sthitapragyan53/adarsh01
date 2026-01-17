export default {
  notes: [
    {
      heading: "Introduction",
      content: "Electric charge is a fundamental property of matter..."
    }
  ],
  mcqs: [
    {
      question: "SI unit of charge is?",
      options: ["Coulomb", "Ampere", "Volt", "Ohm"],
      answer: 0
    }
  ],
  pyqs: [

  {
    question: "If E and F are two events such that P(E)>0 and P(F)≠1, then P(Ē | F̄) is",
    options: [
      "(A) 1 − P(E/F)",
      "(B) (1 − P(E ∪ F)) / P(F̄)",
      "(C) 1 − P(E/F)",
      "(D) P(F) P(E)"
    ]
  },

  {
    question: "If P(A)=1/7, P(B)=5/7 and P(A∩B)=4/7, then P(A|B) is:",
    options: ["(A) 4/5", "(B) 3/4", "(C) 6/7", "(D) 1/5"]
  },

  {
    question: "A coin is tossed and a card is selected at random from a well shuffled pack of 52 playing cards. The probability of getting head and a face card is:",
    options: ["(A) 3/26", "(B) 2/13", "(C) 3/13", "(D) 19/26"]
  },

  {
    question: "If P(A∪B)=0.9 and P(A∩B)=0.4, then P(Ā)+P(B̄) is:",
    options: ["(A) 1.3", "(B) 0.7", "(C) 0.3", "(D) 1"]
  },

  {
    question: "If E and F are independent events with P(E)=2/3 and P(F)=3/7, then P(E|F) equals:",
    options: ["(A) 7/9", "(B) 1/6", "(C) 1/2", "(D) 2/3"]
  },

  {
    question: "Let E be an event of sample space S. Then P(S|E) =",
    options: ["(A) P(E)", "(B) 0", "(C) P(S∩E)", "(D) 1"]
  },

  {
    question: "Probability distribution: X:0,1,2,3,4 with P(X)=0.1,k,2k,k,0.1. The probability X=2 is:",
    options: ["(A) 4/5", "(B) 2/5", "(C) 1/5", "(D) 1"]
  },

  {
    question: "If P(A|B)=P(A'|B), which statement is true?",
    options: [
      "(A) P(A∩B)=1/2 P(B)",
      "(B) P(A∩B)=2P(B)",
      "(C) P(A)=P(A')",
      "(D) P(A)=2P(B)"
    ]
  },

  {
    question: "Let P(E)=0.1, P(F)=0.3, P(E∪F)=0.4. Then P(F|E) is:",
    options: ["(A) 0.6", "(B) 0.5", "(C) 0", "(D) 0.4"]
  },

  {
    question: "If P(A)=4/5 and P(A∩B)=7/10 then P(B|A) equals:",
    options: ["(A) 1/8", "(B) 1/10", "(C) 17/20", "(D) 7/8"]
  },

  {
    question: "Five fair coins are tossed. Probability of at least one head is:",
    options: ["(A) 31/32", "(B) 1/32", "(C) 27/32", "(D) 5/32"]
  },

  {
    question: "If P(A∩B)=1/8 and P(A)=3/4 then P(B|A) is:",
    options: ["(A) 2/3", "(B) 1/6", "(C) 1/2", "(D) 1/3"]
  },

  {
    question: "If P(B|A)=0.3, P(A)=0.4 and P(B)=0.8 then P(A|B) equals:",
    options: ["(A) 0.4", "(B) 0.06", "(C) 0.3", "(D) 0.6"]
  },

  {
    question: "Probability that A speaks truth =4/5 and B speaks truth =3/4. Probability that they contradict each other is:",
    options: ["(A) 1/5", "(B) 7/20", "(C) 3/20", "(D) 4/5"]
  },

  {
    question: "If sum on two dice is 9, probability that one die shows 4 is:",
    options: ["(A) 4/9", "(B) 1/18", "(C) 1/2", "(D) 1/9"]
  },

  {
    question: "From {1,2,3,4,5}, numbers a and b chosen randomly. Probability that a/b is an integer is:",
    options: ["(A) 1/4", "(B) 1/2", "(C) 1/3", "(D) 3/5"]
  },

  {
    question: "Bag has 3 white, 4 black, 2 red balls. Two drawn. Probability both are white:",
    options: ["(A) 1/12", "(B) 1/18", "(C) 1/36", "(D) 1/24"]
  },

  {
    question: "Bag has 3 black, 4 red, 2 green balls. Three drawn. Probability all different colours is ____.",
    options: []
  },

  {
    question: "An unbiased coin is tossed 4 times. Probability of at least one head is ____.",
    options: []
  },

  {
    question: "If A and B independent with P(A)=1/3 and P(B)=1/4, then P(B'|A) equals:",
    options: ["(A) 1/3", "(B) 1", "(C) 3/4", "(D) 1/4"]
  },

  {
    question: "Two cards drawn one by one without replacement. Probability one red and one black is ____.",
    options: []
  },

  {
    question: "Given a queen is drawn, probability it is spade is:",
    options: ["(A) 4/13", "(B) 1/2", "(C) 1/4", "(D) 1/3"]
  },

  {
    question: "Die thrown once. A: number >3, B: number <5. Then P(A∪B) is:",
    options: ["(A) 3/5", "(B) 0", "(C) 2/5", "(D) 1"]
  },



    // aseration and reason question

    {
  type: "assertion-reason",
  subject: "Mathematics/Probability",
  assertion: "If A and B are two events such that P(A∩B)=0, then A and B are independent events.",
  reason: "Two events are independent if the occurrence of one does not effect the occurrence of the other.",
  options: [
    "(A) Both true & correct explanation",
    "(B) Both true but incorrect explanation",
    "(C) A true R false",
    "(D) A false R true",
  ],
  year: "2026",
},

{
  type: "assertion-reason",
  subject: "Mathematics/Probability",
  assertion: "Two coins are tossed simultaneously. The probability of getting two heads, if it is known that at least one head comes up, is 1/3.",
  reason: "Let E and F be two events with a random experiment, then P(F/E) = P(E∩F) / P(E).",
  options: [
    "(A) Both true & correct explanation",
    "(B) Both true but incorrect explanation",
    "(C) A true R false",
    "(D) A false R true",
  ],
  year: "2026",
}

  ]
};
