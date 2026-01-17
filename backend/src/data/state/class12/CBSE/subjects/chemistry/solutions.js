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
  /// 2025

  theoryQuestions: [
    {
      marks: 2,
      question:
        "Define Azeotrope. What type of Azeotrope is formed by negative deviation from Raoult's law ? Give an example.",
      answer: "........",
      year: "2025",
    },
    {
      marks: 2,
      question:
        "What is meant by positive deviation from Raoult's law ? Give an example  and What type of azeotrope is formed by positive deviation ?",
      answer: ".....",
      year: "2025",
    },
    {
      marks: 2,
      question:
        "Liquids ' X ' and ' Y ' form an ideal solution. The vapour pressure of pure 'X' and pure 'Y' are 120 mm Hg and 160 mm Hg respectively. Calculate the vapour pressure of the solution containing equal moles of ' X ' and ' Y ' ?",
      answer: ".....",
      year: "2025",
    },
    {
      marks: 2,
      question:
        " State Henry's law. Why are aquatic species more comfortable in cold water as compared to warm water ?",
      answer: ".....",
      year: "2025",
    },
    {
      marks: 2,
      question:
        "Calculate the elevation of boiling point of a solution when 3 g of CaCl2 (Molar mass = 111 g/mol) was dissolved in 260 g of water, assuming that CaCl2 undergoes complete dissociation. (Kb for water = 0.52 K kg/mol)",
      answer:
        "Given: Mass of solute = 3g, Molar mass = 111g/mol, Solvent = 0.26kg, Kb = 0.52, i = 3. Steps: 1. Moles = 3/111 = 0.027 mol. 2. Molality (m) = 0.027/0.26 = 0.104 m. 3. Elevation in boiling point (ΔTb) = i * Kb * m = 3 * 0.52 * 0.104 = 0.162 K.",
      year: "2025",
    },

    /// 2024

    {
      marks: 2,
      question:
        " Define molal depression constant. How is it related to enthalpy of fusion ? ",
      answer: ".....",
      year: "2024",
    },

    {
      marks: 2,
      question:
        "  What type of deviation is shown by ethanol and acetone mixture ? Give reason. What type of azeotropic mixture is formed by that deviation?",
      answer: ".....",
      year: "2024",
    },
    {
      marks: 2,
      question:
        "18 g of a non-volatile solute is dissolved in 200 g of H2O freezes at 272.07 K. Calculate the molecular mass of solute (Kf for water = 1.86 K kg/mol)",
      answer:
        "Given: w2 = 18g, w1 = 200g, Tf = 272.07 K, Tf° = 273 K, Kf = 1.86. Steps: 1. ΔTf = 273 - 272.07 = 0.93 K. 2. Formula: M2 = (1000 * Kf * w2) / (w1 * ΔTf). 3. M2 = (1000 * 1.86 * 18) / (200 * 0.93) = 180 g/mol.",
      year: "2024",
    },

    {
      marks: 2,
      question:
        "A 6% solution of glucose (molar mass = 180 g/mol) is isotonic with 2.5% solution of an unknown organic substance. Calculate the molecular weight of the unknown organic substance.",
      answer:
        "For isotonic solutions, C1 = C2, which means (w1 / M1) = (w2 / M2). Given: w1 = 6g, M1 = 180g/mol, w2 = 2.5g. Calculation: M2 = (w2 * M1) / w1 = (2.5 * 180) / 6 = 75 g/mol.",
      year: "2025",
    },

    /// 2023

    {
      marks: 2,
      question:
        "(a) What type of deviation from Raoult's law is shown by a mixture of ethanol and acetone ? Give reason.",
      answer: "....",
      year: "2023",
    },
    {
      marks: 2,
      question:
        "The vapour pressure of pure liquid X and pure liquid Y at 25 °C are 120 mm Hg and 160 mm Hg respectively. If equal moles of X and Y are mixed to form an ideal solution, calculate the vapour pressure of the solution.",
      answer:
        "Given: P°X = 120 mm Hg, P°Y = 160 mm Hg. Since equal moles are mixed, mole fractions xX = 0.5 and xY = 0.5. Using Raoult's Law: P_total = (P°X * xX) + (P°Y * xY) = (120 * 0.5) + (160 * 0.5) = 60 + 80 = 140 mm Hg.",
      year: "2023",
    },
    {
      marks: 2,
      question:
        "(b) Define Azeotrope. What type of azeotrope is formed by negative deviation from Raoult's law? Give an example.",
      answer: "....",
      year: "2023",
    },

    {
      marks: 1,
      question:
        " Give reason  why Aquatic animals are more comfortable in cold water in comparison to warm water.",
      answer: "....",
      year: "2023",
    },

    {
      marks: 1,
      question:
        "  Give reason  Why Sprinkling of salt helps in clearing the snow-covered roads in hilly areas.",
      answer: "....",
      year: "2023",
    },

    {
      marks: 2,
      question: "What is Henry's law ? Give one application of it.",
      answer: "....",
      year: "2023",
    },

    /// 2020

    {
      marks: 2,
      question:
        "State Raoult's law for a solution containing volatile components. What is the similarity between Raoult's law and Henry's law?",
      answer: "....",
      year: "2020",
    },

    {
      marks: 2,
      question:
        "State Raoult's law for a solution containing volatile components. What is the similarity between Raoult's law and Henry's law?",
      answer: "....",
      year: "2020",
    },
    {
      marks: 2,
      question:
        "For a 5% solution of urea (Molar mass = 60 g/mol), calculate the osmotic pressure at 300 K. [R = 0.0821 L atm K-1 mol-1]",
      answer:
        "Given: w = 5g, M = 60g/mol, V = 0.1L, T = 300K, R = 0.0821. Formula: π = (w * R * T) / (M * V). Calculation: π = (5 * 0.0821 * 300) / (60 * 0.1) = 123.15 / 6 = 20.525 atm.",
      year: "2020",
    },

    {
      marks: 2,
      question:
        "Visha took two aqueous solutions - one containing 7⋅5g of urea (Molar mass =60g/mol ) and the other containing 42.75 g of substance Z in 100 g of water, respectively. It was observed that both the solutions froze at the same temperature. Calculate the molar mass of Z .",
      answer: "....",
      year: "2020",
    },

    {
      marks: 1,
      question:
        "What happens whena pressure greater than osmotic pressure is applied on the solution side separated from",
      answer: "....",
      year: "2020",
    },

    {
      marks: 1,
      question:
        "What happens whena pressure greater than osmotic pressure is applied on the solution side separated from solvent by a semipermeable membrane?",
      answer: "....",
      year: "2020",
    },

    {
      marks: 1,
      question: " what happens when acetone is added to pure ethanol?",
      answer: "....",
      year: "2020",
    },

    {
      marks: 3,
      question:
        "State Henry's law. Calculate the solubility of CO2 in water at 298 K under 760 mm Hg. (KH for CO2 in water at 298 K is 1.25 x 10^6 mmHg)",
      answer:
        "Henry's Law: The solubility of a gas in a liquid is directly proportional to the partial pressure of the gas above the liquid (P = KH * x). Calculation: 1. x = P / KH = 760 / (1.25 * 10^6) = 6.08 x 10^-4. 2. Molarity = x * 55.5 = (6.08 x 10^-4) * 55.5 = 0.0337 mol/L.",
      year: "2020",
    },

    {
      marks: 3,
      question:
        "Predict the state of the solute in the solution in the following situations: (a) When 'i' is found to be more than one. (b) When 'i' is found to be less than one.",
      answer:
        "(a) When i > 1, the solute undergoes dissociation (the molecules break into ions, increasing the number of particles). (b) When i < 1, the solute undergoes association (molecules join together, like dimerization, decreasing the number of particles).",
      year: "2020",
    },

    /// 2019

    {
      marks: 3,
      question:
        "Give reasons \n(a) Cooking is faster in pressure cooker than in cooking pan.",
      answer: "....",

      year: "2019",
    },

        {
      marks: 3,
      question:
        "(b) Red Blood Cells (RBC) shrink when placed in saline water but swell in distilled water.",
      answer: "....",

      year: "2019",
    },

      {
      marks: 3,
      question:"Give reasons (a) Aquatic species are more comfortable in cold water than warm water.",
      answer: "....",

      year: "2019",
    },

    {
      marks: 3,
      question:"Give reasons (b) At higher altitudes people suffer from anoxia resulting in inability to think",
      answer: "....",

      year: "2019",
    },

     {
      marks: 3,
      question:"What type of azeotropic mixture will be formed by a solution of acetone and chloroform ? Justify on the basis of strength of intermolecular interactions that develop in the solution.",
      answer: "....",

      year: "2019",
    },

    {
      marks: 3,
      question:"State Raoult's law for a solution containing volatile components. Write two characteristics of the solution which obeys Raoult's law at all concentrations",
      answer: "....",

      year: "2019",
    },

    {
      marks: 3,
      question:"(a) Out of 0⋅1 molal aqueous solution of glucose and 0⋅1 molal aqueous solution of KCl , which one will have higher boiling point and why",
      answer: "....",

      year: "2019",
    },

    
  {
    marks: 1,
    question: "Predict whether van't Hoff factor (i) is less than one or greater than one when CH3COOH is dissolved in water.",
    answer: "i > 1",
    reason: "In water, CH3COOH undergoes dissociation into ions, increasing the total number of particles.",
    year: "2026"
  },
  {
    marks: 1,
    question: "Predict whether van't Hoff factor (i) is less than one or greater than one when CH3COOH is dissolved in benzene.",
    answer: "i < 1",
    reason: "In benzene, CH3COOH undergoes association to form dimers via hydrogen bonding, decreasing the total number of particles.",
    year: "2026"
  },


// 2016
{
  marks: 3,
  question: "Calculate the freezing point of a solution containing 60 g of glucose (Molar mass = 180 g/mol) in 250 g of water. (Kf of water = 1.86 K kg/mol)",
  answer: "270.67 K (or -2.48°C)",
  reason: "Step 1: Molality (m) = (60/180) * (1000/250) = 1.333 mol/kg. Step 2: ΔTf = Kf * m = 1.86 * 1.333 = 2.48 K. Step 3: Tf = Tf° - ΔTf = 273.15 - 2.48 = 270.67 K.",
  year: "2016"
},
  {
      marks: 3,
      question:"Define the following  (i) Colligative properties (ii) Molality  ",
      answer: "....",

      year: "2016",
    },

    
  {
    marks: 1,
    question: "Gas (A) is more soluble in water than Gas (B) at the same temperature. Which one of the two gases will have the higher value of KH (Henry's constant) and why?",
    answer: "Gas (B)",
    reason: "Solubility is inversely proportional to Henry's constant (KH) at a given pressure. Since Gas (A) is more soluble, it has a lower KH; therefore, Gas (B) has the higher KH.",
    year: "2016"
  },
  {
    marks: 1,
    question: "In non-ideal solution, what type of deviation shows the formation of maximum boiling azeotropes?",
    answer: "Negative deviation from Raoult's Law",
    reason: "Stronger A-B interactions lead to lower vapor pressure, which results in a higher boiling point than the pure components, forming a maximum boiling azeotrope.",
    year: "2016"
  },

   {
      marks: 3,
      question:"State Henry's law. Write its one application. What is the effect of temperature on solubility of gases in liquid?",
      answer: "....",

      year: "2016",
    },

    /// 2025 3 marks 

    
  {
    marks: 3,
    question: "A solution of glucose (molar mass = 180 g/mol) in water has a boiling point of 100.20°C. Calculate the freezing point of the same solution. (Kf = 1.86 K kg/mol, Kb = 0.512 K kg/mol)",
    answer: "-0.726°C (or 272.424 K)",
    reason: "Using ΔTb = (100.20 - 100) = 0.20. Since ΔTb/ΔTf = Kb/Kf, we get 0.20/ΔTf = 0.512/1.86. Solving gives ΔTf = 0.726. Freezing point = 0 - 0.726 = -0.726°C.",
    year: "2025"
  },
  {
    marks: 3,
    question: "0.3 g of acetic acid (M = 60) in 30 g benzene shows ΔTf = 0.45°C. Calculate percentage association if it forms a dimer. (Kf for benzene = 5.12 K kg/mol)",
    answer: "94.6%",
    reason: "Calculated molality = 0.166. Theoretical ΔTf = 5.12 * 0.166 = 0.853. van't Hoff factor (i) = Observed ΔTf / Theoretical ΔTf = 0.45 / 0.853 = 0.527. For dimerization, α = 2(1-i) = 2(1 - 0.527) = 0.946 or 94.6%.",
    year: "2025"
  },
  {
    marks: 3,
    question: "Shweta mixed 10 mL each of liquids A and B; final volume was 20.2 mL. (i) Why the change? (ii) Temp change? (iii) Example.",
    answer: "(i) Positive deviation (ii) Decrease (iii) Ethanol + Acetone",
    reason: "The increase in volume (ΔV > 0) indicates a non-ideal solution with positive deviation. This process is endothermic (ΔH > 0), so temperature decreases. Interactions between A-B are weaker than A-A/B-B.",
    year: "2025"
  },
  {
    marks: 3,
    question: "(i) Salt on snow? (ii) RBC in 0.5% NaCl? (iii) RO application?",
    answer: "(i) Lowers freezing point (ii) Swell/Burst (iii) Desalination of seawater",
    reason: "(i) Salt acts as a non-volatile solute lowering the freezing point of water below 0°C. (ii) 0.5% NaCl is hypotonic compared to RBC (0.9%), so water enters the cell via osmosis. (iii) Reverse osmosis is used to get fresh water from salt water.",
    year: "2025"
  },
  {
    marks: 3,
    question: "Aqueous NaOH molar mass from osmotic pressure was 25 g/mol. Calculate % dissociation. (Na=23, O=16, H=1)",
    answer: "60%",
    reason: "Theoretical Molar Mass of NaOH = 40. i = Normal Molar Mass / Observed Molar Mass = 40 / 25 = 1.6. For NaOH (n=2), α = (i-1)/(n-1) = (1.6-1)/(2-1) = 0.6 or 60%.",
    year: "2025"
  },
  {
    marks: 3,
    question: "VP of pure water is 24.8 mm Hg. Calculate lowering in VP of solution freezing at -0.3°C. (Kf = 1.86)",
    answer: "0.071 mm Hg",
    reason: "ΔTf = 0.3, so m = 0.3 / 1.86 = 0.161. Using Raoult's Law (ΔP/P° = mole fraction of solute), ΔP/24.8 = (0.161)/(0.161 + 55.5). Solving for ΔP gives ~0.071 mm Hg.",
    year: "2025"
  },
  {
    marks: 3,
    question: " A solution is prepared by dissolving 5 g of a non-volatile solute in 200 g of water. It has a vapour pressure of 31.84 mm Hg at 300 K . Calculate the molar mass of the solute (Vapour pressure of pure water at 300K=32mmHg) ",
    answer: "177.5 g/mol",
    reason: "Using (P° - Ps)/P° = (w2 * M1) / (M2 * w1): (32 - 31.84)/32 = (5 * 18) / (M2 * 200). Solving for M2 gives 177.5.",
    year: "2024"
  },
  {
    marks: 2,
    question: " The vapour pressure of a solvent at 283 K is 100 mm Hg . Calculate the vapour pressure of a dilute solution containing 1 mole of a strong electrolyte AB in 50 moles of the solvent at 283 K (assuming complete dissociation of solute AB ).",
    answer: "96.15 mm Hg",
    reason: "Strong electrolyte AB dissociates into 2 ions, so i = 2. Moles of solute particles = 2. Mole fraction of solvent = 50 / (50 + 2) = 50/52. Ps = P° * Xsolvent = 100 * (50/52) = 96.15 mm Hg.",
    year: "2024"
  },

  {
  marks: 3,
  question: "0.3 g of acetic acid (M = 60 g mol⁻¹) dissolved in 30 g of benzene shows a depression in freezing point equal to 0.45°C. Calculate the percentage association of acid if it forms a dimer in the solution. (Given: Kf for benzene = 5.12 K kg mol⁻¹)",
  answer: "94.6%",
  reason: "Moles of acetic acid = 0.3/60 = 0.005 mol. Mass of benzene = 30 g = 0.03 kg. Molality m = 0.005/0.03 = 0.1667 m. Using ΔTf = i Kf m: 0.45 = i × 5.12 × 0.1667 → i = 0.45 / 0.8533 = 0.527. For dimerisation, i = 1 − α/2. So 1 − α/2 = 0.527 → α = 0.946. Percentage association = 94.6%.",
  year: "2023"
},

{
  marks: 3,
  question: "If benzoic acid (M = 122 g mol⁻¹) is associated into a dimer when dissolved in benzene and the osmotic pressure of a solution of 6.1 g of benzoic acid in 100 mL benzene is 6.5 atm at 27°C, what is the percentage association of benzoic acid? (Given: R = 0.0821 L atm K⁻¹ mol⁻¹)",
  answer: "",
  reason: "",
  year: "2023"
},

{
  marks: 3,
  question: "(a) Differentiate between Ideal solution and Non-ideal solution.",
  answer: "",
  reason: "",
  year: "2023"
},

{
  marks: 3,
  question: "(b) 30 g of urea is dissolved in 846 g of water. Calculate the vapour pressure of water for this solution if vapour pressure of pure water at 298 K is 23.8 mm Hg.",
  answer: "",
  reason: "",
  year: "2023"
},
{
  marks: 3,
  question: "A 0.01 m aqueous solution of AlCl₃ freezes at −0.068°C. Calculate the percentage of dissociation. (Given: Kf for water = 1.86 K kg mol⁻¹)",
  answer: "",
  reason: "",
  year: "2020"
},

{
  marks: 3,
  question: "Calculate the mass of ascorbic acid (M = 176 g mol⁻¹) to be dissolved in 75 g of acetic acid to lower its freezing point by 1.5°C. (Kf = 3.9 K kg mol⁻¹)",
  answer: "",
  reason: "",
  year: "2020"
},

{
  marks: 3,
  question: "The freezing point of a solution containing 5 g of benzoic acid (M = 122 g mol⁻¹) in 35 g of benzene is depressed by 2.94 K. What is the percentage association of benzoic acid if it forms a dimer in solution? (Kf for benzene = 4.9 K kg mol⁻¹)",
  answer: "",
  reason: "",
  year: "2020"
},

{
  marks: 3,
  question: "An antifreeze solution is prepared by dissolving 31 g of ethylene glycol (M = 62 g mol⁻¹) in 600 g of water. Calculate the freezing point of the solution. (Kf for water = 1.86 K kg mol⁻¹)",
  answer: "",
  reason: "",
  year: "2020"
},

{
  marks: 3,
  question: "A solution containing 1.9 g per 100 mL of KCl (M = 74.5 g mol⁻¹) is isotonic with a solution containing 3 g per 100 mL of urea (M = 60 g mol⁻¹). Calculate the degree of dissociation of KCl solution. Assume both solutions have same temperature.",
  answer: "",
  reason: "",
  year: "2019"
},

{
  marks: 3,
  question: "At 300 K, 30 g of glucose present in one litre of its solution has an osmotic pressure of 4.98 bar. If the osmotic pressure of a glucose solution is 1.52 bar at the same temperature, what would be its concentration?",
  answer: "",
  reason: "",
  year: "2019"
},

{
  marks: 3,
  question: "A 4% (w/w) solution of sucrose (M = 342 g mol⁻¹) in water has a freezing point of 271.15 K. Calculate the freezing point of 5% glucose (M = 180 g mol⁻¹) in water. (Given: Freezing point of pure water = 273.15 K)",
  answer: "",
  reason: "",
  year: "2019"
},


{
  marks: 3,
  question: "A 0.1 M solution of Na₂SO₄ is dissociated to the extent of 95%. What would be its osmotic pressure at 27°C? (R = 0.0821 L atm K⁻¹ mol⁻¹)",
  answer: "",
  reason: "",
  year: "2019"
},

{
  marks: 3,
  question: "Give reasons: (a) Measurement of osmotic pressure method is preferred for determination of molar masses of macromolecules such as proteins and polymers.",
  answer: "",
  reason: "",
  year: "2018"
},

{
  marks: 3,
  question: "Give reasons: (b) Aquatic animals are more comfortable in cold water than in warm water.",
  answer: "",
  reason: "",
  year: "2018"
},

{
  marks: 3,
  question: "Give reasons: (b) Aquatic animals are more comfortable in cold water than in warm water.",
  answer: "",
  reason: "",
  year: "2018"
},

{
  marks: 3,
  question: "Give reasons: (c) Elevation of boiling point of 1 M KCl solution is nearly double than that of 1 M sugar solution.",
  answer: "",
  reason: "",
  year: "2017"
},

{
  marks: 3,
  question: "A 10% (by mass) solution of sucrose in water has freezing point 269.15 K. Calculate the freezing point of 10% glucose in water. (Freezing point of pure water = 273.15 K; Molar mass: sucrose = 342 g mol⁻¹, glucose = 180 g mol⁻¹)",
  answer: "",
  reason: "",
  year: "2017"
},

{
  marks: 3,
  question: "A solution of glucose (M = 180 g mol⁻¹) in water has a boiling point of 100.20°C. Calculate the freezing point of the same solution. (Kf = 1.86 K kg mol⁻¹ and Kb = 0.512 K kg mol⁻¹)",
  answer: "",
  reason: "",
  year: "2017"
},

{
  marks: 3,
  question: "Calculate the boiling point of solution when 4 g of MgSO₄ (M = 120 g mol⁻¹) is dissolved in 100 g of water, assuming complete ionization. (Kb for water = 0.52 K kg mol⁻¹)",
  answer: "",
  reason: "",
  year: "2017"
},

{
  marks: 3,
  question: "Calculate the freezing point of solution when 2 g of Na₂SO₄ (M = 142 g mol⁻¹) is dissolved in 50 g of water, assuming complete ionization. (Kf for water = 1.86 K kg mol⁻¹)",
  answer: "",
  reason: "",
  year: "2016"
},

//// 4 marks 

{
  marks: 2,
  question: "(a) Define reverse osmosis. Name one semipermeable membrane (SPM) which can be used in the process of reverse osmosis.",
  answer: "",
  reason: "",
  year: "2025"
},

{
  marks: 2,
  question: "(b)(i) What do you expect to happen when red blood corpuscles (RBCs) are placed in 0.5% NaCl solution?",
  answer: "",
  reason: "",
  year: "2025"
},

{
  marks: 2,
  question: "(b)(ii) Which one of the following will have higher osmotic pressure: 1 M KCl or 1 M urea solution? Justify your answer.",
  answer: "",
  reason: "",
  year: "2025"
},

{
  marks: 2,
  question: "(c) Why is osmotic pressure a colligative property?",
  answer: "",
  reason: "",
  year: "2025"
},

{
  marks: 2,
  question: "(a) Give one example of a miscible liquid pair which shows negative deviation from Raoult's law. What is the reason for such deviation?",
  answer: "",
  reason: "",
  year: "2025"
},

{
  marks: 2,
  question: "(b)(i) State Raoult's law for a solution containing volatile components.",
  answer: "",
  reason: "",
  year: "2025"
},

{
  marks: 2,
  question: "(b)(ii) Raoult's law is a special case of Henry's law. Comment.",
  answer: "",
  reason: "",
  year: "2025"
},

{
  marks: 2,
  question: "(c) Write two characteristics of an ideal solution.",
  answer: "",
  reason: "",
  year: "2025"
},

{
  marks: 5,
  question: "(a)(i) Ishan's automobile radiator is filled with 1.0 kg of water. How many grams of ethylene glycol (M = 62 g mol⁻¹) must be added to lower the freezing point of the solution to −2.8°C? (Kf for water = 1.86 K kg mol⁻¹)\n(ii) What type of deviation from Raoult's law is shown by ethanol and acetone mixture? Give reason.\n(b)(i) Boiling point of water at 750 mm Hg pressure is 99.68°C. How much sucrose (M = 342 g mol⁻¹) is to be added to 500 g of water such that it boils at 100°C? (Kb for water = 0.52 K kg mol⁻¹)\n(ii) State Henry's law and write any one application.",
  answer: "",
  reason: "",
  year: "2024"
},
{
  marks: 5,
  question: "(a)(i) At the same temperature, CO₂ gas is more soluble in water than O₂ gas. Which one of them will have higher value of KH and why?\n(ii) How does the size of blood cells change when placed in an aqueous solution containing more than 0.9% (mass/volume) sodium chloride?\n(iii) 1 molal aqueous solution of an electrolyte A₂B₃ is 60% ionized. Calculate the boiling point of the solution. (Kb for water = 0.52 K kg mol⁻¹)\n(b)(i) The vapour pressures of A and B at 25°C are 75 mm Hg and 25 mm Hg respectively. If A and B are mixed such that mole fraction of A in the mixture is 0.4, calculate the mole fraction of B in vapour phase.\n(ii) Define colligative property. Which colligative property is preferred for molar mass determination of macromolecules?\n(iii) Why are equimolar solutions of sodium chloride and glucose not isotonic?",
  answer: "",
  reason: "",
  year: "2024"
},
{
  marks: 5,
  question: "(a)(i) Define reverse osmosis.\n(ii) Why are aquatic species more comfortable in cold water in comparison to warm water?\n(iii) A solution containing 2 g of glucose (M = 180 g mol⁻¹) in 100 g of water is prepared at 303 K. If vapour pressure of pure water at 303 K is 32.8 mm Hg, what would be the vapour pressure of the solution?\n(b)(i) Predict whether Van’t Hoff factor will be less or greater than one when ethanoic acid is dissolved in benzene.\n(ii) Define ideal solution.\n(iii) Calculate the mass of CaCl₂ (M = 111 g mol⁻¹) to be dissolved in 500 g of water to lower its freezing point by 2 K, assuming complete dissociation. (Kf for water = 1.86 K kg mol⁻¹)",
  answer: "",
  reason: "",
  year: "2024"
},

{
  marks: 5,
  question: "(a)(i) Why is boiling point of 1 M NaCl solution more than that of 1 M glucose solution?\n(ii) A non-volatile solute X (molar mass = 50 g mol⁻¹) when dissolved in 78 g of benzene reduces its vapour pressure to 90% of pure benzene. Calculate the mass of X dissolved.\n(iii) Calculate the boiling point elevation for a solution prepared by adding 10 g of MgCl₂ to 200 g of water assuming MgCl₂ is completely dissociated. (Kb for water = 0.512 K kg mol⁻¹, M(MgCl₂)=95 g mol⁻¹)\n(b)(i) Why is the value of Van’t Hoff factor for ethanoic acid in benzene close to 0.5?\n(ii) Determine the osmotic pressure of a solution prepared by dissolving 2.32×10⁻² g of K₂SO₄ in 2 L of solution at 25°C, assuming complete dissociation. (R = 0.082 L atm K⁻¹ mol⁻¹, M(K₂SO₄)=174 g mol⁻¹)\n(iii) When 25.6 g of sulphur is dissolved in 1000 g of benzene, the freezing point is lowered by 0.512 K. Calculate the formula of sulphur (Sₓ). (Kf for benzene = 5.12 K kg mol⁻¹, Atomic mass of S = 32 g mol⁻¹)",
  answer: "",
  reason: "",
  year: "2023"
},

{
  marks: 5,
  question: "(a) When 19.5 g of F–CH₂–COOH (M = 78 g mol⁻¹) is dissolved in 500 g of water, the depression in freezing point is 1°C. Calculate the degree of dissociation of F–CH₂–COOH. (Kf for water = 1.86 K kg mol⁻¹)\n(b) Give reasons:\n(i) 0.1 M KCl has higher boiling point than 0.1 M glucose.\n(ii) Meat is preserved for a longer time by salting.",
  answer: "",
  reason: "",
  year: "2020"
},


{
  marks: 5,
  question: "(a) Draw the graph between vapour pressure and temperature and explain the elevation in boiling point of a solvent in solution.\n(b) Determine the osmotic pressure of a solution prepared by dissolving 25 mg of K₂SO₄ in 2 litres of water at 25°C assuming complete dissociation. (Atomic masses: K=39, S=32, O=16)",
  answer: "",
  reason: "",
  year: "2019"
},


{
  marks: 5,
  question: "(a) Write two characteristics of non-ideal solutions.\n(b) 2 g of benzoic acid (C₆H₅COOH) dissolved in 25 g of benzene shows a depression in freezing point of 1.62 K. Molal depression constant for benzene = 4.9 K kg mol⁻¹. What is the percentage association of acid if it forms a dimer in solution?",
  answer: "",
  reason: "",
  year: "2019"
},


















































































    



  ],

  

  
};
