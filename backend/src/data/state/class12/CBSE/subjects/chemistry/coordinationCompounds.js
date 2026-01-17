
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
      question: "The correct IUPAC name of [Pt(NH₃)₂Cl₂]²⁺ is",
      options: ["(A) Diamminedichloridoplatinum (II)",
        "(B) Diamminedichloridoplatinum (IV)",
        "(C) Diamminedichloridoplatinum (0)",
        "(D) Diamminedichloridoplatinate (IV)"
      ],
      answer: "Diamminedichloridoplatinum (II)",
      year: "2025"
    }

    ,
    {
  type: "assertion-reason",
  assertion: "[Cr(H₂O)₆]Cl₂ and [Fe(H₂O)₆]Cl₂ are examples of homoleptic complexes.",
  reason: "All the ligands attached to the metal are the same.",
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
  question: "The correct IUPAC name of [Pt(NH3)2Cl2]2+ is:",
  options: [
    "(A) Diamminedichloridoplatinate (IV)",
    "(B) Diamminedichloridoplatinum (0)",
    "(C) Diamminedichloridoplatinum (II)",
    "(D) Diamminedichloridoplatinum (IV)"
  ],
  answer: "(C) Diamminedichloridoplatinum (II)",
  year: "2024"
},

{
  question: "The number of moles of AgCl precipitated when excess AgNO3 is mixed with one mole of [Co(NH3)3Cl3] is:",
  options: [
    "(A) 1",
    "(B) 3",
    "(C) 0",
    "(D) 2"
  ],
  answer: "(C) 0",
  year: "2024"
},

{
  question: "The complex ions [Co(NH3)5(NO2)]2+ and [Co(NH3)5(ONO)]2+ are called:",
  options: [
    "(A) Geometrical isomers",
    "(B) Coordination isomers",
    "(C) Linkage isomers",
    "(D) Ionization isomers"
  ],
  answer: "(C) Linkage isomers",
  year: "2024"
},

{
  question: "The diamagnetic species is:",
  options: [
    "(A) [CoF6]3−",
    "(B) [Ni(CN)4]2−",
    "(C) [Fe(CN)6]3−",
    "(D) [NiCl4]2−"
  ],
  answer: "(B) [Ni(CN)4]2−",
  year: "2024"
},

{
  question: "DDT is a polyhalogen compound. It is a:",
  options: [
    "(A) biodegradable insecticide",
    "(B) greenhouse gas",
    "(C) non-biodegradable insecticide",
    "(D) fertilizer"
  ],
  answer: "(C) non-biodegradable insecticide",
  year: "2024"
},

{
  question: "According to Werner's theory of coordination compounds:",
  options: [
    "(A) Both primary and secondary valences are ionisable",
    "(B) Secondary valences are ionisable",
    "(C) Both primary and secondary valences are non-ionisable",
    "(D) Primary valences are ionisable"
  ],
  answer: "(D) Primary valences are ionisable",
  year: "2024"
},

{
  question: "Which of the following complex ions is not optically active?",
  options: [
    "(A) cis-[Co(en)2Cl2]+",
    "(B) [Co(ox)3]3−",
    "(C) [Co(en)3]3+",
    "(D) trans-[Co(en)2Cl2]+"
  ],
  answer: "(D) trans-[Co(en)2Cl2]+",
  year: "2024"
},



{
  question: "The type of isomerism shown by the complex [CoCl2(en)2]+ is:",
  options: [
    "(A) Ionisation isomerism",
    "(B) Coordination isomerism",
    "(C) Linkage isomerism",
    "(D) Geometrical isomerism"
  ],
  answer: "(D) Geometrical isomerism",
  year: "2024"
},

{
  question: "Which of the following is diamagnetic in nature?",
  options: [
    "(A) Co3+, octahedral complex with weak field ligand",
    "(B) Co3+, tetrahedral complex",
    "(C) Co3+, octahedral complex with strong field ligand",
    "(D) Co3+, square planar complex"
  ],
  answer: "(C) Co3+, octahedral complex with strong field ligand",
  year: "2024"
},

{
  question: "Ligand EDTA4− is an example of:",
  options: [
    "(A) Monodentate ligand",
    "(B) Tridentate ligand",
    "(C) Polydentate ligand",
    "(D) Didentate ligand"
  ],
  answer: "(C) Polydentate ligand",
  year: "2024"
},

{
  question: "Which ligand forms chelate complex?",
  options: [
    "(A) NO2−",
    "(B) Cl−",
    "(C) C2O4^2−",
    "(D) NH3"
  ],
  answer: "(C) C2O4^2−",
  year: "2024"
},

{
  question: "The oxidation state of Fe in [Fe(CO)5] is:",
  options: [
    "(A) +2",
    "(B) 0",
    "(C) +3",
    "(D) +5"
  ],
  answer: "(B) 0",
  year: "2024"
},

{
  question: "The formula of dichloridobis(ethane-1,2-diamine) platinum(IV) nitrate is:",
  options: [
    "(A) [Pt(en)2(NO3)2]Cl2",
    "(B) [PtCl2(en)2(NO3)2]",
    "(C) [PtCl2(en)2(NO3)]NO3",
    "(D) [PtCl2(en)2](NO3)2"
  ],
  answer: "(D) [PtCl2(en)2](NO3)2",
  year: "2024"
},

{
  question: "[Co(NH3)5NO3]SO4 and [Co(NH3)5SO4]NO3 exhibit:",
  options: [
    "(A) Ionization isomerism",
    "(B) Optical isomerism",
    "(C) Coordination isomerism",
    "(D) Linkage isomerism"
  ],
  answer: "(A) Ionization isomerism",
  year: "2024"
},

{
  question: "In which of the following does the central atom exhibit oxidation state +3?",
  options: [
    "(A) K2[Ni(CN)4]",
    "(B) [Cu(NH3)4]2+",
    "(C) K4[Fe(CN)6]",
    "(D) [Fe(C2O4)3]3−"
  ],
  answer: "(D) [Fe(C2O4)3]3−",
  year: "2024"
},

{
  question: "How many ions are produced in solution from [Ni(NH3)6]Cl2 ?",
  options: [
    "(A) 3",
    "(B) 4",
    "(C) 2",
    "(D) 5"
  ],
  answer: "(A) 3",
  year: "2024"
},

{
  question: "Which of the following species is not expected to be a ligand?",
  options: [
    "(A) H2O",
    "(B) NH3",
    "(C) CO",
    "(D) NH4+"
  ],
  answer: "(D) NH4+",
  year: "2024"
},

{
  question: "Which of the following is the most stable complex species?",
  options: [
    "(A) [Fe(H2O)6]3+",
    "(B) [Fe(CN)6]3−",
    "(C) [Fe(CO)5]",
    "(D) [Fe(C2O4)3]3−"
  ],
  answer: "(B) [Fe(CN)6]3−",
  year: "2024"
},

{
  question: "[Co(SO4)(NH3)5]Br and [Co(Br)(NH3)5]SO4 represent:",
  options: [
    "(A) Linkage isomerism",
    "(B) Optical isomerism",
    "(C) Ionisation isomerism",
    "(D) Coordination isomerism"
  ],
  answer: "(C) Ionisation isomerism",
  year: "2024"
},

{
  question: "The magnetic moment of [NiCl4]2− is:",
  options: [
    "(A) 5.46 BM",
    "(B) 1.82 BM",
    "(C) 2.82 BM",
    "(D) 4.42 BM"
  ],
  answer: "(C) 2.82 BM",
  year: "2024"
},

{
  question: "The oxidation state of Ni in [Ni(CO)4] is:",
  options: [
    "(A) 3",
    "(B) 2",
    "(C) 0",
    "(D) 4"
  ],
  answer: "(C) 0",
  year: "2024"
},

{
  question: "CrCl3·6H2O gives two moles of AgCl with AgNO3. Structural formula is:",
  options: [
    "(A) [Cr(H2O)5Cl]Cl2·H2O",
    "(B) [Cr(H2O)4Cl2]Cl·2H2O",
    "(C) [Cr(H2O)3Cl3]·3H2O",
    "(D) [Cr(H2O)6]Cl3"
  ],
  answer: "(B) [Cr(H2O)4Cl2]Cl·2H2O",
  year: "2024"
},

{
  question: "How many ions are produced from [Co(NH3)5Cl]Cl2 in solution?",
  options: [
    "(A) 2",
    "(B) 3",
    "(C) 4",
    "(D) 5"
  ],
  answer: "(B) 3",
  year: "2024"
},

{
  question: "[Co(NH3)4Cl2]Br2 and [Co(NH3)4Br2]Cl2 will show:",
  options: [
    "(A) Ionization isomerism",
    "(B) Coordination isomerism",
    "(C) Linkage isomerism",
    "(D) Hydrate isomerism"
  ],
  answer: "(A) Ionization isomerism",
  year: "2024"
},

{
  question: "What type of isomerism is shown by [Co(NH3)5NO2]Cl2 ?",
  answer: "Linkage isomerism",
  year: "2024"
},

{
  question: "Difference between a complex and a double salt?",
  answer: "Complex retains identity of coordination entity in solution, while double salt dissociates completely into simple ions.",
  year: "2024"
},

{
  question: "Write formula of Ammonium tetrafluoridocobaltate(II).",
  answer: "(NH4)2[CoF4]",
  year: "2024"
},

{
  question: "What type of isomerism is shown by [Co(NH3)5Cl2]SO4 ?",
  answer: "Ionization isomerism",
  year: "2024"
},

{
  question: "Arrange in increasing order of CFSE: [Cr(CN)6]3−, [Cr(NH3)6]3+, [CrCl6]3−",
  answer: "[CrCl6]3− < [Cr(NH3)6]3+ < [Cr(CN)6]3−",
  year: "2024"
},

{
  question: "Write coordination number and oxidation state of Pt in [Pt(en)2Cl2].",
  answer: "Coordination number = 4, Oxidation state = +2",
  year: "2024"
},






// aseration and reasion question
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

{
  type: "assertion-reason",
  assertion: "[Cr(H2O)6]Cl3 and [Fe(H2O)6]Cl2 are examples of homoleptic complexes.",
  reason: "All the ligands attached to the metal are the same.",
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
  assertion: "Low spin tetrahedral complexes are rarely observed.",
  reason: "Crystal field splitting energy is less than pairing energy for tetrahedral complexes.",
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
  assertion: "Trans [CrCl2 (ox)2 ]3− shows optical isomerism.",
  reason: "Optical isomerism is common in octahedral complexes involving didentate ligands.",
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
  assertion: "Low spin tetrahedral complexes are rarely observed.",
  reason: "Crystal field splitting energy is less than pairing energy for tetrahedral complexes.",
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
  assertion: "[Pt(en)2 Cl2 ]2+ complex is less stable than [Pt(NH3 )4 Cl2 ]2+ complex.",
  reason: "[Pt(en)2 Cl2 ]2+ complex shows chelate effect.",
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
  assertion: "Linkage isomerism arises in coordination compounds because of ambidentate ligand.",
  reason: "Ambidentate ligand like NO2 has two different donor atoms i.e., N and O.",
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
  assertion: "Low spin tetrahedral complexes are rarely observed.",
  reason: "The orbital splitting energies are not sufficiently large to forcing pairing.",
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