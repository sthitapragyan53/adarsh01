
export default {
    
  notes: [
    {
      heading: "1. The Solid State: Basics",
      content:
        "Solids have a definite mass, volume, and shape due to short intermolecular distances and strong forces. Unlike liquids or gases, the constituent particles have fixed positions and only vibrate about their mean positions."
    },
    {
      heading: "2. Crystalline vs. Amorphous",
      content:
        "Crystalline solids (True Solids) have long-range order and sharp melting points. They are Anisotropic (properties change with direction). Amorphous solids (Pseudo-solids) have short-range order and melt over a range of temperatures."
    },
    {
      heading: "3. Classification by Bonding",
      content:
        "Crystalline solids are divided into four types: 1. Molecular (held by Van der Waals forces), 2. Ionic (Coulombic forces, e.g., NaCl), 3. Metallic (sea of electrons), and 4. Covalent/Network (strong covalent bonds, e.g., Diamond)."
    },
    {
      heading: "4. Unit Cells (Advanced Geometry)",
      content:
        "A unit cell is the smallest repeating portion of a lattice. Types include: Simple Cubic (1 atom/cell), Body-Centered Cubic (2 atoms/cell), and Face-Centered Cubic (4 atoms/cell)."
    },
    {
      heading: "5. Mathematical Calculation of Density",
      content:
        "The density ($d$) of a unit cell is calculated using the formula: $d = (Z \times M) / (a^3 \times N_A)$, where $Z$ is the number of atoms per unit cell, $M$ is molar mass, $a$ is edge length, and $N_A$ is Avogadro's constant."
    },
    {
      heading: "6. Packing Efficiency",
      content:
        "This measures the space occupied by particles. Simple Cubic = 52.4%, BCC = 68%, and FCC/HCP = 74%. High packing efficiency usually leads to higher stability and density."
    },
    {
      heading: "7. Point Defects in Crystals",
      content:
        "Stoichiometric defects include: 1. Schottky Defect (equal number of cations and anions missing; decreases density) and 2. Frenkel Defect (ion moves to an interstitial site; density remains same)."
    }
  ],

  mcqs: [
    {
      question: "Which defect decreases the density of a crystal?",
      options: ["Frenkel Defect", "Schottky Defect", "Metal Excess Defect", "Interstitial Defect"],
      answer: "Schottky Defect"
    },
    {
      question: "What is the total number of atoms in a Body-Centered Cubic (BCC) unit cell?",
      options: ["1", "2", "4", "6"],
      answer: "2"
    },
    {
      question: "Which of the following is a network covalent solid?",
      options: ["Ice", "Solid CO2", "Diamond", "NaCl"],
      answer: "Diamond"
    },
    {
      question: "The formula for density of a unit cell involves which constant?",
      options: ["Planck's Constant", "Gas Constant", "Avogadro's Number", "Boltzmann Constant"],
      answer: "Avogadro's Number"
    }
  ],

  // New Dedicated PYQ Section
  pyqs: [
    
    {
      question: "Acidified KMnO₄ oxidises sulphite to",
      options: ["(A) S₂O₃²⁻", "(B) S₂O₈²⁻", "(C) SO₂(g)", "(D) SO₄²⁻"],
      answer: "SO₄²⁻",
      year: "2025"
    },
     {
      question: "The magnetic moment is associated with its spin angular momentum and orbital angular momentum. Spin only magnetic moment value of Cr³⁺ ion (Atomic no. : Cr = 24) is ________.",
        options:  ["(A) 2.87 B.M.", "(B) 3.87 B.M.", "(C) 3.47 B.M.", "(D) 3.57 B.M."],
        answer: "3.87 B.M.",
        year: "2025"
    },
    {
      type: "descriptive",
      marks: "2",
      year: "2025",
      questionParts: [
        {
          label: "(a)",
          question: "(a) 2MnO₄⁻(aq) + 10I⁻(aq) + 16H⁺(aq) ——→",
          answer: ".....",
        },
      ],
      OR: {
        question: "(b) Cr₂O₇²⁻(aq) + 6Fe²⁺(aq) + 14H⁺(aq) ——→",
        answer: "......",
      }
    },],


    // 5  mark questions 

    theoryQuestions: [

  {
    marks: 5,
    question: "(i) In the first order reaction N₂O₅(g) → 2NO₂(g)+½O₂(g), initial concentration of N₂O₅ is 1.2×10⁻² mol L⁻¹ and after 60 minutes it is 0.2×10⁻² mol L⁻¹. Calculate the rate constant at 318 K. [log6=0.778]",
    answer: "........",
    year: "2025"
  },

  {
    marks: 5,
    question: "(ii) Account for the following: (I) Order of reaction cannot be determined from balanced chemical equation. (II) A bimolecular reaction may become kinetically first order under specified conditions.",
    answer: "........",
    year: "2022"
  },

  {
    marks: 5,
    question: "(i) The rate of reaction doubles for an increase of 10 K from 298 K. Calculate activation energy Ea. [2.303R=19.15 J K⁻¹ mol⁻¹, log2=0.3]",
    answer: "........",
    year: "2025"
  },

  {
    marks: 5,
    question: "(ii) For reaction 2H₂O₂ → 2H₂O + O₂ (in presence of I⁻ catalyst), proposed mechanism: (I) H₂O₂ + I⁻ → H₂O + IO⁻ (slow) (II) H₂O₂ + IO⁻ → H₂O + I⁻ + O₂ (fast). (1) Write rate law. (2) Write overall order and molecularity.",
    answer: "........",
    year: "2025"
  },

  {
    marks: 5,
    question: "Effect of temperature on rate constant of a reaction.",
    answer: "........",
    year: "2022"
  },

  {
    marks: 5,
    question: "For reaction A+B → Product, rate law Rate = k[A]²[B]¹ᐟ². Determine order of reaction.",
    answer: "........",
    year: "2025"
  },

  {
    marks: 5,
    question: "How do order and molecularity differ for complex reactions?",
    answer: "........",
    year: "2025"
  },

  {
    marks: 5,
    question: "A first order reaction has rate constant 2×10⁻³ s⁻¹. How long will 6 g of reactant take to reduce to 2 g?",
    answer: "........",
    year: "2025"
  },

  {
    marks: 5,
    question: "Half-life of ¹⁴C is 6930 years. A wood sample contains 75% of ¹⁴C of living tree. Calculate age of sample. [log4=0.6021, log3=0.4771, log2=0.3010]",
    answer: "........",
    year: "2022"
  },

  {
    marks: 5,
    question: "(i) Calculate overall order of reaction: Rate = k[A]¹ᐟ²[B]³ᐟ². (ii) Effect of temperature on rate. (iii) Meaning of rate of reaction.",
    answer: "........",
    year: "2022"
  },

  {
    marks: 5,
    question: "(iv) A first order reaction takes 77.78 minutes for 50% completion. Calculate time for 30% completion. [log7=0.8450]",
    answer: "........",
    year: "2022"
  },

  {
    marks: 5,
    question: "A first order reaction has k =1×10⁻³ s⁻¹. How long will 5 g reactant take to reduce to 3 g? [log3=0.4771, log5=0.6990]",
    answer: "........",
    year: "2020"
  },

  {
    marks: 5,
    question: "(a) A first order reaction is 25% complete in 40 minutes. Calculate rate constant. (b) Time for 80% completion.",
    answer: "........",
    year: "2020"
  },

  {
    marks: 5,
    question: "(b) Define order of reaction. Write condition under which bimolecular reaction follows first order kinetics.",
    answer: "........",
    year: "2019"
  },

  {
    marks: 5,
    question: "(a) A first order reaction is 50% complete in 30 min at 300 K and 10 min at 320 K. Calculate activation energy. (b) Write two conditions for effective collisions. (c) Difference between order and molecularity for complex reactions.",
    answer: "........",
    year: "2020"
  },

  {
    marks: 5,
    question: "(a) Rate constant for first order reaction is 60 s⁻¹. How much time to reduce concentration to 1/16th? (b) Two factors affecting rate of reaction. (c) Two conditions for effective collisions.",
    answer: "........",
    year: "2020"
  },

  {
    marks: 5,
    question: "(a) Draw plot of ln k vs 1/T. What does intercept represent? Relation between slope and Ea. (b) A first order reaction takes 30 minutes for 20% decomposition. Calculate half-life.",
    answer: "........",
    year: "2019"
  },

  {
    marks: 5,
    question: "(a) Decomposition of hydrocarbon has k =2.5×10⁴ s⁻¹ at 27°C. At what temperature will k =7.5×10⁴ s⁻¹ if Ea=19.147×10³ J mol⁻¹? (b) Condition under which bimolecular reaction becomes first order. Give example.",
    answer: "........",
    year: "2019"
  },


  
/////  mcq questions  
{
  question: "The activation energy (Ea) of a reaction can be determined from the slope of which of the following plots?",
  options: [
    "(A) lnk vs T",
    "(B) T/lnk vs T",
    "(C) lnk/T vs T",
    "(D) lnk vs 1/T"
  ],
  answer: "(D) lnk vs 1/T",
  year: "2024"
},

{
  question: "Which of the following represents the fraction of molecules with energies equal to or greater than Ea?",
  options: [
    "(A) e^(+Ea/RT)",
    "(B) e^(−Ea/RT)",
    "(C) (RT−Ea)",
    "(D) (RT+Ea)"
  ],
  answer: "(B) e^(−Ea/RT)",
  year: "2025"
},

{
  question: "The role of a catalyst is to change:",
  options: [
    "(A) Gibbs energy of reaction",
    "(B) Activation energy of reaction",
    "(C) Equilibrium constant",
    "(D) Enthalpy of reaction"
  ],
  answer: "(B) Activation energy of reaction",
  year: "2024"
},

{
  question: "Which among the following is a false statement?",
  options: [
    "(A) Rate of zero order reaction is independent of initial concentration of reactant.",
    "(B) Molecularity of a reaction may be zero.",
    "(C) For a first order reaction, t1/2 = 0.693/k.",
    "(D) Half-life of zero order reaction is inversely proportional to rate constant."
  ],
  answer: "(B) Molecularity of a reaction may be zero.",
  year: "2024"
},

{
  question: "The number of molecules that react with each other in an elementary reaction is a measure of the:",
  options: [
    "(A) Order of the reaction",
    "(B) Activation energy",
    "(C) Stoichiometry",
    "(D) Molecularity"
  ],
  answer: "(D) Molecularity",
  year: "2024"
},

{
  question: "The unit of rate and rate constant are same for a:",
  options: [
    "(A) Zero order reaction",
    "(B) First order reaction",
    "(C) Second order reaction",
    "(D) Third order reaction"
  ],
  answer: "(A) Zero order reaction",
  year: "2024"
},

{
  question: "The rate of a reaction increases sixteen times when concentration increases four times. The order of reaction is:",
  options: [
    "(A) 2.0",
    "(B) 1.5",
    "(C) 2.5",
    "(D) 0.5"
  ],
  answer: "(A) 2.0",
  year: "2024"
},

{
  question: "For reaction X + 2Y → P, the differential form of rate law is:",
  options: [
    "(A) d[X]/dt = −d[P]/dt",
    "(B) d[P]/dt = −d[X]/dt",
    "(C) 2 d[P]/dt = −d[Y]/dt",
    "(D) −2 d[Y]/dt = d[P]/dt"
  ],
  answer: "(C) 2 d[P]/dt = −d[Y]/dt",
  year: "2024"
},

{
  question: "In Arrhenius equation, when log k is plotted against 1/T, the straight line has:",
  options: [
    "(A) slope = −Ea / (2.303R) and intercept = log A",
    "(B) slope = A and intercept = −Ea/R",
    "(C) slope = −Ea/RT and intercept = logA",
    "(D) slope = A/R and intercept = Ea"
  ],
  answer: "(A) slope = −Ea / (2.303R) and intercept = log A",
  year: "2024"
},

{
  question: "When a catalyst increases the rate of reaction, the rate constant k:",
  options: [
    "(A) decreases",
    "(B) increases",
    "(C) may increase or decrease",
    "(D) remains constant"
  ],
  answer: "(B) increases",
  year: "2024"
},

{
  question: "The correct Arrhenius equation is:",
  options: [
    "(A) k = −A e^(Ea/RT)",
    "(B) k = A e^(−Ea/RT)",
    "(C) k = e^(Ea/RT)",
    "(D) k = −A e^(−Ea/RT)"
  ],
  answer: "(B) k = A e^(−Ea/RT)",
  year: "2024"
},

{
  question: "Addition of catalyst alters which quantity?",
  options: [
    "(A) Internal energy",
    "(B) Enthalpy",
    "(C) Activation energy",
    "(D) Entropy"
  ],
  answer: "(C) Activation energy",
  year: "2024"
},

{
  question: "For elementary reaction P → Q, rate increases 8 times on doubling [P]. Order is:",
  options: [
    "(A) 1",
    "(B) 4",
    "(C) 3",
    "(D) 2"
  ],
  answer: "(C) 3",
  year: "2024"
},

{
  question: "Slope of ln[R] vs time for first order reaction is:",
  options: [
    "(A) −k",
    "(B) −k/2.303",
    "(C) +k/2.303",
    "(D) +k"
  ],
  answer: "(A) −k",
  year: "2024"
},

{
  question: "Half-life of zero order reaction equals:",
  options: [
    "(A) R / (2k)",
    "(B) 2k / R²",
    "(C) R² / (2k)",
    "(D) 2k / R"
  ],
  answer: "(A) R / (2k)",
  year: "2024"
},

{
  question: "If concentration increases four fold and rate becomes sixteen times, order is:",
  options: [
    "(A) 2.0",
    "(B) 1.5",
    "(C) 2.5",
    "(D) 3.5"
  ],
  answer: "(A) 2.0",
  year: "2024"
},

{
  question: "Which quantity is affected by catalyst?",
  options: [
    "(A) ΔG",
    "(B) Ea",
    "(C) ΔS",
    "(D) ΔH"
  ],
  answer: "(B) Ea",
  year: "2024"
},

{
  question: "Order of reaction H₂ + Cl₂ → 2HCl (in hv) is:",
  options: [
    "(A) 0",
    "(B) 1",
    "(C) 2",
    "(D) 3"
  ],
  answer: "(A) 0",
  year: "2024"
},





//// aseration and reson

{
  type: "assertion-reason",
  assertion: "In a first order reaction, if the concentration of the reactant is doubled, its half-life is also doubled.",
  reason: "The half-life of a reaction does not depend upon the initial concentration of the reactant in a first order reaction.",
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
  assertion: "Hydrolysis of an ester follows first order kinetics.",
  reason: "The concentration of water does not get altered much during the reaction.",
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
  assertion: "The units of rate constant of a zero order reaction and rate of reaction are the same.",
  reason: "In zero order reaction, the rate of reaction is independent of the concentration of reactants.",
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
  assertion: "Order of reaction and molecularity are always same for complex reactions.",
  reason: "Order is determined experimentally and molecularity is applicable only for elementary reactions.",
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
  assertion: "Order and molecularity of a reaction are always same.",
  reason: "Complex reactions involve a sequence of elementary reactions and the slowest step is rate determining.",
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
  assertion: "The molecularity of the reaction H2 + Br2 ⟶ 2HBr appears to be 2.",
  reason: "Two molecules of the reactants are involved in the given elementary reaction.",
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
  assertion: "For a zero order reaction the unit of rate constant and rate of reaction are same.",
  reason: "Rate of reaction for zero order reaction is independent of concentration of reactant.",
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
  assertion: "The molecularity of the reaction H2 + Br2 ⟶ 2HBr appears to be 2.",
  reason: "Two molecules of the reactants are involved in the given elementary reaction.",
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
  assertion: "Hydrolysis of an ester follows first order kinetics.",
  reason: "Concentration of water remains nearly constant during the course of the reaction.",
  options: [
    "(A) Both true & correct explanation",
    "(B) Both true but incorrect explanation",
    "(C) A true R false",
    "(D) A false R true",
  ],
  year: "2026",
},


















// ----- Short Answer Format -----

{
  question: "Write slope value in plot of log([R0]/[R]) vs time for first order reaction.",
  answer: "Slope = k / 2.303",
  year: "2024"
},

{
  question: "Write slope value in plot of ln[R] vs time for first order reaction.",
  answer: "Slope = −k",
  year: "2024"
},

{
  question: "Will rate constant depend on temperature if activation energy is zero?",
  answer: "No, rate constant will be independent of temperature.",
  year: "2024"
},

{
  question: "Calculate overall order for Rate = k[NO]^(3/2)[O2]^(1/2).",
  answer: "Overall order = 3/2 + 1/2 = 2",
  year: "2024"
},

{
  question: "Effect of catalyst on (a) Activation energy and (b) Gibbs energy?",
  answer: "(a) Activation energy decreases. (b) Gibbs energy remains unchanged.",
  year: "2024"
},

{
  question: "For reaction R → P, half-life is independent of initial concentration. What is the order?",
  answer: "First order reaction",
  year: "2024"
}




]


    

  
};