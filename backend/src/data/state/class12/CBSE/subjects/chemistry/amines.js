
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
      question: "The best reagent for converting propanamide into propanamine is ________.",
      options: ["(A) excess H₂",
        "(B) Br₂ in aqueous NaOH",
        "(C) iodine in the presence of red phosphorus",
        "(D) LiAlH₄ in ether"],
      answer: "(D) LiAlH₄ in ether",
      year: "2025"
    }
    ,

    
    {
      type: "descriptive",
      marks: "2",
      year: "2025",
      questionParts: [
        {
          label: "(a)",
          question: "(a) CH₃CH₂Cl —NaCN→ A —H₂/Ni→ B",
          answer: ".....",
        },
      ],
      OR: {
        question: "(b) C₆H₅NH₂ —NaNO₂/HCl (0-5°C)→ A —C₆H₅NH₂/H⁺→ B",
        answer: "......",
      },
    },

  

{
  question: "When alkyl iodide is treated with large excess of ammonia, the major product obtained is:",
  options: [
    "(A) Tertiary amine",
    "(B) Secondary amine",
    "(C) Quaternary ammonium salt",
    "(D) Primary amine"
  ],
  answer: "(D) Primary amine",
  year: "2024"
},

{
  question: "The IUPAC name for CH3–CH2–N(CH3)–CH2–CH2–CH3 is:",
  options: [
    "(A) N-methylpentan-2-amine",
    "(B) N,N-dimethylpropan-1-amine",
    "(C) N-ethyl-N-methylpropan-1-amine",
    "(D) N,N-diethylpropan-1-amine"
  ],
  answer: "(C) N-ethyl-N-methylpropan-1-amine",
  year: "2024"
},

{
  question: "Hoffmann bromamide degradation reaction is given by:",
  options: [
    "(A) ArCONH2",
    "(B) ArNO2",
    "(C) ArNH2",
    "(D) ArCH2NH2"
  ],
  answer: "(C) ArNH2",
  year: "2024"
},

{
  question: "Which compound on treatment with benzene sulphonyl chloride forms an alkali-soluble precipitate?",
  options: [
    "(A) CH3CH2NH2",
    "(B) CH3CONH2",
    "(C) (CH3)2NH",
    "(D) (CH3)3N"
  ],
  answer: "(A) CH3CH2NH2",
  year: "2024"
},

{
  question: "The order of increasing basicities of CH3NH2 (I), (CH3)2NH (II), (CH3)3N (III) and C6H5NH2 (IV) in aqueous medium is:",
  options: [
    "(A) IV < III < I < II",
    "(B) II < III < I < IV",
    "(C) II < I < IV < III",
    "(D) I < II < III < IV"
  ],
  answer: "(A) IV < III < I < II",
  year: "2024"
},

{
  question: "Reduction of ethanenitrile with sodium and alcohol gives:",
  options: [
    "(A) 1-aminopropane",
    "(B) 1-aminoethane",
    "(C) Ethanoic acid",
    "(D) Ethanamide"
  ],
  answer: "(B) 1-aminoethane",
  year: "2024"
},

{
  question: "CH3CONH2 on reaction with NaOH and Br2 in alcoholic medium gives:",
  options: [
    "(A) CH3CH2Br",
    "(B) CH3CH2NH2",
    "(C) CH3COONa",
    "(D) CH3NH2"
  ],
  answer: "(D) CH3NH2",
  year: "2024"
},

{
  question: "Which of the following is NOT a good reducing agent for converting nitrobenzene to aniline?",
  options: [
    "(A) Fe/HCl",
    "(B) H2/Ni",
    "(C) Sn/HCl",
    "(D) LiAlH4"
  ],
  answer: "(D) LiAlH4",
  year: "2024"
},

{
  question: "Name the instrument used to measure the angle by which plane polarised light is rotated.",
  answer: "Polarimeter",
  year: "2024"
},

{
  question: "Out of the following, the strongest base in aqueous solution is:",
  options: [
    "(A) Methylamine",
    "(B) Trimethylamine",
    "(C) Aniline",
    "(D) Dimethylamine"
  ],
  answer: "(A) Methylamine",
  year: "2024"
},

{
  question: "Write an isomer of C3H9N which gives foul smell of isocyanide on treatment with chloroform and ethanolic NaOH.",
  answer: "Propan-2-amine (isopropylamine)",
  year: "2024"
},

{
  question: "Arrange the following in decreasing order of basic character: C6H5NH2, (CH3)3N, C2H5NH2",
  answer: "C2H5NH2 > (CH3)3N > C6H5NH2",
  year: "2024"
},

{
  question: "Write the reaction involved in Hoffmann bromamide degradation.",
  answer: "RCONH2 + Br2 + 4NaOH → RNH2 + Na2CO3 + 2NaBr + 2H2O",
  year: "2024"
},

{
  question: "Propanamine has higher boiling point than N,N-dimethylmethanamine though both have same number of carbon atoms. Why?",
  answer: "Propanamine forms intermolecular hydrogen bonding, whereas N,N-dimethylmethanamine does not.",
  year: "2024"
},


//// aseartion reason question  
{
  type: "assertion-reason",
  assertion: "Aromatic primary amines cannot be prepared by Gabriel Phthalimide synthesis.",
  reason: "Aryl halides do not undergo nucleophilic substitution reaction with the anion formed by phthalimide.",
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
  assertion: "Acetanilide is less basic than aniline.",
  reason: "Acetylation of aniline results in decrease of electron density on nitrogen.",
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
  assertion: "Boiling point of (CH3)3N is higher than that of CH3CH2CH2NH2.",
  reason: "Hydrogen bonding is more extensive in CH3CH2CH2NH2.",
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
  assertion: "Aniline is a stronger base than ammonia.",
  reason: "The unshared electron pair on nitrogen atom in aniline becomes less available for protonation due to resonance.",
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
  assertion: "Aniline does not undergo Friedel-Crafts reaction.",
  reason: "Friedel-Crafts reaction is an electrophilic substitution reaction.",
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
  assertion: "Aliphatic primary amines can be prepared by Gabriel phthalimide synthesis.",
  reason: "Alkyl halides undergo nucleophilic substitution with anion formed by phthalimide.",
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
  assertion: "p-nitroaniline is a weaker base than p-toluidine.",
  reason: "The electron withdrawing effect of −NO2 group in p-nitroaniline makes it a weaker base.",
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
  assertion: "Monobromination of aniline can be conveniently done by protecting the amino group by acetylation.",
  reason: "Acetylation decreases the activating effect of the amino group.",
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
  assertion: "−NH2 group is o- and p-directing in electrophilic substitution reactions.",
  reason: "Aniline cannot undergo Friedel-Crafts reaction.",
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
  assertion: "Acetylation of aniline gives a monosubstituted product.",
  reason: "Activating effect of −NHCOCH3 group is more than that of amino group.",
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