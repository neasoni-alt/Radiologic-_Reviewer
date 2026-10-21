const questionsData = [
  // =========================================================================
  // DOMAIN 1: LESSON 6 - RADIOGRAPHIC CONTRAST
  // =========================================================================
  {
    id: "6.1.1",
    domain: "Lesson 6: Radiographic Contrast",
    question: "How is radiographic contrast best defined?",
    options: [
      "The overall blackening on a finished radiograph",
      "The degree of difference between adjacent densities",
      "The sharpness of structural lines recorded in the image",
      "The misrepresentation of anatomical size and shape",
    ],
    answer: 1,
    explanation:
      "Radiographic contrast is defined as the degree of difference between adjacent densities and is one of the two photographic properties comprising visibility of detail[cite: 1].",
  },
  {
    id: "6.1.2",
    domain: "Lesson 6: Radiographic Contrast",
    question:
      "What are the two photographic properties that comprise 'visibility of detail' on a radiograph?",
    options: [
      "Contrast and Density",
      "Umbra and Penumbra",
      "Magnification and Distortion",
      "FFD and OFD",
    ],
    answer: 0,
    explanation:
      "Visibility of detail refers to the fact that the radiographic image is visible to the human eye only because sufficient contrast and density exist to permit structural details to be perceived[cite: 1].",
  },
  {
    id: "6.1.3",
    domain: "Lesson 6: Radiographic Contrast",
    question:
      "Which of the following describes a film emulsion that produces HIGH contrast?",
    options: [
      "Larger silver halide grains with wide variations in grain size",
      "Smaller silver halide grains with relatively uniform size",
      "A film exposed solely by direct x-ray exposure without intensifying screens",
      "A film processed with high developer temperature to increase chemical fog",
    ],
    answer: 1,
    explanation:
      "A high-contrast emulsion contains smaller silver halide grains with relatively uniform size[cite: 1].",
  },
  {
    id: "6.1.4",
    domain: "Lesson 6: Radiographic Contrast",
    question:
      "How does exposing a film with intensifying screens affect contrast compared to direct x-ray exposure alone?",
    options: [
      "Contrast is always lower with intensifying screens than with direct exposure",
      "Contrast is always lower for a film exposed to x-rays only than with intensifying screens",
      "Intensifying screens have zero effect on film contrast",
      "Intensifying screens eliminate subject contrast completely",
    ],
    answer: 1,
    explanation:
      "Contrast is always lower for a film exposed to x-rays only than with intensifying screens, though changing speed has negligible effect on contrast[cite: 1].",
  },
  {
    id: "6.1.5",
    domain: "Lesson 6: Radiographic Contrast",
    question:
      "What happens to film contrast when developer time, developer temperature, or replenishment rate is excessively increased?",
    options: [
      "Chemical fog decreases and radiographic contrast increases",
      "Chemical fog increases on the film, affecting base fog and reducing contrast",
      "Base fog is eliminated, producing a short-scale contrast image",
      "Film contrast remains completely unaffected by processing conditions",
    ],
    answer: 1,
    explanation:
      "Increasing film developer time, temperature, or replenishment rate will increase the chemical fog on the film. When any processing factor causes a change in base fog, contrast is affected[cite: 1].",
  },
  {
    id: "6.1.6",
    domain: "Lesson 6: Radiographic Contrast",
    question:
      "Which type of contrast is defined as the range of differences in the intensity of the x-ray beam AFTER it has been attenuated by the subject?",
    options: [
      "Film (Image Receptor) Contrast",
      "Subject Contrast",
      "Processor Contrast",
      "Psychovisual Contrast",
    ],
    answer: 1,
    explanation:
      "Subject contrast is the range of differences in the intensity of the x-ray beam after it has been attenuated by the subject, resulting from tissue composition and kilovoltage[cite: 1].",
  },
  {
    id: "6.1.7",
    domain: "Lesson 6: Radiographic Contrast",
    question: "Which three components directly make up Subject Contrast?",
    options: [
      "Film type, Direct exposure, and Intensifying screen",
      "Kilovoltage, Tissue composition, and Contrast Medium",
      "Focal spot size, SID, and OID",
      "Developer time, Fixer temperature, and Wash rate",
    ],
    answer: 1,
    explanation:
      "Subject contrast is a result of the absorption characteristics of the anatomic tissue radiographed and the level of kilovoltage used, with components being Kilovoltage, Tissue composition, and Contrast Medium[cite: 1].",
  },
  {
    id: "6.1.8",
    domain: "Lesson 6: Radiographic Contrast",
    question:
      "As long as kVp is adequate to penetrate the anatomic part, how does a LOW kVp affect subject contrast?",
    options: [
      "Low kVp produces low subject contrast (long scale)",
      "Low kVp produces high subject contrast because low-energy photons are absorbed by thicker parts while more penetrate thin parts",
      "Low kVp causes uniform penetration across thick and thin parts",
      "Low kVp increases Compton scatter and reduces contrast",
    ],
    answer: 1,
    explanation:
      "Low kVp produces higher subject contrast because most low-energy photons are absorbed by the thicker parts while more penetrate the thin part[cite: 1].",
  },
  {
    id: "6.1.9",
    domain: "Lesson 6: Radiographic Contrast",
    question:
      "Why does increasing kVp cause a decrease in radiographic contrast?",
    options: [
      "Higher kVp causes more uniform penetration and increases the percentage of Compton interactions, increasing scatter reaching the film",
      "Higher kVp eliminates Compton scattering and increases photoelectric absorption",
      "Higher kVp prevents x-ray photons from reaching the image receptor",
      "Higher kVp reduces the number of gray shades visible on the image",
    ],
    answer: 0,
    explanation:
      "As kVp increases, the percentage of Compton interactions increases. As a result of this increase in scatter reaching the film, contrast is decreased[cite: 1].",
  },
  {
    id: "6.1.10",
    domain: "Lesson 6: Radiographic Contrast",
    question:
      "Why is a high kVp technique preferred for routine Chest Radiography?",
    options: [
      "To produce only black and white densities with no intermediate gray shades",
      "To result in a wide range of radiographic densities within the visible range, visualizing air-filled lungs, soft-tissues, and bony structures simultaneously",
      "To maximize photoelectric absorption in the ribs and obscure pulmonary vessels",
      "To increase patient radiation dose for better bone detail",
    ],
    answer: 1,
    explanation:
      "High kVp results in a wide range of radiographic densities that fall within the visible range, successfully visualizing air-filled lungs, soft-tissues, and bony structures without underexposure or overexposure[cite: 1].",
  },
  {
    id: "6.1.11",
    domain: "Lesson 6: Radiographic Contrast",
    question:
      "Why is a LOW kVp technique used in Rib Examinations (TBC) compared to standard chest radiography?",
    options: [
      "To decrease contrast between the ribs and the lungs",
      "Low kVp is used to enhance the differences between the air-filled lungs and the overlying bony structures",
      "To increase the scale of contrast so the ribs blend into the lung fields",
      "To increase Compton scatter reaching the image receptor",
    ],
    answer: 1,
    explanation:
      "Low kVps are used to enhance the differences between the air-filled lungs and the overlying bony structures during rib examinations[cite: 1].",
  },
  {
    id: "6.1.12",
    domain: "Lesson 6: Radiographic Contrast",
    question:
      "How does body part thickness and atomic number affect subject contrast?",
    options: [
      "Materials like lead and iodine absorb a greater percentage of the x-ray beam; the greater the atomic number, the higher the contrast",
      "Low atomic number materials like hydrogen and carbon absorb more radiation than lead",
      "Increasing part thickness decreases scatter and increases contrast",
      "Thickness and atomic number have no effect on attenuation",
    ],
    answer: 0,
    explanation:
      "Lead and iodine absorb a greater percentage of x-ray beams than low atomic number materials like hydrogen and carbon. The greater the atomic number, the higher the contrast[cite: 1].",
  },
  {
    id: "6.1.13",
    domain: "Lesson 6: Radiographic Contrast",
    question:
      "What term defines the number of useful visible densities or shades of gray?",
    options: [
      "Exposure Latitude",
      "Scale of Contrast",
      "Edge Gradient",
      "Magnification Factor",
    ],
    answer: 1,
    explanation:
      "Scale of Contrast is defined as the number of useful visible densities or shades of gray[cite: 1].",
  },
  {
    id: "6.1.14",
    domain: "Lesson 6: Radiographic Contrast",
    question:
      "What is the relationship between contrast and scale of contrast?",
    options: [
      "High contrast corresponds to short-scale (fewer shades of gray); Low contrast corresponds to long-scale (many shades of gray)",
      "High contrast corresponds to long-scale; Low contrast corresponds to short-scale",
      "High contrast has no scale",
      "Short-scale has many shades of gray",
    ],
    answer: 0,
    explanation:
      "High contrast features few shades of gray and short-scale latitude, whereas low contrast features many shades of gray and long-scale latitude[cite: 1].",
  },
  {
    id: "6.1.15",
    domain: "Lesson 6: Radiographic Contrast",
    question: "Why does low contrast provide more diagnostic information?",
    options: [
      "Because it contains only pure black and white",
      "Because it provides more densities even though the difference between densities is less, as long as differences remain within the visible range",
      "Because it eliminates exposure latitude",
      "Because it relies entirely on chemical fog",
    ],
    answer: 1,
    explanation:
      "Low contrast provides more densities even though the difference between densities is less, presenting more diagnostic information because more densities are present[cite: 1].",
  },
  {
    id: "6.1.16",
    domain: "Lesson 6: Radiographic Contrast",
    question: "How do radiographic grids affect contrast?",
    options: [
      "Grids affect contrast as a result of their absorption of scatter radiation that exits the patient, reducing film fog",
      "Grids increase scatter radiation and decrease contrast",
      "Grids have no effect on scatter or contrast",
      "Grids increase exposure latitude by producing long-scale contrast",
    ],
    answer: 0,
    explanation:
      "Radiographic grids affect contrast as a result of their absorption of the scatter radiation that exits the patient; the lesser the scattered radiation, the lesser the unwanted density (film fog)[cite: 1].",
  },
  {
    id: "6.1.17",
    domain: "Lesson 6: Radiographic Contrast",
    question:
      "How does field size (collimation) influence radiographic contrast?",
    options: [
      "A wide field irradiates more tissue, creating more scatter radiation which decreases contrast; a small field size decreases scatter and increases contrast",
      "A small field size increases scatter radiation",
      "Field size has no impact on scatter or contrast",
      "Collimation increases exposure latitude",
    ],
    answer: 0,
    explanation:
      "A wide field will irradiate more tissue and cause more scatter radiation. Small field size (more collimation) decreases scatter radiation reaching the film, resulting in greater radiographic contrast[cite: 1].",
  },
  {
    id: "6.1.18",
    domain: "Lesson 6: Radiographic Contrast",
    question:
      "What is the primary purpose of adding filtration to an x-ray beam in relation to contrast and energy?",
    options: [
      "To selectively remove low-energy x-rays that have little chance of reaching the image receptor",
      "To increase low-energy photon scatter",
      "To eliminate high-energy x-rays",
      "To double image receptor speed",
    ],
    answer: 0,
    explanation:
      "The primary purpose of adding filtration to an x-ray beam is to remove selectively low-energy x-rays that have little chance of getting to the image receptor[cite: 1].",
  },
  {
    id: "6.1.19",
    domain: "Lesson 6: Radiographic Contrast",
    question:
      "How do positive versus negative contrast media impact exposure factors?",
    options: [
      "Positive contrast media require an INCREASE in exposure factors; negative contrast media do not require a change in exposure factors",
      "Positive contrast media require a decrease in exposure factors",
      "Negative contrast media require an increase in exposure factors",
      "Neither contrast media type affects exposure factors",
    ],
    answer: 0,
    explanation:
      "Positive contrast media studies require an increase in exposure factors compared to imaging without them, whereas negative contrast agents decrease attenuation and do not require a change in exposure factors[cite: 1].",
  },

  // =========================================================================
  // DOMAIN 2: LESSON 7 - RADIOGRAPHIC DEFINITION & DISTORTION
  // =========================================================================
  {
    id: "7.1.1",
    domain: "Lesson 7: Radiographic Definition & Distortion",
    question:
      "What term refers to the clarity and sharpness of the radiographic image, outlining objects extremely well with minimum magnification and distortion?",
    options: [
      "Maximum Definition",
      "Quantum Mottle",
      "Subject Contrast",
      "Exposure Latitude",
    ],
    answer: 0,
    explanation:
      "Maximum definition refers to the clarity and sharpness of the radiographic image, outlining objects extremely well, showing minimum magnification and distortion, and enhancing visibility of anatomic markings[cite: 2].",
  },
  {
    id: "7.1.2",
    domain: "Lesson 7: Radiographic Definition & Distortion",
    question: "What is the difference between Umbra and Penumbra?",
    options: [
      "Umbra is the true object recorded on the film; Penumbra is the thin blurred area around the umbra that limits radiographic definition",
      "Umbra is the blurred outer edge; Penumbra is the complete shadow",
      "Umbra is caused by motion; Penumbra is caused by developer temperature",
      "Umbra and penumbra are identical terms",
    ],
    answer: 0,
    explanation:
      "Umbra is the true object recorded on the film, while penumbra is the thin blurred area around the umbra (edge gradient or geometric unsharpness) that limits definition[cite: 2].",
  },
  {
    id: "7.1.3",
    domain: "Lesson 7: Radiographic Definition & Distortion",
    question: "Why does geometric unsharpness occur on radiographs?",
    options: [
      "Because radiation does not originate from a point source but rather a focal area on the target called the actual focal spot",
      "Because intensifying screens have zero phosphor layer",
      "Because patient motion is always completely absent",
      "Because SID is infinite",
    ],
    answer: 0,
    explanation:
      "Geometric factors affecting detail are defined in terms of umbra and penumbra because radiation does not originate from a point source but rather a focal area on the target called the actual focal spot[cite: 2].",
  },
  {
    id: "7.1.4",
    domain: "Lesson 7: Radiographic Definition & Distortion",
    question:
      "How does Object-to-Image Receptor Distance (OID / OFD) affect image sharpness?",
    options: [
      "The closer the object to the image receptor, the sharper the image (less unsharpness)",
      "The farther the object from the image receptor, the sharper the image",
      "OID has no effect on image sharpness or penumbra",
      "Increasing OID eliminates geometric unsharpness",
    ],
    answer: 0,
    explanation:
      "OID stands for Object to Image Receptor Distance; the closer the object to the image receptor, the sharper the image[cite: 2].",
  },
  {
    id: "7.1.5",
    domain: "Lesson 7: Radiographic Definition & Distortion",
    question:
      "What is the relationship between Source-to-Image Receptor Distance (SID / FFD) and image sharpness?",
    options: [
      "The longer the SID, the sharper the image",
      "The shorter the SID, the sharper the image",
      "SID has no effect on recorded detail",
      "Longer SID increases penumbra magnification",
    ],
    answer: 0,
    explanation:
      "SID stands for Source to Image Receptor Distance; the longer the SID, the sharper the image[cite: 2].",
  },
  {
    id: "7.1.6",
    domain: "Lesson 7: Radiographic Definition & Distortion",
    question: "What causes 'Quantum Mottle' (noise) in a recording system?",
    options: [
      "Variations in photon absorption due to different x-ray energies, appearing as a 'snowy' effect especially with high-speed systems, high kVp, and low mAs",
      "Uneven silver grain distribution in slow film emulsions",
      "Excessive exposure time during involuntary motion",
      "Thick aluminum filtration at the tube port",
    ],
    answer: 0,
    explanation:
      "Quantum mottle is caused by variations in photon absorption due to different x-ray energies, appearing as a 'snowy' effect more apparent with high-speed screens, high kVp, and low mAs exposures[cite: 2].",
  },
  {
    id: "7.1.7",
    domain: "Lesson 7: Radiographic Definition & Distortion",
    question: "How does image resolution get measured in a screen-film system?",
    options: [
      "Measured in line pairs per millimeter (line pairs/mm) using a leaded bar-test pattern",
      "Measured in Half Value Layers using aluminum sheets",
      "Measured in optical density units using a penetrometer",
      "Measured in milliampere-seconds",
    ],
    answer: 0,
    explanation:
      "Image resolution is evaluated using a leaded bar-test pattern and measured in line pairs per millimeter (line pairs/mm)[cite: 2].",
  },
  {
    id: "7.1.8",
    domain: "Lesson 7: Radiographic Definition & Distortion",
    question: "What is radiographic distortion?",
    options: [
      "The misrepresentation of the size, shape, or position of anatomical structures in an image",
      "The overall chemical fog on a developed film",
      "The reduction of scatter radiation using a grid",
      "The increase of subject contrast via contrast media",
    ],
    answer: 0,
    explanation:
      "Distortion refers to the misrepresentation of the size, shape, or position of anatomical structures in an image, split into size distortion (magnification) and shape distortion[cite: 2].",
  },
  {
    id: "7.1.9",
    domain: "Lesson 7: Radiographic Definition & Distortion",
    question:
      "Using the Magnification Factor formula M = FFD / (FFD - OFD), what is the magnification factor if FFD = 40 inches and OFD = 4 inches?",
    options: ["1.1", "1.5", "2.0", "1.0"],
    answer: 0,
    explanation: "M = 40 / (40 - 4) = 40 / 36 = 1.1[cite: 2].",
  },
  {
    id: "7.1.10",
    domain: "Lesson 7: Radiographic Definition & Distortion",
    question:
      "What are the two specific forms of Shape Distortion (True Distortion)?",
    options: [
      "Foreshortening and Elongation",
      "Umbra and Penumbra",
      "High contrast and Low contrast",
      "Inherent and Added",
    ],
    answer: 0,
    explanation:
      "The two forms of shape distortion are foreshortening (object appears shorter due to incorrect alignment) and elongation (object appears longer due to misalignment)[cite: 2].",
  },

  // =========================================================================
  // DOMAIN 3: LESSON 8 - SCATTER RADIATION, FILTRATION, AND PATIENT EXPOSURE
  // =========================================================================
  {
    id: "8.1.1",
    domain: "Lesson 8: Scatter Radiation, Filtration, and Patient Exposure",
    question:
      "What is the definition of filtration as applied to diagnostic x-ray beams?",
    options: [
      "The process of eliminating undesirable low-energy x-ray photons by inserting absorbing materials into the primary beam ('hardening the beam')",
      "The removal of high-energy photons to increase patient dose",
      "The absorption of exit radiation by a grid",
      "The restriction of field size via lead shutters",
    ],
    answer: 0,
    explanation:
      "Filtration is the process of eliminating undesirable low-energy x-ray photons by insertion of absorbing materials into the primary beam, also called hardening the beam[cite: 3].",
  },
  {
    id: "8.1.2",
    domain: "Lesson 8: Scatter Radiation, Filtration, and Patient Exposure",
    question:
      "What happens to beam quality and patient exposure when filtration is added?",
    options: [
      "Beam quality increases and patient exposure dose is reduced",
      "Beam quality decreases and patient exposure dose increases",
      "Beam quality and quantity both increase equally",
      "Filtration has no effect on patient dose",
    ],
    answer: 0,
    explanation:
      "The removal of low-energy x-rays with aluminum or another metal results in increased beam quality (higher average energy) and reduced patient dose[cite: 3].",
  },
  {
    id: "8.1.3",
    domain: "Lesson 8: Scatter Radiation, Filtration, and Patient Exposure",
    question:
      "What are the two main components of total filtration in diagnostic x-ray equipment?",
    options: [
      "Inherent filtration and Added filtration",
      "Wedge filtration and Trough filtration",
      "Primary filtration and Scatter filtration",
      "Aluminum filtration and Copper filtration",
    ],
    answer: 0,
    explanation:
      "Filtration of diagnostic x-ray beams has two components: Inherent filtration and Added filtration[cite: 3].",
  },
  {
    id: "8.1.4",
    domain: "Lesson 8: Scatter Radiation, Filtration, and Patient Exposure",
    question:
      "What is Inherent Filtration primarily a result of, and what is its standard value for a general-purpose tube?",
    options: [
      "Composition of the tube and housing (mainly the glass window); approximately 0.5 mm Al equivalent",
      "External aluminum sheets; exactly 2.5 mm Al equivalent",
      "Collimator mirror assembly; exactly 1.0 mm Al equivalent",
      "Patient skin attenuation; 3.0 mm Al equivalent",
    ],
    answer: 0,
    explanation:
      "Inherent filtration is a result of the composition of the tube and housing, with most coming from the glass envelope window, approximating 0.5 mm Al equivalent[cite: 3].",
  },
  {
    id: "8.1.5",
    domain: "Lesson 8: Scatter Radiation, Filtration, and Patient Exposure",
    question: "What is Added Filtration, and where is it positioned?",
    options: [
      "Any filtration occurring outside the tube and housing and before the image receptor (such as thin aluminum sheets between the housing and collimator)",
      "Filtration inside the glass envelope window only",
      "Filtration provided exclusively by patient tissue",
      "Filtration inside the Bucky tray grid",
    ],
    answer: 0,
    explanation:
      "Any filtration that occurs outside the tube and housing and before the image receptor is considered added, such as a thin sheet of aluminum positioned between the tube housing and collimator[cite: 3].",
  },
  {
    id: "8.1.6",
    domain: "Lesson 8: Scatter Radiation, Filtration, and Patient Exposure",
    question:
      "What is the minimum total filtration requirement for equipment operated above 70 kVp?",
    options: [
      "At least 2.5 mm Al equivalent",
      "At least 0.5 mm Al equivalent",
      "At least 5.0 mm Al equivalent",
      "Exactly 1.0 mm Al equivalent",
    ],
    answer: 0,
    explanation:
      "For equipment operated at 70 kVp and above, the minimum total filtration should be at least 2.5 mm Al[cite: 3].",
  },
  {
    id: "8.1.7",
    domain: "Lesson 8: Scatter Radiation, Filtration, and Patient Exposure",
    question:
      "What does a Half Value Layer (HVL) of less than 2.5 mm Al indicate?",
    options: [
      "Insufficient filtration",
      "Excessive filtration",
      "Optimal beam quality",
      "Zero scatter radiation",
    ],
    answer: 0,
    explanation:
      "An HVL less than 2.5 mm indicates insufficient filtration; if HVL is at the appropriate level, total filtration is adequate to protect patients from unnecessary low energy radiation[cite: 3].",
  },
  {
    id: "8.1.8",
    domain: "Lesson 8: Scatter Radiation, Filtration, and Patient Exposure",
    question: "What are the primary factors affecting scatter radiation?",
    options: [
      "Kilovoltage (kVp), Part Thickness, and Tissue Density (Field size is also a major factor)",
      "SID, OID, and Focal spot size",
      "Developer temperature and replenishment rate",
      "Screen speed and film graininess",
    ],
    answer: 0,
    explanation:
      "Factors affecting scatter radiation include Kilovoltage, Part Thickness, Tissue Density, and Field Size[cite: 3].",
  },
  {
    id: "8.1.9",
    domain: "Lesson 8: Scatter Radiation, Filtration, and Patient Exposure",
    question:
      "How does increasing Kilovoltage (kVp) affect scatter radiation production?",
    options: [
      "Increasing kVp increases Compton interactions, which increases the amount of scatter radiation",
      "Increasing kVp decreases Compton interactions and eliminates scatter",
      "Increasing kVp has no impact on scatter",
      "Increasing kVp increases photoelectric absorption exclusively",
    ],
    answer: 0,
    explanation:
      "As kVp increases, a greater proportion of Compton scattering occurs compared to photoelectric absorption, increasing the amount of scatter radiation[cite: 1, 3].",
  },
  {
    id: "8.1.10",
    domain: "Lesson 8: Scatter Radiation, Filtration, and Patient Exposure",
    question:
      "What is the purpose of Compensating Filters, and how do they affect mAs?",
    options: [
      "Designed to solve problems involving unequal subject densities/thicknesses by adding an absorber; requires an increase in mAs",
      "Designed to remove all primary radiation; requires a decrease in mAs",
      "Designed to increase image quantum mottle; requires no change in mAs",
      "Designed to replace collimators during fluoroscopy",
    ],
    answer: 0,
    explanation:
      "Compensating filters are designed to solve problems involving unequal subject densities by adding an absorber to make overall absorption more equal, requiring an increase in mAs[cite: 3].",
  },
];

// App State
let userAnswers = {};
let manualReveals = {};
let revealAllActive = false;

// DOM Elements
const quizContainer = document.getElementById("quiz-container");
const searchInput = document.getElementById("search-input");
const domainSelect = document.getElementById("domain-select");
const hoverPeekCheckbox = document.getElementById("hover-peek-checkbox");
const revealAllBtn = document.getElementById("reveal-all-btn");
const resetBtn = document.getElementById("reset-btn");
const scoreVal = document.getElementById("score-val");
const answeredVal = document.getElementById("answered-val");
const showingVal = document.getElementById("showing-val");

const optionLetters = ["A", "B", "C", "D"];

function syncHoverClass() {
  if (hoverPeekCheckbox.checked) {
    document.body.classList.add("hover-peek-enabled");
  } else {
    document.body.classList.remove("hover-peek-enabled");
  }
}

function updateScoreStats(filteredCount) {
  let correctCount = 0;
  const answeredIds = Object.keys(userAnswers);

  answeredIds.forEach((qId) => {
    const qObj = questionsData.find((q) => q.id === qId);
    if (qObj && userAnswers[qId] === qObj.answer) {
      correctCount++;
    }
  });

  scoreVal.textContent = correctCount;
  answeredVal.textContent = answeredIds.length;
  showingVal.textContent = filteredCount;
}

function renderQuiz() {
  const query = searchInput.value.trim().toLowerCase();
  const selectedDomain = domainSelect.value;

  const filteredQuestions = questionsData.filter((q) => {
    const matchesDomain =
      selectedDomain === "all" || q.domain === selectedDomain;
    const matchesSearch =
      !query ||
      q.id.toLowerCase().includes(query) ||
      q.question.toLowerCase().includes(query) ||
      q.explanation.toLowerCase().includes(query) ||
      q.options.some((opt) => opt.toLowerCase().includes(query));

    return matchesDomain && matchesSearch;
  });

  updateScoreStats(filteredQuestions.length);
  quizContainer.innerHTML = "";

  if (filteredQuestions.length === 0) {
    quizContainer.innerHTML = `
      <div class="empty-state">
        <p>No questions match your current search or domain filter.</p>
      </div>
    `;
    return;
  }

  const grouped = {};
  filteredQuestions.forEach((q) => {
    if (!grouped[q.domain]) {
      grouped[q.domain] = [];
    }
    grouped[q.domain].push(q);
  });

  Object.keys(grouped).forEach((domainName) => {
    const domainSection = document.createElement("section");
    domainSection.className = "domain-section";

    const domainHeader = document.createElement("h2");
    domainHeader.className = "domain-header";
    domainHeader.textContent = domainName;
    domainSection.appendChild(domainHeader);

    grouped[domainName].forEach((q) => {
      const card = document.createElement("article");
      card.className = "question-card";

      const hasAnswered = userAnswers.hasOwnProperty(q.id);
      const userChoice = userAnswers[q.id];
      const isRevealed = revealAllActive || manualReveals[q.id] || hasAnswered;

      const optionsHtml = q.options
        .map((optText, idx) => {
          let stateClass = "";
          if (hasAnswered) {
            if (idx === q.answer) {
              stateClass = "selected-correct";
            } else if (idx === userChoice && userChoice !== q.answer) {
              stateClass = "selected-wrong";
            }
          }

          return `
            <button 
              type="button" 
              class="option-btn ${stateClass}" 
              data-qid="${q.id}" 
              data-opt="${idx}"
            >
              <span class="option-letter">${optionLetters[idx]}.</span>
              <span>${optText}</span>
            </button>
          `;
        })
        .join("");

      card.innerHTML = `
        <div class="question-badge">QUESTION ${q.id}</div>
        <p class="question-text">${q.question}</p>
        <div class="options-list">
          ${optionsHtml}
        </div>
        <div class="peek-box ${isRevealed ? "revealed" : ""}" data-peek-qid="${q.id}">
          <div class="peek-prompt">
            <span>🖱️ Move mouse pointer here or Click to reveal Answer & Explanation</span>
          </div>
          <div class="peek-content">
            <div class="peek-answer-title">Correct Answer: ${optionLetters[q.answer]}. ${q.options[q.answer]}</div>
            <div class="peek-explanation">${q.explanation}</div>
          </div>
        </div>
      `;

      domainSection.appendChild(card);
    });

    quizContainer.appendChild(domainSection);
  });
}

quizContainer.addEventListener("click", (e) => {
  const optionBtn = e.target.closest(".option-btn");
  if (optionBtn) {
    const qId = optionBtn.getAttribute("data-qid");
    const optIdx = parseInt(optionBtn.getAttribute("data-opt"), 10);
    userAnswers[qId] = optIdx;
    manualReveals[qId] = true;
    renderQuiz();
    return;
  }

  const peekBox = e.target.closest(".peek-box");
  if (peekBox) {
    const qId = peekBox.getAttribute("data-peek-qid");
    manualReveals[qId] = !manualReveals[qId];
    renderQuiz();
  }
});

searchInput.addEventListener("input", renderQuiz);
domainSelect.addEventListener("change", renderQuiz);
hoverPeekCheckbox.addEventListener("change", syncHoverClass);

// Insert Shuffle Button dynamically into controls row if not already there
const controlsRow = document.querySelector(".controls-row");
if (controlsRow && !document.getElementById("shuffle-btn")) {
  const shuffleBtn = document.createElement("button");
  shuffleBtn.id = "shuffle-btn";
  shuffleBtn.className = "ctrl-btn";
  shuffleBtn.textContent = "🔀 Shuffle";
  shuffleBtn.title = "Shuffle question order";
  shuffleBtn.addEventListener("click", () => {
    // Fisher-Yates shuffle algorithm
    for (let i = questionsData.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [questionsData[i], questionsData[j]] = [
        questionsData[j],
        questionsData[i],
      ];
    }
    renderQuiz();
  });
  controlsRow.insertBefore(shuffleBtn, revealAllBtn);
}

revealAllBtn.addEventListener("click", () => {
  revealAllActive = !revealAllActive;
  revealAllBtn.textContent = revealAllActive ? "Hide All" : "Reveal All";
  revealAllBtn.classList.toggle("active-btn", revealAllActive);
  renderQuiz();
});

resetBtn.addEventListener("click", () => {
  userAnswers = {};
  manualReveals = {};
  revealAllActive = false;
  revealAllBtn.textContent = "Reveal All";
  revealAllBtn.classList.remove("active-btn");
  searchInput.value = "";
  domainSelect.value = "all";
  renderQuiz();
});

syncHoverClass();
renderQuiz();
