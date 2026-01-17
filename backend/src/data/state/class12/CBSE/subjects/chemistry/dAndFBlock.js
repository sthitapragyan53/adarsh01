
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
    },

   

{
  question: "The magnetic moment is associated with spin and orbital angular momentum. Spin-only magnetic moment value of Cr3+ ion is ____.",
  options: [
    "(A) 3.57 B.M.",
    "(B) 3.87 B.M.",
    "(C) 2.87 B.M.",
    "(D) 3.47 B.M."
  ],
  answer: "(B) 3.87 B.M.",
  year: "2024"
},

{
  question: "Acidified KMnO4 oxidises sulphite to:",
  options: [
    "(A) S2O3^2−",
    "(B) SO2 (g)",
    "(C) SO4^2−",
    "(D) S2O8^2−"
  ],
  answer: "(C) SO4^2−",
  year: "2024"
},

{
  question: "Which of the following transition metal ion is not coloured?",
  options: [
    "(A) Co2+",
    "(B) Cu+",
    "(C) V3+",
    "(D) Ni2+"
  ],
  answer: "(B) Cu+",
  year: "2024"
},

{
  question: "In which of the following groups are both ions coloured in aqueous solution?\nI. Cu+\nII. Ti4+\nIII. Co2+\nIV. Fe2+",
  options: [
    "(A) III and IV",
    "(B) I and II",
    "(C) II and III",
    "(D) I and IV"
  ],
  answer: "(A) III and IV",
  year: "2024"
},

{
  question: "Yellow potassium chromate solution turns orange immediately. Which substance was most likely present in the test tube?",
  options: [
    "(A) Sodium hydrogen carbonate solution",
    "(B) Methyl orange solution",
    "(C) Sodium hydroxide solution",
    "(D) HCl solution"
  ],
  answer: "(D) HCl solution",
  year: "2024"
},

{
  question: "The element having [Ar] 3d10 4s1 electronic configuration is:",
  options: [
    "(A) Mn",
    "(B) Zn",
    "(C) Cu",
    "(D) Cr"
  ],
  answer: "(C) Cu",
  year: "2024"
},

{
  question: "Out of Fe3+, Sc3+, Cr3+ and Co3+ ions, the one colourless in aqueous solution is:",
  options: [
    "(A) Co3+",
    "(B) Cr3+",
    "(C) Fe3+",
    "(D) Sc3+"
  ],
  answer: "(D) Sc3+",
  year: "2024"
},

{
  question: "Out of the following statements, the incorrect statement is:",
  options: [
    "(A) Ionic radius decreases from La3+ to Lu3+.",
    "(B) La is actually an element of transition series.",
    "(C) Lanthanoids are radioactive in nature.",
    "(D) Zr and Hf have almost identical atomic radii because of lanthanoid contraction."
  ],
  answer: "(C) Lanthanoids are radioactive in nature.",
  year: "2024"
},

{
  question: "The product of oxidation of I− with MnO4− in alkaline medium is:",
  options: [
    "(A) I2",
    "(B) IO−",
    "(C) IO3−",
    "(D) IO4−"
  ],
  answer: "(C) IO3−",
  year: "2024"
},

{
  question: "Which of the following is the softest metal?",
  options: [
    "(A) Fe",
    "(B) Cu",
    "(C) Sc",
    "(D) Zn"
  ],
  answer: "(D) Zn",
  year: "2024"
},



{
  question: "Transition metals form interstitial compounds. Formation of interstitial compounds makes the transition metal:",
  options: [
    "(A) more ductile",
    "(B) more soft",
    "(C) more metallic",
    "(D) more hard"
  ],
  answer: "(D) more hard",
  year: "2024"
},

{
  question: "Which first row transition element has the highest third ionization enthalpy?",
  options: [
    "(A) Vanadium (Z=23)",
    "(B) Chromium (Z=24)",
    "(C) Manganese (Z=25)",
    "(D) Iron (Z=26)"
  ],
  answer: "(C) Manganese (Z=25)",
  year: "2024"
},

{
  question: "Which of the following does not show variable oxidation states?",
  options: [
    "(A) Mn",
    "(B) Sc",
    "(C) Cu",
    "(D) Fe"
  ],
  answer: "(B) Sc",
  year: "2024"
},

{
  question: "The general electronic configuration of d-block elements is:",
  options: [
    "(A) (n−1)d1−10 ns1−2",
    "(B) (n−1)d10 ns2−3",
    "(C) (n−1)d0 ns1−2",
    "(D) (n−1)d10 ns1−2"
  ],
  answer: "(A) (n−1)d1−10 ns1−2",
  year: "2024"
},

{
  question: "When MnO2 is fused with KOH in air, it gives:",
  options: [
    "(A) K2MnO4",
    "(B) Mn2O3",
    "(C) Mn2O7",
    "(D) KMnO4"
  ],
  answer: "(A) K2MnO4",
  year: "2024"
},

{
  question: "Which characteristic of transition metals is associated with catalytic activity?",
  options: [
    "(A) High enthalpy of atomisation",
    "(B) Colour of hydrated ions",
    "(C) Paramagnetic nature",
    "(D) Variable oxidation states"
  ],
  answer: "(D) Variable oxidation states",
  year: "2024"
},

{
  question: "Ions of Group 12 metals (Zn, Cd, Hg) have completely filled d orbitals and so they:",
  options: [
    "(A) are very high melting solids",
    "(B) do not behave like transition metals",
    "(C) behave like superconductors",
    "(D) behave like semiconductors"
  ],
  answer: "(B) do not behave like transition metals",
  year: "2024"
},

{
  question: "Among the following outermost configurations, which shows the highest oxidation state?",
  options: [
    "(A) 3d5 4s2",
    "(B) 3d6 4s2",
    "(C) 3d3 4s2",
    "(D) 3d5 4s1"
  ],
  answer: "(A) 3d5 4s2",
  year: "2024"
},

{
  question: "The most common and stable oxidation state of lanthanoids is:",
  options: [
    "(A) +4",
    "(B) +3",
    "(C) +2",
    "(D) +6"
  ],
  answer: "(B) +3",
  year: "2024"
},

{
  question: "Which property of transition metals enables them to behave as catalysts?",
  options: [
    "(A) Variable oxidation states",
    "(B) Alloy formation",
    "(C) High ionisation enthalpy",
    "(D) High melting point"
  ],
  answer: "(A) Variable oxidation states",
  year: "2024"
},

{
  question: "In the dichromate ion (Cr2O7^2−):",
  options: [
    "(A) 4 Cr–O bonds are equivalent",
    "(B) All Cr–O bonds are non-equivalent",
    "(C) 6 Cr–O bonds are equivalent",
    "(D) All Cr–O bonds are equivalent"
  ],
  answer: "(B) All Cr–O bonds are non-equivalent",
  year: "2024"
},

// ----- Paragraph Based Short Answers -----

{
  question: "Why are Zn, Cd and Hg non-transition elements?",
  answer: "Because they have completely filled d-orbitals in both atoms and common ions (d10), hence no variable oxidation states.",
  year: "2024"
},

{
  question: "Which 3d series transition metal does not show variable oxidation states?",
  answer: "Scandium (Sc)",
  year: "2024"
},

{
  question: "Why do transition metals and their compounds show catalytic activity?",
  answer: "Due to their ability to show variable oxidation states and form intermediate complexes.",
  year: "2024"
},

{
  question: "Why are melting points of transition metals high?",
  answer: "Because of strong metallic bonding due to participation of d-electrons in bonding.",
  year: "2024"
},

{
  question: "Why is Cu2+ coloured while Zn2+ is colourless in aqueous solution?",
  answer: "Cu2+ has partially filled d-orbitals allowing d–d transitions, while Zn2+ has completely filled d-orbitals (d10).",
  year: "2024"
},

{
  question: "Out of Fe, Mn, Cr and Sc, which shows maximum oxidation states?",
  options: [
    "(A) Fe",
    "(B) Mn",
    "(C) Cr",
    "(D) Sc"
  ],
  answer: "(B) Mn",
  year: "2024"
},

{
  question: "Total number of unpaired electrons in Co3+ (Z=27) is:",
  options: [
    "(A) 7",
    "(B) 5",
    "(C) 3",
    "(D) 2"
  ],
  answer: "(C) 3",
  year: "2024"
},

{
  question: "The incorrect statement about interstitial compounds is:",
  options: [
    "(A) They retain metallic conductivity",
    "(B) They are very hard",
    "(C) They are chemically reactive",
    "(D) They have high melting point"
  ],
  answer: "(C) They are chemically reactive",
  year: "2024"
},

{
  question: "Write the formula of an oxo-anion of Mn in which Mn shows oxidation state equal to its group number.",
  answer: "MnO4− (Permanganate ion, Mn in +7 state)",
  year: "2024"
},






//////  aseartion reastion question
{
  type: "assertion-reason",
  assertion: "Actinoids show irregularities in their electronic configurations.",
  reason: "Actinoids are radioactive in nature.",
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
  assertion: "Cuprous salts are diamagnetic.",
  reason: "Cuprous ion has completely filled 3d-orbitals.",
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
  assertion: "Actinoids show wide range of oxidation states.",
  reason: "Actinoids are radioactive in nature.",
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
  assertion: "Zr and Hf are of almost similar atomic radii.",
  reason: "This is due to Lanthanoid contraction.",
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
  assertion: "Separation of Zr and Hf is difficult.",
  reason: "Zr and Hf have similar radii due to lanthanoid contraction.",
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
  assertion: "Copper is a non-transition element.",
  reason: "Copper has completely filled d-orbitals in its ground state.",
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
  assertion: "Zr and Hf have almost identical radii.",
  reason: "Both Zr and Hf exhibit similar properties.",
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
  assertion: "Zinc is not regarded as a transition element.",
  reason: "In zinc, 3d orbitals are completely filled in its ground state as well as in its oxidised state.",
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
  assertion: "Transition metals have low melting points.",
  reason: "The involvement of greater number of (n−1)d and ns electrons in the interatomic metallic bonding.",
  options: [
    "(A) Both true & correct explanation",
    "(B) Both true but incorrect explanation",
    "(C) A true R false",
    "(D) A false R true",
  ],
  year: "2026",
},





    

  ]
};