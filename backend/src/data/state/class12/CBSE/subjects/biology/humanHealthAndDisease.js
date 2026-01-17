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
  question: "Colostrum secreted by mother's mammary glands during initial days of lactation is rich in antibody:",
  options: [
    "(A) IgD",
    "(B) IgA",
    "(C) IgG",
    "(D) IgE"
  ],
  answer: "(B) IgA",
  year: "2024"
},

{
  question: "Select the correct statement about drugs and tobacco:",
  options: [
    "(A) Morphine is often given to persons who have undergone surgery as a painkiller.",
    "(B) Chewing tobacco lowers blood pressure and heart rate.",
    "(C) Barbiturates make criminals tell the truth.",
    "(D) Cocaine is given to patients after surgery."
  ],
  answer: "(A) Morphine is often given to persons who have undergone surgery as a painkiller.",
  year: "2024"
},

{
  question: "Which immune system component does NOT correctly match with its role?",
  options: [
    "(A) Macrophages – Mucus-secreting cells that trap microbes.",
    "(B) Interferons – Secreted by virus-infected cells to protect others.",
    "(C) B-Lymphocytes – Produce antibodies.",
    "(D) IgA – Present in colostrum to protect infants."
  ],
  answer: "(A) Macrophages – Mucus-secreting cells that trap microbes.",
  year: "2024"
},

{
  question: "Which immune response is responsible for rejection of transplanted organs?",
  options: [
    "(A) Cell mediated immune response",
    "(B) Physiological immune response",
    "(C) Humoral immune response",
    "(D) Autoimmune response"
  ],
  answer: "(A) Cell mediated immune response",
  year: "2024"
},

{
  question: "Property that distinguishes malignant tumor from benign tumor:",
  options: [
    "(A) Metastasis",
    "(B) Metabolism",
    "(C) Metagenesis",
    "(D) Metamorphosis"
  ],
  answer: "(A) Metastasis",
  year: "2024"
},

{
  question: "In which disease does the body attack self-cells?",
  options: [
    "(A) Thalassemia",
    "(B) Rheumatoid arthritis",
    "(C) Filariasis",
    "(D) Phenylketonuria"
  ],
  answer: "(B) Rheumatoid arthritis",
  year: "2024"
},

{
  question: "Decrease in T-Lymphocytes count will finally result in:",
  options: [
    "(A) Decrease in antibodies",
    "(B) Decrease in antigens",
    "(C) Increase in antibodies",
    "(D) Increase in antigens"
  ],
  answer: "(A) Decrease in antibodies",
  year: "2024"
},

{
  question: "Disease with symptoms: sustained high fever, stomach pain, constipation, headache, weakness:",
  options: [
    "(A) Typhoid",
    "(B) Malaria",
    "(C) Amoebiasis",
    "(D) Pneumonia"
  ],
  answer: "(A) Typhoid",
  year: "2024"
},

{
  question: "In which condition is there increased mast cell activity?",
  options: [
    "(A) Typhoid",
    "(B) AIDS",
    "(C) Ascariasis",
    "(D) Allergy"
  ],
  answer: "(D) Allergy",
  year: "2024"
},

{
  question: "Interferons are proteins secreted by:",
  options: [
    "(A) WBC",
    "(B) Bacteria infected cells",
    "(C) Virus infected cells",
    "(D) RBC"
  ],
  answer: "(C) Virus infected cells",
  year: "2024"
},

{
  question: "Vector for dengue fever is:",
  options: [
    "(A) Female Anopheles mosquito",
    "(B) Female Culex mosquito",
    "(C) Male Aedes mosquito",
    "(D) Female Aedes mosquito"
  ],
  answer: "(D) Female Aedes mosquito",
  year: "2024"
},

{
  question: "ELISA technique is based on:",
  options: [
    "(A) DNA replication",
    "(B) Antigen-protein interaction",
    "(C) Antigen-antibody interaction",
    "(D) Pathogen-antigen interaction"
  ],
  answer: "(C) Antigen-antibody interaction",
  year: "2024"
},

{
  question: "Select pathogen mismatched with disease symptom:",
  options: [
    "(A) Epidermophyton – Dry scaly lesions on nail",
    "(B) Haemophilus influenzae – Blockage of intestinal passage",
    "(C) Wuchereria bancrofti – Inflammation of lymphatic vessels",
    "(D) Entamoeba histolytica – Constipation, abdominal pain"
  ],
  answer: "(B) Haemophilus influenzae – Blockage of intestinal passage",
  year: "2024"
},

{
  question: "Incorrect statements about T-lymphocytes:",
  options: [
    "(A) (iv) only",
    "(B) (iii) only",
    "(C) (iii) and (iv) only",
    "(D) (i) and (iv) only"
  ],
  answer: "(C) (iii) and (iv) only",
  year: "2024"
},

{
  question: "Main barrier preventing entry of microorganisms into our body:",
  options: [
    "(A) Skin",
    "(B) Monocytes",
    "(C) Macrophages",
    "(D) Antibodies"
  ],
  answer: "(A) Skin",
  year: "2024"
},

{
  question: "Principle of vaccination is based on:",
  options: [
    "(A) Memory",
    "(B) Specificity",
    "(C) Self and non-self discrimination",
    "(D) Diversity"
  ],
  answer: "(A) Memory",
  year: "2024"
},

{
  question: "Opioids act as:",
  options: [
    "(A) Stimulants",
    "(B) Pain killers",
    "(C) Depressants",
    "(D) Euphoria providers"
  ],
  answer: "(B) Pain killers",
  year: "2024"
},

{
  question: "Diagnostic test that confirms typhoid:",
  options: [
    "(A) MRI",
    "(B) Widal",
    "(C) Amniocentesis",
    "(D) ELISA"
  ],
  answer: "(B) Widal",
  year: "2024"
},

// ---- Short Answer Questions ----

{
  question: "State the function of mast cells in allergy response.",
  answer: "They release histamine causing inflammation and allergic reactions.",
  year: "2024"
},

{
  question: "State the function of interferons.",
  answer: "They protect non-infected cells from viral infection.",
  year: "2024"
},

{
  question: "Name any two physiological barriers providing innate immunity.",
  answer: "Skin and mucous membranes.",
  year: "2024"
},

{
  question: "Name two diseases controlled by eradication of Aedes mosquito.",
  answer: "Dengue and Chikungunya.",
  year: "2024"
},

{
  question: "How do cytokine barriers provide innate immunity?",
  answer: "They regulate immune cell activity and inhibit pathogen spread.",
  year: "2024"
},

{
  question: "Mention the chemical change that proinsulin undergoes to become insulin.",
  answer: "Removal of connecting peptide (C-peptide).",
  year: "2024"
},

{
  question: "Suggest a method to ensure an anamnestic response in humans.",
  answer: "Booster vaccination.",
  year: "2024"
},


/// asseration and reason type questions
{
  type: "assertion-reason",
  assertion: "In humans, filariasis is characterized by inflammation in the lower limbs.",
  reason: "Filarial worm usually lives in the lymphatic vessels of the lower limbs.",
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
  assertion: "A person infected with malaria suffers from chill and high fever, recurring every three or four days.",
  reason: "The parasite attacks the RBC resulting in their rupture and release of haemozoin.",
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
  assertion: "Streptococcus pneumoniae and Haemophilus influenzae are responsible for causing infectious disease in human beings.",
  reason: "A healthy person acquires the infection by inhaling the aerosols released by an infected person.",
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
  assertion: "The chronic use of alcohol by a person leads to cirrhosis.",
  reason: "Alcohol addiction at times becomes the cause of mental and financial distress to the entire family of the addicted person.",
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
  assertion: "AIDS is a syndrome caused by HIV.",
  reason: "HIV is a virus that damages the immune system with DNA as its genetic material.",
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
  assertion: "Virus-infected cells produce interferons.",
  reason: "Interferons can cause inflammation of virus-infected cells.",
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
  assertion: "More and more children in metro cities of India suffer from allergies and asthma due to sensitivity to the environment.",
  reason: "Modern day lifestyle and a protected environment in early life has resulted in lowering the immunity.",
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