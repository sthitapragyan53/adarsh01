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
  question: "For real x, let f(x)=x²+5x+1. Then:",
  options: [
    "(A) f is onto on R but not one-one",
    "(B) f is one-one and onto on R",
    "(C) f is one-one but not onto on R",
    "(D) f is neither one-one nor onto on R"
  ],
  answer: "(D) f is neither one-one nor onto on R",
  year: "2024"
},

{
  question: "If f: N → W is defined as f(n)= {1/2 if n is even; 10 if n is odd}, then f is:",
  options: [
    "(A) a bijection",
    "(B) injective only",
    "(C) neither surjective nor injective",
    "(D) surjective only"
  ],
  answer: "(C) neither surjective nor injective",
  year: "2024"
},

{
  question: "Domain of f(x)=cos x + sin x is:",
  options: [
    "(A) Φ",
    "(B) R",
    "(C) (−1,1)",
    "(D) [−1,1]"
  ],
  answer: "(B) R",
  year: "2024"
},

{
  question: "Let f: R⁺ → [−5,∞) be defined as f(x)=9x²+6x+5, where R⁺ is set of non-negative real numbers. Then f is:",
  options: [
    "(A) bijective",
    "(B) neither one-one nor onto",
    "(C) onto",
    "(D) one-one"
  ],
  answer: "(D) one-one",
  year: "2024"
},

{
  question: "A function f: R⁺ → R defined by f(x)=4x+3 is:",
  options: [
    "(A) onto but not one-one",
    "(B) both one-one and onto",
    "(C) neither one-one nor onto",
    "(D) one-one but not onto"
  ],
  answer: "(D) one-one but not onto",
  year: "2024"
},

{
  question: "Let R⁺ denote non-negative real numbers. f: R⁺ → R⁺ defined as f(x)=x²+1 is:",
  options: [
    "(A) neither one-one nor onto",
    "(B) both one-one and onto",
    "(C) onto but not one-one",
    "(D) one-one but not onto"
  ],
  answer: "(D) one-one but not onto",
  year: "2024"
},

{
  question: "A function f: R → R defined as f(x)=x²−4x+5 is:",
  options: [
    "(A) injective but not surjective",
    "(B) surjective but not injective",
    "(C) neither injective nor surjective",
    "(D) both injective and surjective"
  ],
  answer: "(C) neither injective nor surjective",
  year: "2024"
},

{
  question: "Let A={3,5}. Number of reflexive relations on A is:",
  options: [
    "(A) 2",
    "(B) 0",
    "(C) 4",
    "(D) 8"
  ],
  answer: "(C) 4",
  year: "2024"
},

{
  question: "Relation R on {1,2,3} given by R={(1,2),(2,1),(1,1)} is:",
  options: [
    "(A) symmetric and transitive but not reflexive",
    "(B) symmetric but neither reflexive nor transitive",
    "(C) reflexive and symmetric but not transitive",
    "(D) an equivalence relation"
  ],
  answer: "(B) symmetric but neither reflexive nor transitive",
  year: "2024"
},

{
  question: "Let A={1,3,5}. Number of equivalence relations containing (1,3) is:",
  options: [
    "(A) 2",
    "(B) 4",
    "(C) 3",
    "(D) 1"
  ],
  answer: "(A) 2",
  year: "2024"
},

{
  question: "If f: R→R is given by f(x)=(-15−x³)^(1/3), then f'(x) =",
  answer: "−x² / (−15−x³)^(2/3)",
  year: "2024"
},

{
  question: "If f(x)=|x|+x and g(x)=|x|−x, then (f∘g)(x) for x<0 is:",
  options: [
    "(A) 0",
    "(B) 4x",
    "(C) −4x",
    "(D) 2x"
  ],
  answer: "(C) −4x",
  year: "2024"
},

{
  question: "A relation R in set A is called _____ if (a₁,a₂)∈R implies (a₂,a₁)∈R.",
  answer: "Symmetric relation",
  year: "2024"
},

{
  question: "If a*b denotes larger of a and b and a∘b = (a*b)+3, find (5)∘(10).",
  answer: "13",
  year: "2024"
},

{
  type: "assertion-reason",
  assertion: "Let f(x) = e^x and g(x) = log x. Then (f + g)(x) = e^x + log x where the domain of (f + g) is R.",
  reason: "Dom(f + g) = Dom(f) ∩ Dom(g).",
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
  assertion: "Let A = {x ∈ R : -1 ≤ x ≤ 1}. If f : A → A be defined as f(x) = x², then f is not an onto function.",
  reason: "If y = -1 ∈ A, then x = ±√(-1) ∉ A.",
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
  assertion: "Let Z be the set of integers. A function f: Z → Z defined as f(x) = 3x + 5 for all x ∈ Z is bijective.",
  reason: "A function is bijective if it is both surjective and injective.",
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
  assertion: "The relation R = {(x, y): (x + y) is a prime number and x, y ∈ N} is not a reflexive relation.",
  reason: "The number '2n' is composite for all natural numbers n.",
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
  assertion: "The range of the function f(x) = 2sin(x) + 3, where x ∈ [-1, 1], is [2sin(-1)+3, 2sin(1)+3].",
  reason: "The range of the principal value branch of sin⁻¹(x) is [0, π].",
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