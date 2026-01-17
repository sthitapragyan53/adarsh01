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
  question: "If P lies on line joining (3,6,−1) and (6,2,−2) and y-coordinate of P is 4, then its z-coordinate is:",
  options: [
    "(A) 2/3",
    "(B) 0",
    "(C) 1",
    "(D) −2/3"
  ],
  answer: "(D) −2/3",
  year: "2024"
},

{
  question: "If a line makes angles 4π/3 , π/3 and θ with x,y,z axes respectively, then θ is:",
  options: [
    "(A) ±π/3",
    "(B) −π/3 only",
    "(C) π/3 only",
    "(D) π/6"
  ],
  answer: "(A) ±π/3",
  year: "2024"
},

{
  question: "Equation of line parallel to vector 3i + j + 2k passing through (4,−3,7) is:",
  options: [
    "(A) x=3t+4,y=t+3,z=2t+7",
    "(B) x=3t+4,y=t−3,z=2t+7",
    "(C) x=4t+3,y=−3t+1,z=7t+2",
    "(D) x=3t+4,y=−t+3,z=2t+7"
  ],
  answer: "(B) x=3t+4,y=t−3,z=2t+7",
  year: "2024"
},

{
  question: "The line x=1+5μ,y=−5+μ,z=−6−3μ passes through:",
  options: [
    "(A) (1,−5,−6)",
    "(B) (−1,−5,6)",
    "(C) (1,−5,6)",
    "(D) (1,5,6)"
  ],
  answer: "(A) (1,−5,−6)",
  year: "2024"
},

{
  question: "Foot of perpendicular from (0,1,2) on x-axis is:",
  options: [
    "(A) (1,0,0)",
    "(B) (5,0,0)",
    "(C) (0,0,0)",
    "(D) (2,0,0)"
  ],
  answer: "(C) (0,0,0)",
  year: "2024"
},

{
  question: "Direction ratios of vector parallel to line (2x−1)/2 = −y/1 = (2z+1)/6 are:",
  options: [
    "(A) 2,−1,3",
    "(B) 2,1,6",
    "(C) 2,1,3",
    "(D) 2,−1,6"
  ],
  answer: "(A) 2,−1,3",
  year: "2024"
},

{
  question: "If a line makes angles 30°,120° with x,y axes, angle with z-axis is:",
  options: [
    "(A) 90°",
    "(B) 120°",
    "(C) 60°",
    "(D) 0°"
  ],
  answer: "(A) 90°",
  year: "2024"
},

{
  question: "Vector equation of line through (1,−1,0) parallel to y-axis is:",
  options: [
    "(A) r = i − j + λ j",
    "(B) r = i − j + λ(i − j)",
    "(C) r = i − j + λk",
    "(D) r = λj"
  ],
  answer: "(A) r = i − j + λ j",
  year: "2024"
},

{
  question: "Lines (1−x)/2 = (y−1)/3 = z/1 and (2x−3)/(2p) = y/(−1) = (z−4)/7 are perpendicular for p =",
  options: [
    "(A) 2",
    "(B) 3",
    "(C) −1/2",
    "(D) 1/2"
  ],
  answer: "(D) 1/2",
  year: "2024"
},

{
  question: "If direction cosines of a line are k/3,k/3,k/3 then k =",
  options: [
    "(A) ±3",
    "(B) ±1",
    "(C) ±1/3",
    "(D) ±√3"
  ],
  answer: "(B) ±1",
  year: "2024"
},

{
  question: "Distance of point (a,b,c) from y-axis is:",
  options: [
    "(A) √(a²+c²)",
    "(B) b",
    "(C) a²+c²",
    "(D) b²"
  ],
  answer: "(A) √(a²+c²)",
  year: "2024"
},

{
  question: "If a line makes angle π/4 with x and z axes, angle with y-axis is:",
  options: [
    "(A) 0",
    "(B) π/4",
    "(C) π",
    "(D) π/2"
  ],
  answer: "(D) π/2",
  year: "2024"
},

{
  question: "Angle between lines 2x=3y=−z and 6x=−y=−4z is:",
  options: [
    "(A) 0°",
    "(B) 30°",
    "(C) 90°",
    "(D) 45°"
  ],
  answer: "(C) 90°",
  year: "2024"
},

{
  question: "Distance of point (p,q,r) from y-axis is:",
  options: [
    "(A) q",
    "(B) |q|",
    "(C) |q|+|r|",
    "(D) √(p²+r²)"
  ],
  answer: "(D) √(p²+r²)",
  year: "2024"
},

{
  question: "Equation of line through (1,1,1) parallel to z-axis is:",
  options: [
    "(A) (x−1)/0=(y−1)/0=(z−1)/1",
    "(B) x/1=y/1=z/1",
    "(C) x/0=y/0=(z−1)/1",
    "(D) (x−1)/1=(y−1)/1=(z−1)/1"
  ],
  answer: "(A) (x−1)/0=(y−1)/0=(z−1)/1",
  year: "2024"
},

{
  question: "Foot of perpendicular from (2,−3,4) on y-axis is:",
  options: [
    "(A) (2,3,4)",
    "(B) (0,−3,0)",
    "(C) (2,0,4)",
    "(D) (−2,−3,−4)"
  ],
  answer: "(B) (0,−3,0)",
  year: "2024"
},

{
  question: "Length of perpendicular from (4,−7,3) to y-axis is:",
  options: [
    "(A) 7",
    "(B) 4",
    "(C) 3",
    "(D) 5"
  ],
  answer: "(D) 5",
  year: "2024"
},

// ---- Short Answer Section ----

{
  question: "Vector equation of line passing through (3,4,−7) and (1,−1,6).",
  answer: "r = (3i+4j−7k) + λ(−2i−5j+13k)",
  year: "2024"
},

{
  question: "The line of shortest distance between two skew lines is ____ to both lines.",
  answer: "Perpendicular",
  year: "2024"
},

{
  question: "Find direction cosines of line making angles 90°,135°,45° with x,y,z axes.",
  answer: "(0, −1/√2, 1/√2)",
  year: "2024"
},

{
  question: "Vector equation of line through (3,4,5) parallel to 2i+2j−3k.",
  answer: "r = (3i+4j+5k) + λ(2i+2j−3k)",
  year: "2024"
},

{
  question: "Direction cosines of line with direction ratios −18,12,−4.",
  answer: "(−3/√(13), 2/√(13), −1/√(13))",
  year: "2024"
},

{
  question: "Find direction cosines of line making equal angles with coordinate axes.",
  answer: "(1/√3, 1/√3, 1/√3)",
  year: "2024"
},

{
  question: "Distance of point (3,−5,12) from x-axis.",
  answer: "13",
  year: "2024"
},

{
  question: "Position vector dividing join of 3a−2b and 2a+3b in ratio 2:1.",
  answer: "(8a−b)/3",
  year: "2024"
},

{
  type: "assertion-reason",
  assertion: "A line through the points (4, 7, 8) and (2, 3, 4) is parallel to a line through the points (−1, −2, 1) and (1, 2, 5).",
  reason: "Lines r = a1 + λb1 and r = a2 + μb2 are parallel if b1 · b2 = 0.",
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
  assertion: "Equation of a line passing through the points (1, 2, 3) and (3, −1, 3) is (x - 3)/2 = (y + 1)/-3 = (z - 3)/0.",
  reason: "Equation of a line passing through points (x1, y1, z1) and (x2, y2, z2) is given by (x - x1)/(x2 - x1) = (y - y1)/(y2 - y1) = (z - z1)/(z2 - z1).",
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
  assertion: "The lines r = a1 + λb1 and r = a2 + μb2 are perpendicular, when b1 ⋅ b2 = 0.",
  reason: "The angle θ between the lines r = a1 + λb1 and r = a2 + μb2 is given by cos θ = |(b1 ⋅ b2) / (|b1| |b2|)|.",
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
  assertion: "If a line makes angles α, β, γ with positive direction of the coordinate axes, then sin²α + sin²β + sin²γ = 2.",
  reason: "The sum of squares of the direction cosines of a line is 1.",
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