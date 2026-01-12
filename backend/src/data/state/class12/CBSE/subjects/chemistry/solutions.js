export default {
  notes: [
    {
      heading: "1. The Solid State: Basics",
      content:
        "Solids have a definite mass, volume, and shape due to short intermolecular distances and strong forces. Unlike liquids or gases, the constituent particles have fixed positions and only vibrate about their mean positions.",
    },
    {
      heading: "2. Crystalline vs. Amorphous",
      content:
        "Crystalline solids (True Solids) have long-range order and sharp melting points. They are Anisotropic (properties change with direction). Amorphous solids (Pseudo-solids) have short-range order and melt over a range of temperatures.",
    },
    {
      heading: "3. Classification by Bonding",
      content:
        "Crystalline solids are divided into four types: 1. Molecular (held by Van der Waals forces), 2. Ionic (Coulombic forces, e.g., NaCl), 3. Metallic (sea of electrons), and 4. Covalent/Network (strong covalent bonds, e.g., Diamond).",
    },
    {
      heading: "4. Unit Cells (Advanced Geometry)",
      content:
        "A unit cell is the smallest repeating portion of a lattice. Types include: Simple Cubic (1 atom/cell), Body-Centered Cubic (2 atoms/cell), and Face-Centered Cubic (4 atoms/cell).",
    },
    {
      heading: "5. Mathematical Calculation of Density",
      content:
        "The density ($d$) of a unit cell is calculated using the formula: $d = (Z \times M) / (a^3 \times N_A)$, where $Z$ is the number of atoms per unit cell, $M$ is molar mass, $a$ is edge length, and $N_A$ is Avogadro's constant.",
    },
    {
      heading: "6. Packing Efficiency",
      content:
        "This measures the space occupied by particles. Simple Cubic = 52.4%, BCC = 68%, and FCC/HCP = 74%. High packing efficiency usually leads to higher stability and density.",
    },
    {
      heading: "7. Point Defects in Crystals",
      content:
        "Stoichiometric defects include: 1. Schottky Defect (equal number of cations and anions missing; decreases density) and 2. Frenkel Defect (ion moves to an interstitial site; density remains same).",
    },
  ],

  mcqs: [
    {
      question: "Which defect decreases the density of a crystal?",
      options: [
        "Frenkel Defect",
        "Schottky Defect",
        "Metal Excess Defect",
        "Interstitial Defect",
      ],
      answer: "Schottky Defect",
    },
    {
      question:
        "What is the total number of atoms in a Body-Centered Cubic (BCC) unit cell?",
      options: ["1", "2", "4", "6"],
      answer: "2",
    },
    {
      question: "Which of the following is a network covalent solid?",
      options: ["Ice", "Solid CO2", "Diamond", "NaCl"],
      answer: "Diamond",
    },
    {
      question:
        "The formula for density of a unit cell involves which constant?",
      options: [
        "Planck's Constant",
        "Gas Constant",
        "Avogadro's Number",
        "Boltzmann Constant",
      ],
      answer: "Avogadro's Number",
    },
  ],

  // New Dedicated PYQ Section
  pyqs: [
    {
      question:
        "In case of association, abnormal molar mass of solute will be:",
      options: [
        "(A) increase",
        "(B) decrease",
        "(C) remain same",
        "(D) first increase and then decrease",
      ],
      answer: "decrease",
      year: "2025",
    },
    {
      question:
        "An unripe mango placed in a concentrated salt solution to prepare pickle, shrivels because ________.",
      options: [
        "(A) it gains water due to osmosis",
        "(B) it loses water due to reverse osmosis",
        "(C) it gains water due to reverse osmosis",
        "(D) it loses water due to osmosis",
      ],
      answer: "(D) it loses water due to osmosis",
      year: "2025",
    },

    {
      question:
        "Which of the following solutions will have the highest boiling point in water?",
      options: ["(A) 1% urea", "(B) 1% glucose", "(C) 1%CaCl2", "(D) 1% KCl"],
      answer: "(C) 1%CaCl2",
      year: "2025",
    },
    {
      question:
        " Which of the following aqueous solutions will have the highest freezing point?:",
      options: [
        "(A) 1.0M AlCl3",
        "(B) 1.0M KCl",
        "(C) 1.0MNa2SO4",
        "(D) 1.0M glucose",
      ],
      answer: "(D) 1.0M glucose",
      year: "2025",
    },
    {
      question:
        "[Cr(H₂O)₆]Cl₂ and [Fe(H₂O)₆]Cl₂ are examples of homoleptic complexes.",
      options: [
        "(A) it gains water due to osmosis",
        "(B) it loses water due to reverse osmosis",
        "(C) it gains water due to reverse osmosis",
        "(D) it loses water due to osmosis",
      ],
      answer: "(D) it loses water due to osmosis",
      year: "2025",
    },
    {
      question: "The value of Henry's constant KH is:",
      options: [
        "(A) greater for gases with lower solubility",
        "(B) constant for all gases",
        "(C) not related to the solubility of gases",
        "(D) greater for gases with higher solubility",
      ],
      answer: "(A) greater for gases with lower solubility",
      year: "2025",
    },
    {
      question:
        "The freezing point of one molal $KCl$ solution, assuming $KCl$ to be completely dissociated in water, is : ($K_f$ for water $= 1.86 , \text{K kg mol}^{-1}$)",
      options: [
        "(A) $-1.86 , ^circ\text{C}$",
        "(B) $+3.72 , ^circ\text{C}$",
        "(C) $+2.72 , ^circ\text{C}$",
        "(D) $-3.72 , ^circ\text{C}$",
      ],
      answer: "(D) $-3.72 , ^circ\text{C}$",
      year: "2025",
    },

    {
      question: "A solution of acetone in ethanol :",
      options: [
        "(A) shows a negative deviation from Raoult's law",
        "(B) forms an ideal solution",
        "(C) shows a positive deviation from Raoult's law",
        "(D) obeys Raoult's law",
      ],
      answer: "(C) shows a positive deviation from Raoult's law",
      year: "2024",
    },

    {
      question: "Isotonic solutions have the same",
      options: [
        "(A) osmotic pressure",
        "(B) refractive index",
        "(C) density",
        "(D) volume",
      ],
      answer: "(A) osmotic pressure",
      year: "2024",
    },
    {
      question:
        "Van't Hoff factor for $Na_2SO_4 \\cdot 10H_2O$ solution, assuming complete ionization is :",
      options: ["(A) 3", "(B) 13", "(C) 2", "(D) 1"],
      answer: "(A) 3",
      year: "2024",
    },
    {
      question:
        "For an electrolyte undergoing association in a solvent, the van't Hoff factor :",
      options: [
        "(A) has negative value",
        "(B) is always greater than one",
        "(C) has zero value",
        "(D) is always less than one",
      ],
      answer: "(D) is always less than one",
      year: "2024",
    },
    {
      question:
        "A 1% solution of solute 'X' is isotonic with a 6% solution of sucrose (molar mass = 342 g/mol). The molar mass of solute 'X' is :",
      options: [
        "(A) 57 g/mol",
        "(B) 114 g/mol",
        "(C) 3.42 g/mol",
        "(D) 34.2 g/mol",
      ],
      answer: "(A) 57 g/mol",
      year: "2024",
    },

    {
      question:
        "The relative lowering of vapour pressure of an aqueous solution containing non-volatile solute is 0.0225. The mole fraction of the non-volatile solute is :",
      options: ["(A) 0.15", "(B) 0.80", "(C) 0.0225", "(D) 0.725"],
      answer: "(C) 0.0225",
      year: "2024",
    },

    {
      question: "Value of Henry's constant KH :",
      options: [
        "(A) decreases with increase in temperature.",
        "(B) remains constant.",
        "(C) increases with increase in temperature.",
        "(D) increases with decrease in temperature.",
      ],
      answer: "(C) increases with increase in temperature.",
      year: "2023",
    },
    {
      question:
        "A compound undergoes complete tetramerization in a given organic solvent. The Van't Hoff factor 'i' is :",
      options: ["(A) 0.25", "(B) 4.0", "(C) 0.125", "(D) 2.0"],
      answer: "(A) 0.25",
      year: "2023",
    },
    {
      question:
        "An azeotropic solution of two liquids has boiling point lower than either of them when it:",
      options: [
        "(A) is saturated",
        "(B) shows negative deviation from Raoult's law",
        "(C) shows no deviation from Raoult's law",
        "(D) shows positive deviation from Raoult's law",
      ],
      answer: "(D) shows positive deviation from Raoult's law",
      year: "2024",
    },

    // 2023 simple questions
    {
      question:
        "An azeotropic mixture of two liquids has a boiling point higher than either of the two liquids when it :",
      options: [
        "(A) shows no deviation from Raoult's law.",
        "(B) shows large negative deviation from Raoult's law.",
        "(C) obeys Raoult's law.",
        "(D) shows large positive deviation from Raoult's law.",
      ],
      answer: "(B) shows large negative deviation from Raoult's law.",
      year: "2023",
    },

    {
      question:
        "Which of the following colligative property is used to find the molar mass of proteins?",
      options: [
        "(A) Relative lowering of vapour pressure",
        "(B) Osmotic pressure",
        "(C) Elevation in boiling point",
        "(D) Depression in freezing point",
      ],
      answer: "(B) Osmotic pressure",
      year: "2023",
    },

    {
      question:
        "Which of the following colligative property is used to find the molar mass of proteins?",
      options: [
        "(A) Relative lowering of vapour pressure",
        "(B) Osmotic pressure",
        "(C) Elevation in boiling point",
        "(D) Depression in freezing point",
      ],
      answer: "(B) Osmotic pressure",
      year: "2023",
    },
    {
      question:
        "The colligative property used for the determination of molar mass of polymers and proteins is :",
      options: [
        "(A) Elevation in boiling point",
        "(B) Depression in freezing point",
        "(C) Osmotic pressure",
        "(D) Relative lowering in vapour pressure",
      ],
      answer: "(C) Osmotic pressure",
      year: "2023",
    },
    {
      question:
        "Low concentration of oxygen in the blood and tissues of people living at high altitude is due to :",
      options: [
        "(A) high atmospheric pressure",
        "(B) both low temperature and high atmospheric pressure",
        "(C) low temperature",
        "(D) low atmospheric pressure",
      ],
      answer: "(D) low atmospheric pressure",
      year: "2023",
    },
    {
      question:
        "1 mole of liquid A and 2 moles of liquid B make a solution having a total vapour pressure 40 torr. The vapour pressure of pure A and pure B are 45 torr and 30 torr respectively. The above solution",
      options: [
        "(A) is a maximum boiling azeotrope.",
        "(B) is an ideal solution.",
        "(C) shows negative deviation.",
        "(D) shows positive deviation.",
      ],
      answer: "(D) shows positive deviation.",
      year: "2023",
    },

    {
      question:
        "If molality of a dilute solution is doubled, the value of the molal elevation constant (Kb) will be",
      options: ["(A) unchanged", "(B) doubled", "(C) halved", "(D) tripled"],
      answer: "(A) unchanged",
      year: "2025",
    },

    // 2025 Descriptive Questions
    {
      type: "descriptive",
      marks: "2",
      year: "2025",
      questionParts: [
        {
          label: "(a)",
          question: "Cooking is faster in pressure cooker.",
          answer: "Higher pressure raises boiling point.",
        },
      ],
      OR: {
        question: "Define azeotrope with example.",
        answer: "Constant boiling mixture...",
      },
    },
    {
      type: "assertion-reason",
      assertion: "An unripe mango placed in salt solution shrivels.",
      reason: "Water moves out due to osmosis.",
      options: [
        "(A) Both true & correct explanation",
        "(B) Both true but incorrect explanation",
        "(C) A true R false",
        "(D) A false R true",
      ],
      year: "2025",
    },

    {
      type: "assertion-reason",
      // We use K_H or KH in the string;
      // If this renders in HTML, you can use <sub>H</sub>
      assertion:
        "Henry's law constant (K_H) decreases with increase in temperature.",
      reason:
        "As the temperature increases, solubility of gases in liquids decreases.",
      options: [
        "(A) Both A and R are true and R is the correct explanation of A",
        "(B) Both A and R are true but R is not the correct explanation of A",
        "(C) A is true, but R is false",
        "(D) A is false, but R is true",
      ],
      answer: "(D)", // Because Assertion is False, Reason is True
      year: "2025",
    },
    {
      type: "assertion-reason",
      assertion:
        "When NaCl is added to water a depression in freezing point is observed.",
      reason: "NaCl undergoes dissociation in water.",
      options: [
        "(A) Both true & correct explanation",
        "(B) Both true but incorrect explanation",
        "(C) A true R false",
        "(D) A false R true",
      ],
      answer: "(A)",
      year: "2024",
    },

    {
      type: "assertion-reason",
      assertion:
        "Addition of ethylene glycol to water lowers its freezing point.",
      reason:
        "Ethylene glycol is insoluble in water due to lack of its ability to form hydrogen bonds.",
      options: [
        "(A) Both true & correct explanation",
        "(B) Both true but incorrect explanation",
        "(C) A true R false",
        "(D) A false R true",
      ],
      answer: "(C)",
      year: "2024",
    },

    {
      type: "assertion-reason",
      assertion: "Osmotic pressure is a colligative property.",
      reason: "Osmotic pressure is proportional to the molality.",
      options: [
        "(A) Both true & correct explanation",
        "(B) Both true but incorrect explanation",
        "(C) A true R false",
        "(D) A false R true",
      ],
      answer: "(C)",
      year: "2024",
    },

    // 2023

    {
      type: "assertion-reason",
      assertion:
        "When NaCl is added to water, a depression in freezing point is observed.",
      reason:
        "The lowering of vapour pressure of a solution causes depression in the freezing point.",
      options: [
        "(A) Both true & correct explanation",
        "(B) Both true but incorrect explanation",
        "(C) A true R false",
        "(D) A false R true",
      ],
      answer: "(A)",
      year: "2023",
    },

    ///// 2020

    {
      type: "assertion-reason",
      assertion: "Elevation in boiling point is a colligative property.",
      reason:
        "Elevation in boiling point is directly proportional to molarity.",
      options: [
        "(A) Both true & correct explanation",
        "(B) Both true but incorrect explanation",
        "(C) A true R false",
        "(D) A false R true",
      ],
      answer: "(C)",
      year: "2020",
    },

    {
      type: "assertion-reason",
      assertion: "Osmotic pressure is a colligative property.",
      reason: "Osmotic pressure is directly proportional to molarity.",
      options: [
        "(A) Both true & correct explanation",
        "(B) Both true but incorrect explanation",
        "(C) A true R false",
        "(D) A false R true",
      ],
      answer: "(A)",
      year: "2020",
    },
    ], 

    ////// therotical questions end here

    theoryQuestions: [
  {
    marks: 2,
    question: "Explain why cooking is faster in a pressure cooker.",
    answer: "Higher pressure increases boiling point..."
  },
  {
    marks: 3,
    question: "Define azeotrope and explain its types with examples.",
    answer: "An azeotrope is a constant boiling mixture..."
  },
  {
    marks: 5,
    question: "Explain colligative properties in detail with examples.",
    answer: "Colligative properties depend on number of solute particles..."
  }
],

  

};