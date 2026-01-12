export default {
  /* ================= NOTES ================= */
  notes: [
    {
      heading: "1. The Solid State: Basics",
      content:
        "Solids have a definite mass, volume, and shape due to short intermolecular distances and strong forces. Unlike liquids or gases, the constituent particles have fixed positions and only vibrate about their mean positions."
    },
    {
      heading: "2. Crystalline vs. Amorphous",
      content:
        "Crystalline solids (True Solids) have long-range order and sharp melting points. They are anisotropic. Amorphous solids (Pseudo-solids) have short-range order and melt over a range of temperatures."
    },
    {
      heading: "3. Classification by Bonding",
      content:
        "Crystalline solids are divided into four types: Molecular, Ionic, Metallic, and Covalent/Network solids."
    },
    {
      heading: "4. Unit Cells",
      content:
        "A unit cell is the smallest repeating portion of a lattice. Types include Simple Cubic, Body-Centered Cubic, and Face-Centered Cubic."
    },
    {
      heading: "5. Density Formula",
      content:
        "Density of a unit cell is given by d = (Z × M) / (a³ × Nₐ), where Z is number of atoms per unit cell."
    },
    {
      heading: "6. Packing Efficiency",
      content:
        "Packing efficiency: SC = 52.4%, BCC = 68%, FCC/HCP = 74%."
    },
    {
      heading: "7. Point Defects",
      content:
        "Schottky defect decreases density while Frenkel defect does not affect density."
    }
  ],

  /* ================= MCQs ================= */
  mcqs: [
    {
      question: "Which defect decreases the density of a crystal?",
      options: [
        "Frenkel Defect",
        "Schottky Defect",
        "Metal Excess Defect",
        "Interstitial Defect"
      ],
      answer: "Schottky Defect"
    },
    {
      question: "What is the total number of atoms in a BCC unit cell?",
      options: ["1", "2", "4", "6"],
      answer: "2"
    },
    {
      question: "Which of the following is a network covalent solid?",
      options: ["Ice", "Solid CO₂", "Diamond", "NaCl"],
      answer: "Diamond"
    },
    {
      question: "Which constant appears in the density formula of unit cell?",
      options: [
        "Planck’s Constant",
        "Gas Constant",
        "Avogadro’s Number",
        "Boltzmann Constant"
      ],
      answer: "Avogadro’s Number"
    }
  ],

  /* ================= PYQs ================= */
  pyqs: [
    /* ---- MCQ PYQ ---- */
    {
      type: "mcq",
      question: "Which of the following statements is not true about glucose?",
      options: [
        "(A) It is an aldohexose.",
        "(B) On heating with HI it forms n-hexane.",
        "(C) It exists in furanose form.",
        "(D) It does not give Schiff’s test."
      ],
      answer: "(D) It does not give Schiff’s test.",
      year: "2025"
    },

    /* ---- ASSERTION–REASON PYQ ---- */
    {
      type: "assertion-reason",
      assertion:
        "All naturally occurring α-amino acids except glycine are optically active.",
      reason:
        "Most naturally occurring amino acids have L-configuration.",
      options: [
        "(A) Both Assertion and Reason are true and Reason is the correct explanation",
        "(B) Both Assertion and Reason are true but Reason is not the correct explanation",
        "(C) Assertion is true but Reason is false",
        "(D) Assertion is false but Reason is true"
      ],
      answer:
        "(A) Both Assertion and Reason are true and Reason is the correct explanation",
      year: "2025"
    },

    /* ---- DESCRIPTIVE PYQ ---- */
    {
      type: "descriptive",
      marks: "2",
      year: "2025",
      questionParts: [
        {
          label: "(a)",
          question:
            "Write the reaction involved when D-glucose reacts with HCN.",
          answer: "Reaction will be added soon."
        }
      ],
      OR: {
        question:
          "Write the reaction involved when D-glucose reacts with bromine water.",
        answer: "Reaction will be added soon."
      }
    }
  ]
};
