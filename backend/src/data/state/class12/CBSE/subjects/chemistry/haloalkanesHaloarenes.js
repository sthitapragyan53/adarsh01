
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
     question: "Arrange the following compounds in increasing order of their boiling points:",
  image: "/public/images/pyqs/solution6.png",
// ✅ IMAGE PATH
  options: [
    "(A) (ii) < (i) < (iii)",
        "(B) (i) < (ii) < (iii)",
        "(C) (iii) < (i) < (ii)",
        "(D) (iii) < (ii) < (i)"
  ],
  answer: "Diamminedichloridoplatinum (II)",
  year: "2025"
},
{
      question: "Alkyl halides undergoing nucleophilic bimolecular substitution reaction involve",
      options: [
        "(A) retention of configuration",
        "(B) formation of racemic mixture",
        "(C) inversion of configuration",
        "(D) formation of carbocation"
      ],
      answer: "inversion of configuration",
      year: "2025"
    }
    ,
    {
  type: "assertion-reason",
  assertion: "The boiling points of alkyl halides decrease in the order : RI > RBr > RCl > RF.",
  reason: "The boiling points of alkyl chlorides, bromides and iodides are considerably higher than that of the hydrocarbon of comparable molecular mass.",
  options: [
    "(A) Both true & correct explanation",
    "(B) Both true but incorrect explanation",
    "(C) A true R false",
    "(D) A false R true"
  ],
  answer: "Both true & correct explanation",
  year: "2025"
},




{
  question: "Alkyl halides undergoing nucleophilic bimolecular substitution reaction involve:",
  options: [
    "(A) Retention of configuration",
    "(B) Formation of carbocation",
    "(C) Inversion of configuration",
    "(D) Formation of racemic mixture"
  ],
  answer: "(C) Inversion of configuration",
  year: "2024"
},

{
  question: "Which haloalkane reacts most rapidly with aqueous KOH by SN1 reaction?",
  options: [
    "(A) 2-Chlorobutane",
    "(B) 1-Bromobutane",
    "(C) 2-Bromo-2-methylpropane",
    "(D) 2,2-Dimethyl-1-chloropropane"
  ],
  answer: "(C) 2-Bromo-2-methylpropane",
  year: "2024"
},

{
  question: "Which of the following molecules is chiral in nature?",
  options: [
    "(A) 1-Chlorobutane",
    "(B) 2-Chloropropane",
    "(C) 1-Chloropropane",
    "(D) 2-Chlorobutane"
  ],
  answer: "(D) 2-Chlorobutane",
  year: "2024"
},

{
  question: "Treatment of ethyl bromide with alcoholic silver nitrite gives:",
  options: [
    "(A) Nitromethane",
    "(B) Ethene",
    "(C) Ethyl nitrite",
    "(D) Nitroethane"
  ],
  answer: "(D) Nitroethane",
  year: "2024"
},

{
  question: "Out of the following, the chiral molecule is:",
  options: [
    "(A) 1-Bromobutane",
    "(B) 1-Bromopropane",
    "(C) 2-Bromobutane",
    "(D) 2-Bromopropane"
  ],
  answer: "(C) 2-Bromobutane",
  year: "2024"
},

{
  question: "Ar–N2+ X−  →(CuCN/KCN)→  Ar–CN + N2 reaction is called:",
  options: [
    "(A) Carbylamine reaction",
    "(B) Sandmeyer reaction",
    "(C) Hoffmann bromamide reaction",
    "(D) Gabriel synthesis"
  ],
  answer: "(B) Sandmeyer reaction",
  year: "2024"
},

{
  question: "Auto-oxidation of chloroform in air and light produces:",
  options: [
    "(A) Mustard gas",
    "(B) Phosgene",
    "(C) Phosphine",
    "(D) Tear gas"
  ],
  answer: "(B) Phosgene",
  year: "2024"
},

{
  question: "Which alkyl halide undergoes SN1 reaction fastest?",
  options: [
    "(A) (CH3)3C–Br",
    "(B) (CH3)3C–CH2–Br",
    "(C) CH3–CH2–Br",
    "(D) (CH3)2CH–Br"
  ],
  answer: "(A) (CH3)3C–Br",
  year: "2024"
},

{
  question: "Conversion of alkyl halide into alkene by alcoholic KOH is:",
  options: [
    "(A) Dehydrohalogenation reaction",
    "(B) Dehydration reaction",
    "(C) Substitution reaction",
    "(D) Addition reaction"
  ],
  answer: "(A) Dehydrohalogenation reaction",
  year: "2024"
},

{
  question: "Racemisation occurs in:",
  options: [
    "(A) SN2 reaction",
    "(B) Neither SN1 nor SN2",
    "(C) Both SN1 and SN2",
    "(D) SN1 reaction"
  ],
  answer: "(D) SN1 reaction",
  year: "2024"
},

{
  question: "Reaction of 1-phenyl-2-chloropropane with alcoholic KOH gives mainly:",
  options: [
    "(A) 1-Phenylpropan-2-ol",
    "(B) 3-Phenylpropene",
    "(C) 1-Phenylpropene",
    "(D) 1-Phenylpropan-3-ol"
  ],
  answer: "(C) 1-Phenylpropene",
  year: "2024"
},

{
  question: "Which statement is NOT true about enantiomers?",
  options: [
    "(A) Same chemical reactivity",
    "(B) Same density",
    "(C) Same melting point",
    "(D) Same specific rotation"
  ],
  answer: "(D) Same specific rotation",
  year: "2024"
},

{
  question: "Synthesis of alkyl fluoride is best obtained by:",
  options: [
    "(A) Finkelstein reaction",
    "(B) Free radical reaction",
    "(C) Sandmeyer reaction",
    "(D) Swarts reaction"
  ],
  answer: "(D) Swarts reaction",
  year: "2024"
},

{
  question: "Which molecule has correct chiral centre marked?",
  options: [
    "(A) CH3–C*Br2–CH3",
    "(B) CH3–C*HCl–CH2Br",
    "(C) CH3–C*HBr–CH3",
    "(D) HOCH2–C*H(OH)–CH2OH"
  ],
  answer: "(B) CH3–C*HCl–CH2Br",
  year: "2024"
},

{
  question: "Conversion of alkyl halide into alcohol by aqueous NaOH is:",
  options: [
    "(A) Addition reaction",
    "(B) Dehydration reaction",
    "(C) Dehydrohalogenation",
    "(D) Substitution reaction"
  ],
  answer: "(D) Substitution reaction",
  year: "2024"
},

{
  question: "Racemisation occurs in:",
  options: [
    "(A) SN2 reaction",
    "(B) Neither SN1 nor SN2",
    "(C) Both SN1 and SN2",
    "(D) SN1 reaction"
  ],
  answer: "(D) SN1 reaction",
  year: "2024"
},

// ---- Short Answer / Conceptual ----

{
  question: "Predict stereochemistry if an optically active alkyl halide undergoes SN1 reaction.",
  answer: "Racemic mixture is formed.",
  year: "2024"
},

{
  question: "Major product when 2-bromopentane reacts with alcoholic KOH.",
  answer: "Pent-2-ene",
  year: "2024"
},

{
  question: "Out of chlorobenzene and cyclohexyl chloride, which is more reactive towards nucleophilic substitution and why?",
  answer: "Cyclohexyl chloride, because C–Cl bond in chlorobenzene has partial double bond character due to resonance.",
  year: "2024"
},

{
  question: "Why is t-butyl bromide more reactive towards SN1 than n-butyl bromide?",
  answer: "Because t-butyl carbocation is more stable than n-butyl carbocation.",
  year: "2024"
},

{
  question: "Define ambident nucleophile with example.",
  answer: "A nucleophile that can attack through two different atoms, e.g., NO2−.",
  year: "2024"
},

{
  question: "Why is chloroform kept in dark coloured bottles?",
  answer: "To prevent formation of poisonous phosgene by photo-oxidation.",
  year: "2024"
},

{
  question: "Out of chlorobenzene and benzyl chloride, which is easily hydrolysed by aqueous NaOH and why?",
  answer: "Benzyl chloride, due to resonance-stabilized carbocation.",
  year: "2024"
},

{
  question: "Write structure of 1-Bromo-4-chlorobut-2-ene.",
  answer: "Br–CH2–CH=CH–CH2–Cl",
  year: "2024"
},

{
  question: "Among isomers of pentane, which gives single monochloride on photochemical chlorination?",
  answer: "Neopentane",
  year: "2024"
},

{
  question: "Write structure of C4H9Br most reactive towards SN1.",
  answer: "(CH3)3C–Br (tert-butyl bromide)",
  year: "2024"
},


// aseartion and reason type
{
  type: "assertion-reason",
  assertion: "The boiling points of alkyl halides decrease in the order : RI > RBr > RCl > RF.",
  reason: "The boiling points of alkyl chlorides, bromides and iodides are considerably higher than that of the hydrocarbon of comparable molecular mass.",
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
  assertion: "The boiling points of alkyl halides decrease in the order RI > RBr > RCl > RF.",
  reason: "The van der Waals forces of attraction decrease in the order RI > RBr > RCl > RF.",
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
  assertion: "n-Butyl chloride has higher boiling point than n-Butyl bromide.",
  reason: "C−Cl bond is more polar than C−Br bond.",
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
  assertion: "Inversion of configuration is observed in SN2 reaction.",
  reason: "The reaction proceeds with the formation of carbocation.",
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
  assertion: "Nucleophilic substitution of iodoethane is easier than chloroethane.",
  reason: "Bond enthalpy of C−I bond is less than that of C−Cl bond.",
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
  assertion: "Nucleophilic substitution of iodoethane is easier than chloroethane.",
  reason: "Bond energy of C−Cl bond is less than C−I bond.",
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