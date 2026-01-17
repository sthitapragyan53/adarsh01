
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
      question: "Which is the correct order of acid strength from the following ?",
     options: [
        "(A) C₆H₅OH > H₂O > ROH",
        "(B) C₆H₅OH > ROH > H₂O",
        "(C) ROH > C₆H₅OH > H₂O",
        "(D) H₂O > C₆H₅OH > ROH"
      ],
      answer: "C₆H₅OH > H₂O > ROH",
      year: "2021"
     
    }
    ,
    {
  type: "assertion-reason",
  assertion: "The boiling point of ethanol is higher than that of methoxymethane.",
  reason: "There is intramolecular hydrogen bonding in ethanol.",
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
  question: "Which is the correct order of acid strength?",
  options: [
    "(A) C6H5OH > H2O > ROH",
    "(B) C6H5OH > ROH > H2O",
    "(C) ROH > C6H5OH > H2O",
    "(D) H2O > C6H5OH > ROH"
  ],
  answer: "(A) C6H5OH > H2O > ROH",
  year: "2024"
},

{
  question: "R–OH + Na → RO−Na+ + 1/2 H2 suggests that alcohols are:",
  options: [
    "(A) Amphoteric",
    "(B) Basic",
    "(C) Acidic",
    "(D) Neutral"
  ],
  answer: "(C) Acidic",
  year: "2024"
},

{
  question: "At low temperature, phenol reacts with Br2 in CS2 to form:",
  options: [
    "(A) p-bromophenol",
    "(B) 2,4,6-tribromophenol",
    "(C) o- and p-bromophenol",
    "(D) 2,4-dibromophenol"
  ],
  answer: "(C) o- and p-bromophenol",
  year: "2024"
},

{
  question: "CH3CH2OH can be converted to CH3CHO by:",
  options: [
    "(A) KMnO4",
    "(B) LiAlH4",
    "(C) Catalytic hydrogenation",
    "(D) PCC"
  ],
  answer: "(D) PCC",
  year: "2024"
},

{
  question: "Oxidation of secondary alcohol with CrO3 gives:",
  options: [
    "(A) Ketone",
    "(B) Aldehyde",
    "(C) Carboxylic acid",
    "(D) Ester"
  ],
  answer: "(A) Ketone",
  year: "2024"
},

{
  question: "Conversion of phenol to salicylic acid is accomplished by:",
  options: [
    "(A) Kolbe reaction",
    "(B) Coupling reaction",
    "(C) Reimer-Tiemann reaction",
    "(D) Friedel-Crafts reaction"
  ],
  answer: "(A) Kolbe reaction",
  year: "2024"
},

{
  question: "Alkenes are formed by heating alcohols with conc. H2SO4. The first step is:",
  options: [
    "(A) Formation of carbocation",
    "(B) Formation of ester",
    "(C) Elimination of water",
    "(D) Protonation of alcohol"
  ],
  answer: "(D) Protonation of alcohol",
  year: "2024"
},

{
  question: "Williamson synthesis for unsymmetrical ether is a:",
  options: [
    "(A) Electrophilic addition reaction",
    "(B) SN1 reaction",
    "(C) Elimination reaction",
    "(D) SN2 reaction"
  ],
  answer: "(D) SN2 reaction",
  year: "2024"
},

{
  question: "Which alkene produces tert-butyl alcohol on acid catalysed hydration?",
  options: [
    "(A) (CH3)2C=CH2",
    "(B) CH3−CH=CH−CH3",
    "(C) CH3CH2CH=CH2",
    "(D) CH3CH=CH2"
  ],
  answer: "(A) (CH3)2C=CH2",
  year: "2024"
},

{
  question: "Reaction of alkyl halide with sodium alkoxide forming ether is known as:",
  options: [
    "(A) Kolbe reaction",
    "(B) Reimer-Tiemann reaction",
    "(C) Williamson synthesis",
    "(D) Wurtz reaction"
  ],
  answer: "(C) Williamson synthesis",
  year: "2024"
},

{
  question: "Correct order of ease of dehydration of alcohols by conc. H2SO4 is:",
  options: [
    "(A) (CH3)2CH–OH > CH3CH2OH > (CH3)3C–OH",
    "(B) (CH3)2CH–OH > (CH3)3C–OH > CH3CH2OH",
    "(C) (CH3)3C–OH > (CH3)2CH–OH > CH3CH2OH",
    "(D) CH3CH2OH > (CH3)2CH–OH > (CH3)3C–OH"
  ],
  answer: "(C) (CH3)3C–OH > (CH3)2CH–OH > CH3CH2OH",
  year: "2024"
},

{
  question: "Which compound has the lowest pKa value?",
  options: [
    "(A) m-Nitrophenol",
    "(B) p-Cresol",
    "(C) p-Nitrophenol",
    "(D) 2,4,6-Trinitrophenol"
  ],
  answer: "(D) 2,4,6-Trinitrophenol",
  year: "2024"
},

{
  question: "(CH3)2CH–O–CH3 on treatment with HI gives:",
  options: [
    "(A) (CH3)2CH–I + CH3OH",
    "(B) (CH3)2CH–I + CH3I",
    "(C) (CH3)2CH–OH + CH3OH",
    "(D) (CH3)2CH–OH + CH3I"
  ],
  answer: "(A) (CH3)2CH–I + CH3OH",
  year: "2024"
},

{
  question: "Grignard reagent addition to ketone followed by hydrolysis gives:",
  options: [
    "(A) Tertiary alcohol",
    "(B) Alkene",
    "(C) Secondary alcohol",
    "(D) Primary alcohol"
  ],
  answer: "(A) Tertiary alcohol",
  year: "2024"
},

{
  question: "Match the reactions with reagents:\nI. Oxidation of primary alcohol to aldehyde\nII. Butan-2-one → Butan-2-ol\nIII. Bromination of phenol → 2,4,6-tribromophenol\nIV. Dehydration of propan-2-ol → propene",
  options: [
    "(A) I–(q), II–(r), III–(p), IV–(s)",
    "(B) I–(s), II–(q), III–(p), IV–(r)",
    "(C) I–(r), II–(p), III–(s), IV–(q)",
    "(D) I–(p), II–(s), III–(r), IV–(q)"
  ],
  answer: "(C) I–(r), II–(p), III–(s), IV–(q)",
  year: "2024"
},

{
  question: "Ethanol on heating with conc. H2SO4 at 413 K gives:",
  options: [
    "(A) CH2=CH2",
    "(B) C2H5–O–CH3",
    "(C) C2H5OSO3H",
    "(D) C2H5–O–C2H5"
  ],
  answer: "(D) C2H5–O–C2H5",
  year: "2024"
},



{
  question: "Which of the following reactions are feasible?",
  options: [
    "(A) (CH3)3C–Cl + NaOCH2CH3 → CH3CH2–O–C(CH3)3",
    "(B) Neither (a) nor (b)",
    "(C) Both (a) and (b)",
    "(D) CH3CH2Br + NaOC(CH3)3 → CH3CH2–O–C(CH3)3"
  ],
  answer: "(D) CH3CH2Br + NaOC(CH3)3 → CH3CH2–O–C(CH3)3",
  year: "2024"
},

{
  question: "When diethyl ether is heated with excess HI, it produces:",
  options: [
    "(A) Methyl iodide",
    "(B) Ethyl iodide",
    "(C) Iodoform",
    "(D) Ethanol"
  ],
  answer: "(B) Ethyl iodide",
  year: "2024"
},

{
  question: "Aspirin is obtained by acetylation of:",
  options: [
    "(A) Phenol",
    "(B) Salicylic acid",
    "(C) Salicylaldehyde",
    "(D) Acetyl salicylic acid"
  ],
  answer: "(B) Salicylic acid",
  year: "2024"
},

{
  question: "In reaction R–OH + HCl/ZnCl2 → RCl + H2O, correct order of reactivity of alcohol is:",
  options: [
    "(A) 1° > 3° > 2°",
    "(B) 1° < 2° < 3°",
    "(C) 3° > 1° > 2°",
    "(D) 1° > 2° > 3°"
  ],
  answer: "(B) 1° < 2° < 3°",
  year: "2024"
},

{
  question: "Which of the following alcohols will not undergo oxidation?",
  options: [
    "(A) 3-Methylbutan-2-ol",
    "(B) Butanol",
    "(C) 2-Methylbutan-2-ol",
    "(D) Butan-2-ol"
  ],
  answer: "(C) 2-Methylbutan-2-ol",
  year: "2024"
},

// ---- Short Answer Questions ----

{
  question: "Write the structures of products formed when anisole is treated with HI.",
  answer: "Phenol (C6H5OH) and methyl iodide (CH3I).",
  year: "2024"
},

{
  question: "Arrange in increasing order of boiling points: (CH3)3N, C2H5OH, C2H5NH2",
  answer: "(CH3)3N < C2H5NH2 < C2H5OH",
  year: "2024"
},

{
  question: "Arrange in increasing order of acidic character: Benzoic acid, Phenol, Cresol, C6H5–CH2–CH2–OH",
  answer: "C6H5–CH2–CH2–OH < Cresol < Phenol < Benzoic acid",
  year: "2024"
},

{
  question: "Write the IUPAC name of C6H5–CH2–CH2–OH.",
  answer: "2-Phenylethanol",
  year: "2024"
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

{
  type: "assertion-reason",
  assertion: "The boiling point of ethanol is higher than that of methoxymethane.",
  reason: "There is intramolecular hydrogen bonding in ethanol.",
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
  assertion: "A mixture of o-nitrophenol and p-nitrophenol can be separated by steam distillation.",
  reason: "o-nitrophenol is steam volatile due to intermolecular hydrogen bonding.",
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
  assertion: "Phenol is strongly acidic as compared to ethanol.",
  reason: "Phenoxide ion is more stable than ethoxide ion.",
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
  assertion: "p-methoxyphenol is a stronger acid than p-nitrophenol.",
  reason: "Methoxy group shows +I effect whereas nitro group shows -I effect.",
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
  assertion: "The boiling point of ethanol is higher than that of dimethyl ether.",
  reason: "Ethanol molecules are associated through hydrogen bonding whereas in dimethyl ether, it is not possible.",
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
  assertion: "p-nitrophenol is less acidic than phenol.",
  reason: "Nitro group is electron withdrawing and helps in the stabilisation of p-nitrophenoxide ion.",
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
  assertion: "The C-O-C bond angle in ethers is slightly less than tetrahedral angle.",
  reason: "Due to the repulsive interaction between the two alkyl groups in ethers.",
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
  assertion: "The C−O−H bond angle in alcohols is slightly less than the tetrahedral angle.",
  reason: "This is due to the repulsive interaction between the two lone electron pairs on oxygen.",
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
  assertion: "(CH3)3C−O−CH3 gives (CH3)3C−I and CH3OH on treatment with HI.",
  reason: "The reaction occurs by SN1 mechanism.",
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
  assertion: "o-nitrophenol is a weaker acid than p-nitrophenol.",
  reason: "Intramolecular hydrogen bonding makes ortho isomer weaker than para isomer.",
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