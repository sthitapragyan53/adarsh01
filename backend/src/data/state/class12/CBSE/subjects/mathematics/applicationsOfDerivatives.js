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
  question: "The values of λ so that f(x)=sinx−cosx−λx+C decreases for all real x are:",
  options: [
    "(A) λ ≥ 1",
    "(B) λ < 1",
    "(C) λ ≥ √2",
    "(D) 1 < λ < √2"
  ],
  answer: "(C) λ ≥ √2",
  year: "2024"
},

{
  question: "If f(x)=2x+cosx, then f(x):",
  options: [
    "(A) is an increasing function",
    "(B) has minima at x=π",
    "(C) has maxima at x=π",
    "(D) is a decreasing function"
  ],
  answer: "(A) is an increasing function",
  year: "2024"
},

{
  question: "Let f(x)=|x|. Which statement is incorrect?",
  options: [
    "(A) f is continuous at x=0",
    "(B) f has minimum at x=0",
    "(C) f is differentiable at x=0",
    "(D) f has no maximum value"
  ],
  answer: "(C) f is differentiable at x=0",
  year: "2024"
},

{
  question: "The function f(x)=x²−4x+6 is increasing in:",
  options: [
    "(A) [2,∞)",
    "(B) (−∞,2]",
    "(C) (0,2)",
    "(D) [1,2]"
  ],
  answer: "(A) [2,∞)",
  year: "2024"
},

{
  question: "A cylindrical tank radius 10 cm is filled at 100π cm³/s. Rate of increase of height is:",
  options: [
    "(A) 1 cm/s",
    "(B) 1.1 cm/s",
    "(C) 0.1 cm/s",
    "(D) 0.5 cm/s"
  ],
  answer: "(A) 1 cm/s",
  year: "2024"
},

{
  question: "If f(x)=2x−sinx, then f(x) is:",
  options: [
    "(A) maximum at x=0",
    "(B) maximum at x=π/2",
    "(C) an increasing function",
    "(D) a decreasing function"
  ],
  answer: "(C) an increasing function",
  year: "2024"
},

{
  question: "Slope of curve y=−x³+3x²+8x−20 is maximum at:",
  options: [
    "(A) (10,1)",
    "(B) (−10,1)",
    "(C) (1,−10)",
    "(D) (1,10)"
  ],
  answer: "(D) (1,10)",
  year: "2024"
},

{
  question: "Absolute maximum of f(x)=x³−3x+2 on [0,2] is:",
  options: [
    "(A) 0",
    "(B) 4",
    "(C) 5",
    "(D) 2"
  ],
  answer: "(B) 4",
  year: "2024"
},

{
  question: "Function f(x)=x³−3x²+12x−18 is:",
  options: [
    "(A) strictly decreasing on (−∞,0)",
    "(B) strictly decreasing on R",
    "(C) strictly increasing on R",
    "(D) neither strictly increasing nor decreasing"
  ],
  answer: "(C) strictly increasing on R",
  year: "2024"
},

{
  question: "Function f(x)=kx−sinx is strictly increasing for:",
  options: [
    "(A) k > 1",
    "(B) k < 1",
    "(C) k > −1",
    "(D) k < −1"
  ],
  answer: "(A) k > 1",
  year: "2024"
},

{
  question: "If f is continuous and differentiable, then f is strictly increasing if:",
  options: [
    "(A) f'(x)=0",
    "(B) f'(x)>0",
    "(C) f(x)>0",
    "(D) f'(x)<0"
  ],
  answer: "(B) f'(x)>0",
  year: "2024"
},

{
  question: "Sides of square decrease at 1.5 cm/s. Rate of decrease of perimeter is:",
  options: [
    "(A) 6 cm/s",
    "(B) 1.5 cm/s",
    "(C) 2.25 cm/s",
    "(D) 3 cm/s"
  ],
  answer: "(A) 6 cm/s",
  year: "2024"
},

{
  question: "Function f(x)=2/x + x² has local minima at:",
  options: [
    "(A) −2",
    "(B) 2",
    "(C) 0",
    "(D) 1"
  ],
  answer: "(B) 2",
  year: "2024"
},

{
  question: "For y=7x−x³, dx/dt=2. Rate of change of slope at x=5 is:",
  options: [
    "(A) −70",
    "(B) 60",
    "(C) −60",
    "(D) −140"
  ],
  answer: "(D) −140",
  year: "2024"
},

{
  question: "Function f(x)=2x³+9x²+12x−1 is decreasing in:",
  options: [
    "(A) (−∞,−2)",
    "(B) (−2,−1)",
    "(C) (−1,∞)",
    "(D) [−1,1]"
  ],
  answer: "(A) (−∞,−2)",
  year: "2024"
},

{
  question: "If f(x)=a(x−cosx) is strictly decreasing on R, then a belongs to:",
  options: [
    "(A) (−∞,∞)",
    "(B) (−∞,0)",
    "(C) (0,∞)",
    "(D) {0}"
  ],
  answer: "(B) (−∞,0)",
  year: "2024"
},

{
  question: "Function f(x)=x²e^(−x) is strictly increasing in:",
  options: [
    "(A) (0,2)",
    "(B) (−∞,0)",
    "(C) (−∞,∞)",
    "(D) (2,∞)"
  ],
  answer: "(A) (0,2)",
  year: "2024"
},

{
  question: "Rate of increase of circumference when radius increases at 0.5 cm/s is:",
  answer: "π cm/s",
  year: "2024"
},

{
  question: "Rate of change of area of circle w.r.t radius at r=3 cm is:",
  answer: "6π cm²/cm",
  year: "2024"
},

{
  question: "Maximum slope of y=−x³+3x²+12x−5 is:",
  options: [
    "(A) 0",
    "(B) 15",
    "(C) 12",
    "(D) 9"
  ],
  answer: "(B) 15",
  year: "2024"
},

{
  question: "Find interval where f(x)=7−4x−x² is strictly increasing.",
  answer: "(−∞, −2)",
  year: "2024"
},

{
  question: "Least value of f(x)=ax + b/x (a>0,b>0,x>0) is:",
  answer: "2√(ab)",
  year: "2024"
},

{
  question: "If f(x)=x⁴−10, approximate value of f(2.1).",
  answer: "≈ 9.4481",
  year: "2024"
}











  ]
};