
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
    

      type: "assertion-reason",
      assertion: "Cu cannot liberate H2 on reaction with dilute mineral acids.",
      reason: "Cu has positive electrode potential.",
      options: [
        "(A) Both true & correct explanation",
        "(B) Both true but incorrect explanation",
        "(C) A true R false",
        "(D) A false R true",
      ],
      answer: "(A)",
      year: "2023",
    },
    ,
    {
      type: "assertion-reason",
      assertion: "For measuring resistance of an ionic solution an AC source is used.",
      reason: "Concentration of ionic solution will change if DC source is used.",
      options: [
        "(A) Both true & correct explanation",
        "(B) Both true but incorrect explanation",
        "(C) A true R false",
        "(D) A false R true",
      ],
      answer: "(A)",
      year: "2023",
    },
    {
      type: "assertion-reason",
      assertion: "Electrolysis of aqueous NaCl gives H2 at cathode and Cl2 at anode.",
      reason: "Chlorine has higher oxidation potential than H2O.",
      options: [
        "(A) Both true & correct explanation",
        "(B) Both true but incorrect explanation",
        "(C) A true R false",
        "(D) A false R true",
      ],
      answer: "(C)",
      year: "2022",
    },
    {
      type: "assertion-reason",
      assertion: "For a Daniell cell, Zn/Zn2+(1M)∥Cu2+(1M)/Cu with E∘ cell = 1.1V, if the external opposing potential is more than 1.1V, the electrons flow from Cu to Zn.",
      reason: "Cell acts like a galvanic cell.",
      options: [
        "(A) Both true & correct explanation",
        "(B) Both true but incorrect explanation",
        "(C) A true R false",
        "(D) A false R true",
      ],
      answer: "(C)",
      year: "2021",
    },

    {
      type: "assertion-reason",
      assertion: "Conductivity decreases with decrease in concentration of electrolyte.",
      reason: "Number of ions per unit volume that carry the current in a solution decreases on dilution.",
      options: [
        "(A) Both true & correct explanation",
        "(B) Both true but incorrect explanation",
        "(C) A true R false",
        "(D) A false R true",
      ],
      answer: "(A)",
      year: "2023",
    },

    {
      type: "assertion-reason",
      assertion: "Λm for weak electrolytes shows a sharp decrease when the electrolytic solution is diluted.",
      reason: "For weak electrolytes, degree of dissociation increases with dilution of solution.",
      options: [
        "(A) Both true & correct explanation",
        "(B) Both true but incorrect explanation",
        "(C) A true R false",
        "(D) A false R true",
      ],
      answer: "(D)",
      year: "2022",
    },

    {
      type: "assertion-reason",
      assertion: "Electrolysis of aqueous solution of NaCl gives chlorine gas at anode instead of oxygen gas.",
      reason: "Formation of oxygen gas at anode requires overpotential.",
      options: [
        "(A) Both true & correct explanation",
        "(B) Both true but incorrect explanation",
        "(C) A true R false",
        "(D) A false R true",
      ],
      answer: "(A)",
      year: "2021",
    },


    {
      type: "assertion-reason",
      assertion: "Conductivity of an electrolyte increases with decrease in concentration.",
      reason: "Number of ions per unit volume decreases on dilution.",
      options: [
        "(A) Both true & correct explanation",
        "(B) Both true but incorrect explanation",
        "(C) A true R false",
        "(D) A false R true",
      ],
      answer: "(D)",
      year: "2022",
    },


    {
      type: "assertion-reason",
      assertion: "Conductivity of an electrolyte decreases with decrease in concentration.",
      reason: "Number of ions per unit volume increases on dilution.",
      options: [
        "(A) Both true & correct explanation",
        "(B) Both true but incorrect explanation",
        "(C) A true R false",
        "(D) A false R true",
      ],
      answer: "(C)",
      year: "2021",
    },

    

  {
    question: "Standard electrode potential for Sn⁴⁺/Sn²⁺ couple is +0.15 V and that for the Cr³⁺/Cr couple is -0.74 V. The two couples in their standard states are connected to make a cell. The cell potential will be",
    options: ["(A) +1.83 V", "(B) +0.18 V", "(C) +1.19 V", "(D) +0.89 V"],
    answer: "+0.89 V",
    year: "2025"
  },

  {
    question: "During electrolysis of dilute H₂SO₄ using platinum electrodes, the gas evolved at the anode is:",
    options: ["(A) O₂ gas", "(B) SO₃ gas", "(C) SO₂ gas", "(D) H₂ gas"],
    answer: "O₂ gas",
    year: "2025"
  },

  {
    question: "Match the type of cell in Column I with their use in Column II.",
    options: [
      "(A) i-c, ii-d, iii-b, iv-a",
      "(B) i-d, ii-c, iii-a, iv-b",
      "(C) i-b, ii-a, iii-d, iv-c",
      "(D) i-a, ii-b, iii-c, iv-d"
    ],
    answer: "i-d, ii-c, iii-a, iv-b",
    year: "2025"
  },

  {
    question: "The charge required for the reduction of 1 mol of MnO₄⁻ to MnO₂ is:",
    options: ["(A) 5F", "(B) 6F", "(C) 1F", "(D) 3F"],
    answer: "3F",
    year: "2025"
  },

  {
    question: "In an electrochemical cell, as the reaction progresses, what will happen to the overall voltage of the cell?",
    options: [
      "(A) Voltage will remain constant",
      "(B) It will increase as [Zn²⁺] increases",
      "(C) It will increase as [Cu⁺] increases",
      "(D) It will decrease as [Zn²⁺] increases"
    ],
    answer: "It will decrease as [Zn²⁺] increases",
    year: "2025"
  },

  {
    question: "What amount of electric charge is required for the reduction of 1 mole of MnO₄⁻ into Mn²⁺?",
    options: ["(A) 1F", "(B) 5F", "(C) 4F", "(D) 6F"],
    answer: "5F",
    year: "2025"
  },

  {
    question: "Which of the following cell converts the energy of combustion of fuel into electrical energy?",
    options: ["(A) Lead storage cell", "(B) Mercury cell", "(C) Dry cell", "(D) Fuel cell"],
    answer: "Fuel cell",
    year: "2025"
  },

  {
    question: "Which of the following cell was used in Apollo space programme?",
    options: ["(A) H₂–O₂ fuel cell", "(B) Ni-Cd cell", "(C) Dry cell", "(D) Mercury cell"],
    answer: "H₂–O₂ fuel cell",
    year: "2025"
  },

  {
    question: "Dilution affects both conductivity and molar conductivity. Effect of dilution is:",
    options: [
      "(A) Both decrease with dilution",
      "(B) Conductivity decreases whereas molar conductivity increases",
      "(C) Both increase with dilution",
      "(D) Conductivity increases whereas molar conductivity decreases"
    ],
    answer: "Conductivity decreases whereas molar conductivity increases",
    year: "2025"
  },

  {
    question: "During the electrolysis of aqueous NaCl, the cathodic reaction is:",
    options: [
      "(A) Oxidation of Cl⁻ ion",
      "(B) Reduction of H₂O",
      "(C) Oxidation of H₂O",
      "(D) Reduction of Na⁺ ion"
    ],
    answer: "Reduction of H₂O",
    year: "2025"
  },

  {
    question: "The molar ionic conductivities of Ca²⁺ and Cl⁻ are 119.0 and 76.3 S cm² mol⁻¹ respectively. The limiting molar conductivity of CaCl₂ is:",
    options: [
      "(A) 43.3",
      "(B) 195.3",
      "(C) 271.6",
      "(D) 314.3"
    ],
    answer: "271.6",
    year: "2025"
  },

  {
    question: "During electrolysis of aqueous solution of NaCl:",
    options: [
      "(A) H₂(g) is liberated at cathode",
      "(B) Na is formed at cathode",
      "(C) O₂(g) is liberated at anode",
      "(D) Cl₂(g) is liberated at cathode"
    ],
    answer: "H₂(g) is liberated at cathode",
    year: "2025"
  },

  {
    question: "Which solution of KCl will have the highest molar conductivity?",
    options: ["(A) 0.1 M", "(B) 0.01 M", "(C) 1 M", "(D) 0.5 M"],
    answer: "0.01 M",
    year: "2025"
  },

  {
    question: "How many Faradays are required to reduce 1 mol of MnO₄⁻ to Mn²⁺?",
    options: ["(A) 3", "(B) 6", "(C) 4", "(D) 5"],
    answer: "5",
    year: "2025"
  },

  {
    question: "Kohlrausch gave the relation for strong electrolyte: Λ = Λ₀ − A√C. Which equality holds true?",
    options: [
      "(A) Λ = Λ₀ as C → 0",
      "(B) Λ = Λ₀ as C → ∞",
      "(C) Λ = Λ₀ as C → 1",
      "(D) Λ = Λ₀ as C → A"
    ],
    answer: "Λ = Λ₀ as C → 0",
    year: "2025"
  },

  {
    question: "The correct cell representation for reaction Zn + 2Ag⁺ → Zn²⁺ + 2Ag is:",
    options: [
      "(A) Zn | Zn²⁺ ∥ Ag⁺ | Ag",
      "(B) 2Ag | Ag⁺ ∥ Zn | Zn²⁺",
      "(C) Ag⁺ | Ag ∥ Zn²⁺ | Zn",
      "(D) Ag | Ag⁺ ∥ Zn | Zn²⁺"
    ],
    answer: "Zn | Zn²⁺ ∥ Ag⁺ | Ag",
    year: "2025"
  },

  {
    question: "ΔG and E°cell for a spontaneous reaction will be:",
    options: [
      "(A) Negative, Positive",
      "(B) Negative, Negative",
      "(C) Positive, Negative",
      "(D) Positive, Positive"
    ],
    answer: "Negative, Positive",
    year: "2025"
  },

  {
    question: "A voltaic cell is made by connecting Sn²⁺/Sn and Fe³⁺/Fe²⁺ half cells. Which statement is correct?",
    options: [
      "(A) Sn is oxidised and voltage is 0.91 V",
      "(B) Fe²⁺ is oxidised and voltage is 0.91 V",
      "(C) Sn is oxidised and voltage is 0.63 V",
      "(D) Fe²⁺ is oxidised and voltage is −0.91 V"
    ],
    answer: "Sn is oxidised and voltage is 0.63 V",
    year: "2025"
  },

  {
    question: "Which two reactions are most likely when concentrated brine is electrolysed?",
    options: [
      "(A) II and III",
      "(B) I and III",
      "(C) II and IV",
      "(D) I and IV"
    ],
    answer: "I and IV",
    year: "2025"
  },

  {
    question: "Which cell was used in Apollo space programme?",
    options: ["(A) H₂–O₂ fuel cell", "(B) Dry cell", "(C) Daniel cell", "(D) Mercury cell"],
    answer: "H₂–O₂ fuel cell",
    year: "2025"
  },

  {
    question: "In a lead storage battery:",
    options: [
      "(A) Pb is oxidised to PbSO₄ at anode",
      "(B) Both electrodes are immersed in H₂SO₄",
      "(C) All the above are true",
      "(D) PbO₂ is reduced to PbSO₄ at cathode"
    ],
    answer: "All the above are true",
    year: "2025"
  },

  {
    question: "If the standard electrode potential of an electrode is greater than zero, then:",
    options: [
      "(A) Reduced form is more stable than hydrogen gas",
      "(B) Reduced form is less stable than hydrogen gas",
      "(C) Oxidised form is more stable than hydrogen gas",
      "(D) Reduced and oxidised forms are equally stable"
    ],
    answer: "Reduced form is more stable than hydrogen gas",
    year: "2025"
  },],


  theoryQuestions: [

  {
    marks: 2,
    question: "Define fuel cell. Give two advantages of fuel cell over ordinary cell.",
    answer: "........",
    year: "2025"
  },

  {
    marks: 2,
    question: "State Kohlrausch's law of independent migration of ions.",
    answer: "........",
    year: "2025"
  },

  {
    marks: 2,
    question: "State Faraday's first law of electrolysis.",
    answer: "........",
    year: "2025"
  },

  {
    marks: 2,
    question: "Resistance of a conductivity cell filled with 0.2 M KCl solution is 200 Ω. If the resistance of the same cell when filled with 0.05 M KCl solution is 620 Ω, calculate the conductivity and molar conductivity of 0.05 M KCl solution. (Conductivity of 0.2 M KCl solution = 0.0248 S cm⁻¹).",
    answer: "........",
    year: "2024"
  },

  {
    marks: 2,
    question: "Calculate the potential of iron electrode when concentration of Fe²⁺ ions is 0.01 M. (E° Fe²⁺/Fe = −0.45 V at 298 K).",
    answer: "........",
    year: "2024"
  },

  {
    marks: 2,
    question: "Give reason: Mercury cell delivers constant potential during its lifetime.",
    answer: "........",
    year: "2023"
  },

  {
    marks: 2,
    question: "Give reason: In determination of electrolytic conductance, DC is not used.",
    answer: "........",
    year: "2023"
  },

  {
    marks: 2,
    question: "Define fuel cell with an example. What advantages do fuel cells have over primary and secondary batteries?",
    answer: "........",
    year: "2023"
  },

  {
    marks: 2,
    question: "Name the cell used in Apollo Space Programme.",
    answer: "........",
    year: "2023"
  },

  {
    marks: 2,
    question: "Name the cell used in automobiles and inverters.",
    answer: "........",
    year: "2023"
  },

  {
    marks: 2,
    question: "Name the cell suitable for hearing aids and watches.",
    answer: "........",
    year: "2023"
  },

  {
    marks: 2,
    question: "Name the cell that does not give steady potential and is used in transistors.",
    answer: "........",
    year: "2023"
  },

  {
    marks: 2,
    question: "On diluting electrolytes A and B, molar conductivity of A increases 25 times while that of B increases 1.5 times. Which is strong electrolyte? Justify graphically.",
    answer: "........",
    year: "2023"
  },

  {
    marks: 2,
    question: "For a spontaneous redox reaction under standard conditions, state the sign of (i) E°cell and (ii) ΔG°.",
    answer: "........",
    year: "2025"
  },

  {
    marks: 2,
    question: "In a plot of molar conductivity vs √C for strong and weak electrolytes, limiting molar conductivity of weak electrolyte cannot be obtained graphically. Suggest a method to obtain it and state the related law.",
    answer: "........",
    year: "2022"
  },

  {
    marks: 2,
    question: "State Kohlrausch's law of independent migration of ions.",
    answer: "........",
    year: "2022"
  },

  {
    marks: 2,
    question: "Calculate degree of dissociation (α) of CH₃COOH if Λm = 48 S cm² mol⁻¹ and Λm° = 400 S cm² mol⁻¹.",
    answer: "........",
    year: "2022"
  },

  {
    marks: 2,
    question: "Why does molar conductivity of CH₃COOH increase sharply on dilution while that of CH₃COONa increases slowly?",
    answer: "........",
    year: "2022"
  },

  {
    marks: 2,
    question: "What happens if external potential applied becomes greater than E°cell of an electrochemical cell?",
    answer: "........",
    year: "2022"
  },

  {
    marks: 2,
    question: "Write the Nernst equation for cell reaction: Zn(s)+Cu²⁺(aq) → Zn²⁺(aq)+Cu(s). How is Ecell affected when (i) Cu²⁺ increases (ii) Zn²⁺ increases?",
    answer: "........",
    year: "2022"
  },

  {
    marks: 2,
    question: "For cell Mg(s)+Ag⁺(aq) → Ag(s)+Mg²⁺(aq), give cell representation and write Nernst equation at 25°C.",
    answer: "........",
    year: "2020"
  },

  {
    marks: 2,
    question: "Explain with graph the variation of molar conductivity of a strong electrolyte with dilution.",
    answer: "........",
    year: "2019"
  },

  {
    marks: 2,
    question: "Write anode and cathode reactions in a dry cell. How does dry cell differ from mercury cell?",
    answer: "........",
    year: "2019"
  },

  {
    marks: 2,
    question: "Name the cell used in hearing aids. Write anode and cathode reactions occurring in this cell.",
    answer: "........",
    year: "2017"
  },

  {
    marks: 2,
    question: "Calculate degree of dissociation (α) of acetic acid if Λm = 39.05 S cm² mol⁻¹. Given λ°(H⁺)=349.6 and λ°(CH₃COO⁻)=40.9 S cm² mol⁻¹.",
    answer: "........",
    year: "2017"
  },

  {
    marks: 2,
    question: "In galvanic cell Zn(s)+2Ag⁺(aq) → Zn²⁺(aq)+2Ag(s), E°cell = +1.56 V. (a) Direction of electron flow? (b) How will concentration of Zn²⁺ and Ag⁺ change when cell operates?",
    answer: "........",
    year: "2017"
  },

  {
    marks: 2,
    question: "From Lead storage cell, Mercury cell, Fuel cell and Dry cell answer: (i) Which is used in hearing aids? (ii) Which was used in Apollo Space Programme? (iii) Which is used in automobiles and inverters? (iv) Which does not have long life?",
    answer: "........",
    year: "2016"
  },

 //// 3 mark

  {
    marks: 3,
    question: "Write the name of the cell generally used in inverters. Write the reactions at anode and cathode of this cell when in use.",
    answer: "........",
    year: "2025"
  },

  {
    marks: 3,
    question: "The electrical resistance of a column of 0.05 M NaOH solution of area 0.8 cm² and length 40 cm is 5×10³ Ω. Calculate resistivity, conductivity and molar conductivity.",
    answer: "........",
    year: "2025"
  },
  {
    marks: 3,
    question: "Explain why electrolysis of an aqueous solution of NaCl gives H2 gas at cathod and Cl2 gas at anode ? Write overall reaction",
    answer: "........",
    year: "2025"
  },


  {
    marks: 3,
    question: "Calculate the cell voltage at 25°C for Al/Al³⁺ (0.001 M) and Ni/Ni²⁺ (0.1 M). Given E°Ni²⁺/Ni = −0.25 V, E°Al³⁺/Al = −1.66 V.",
    answer: "........",
    year: "2025"
  },

  {
    marks: 3,
    question: "Give reason: (a) pH of aqueous NaCl increases on electrolysis. (b) Mercury cell has constant potential throughout life. (c) Conductivity of solution decreases with dilution.",
    answer: "........",
    year: "2025"
  },

  {
    marks: 3,
    question: "Calculate emf of the cell: Ni(s)+2Ag⁺(0.01M) → Ni²⁺(0.1M)+2Ag(s). Given E°cell = 1.05 V.",
    answer: "........",
    year: "2024"
  },

  {
    marks: 3,
    question: "A conductivity cell filled with 0.05 M KCl has resistance 100 Ω. With 0.02 M AgNO₃ resistance is 90 Ω. Calculate conductivity and molar conductivity of AgNO₃. Given conductivity of 0.05 M KCl = 1.35×10⁻² Ω⁻¹cm⁻¹.",
    answer: "........",
    year: "2024"
  },

  {
    marks: 3,
    question: "Calculate emf of the cell: Sn/Sn²⁺(0.001M) ∥ H⁺(0.01M)|H₂(1 bar)|Pt. Given E°Sn²⁺/Sn = −0.14V, E°H⁺/H₂ = 0.00V.",
    answer: "........",
    year: "2025"
  },

  {
    marks: 3,
    question: "Calculate emf of the cell: Zn(s)|Zn²⁺(0.1M)||Sn²⁺(0.001M)|Sn(s). Given E°Zn²⁺/Zn = −0.76V, E°Sn²⁺/Sn = −0.14V.",
    answer: "........",
    year: "2024"
  },

  {
    marks: 3,
    question: "Write Nernst equation and calculate emf at 298K for: Cr|Cr³⁺(0.1M)||Fe²⁺(0.01M)|Fe. Given E°Cr³⁺/Cr = −0.75V, E°Fe²⁺/Fe = −0.45V.",
    answer: "........",
    year: "2024"
  },

  {
    marks: 3,
    question: "Calculate emf of the cell: Zn(s)|Zn²⁺(0.01M)||Ag⁺(0.001M)|Ag(s). Given E°Zn²⁺/Zn = −0.76V, E°Ag⁺/Ag = +0.80V.",
    answer: "........",
    year: "2022"
  },

  {
    marks: 3,
    question: "Calculate emf at 298K: Fe(s)|Fe²⁺(0.001M)||H⁺(0.01M)|H₂(1 bar)|Pt. Given E°cell = +0.44V.",
    answer: "........",
    year: "2022"
  },

  {
    marks: 3,
    question: "For reaction Zn(s)+2Ag⁺→Zn²⁺+2Ag, ΔrG° = −300 kJ mol⁻¹. Calculate E°cell. (1F = 96500 C mol⁻¹)",
    answer: "........",
    year: "2025"
  },

  {
    marks: 3,
    question: "Calculate Λ°m for MgCl₂ if λ°(Mg²⁺)=106 and λ°(Cl⁻)=76.3 S cm² mol⁻¹.",
    answer: "........",
    year: "2025"
  },

  {
    marks: 3,
    question: "Two electrolytic cells ZnSO₄ and CuSO₄ in series carry 2A current. 2g Cu deposited. Find time and mass of Zn deposited. (Cu=63.5, Zn=65, 1F=96500C)",
    answer: "........",
    year: "2025"
  },

  {
    marks: 3,
    question: "Conductivity of 2×10⁻³ M methanoic acid is 8×10⁻⁵ S cm⁻¹. Calculate molar conductivity and degree of dissociation. Given Λ°m = 404 S cm² mol⁻¹.",
    answer: "........",
    year: "2020"
  },

  {
    marks: 3,
    question: "Chromium electroplating: CrO₃ + 6H⁺ +6e⁻ → Cr + 3H₂O. Calculate mass of Cr deposited by 24000 C and time to deposit 1.5g Cr using 12.5A. (Cr=52, 1F=96500C)",
    answer: "........",
    year: "2019"
  },

  {
    marks: 3,
    question: "For cell reaction 2Fe³⁺ +2I⁻ →2Fe²⁺ + I₂, E°cell=0.236V. Calculate ΔG°. (1F=96500C)",
    answer: "........",
    year: "2017"
  },

  {
    marks: 3,
    question: "How many electrons flow if current 0.5A passes for 2 hours? (1F=96500C)",
    answer: "........",
    year: "2017"
  },

  {
    marks: 3,
    question: "Calculate mass of Ag deposited when 2A current passes through AgNO₃ for 15 minutes. (Ag=108, 1F=96500C)",
    answer: "........",
    year: "2017"
  },

  {
    marks: 3,
    question: "Define fuel cell.",
    answer: "........",
    year: "2017"
  },

  {
    marks: 3,
    question: "Resistance of 0.05 M KOH column (diameter 1 cm, length 45.5 cm) is 4.55×10³ Ω. Calculate molar conductivity.",
    answer: "........",
    year: "2017"
  },

  ///// 5 marks

  {
    marks: 5,
    question: "Write the anode reaction, cathode reaction and overall cell reaction occurring in a lead storage battery during its use.",
    answer: "........",
    year: "2025"
  },

  {
    marks: 5,
    question: "Calculate the potential for the half-cell containing 0.01 M K₂Cr₂O₇, 0.01 M Cr³⁺ and 1.0×10⁻⁴ M H⁺. Half-cell reaction: Cr₂O₇²⁻ +14H⁺+6e⁻ →2Cr³⁺+7H₂O. Given E° =1.33V.",
    answer: "........",
    year: "2025"
  },

  {
    marks: 5,
    question: "(i) State Kohlrausch's law. Give any two applications of it.",
    answer: "........",
    year: "2025"
  },

  {
    marks: 5,
    question: "(ii) Λ°m(NH₄Cl)=129.8, Λ°m(NaOH)=217.4 and Λ°m(NaCl)=108.9 S cm² mol⁻¹. Molar conductivity of 1×10⁻² M NH₄OH is 9.33 S cm² mol⁻¹. Calculate degree of dissociation of NH₄OH.",
    answer: "........",
    year: "2025"
  },

  {
    marks: 5,
    question: "(i) Resistance of conductivity cell containing 0.001 M KCl at 298 K is 1000 Ω. Conductivity =0.125×10⁻³ S cm⁻¹. Calculate cell constant.",
    answer: "........",
    year: "2025"
  },

  {
    marks: 5,
    question: "(ii) Calculate Mg²⁺/Mg electrode potential for Mg/Mg²⁺ (1×10⁻⁴ M) at 25°C. Given E°Mg²⁺/Mg = +2.36V.",
    answer: "........",
    year: "2025"
  },

  {
    marks: 5,
    question: "(iii) What is the effect of temperature on electrical conductance of metallic conductors?",
    answer: "........",
    year: "2025"
  },

  {
    marks: 5,
    question: "(i) Calculate emf of cell at 25°C: Zn|Zn²⁺(0.001M)||Cd²⁺(0.1M)|Cd. Given E°Zn²⁺/Zn = −0.76V, E°Cd²⁺/Cd = −0.40V.",
    answer: "........",
    year: "2024"
  },

  {
    marks: 5,
    question: "(ii) State Faraday's second law of electrolysis. How will pH of aqueous NaCl change on electrolysis?",
    answer: "........",
    year: "2024"
  },

  {
    marks: 5,
    question: "(i) Resistance of 0.05 M CH₃COOH solution is 100 Ω. Cell constant =0.0354 cm⁻¹. Calculate molar conductivity.",
    answer: "........",
    year: "2024"
  },

  {
    marks: 5,
    question: "(ii) State Faraday's first law. How many Faradays required to reduce 1 mol MnO₄⁻ to Mn²⁺?",
    answer: "........",
    year: "2024"
  },

  {
    marks: 5,
    question: "(i) Conductivity of 0.0025 M acetic acid =5.25×10⁻⁵ S cm⁻¹. Calculate degree of dissociation. Given Λ°m=390 S cm² mol⁻¹.",
    answer: "........",
    year: "2024"
  },

  {
    marks: 5,
    question: "(ii) Write anode, cathode and overall reactions of lead storage battery.",
    answer: "........",
    year: "2024"
  },

  {
    marks: 5,
    question: "(a) Conductivity of 2×10⁻³ M methanoic acid =8×10⁻⁵ S cm⁻¹. Calculate molar conductivity and degree of dissociation. Λ°m=404 S cm² mol⁻¹.",
    answer: "........",
    year: "2023"
  },

  {
    marks: 5,
    question: "(b) Calculate ΔrG° and log Kc for reaction Ni +2Ag⁺ ⇌Ni²⁺+2Ag. Given E°Ni²⁺/Ni=−0.25V, E°Ag⁺/Ag=+0.80V.",
    answer: "........",
    year: "2023"
  },

  {
    marks: 5,
    question: "(i) Molar conductivities of NH₄⁺ and Cl⁻ are 73.8 and 76.2 S cm² mol⁻¹. Conductivity of 0.1M NH₄Cl =1.29×10⁻² S cm⁻¹. Calculate molar conductivity and degree of dissociation.",
    answer: "........",
    year: "2023"
  },

  {
    marks: 5,
    question: "(ii) Calculate half-cell potential for Zn²⁺/Zn at 298K if [Zn²⁺]=0.1M and E°Zn²⁺/Zn=−0.76V.",
    answer: "........",
    year: "2023"
  },

  {
    marks: 5,
    question: "(a) Predict which allows greater conduction with reason: (i) Silver wire at 30°C or 60°C (ii) 0.1M CH₃COOH or 1M CH₃COOH (iii) KCl at 20°C or 50°C.",
    answer: "........",
    year: "2020"
  },

  {
    marks: 5,
    question: "(b) Give two differences between electrochemical and electrolytic cells.",
    answer: "........",
    year: "2020"
  },

  {
    marks: 5,
    question: "(a) Calculate emf: Zn|Zn²⁺(0.1M)||Ag⁺(0.01M)|Ag. Given E°Zn²⁺/Zn=−0.76V, E°Ag⁺/Ag=+0.80V.",
    answer: "........",
    year: "2020"
  },

  {
    marks: 5,
    question: "(b) X and Y are electrolytes. On dilution Λm of X increases 2.5 times, Λm of Y increases 25 times. Which is weak electrolyte and why?",
    answer: "........",
    year: "2020"
  },

  {
    marks: 5,
    question: "(a) Conductivity of 0.001M acetic acid =4.95×10⁻⁵ S cm⁻¹. Calculate dissociation constant. Λ°m=390.5 S cm² mol⁻¹.",
    answer: "........",
    year: "2019"
  },

  {
    marks: 5,
    question: "(b) Write Nernst equation for: 2Al +3Cu²⁺ →2Al³⁺ +3Cu at 25°C.",
    answer: "........",
    year: "2019"
  },

  {
    marks: 5,
    question: "(c) What are secondary batteries? Give an example.",
    answer: "........",
    year: "2019"
  },

  {
    marks: 5,
    question: "(a) Represent the cell for reaction: 2Al +3Ni²⁺ →2Al³⁺ +3Ni. If E°cell=1.41V, calculate emf.",
    answer: "........",
    year: "2019"
  },

  {
    marks: 5,
    question: "(b) For Mg +Cu²⁺ →Mg²⁺ +Cu, E°cell=2.71V. Calculate Ecell for given concentrations. Also state direction of current when external opposing potential is (i) less than 2.71V (ii) greater than 2.71V.",
    answer: "........",
    year: "2019"
  },

  {
    marks: 5,
    question: "(c) How does molar conductivity vary with concentration for strong and weak electrolytes? How is Λ°m of weak electrolyte obtained?",
    answer: "........",
    year: "2019"
  }







],


















    
    
  
};