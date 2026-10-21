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
      "Radiographic contrast is defined as the degree of difference between adjacent densities and is one of the two photographic properties comprising visibility of detail.",
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
      "Visibility of detail refers to the fact that the radiographic image is visible to the human eye only because sufficient contrast and density exist to permit structural details to be perceived.",
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
      "A high-contrast film emulsion contains smaller silver halide grains with a relatively uniform size.",
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
      "Contrast is always lower for a film exposed to x-rays only (direct exposure) than when exposed with an intensifying screen (IS).",
  },
  {
    id: "6.1.5",
    domain: "Lesson 6: Radiographic Contrast",
    question:
      "What happens to film contrast when developer time, developer temperature, or replenishment rate is excessively increased?",
    options: [
      "Chemical fog decreases and radiographic contrast increases",
      "Chemical fog increases on the film, which adversely reduces contrast",
      "Base fog is eliminated, producing a short-scale contrast image",
      "Film contrast remains completely unaffected by processing conditions",
    ],
    answer: 1,
    explanation:
      "Increasing developer time, temperature, or replenishment rate increases chemical fog on the film. When any processing factor changes base fog, contrast is decreased.",
  },
  {
    id: "6.1.6",
    domain: "Lesson 6: Radiographic Contrast",
    question:
      "Which type of contrast is defined as the range of differences in the intensity of the x-ray beam AFTER it has been attenuated by the patient?",
    options: [
      "Film (Image Receptor) Contrast",
      "Subject Contrast",
      "Processor Contrast",
      "Psychovisual Contrast",
    ],
    answer: 1,
    explanation:
      "Subject contrast is the range of differences in the intensity of the x-ray beam after it has been attenuated by the subject, depending on kVp and the amount/type of irradiated material.",
  },
  {
    id: "6.1.7",
    domain: "Lesson 6: Radiographic Contrast",
    question: "Which three components directly make up Subject Contrast?",
    options: [
      "Film type, Direct exposure, and Intensifying screen",
      "Kilovoltage, Tissue composition, and Contrast medium",
      "Focal spot size, SID, and OID",
      "Developer time, Fixer temperature, and Wash rate",
    ],
    answer: 1,
    explanation:
      "Subject contrast is determined by (1) Kilovoltage, (2) Tissue composition, and (3) Contrast Medium.",
  },
  {
    id: "6.1.8",
    domain: "Lesson 6: Radiographic Contrast",
    question:
      "As long as kVp is adequate to penetrate the anatomic part, how does a LOW kVp affect subject contrast?",
    options: [
      "Low kVp produces low subject contrast (long scale)",
      "Low kVp produces high subject contrast (short scale)",
      "Low kVp causes uniform penetration across thick and thin parts",
      "Low kVp increases Compton scatter and reduces contrast",
    ],
    answer: 1,
    explanation:
      "Low kVp produces higher subject contrast because most low-energy photons are absorbed by thicker parts while more penetrate thinner parts, creating greater density differences.",
  },
  {
    id: "6.1.9",
    domain: "Lesson 6: Radiographic Contrast",
    question:
      "Why does increasing kVp cause a decrease in radiographic contrast?",
    options: [
      "Higher kVp causes more uniform penetration and increases the percentage of Compton scatter interactions",
      "Higher kVp eliminates Compton scattering and increases photoelectric absorption",
      "Higher kVp prevents x-ray photons from reaching the image receptor",
      "Higher kVp reduces the number of gray shades visible on the image",
    ],
    answer: 0,
    explanation:
      "With high kVp, more uniform penetration occurs between thick and thin parts, and the percentage of Compton interactions increases, creating more scatter radiation (fog) and decreasing contrast.",
  },
  {
    id: "6.1.10",
    domain: "Lesson 6: Radiographic Contrast",
    question:
      "Why is a high kVp technique preferred for routine Chest Radiography?",
    options: [
      "To produce only black and white densities with no intermediate gray shades",
      "To produce a wide range of visible densities that visualize air-filled lungs, soft tissues, and bony structures simultaneously",
      "To maximize photoelectric absorption in the ribs and obscure pulmonary vessels",
      "To increase patient radiation dose for better bone detail",
    ],
    answer: 1,
    explanation:
      "High kVp in chest examinations results in a wide range of radiographic densities (long scale) so air-filled lungs, soft-tissues, and bony structures (with pulmonary vessels visible behind ribs) are all visualized.",
  },
  {
    id: "6.1.11",
    domain: "Lesson 6: Radiographic Contrast",
    question:
      "Why is a LOW kVp technique used in Rib Examinations (Thoracic Bone Cage / TBC) compared to a standard chest x-ray?",
    options: [
      "To decrease contrast between the ribs and the lungs",
      "To enhance the differences (high contrast) between the air-filled lungs and the overlying bony structures",
      "To increase the scale of contrast so the ribs blend into the lung fields",
      "To increase Compton scatter reaching the image receptor",
    ],
    answer: 1,
    explanation:
      "Low kVp is used in rib examinations to enhance the contrast differences between the air-filled lungs and the overlying bony structures.",
  },
  {
    id: "6.1.12",
    domain: "Lesson 6: Radiographic Contrast",
    question:
      "How does the atomic number of an irradiated material influence radiographic contrast?",
    options: [
      "Materials with lower atomic numbers (like hydrogen and carbon) absorb a greater percentage of the beam",
      "The greater the atomic number (like lead and iodine), the higher the x-ray absorption and the higher the contrast",
      "Atomic number has no effect on x-ray attenuation or contrast",
      "Higher atomic number materials decrease subject contrast",
    ],
    answer: 1,
    explanation:
      "High atomic number materials like lead and iodine absorb a much greater percentage of the x-ray beam than low atomic number materials (hydrogen, carbon). The greater the atomic number, the higher the contrast.",
  },
  {
    id: "6.1.13",
    domain: "Lesson 6: Radiographic Contrast",
    question:
      "What term defines the number of useful visible densities or shades of gray on a radiograph?",
    options: [
      "Exposure Latitude",
      "Scale of Contrast",
      "Edge Gradient",
      "Magnification Factor",
    ],
    answer: 1,
    explanation:
      "Scale of Contrast is the number of useful visible densities or shades of gray on a radiographic image.",
  },
  {
    id: "6.1.14",
    domain: "Lesson 6: Radiographic Contrast",
    question:
      "Which set of characteristics accurately describes HIGH contrast?",
    options: [
      "Many shades of gray, high kVp, long-scale, wide latitude",
      "Few shades of gray, low kVp, short-scale, great differences between adjacent densities",
      "Minimal differences between adjacent densities and long-scale latitude",
      "High Compton scatter and many subtle gray tones",
    ],
    answer: 1,
    explanation:
      "High contrast is characterized by great differences between adjacent densities, resulting in fewer shades of gray, short-scale (narrow exposure latitude), and is produced using low kVp.",
  },
  {
    id: "6.1.15",
    domain: "Lesson 6: Radiographic Contrast",
    question:
      "Why does a LOW contrast (long-scale) radiograph generally provide more diagnostic information?",
    options: [
      "Because it contains only pure black and pure white areas",
      "Because more densities (shades of gray) are present within the visible range, forming more contrast differences",
      "Because it uses a very low kVp that absorbs all photons in soft tissue",
      "Because it eliminates all intermediate shades of gray",
    ],
    answer: 1,
    explanation:
      "Low contrast (long-scale) provides more diagnostic information because more visible densities (shades of gray) are present on the image.",
  },
  {
    id: "6.1.16",
    domain: "Lesson 6: Radiographic Contrast",
    question:
      "Compare the inherent subject contrast of the Chest versus the Abdomen:",
    options: [
      "The chest has low subject contrast, whereas the abdomen has high subject contrast",
      "The chest has HIGH subject contrast (great variation in tissue composition), whereas the abdomen has LOW subject contrast (similar tissue types)",
      "Both the chest and abdomen have high subject contrast",
      "Both the chest and abdomen have low subject contrast",
    ],
    answer: 1,
    explanation:
      "The chest is an area of high subject contrast due to wide tissue variations (air, soft tissue, bone), while the abdomen has low subject contrast because it consists of similar soft-tissue densities.",
  },
  {
    id: "6.1.17",
    domain: "Lesson 6: Radiographic Contrast",
    question:
      "How does creating an 'air gap' (increasing the Object-to-Image Receptor Distance / OID) affect radiographic contrast?",
    options: [
      "It increases scatter striking the receptor and lowers contrast",
      "It prevents scatter radiation from striking the image receptor, which increases radiographic contrast",
      "It decreases radiographic contrast by hardening the primary beam",
      "It has no effect on scatter radiation or contrast",
    ],
    answer: 1,
    explanation:
      "When sufficient distance exists between the object and the image receptor, an air gap is created that allows diverging scatter radiation to miss the receptor, thereby increasing radiographic contrast.",
  },
  {
    id: "6.1.18",
    domain: "Lesson 6: Radiographic Contrast",
    question:
      "Which of the following correctly distinguishes POSITIVE contrast media from NEGATIVE contrast media?",
    options: [
      "Positive contrast media (Air, CO2) decrease attenuation; Negative contrast media (Barium, Iodine) increase attenuation",
      "Positive contrast media (Barium, Iodine) absorb more x-rays and increase attenuation; Negative contrast media (Air, CO2) let x-rays pass easily and decrease attenuation",
      "Both positive and negative contrast media require a decrease in exposure factors",
      "Negative contrast media have a higher atomic number than positive contrast media",
    ],
    answer: 1,
    explanation:
      "Positive contrast media (Barium and Iodine) absorb more x-rays, increasing attenuation and requiring an INCREASE in exposure factors. Negative contrast media (Air and Carbon Dioxide) decrease attenuation.",
  },

  // =========================================================================
  // DOMAIN 2: LESSON 7 - RADIOGRAPHIC DEFINITION & DISTORTION
  // =========================================================================
  {
    id: "7.1.1",
    domain: "Lesson 7: Radiographic Definition & Distortion",
    question:
      "What term refers to the clarity and sharpness of a radiographic image that outlines objects extremely well and shows minimum magnification and distortion?",
    options: [
      "Exposure Latitude",
      "Maximum Definition (Radiographic Definition)",
      "Quantum Mottle",
      "Anode Heel Effect",
    ],
    answer: 1,
    explanation:
      "Maximum definition (radiographic definition) refers to the clarity and sharpness of the radiographic image, outlining objects extremely well with minimum magnification and distortion.",
  },
  {
    id: "7.1.2",
    domain: "Lesson 7: Radiographic Definition & Distortion",
    question:
      "In radiographic geometry, what is the difference between the 'Umbra' and the 'Penumbra'?",
    options: [
      "Umbra is the blurred outer edge; Penumbra is the true object shadow",
      "Umbra is the true object (complete shadow) recorded on the film; Penumbra is the thin blurred area (edge gradient/geometric unsharpness) around the umbra",
      "Umbra is caused by motion; Penumbra is caused by chemical fog",
      "Umbra only occurs with large focal spots; Penumbra only occurs with point sources",
    ],
    answer: 1,
    explanation:
      "The umbra is the true object (complete shadow) recorded on the film, while the penumbra is the thin blurred area around the umbra (also called edge gradient or geometric unsharpness) that limits definition.",
  },
  {
    id: "7.1.3",
    domain: "Lesson 7: Radiographic Definition & Distortion",
    question:
      "Why is penumbra (geometric unsharpness) always present to some degree on a clinical radiograph?",
    options: [
      "Because patients always move during an exposure",
      "Because x-ray photons do not originate from a true point source, but rather from a focal 'area' on the target (actual focal spot), and anatomy cannot be placed directly at zero OID",
      "Because all radiographs use compensating filters",
      "Because developer temperature is always fluctuating",
    ],
    answer: 1,
    explanation:
      "Penumbra occurs because radiation originates from an area on the target (actual focal spot) rather than a single point source, and anatomical parts inside the body have some OID.",
  },
  {
    id: "7.1.4",
    domain: "Lesson 7: Radiographic Definition & Distortion",
    question:
      "Which combination of geometric factors produces the BEST recorded detail (minimum penumbra/unsharpness)?",
    options: [
      "Large focal spot, Short SID (FFD), Long OID (OFD)",
      "Small focal spot, Long SID (FFD), Short OID (OFD)",
      "Large focal spot, Long SID (FFD), Long OID (OFD)",
      "Small focal spot, Short SID (FFD), Long OID (OFD)",
    ],
    answer: 1,
    explanation:
      "Recorded detail is maximized (and penumbra minimized) by using a small focal spot size, a longer Source-to-Image Receptor Distance (SID/FFD), and a shorter Object-to-Image Receptor Distance (OID/OFD).",
  },
  {
    id: "7.1.5",
    domain: "Lesson 7: Radiographic Definition & Distortion",
    question:
      "How does the width of the primary x-ray beam affect geometric unsharpness?",
    options: [
      "A wide-angle primary beam reduces unsharpness compared to a narrow-angle beam",
      "A wide-angle primary beam increases unsharpness (penumbra), whereas a narrow-angle beam reduces unsharpness",
      "Beam width has no effect on penumbra",
      "Narrow beams eliminate the umbra",
    ],
    answer: 1,
    explanation:
      "A wide-angle primary beam results in more unsharpness (penumbra) than a narrow-angle primary beam.",
  },
  {
    id: "7.1.6",
    domain: "Lesson 7: Radiographic Definition & Distortion",
    question:
      "Why does a circular or rounded anatomical object demonstrate greater 'absorption unsharpness' than a flat-sided square object?",
    options: [
      "Because circular objects reflect x-rays backward toward the tube",
      "Because the varying thicknesses toward the curved edge cause gradual photon absorption changes, making the edges blend with the background",
      "Because circular objects cannot be radiographed with a grid",
      "Because circular objects increase the focal spot size",
    ],
    answer: 1,
    explanation:
      "Absorption unsharpness occurs due to varying photon absorption across different thicknesses of an object's shape. A circular object has gradually tapering edges that blend with the background.",
  },
  {
    id: "7.1.7",
    domain: "Lesson 7: Radiographic Definition & Distortion",
    question:
      "Where is involuntary motion most commonly encountered, and what is the primary technical method to control it?",
    options: [
      "Encountered in extremity exams; controlled by using a long exposure time and low mA",
      "Encountered in the GI tract, cardiovascular system, and unconscious patients; controlled by using the shortest possible exposure time",
      "Encountered only in adult chest exams; controlled by decreasing kVp",
      "Encountered in bone radiography; controlled by increasing OID",
    ],
    answer: 1,
    explanation:
      "Involuntary motion is common in the gastrointestinal tract, cardiovascular system, and unconscious patients. Using the shortest possible exposure time (along with immobilization tools when applicable) is the best way to minimize motion artifacts.",
  },
  {
    id: "7.1.8",
    domain: "Lesson 7: Radiographic Definition & Distortion",
    question:
      "What causes 'Quantum Mottle' (noise), and under what exposure conditions is it most apparent?",
    options: [
      "Uneven silver crystals in the film base; most apparent with slow screens and high mAs",
      "Statistical variations in photon absorption; appears as a 'snowy' effect and is most apparent with high-speed screens, high kVp, and low mAs exposures",
      "Chemical stains from dirty processor rollers; most apparent at low developer temperatures",
      "Misalignment of the x-ray tube and Bucky tray; most apparent at long SID",
    ],
    answer: 1,
    explanation:
      "Quantum mottle is a 'snowy' noise caused by variations in photon absorption when too few photons are used, occurring primarily with high-speed screens, high kVp, and low mAs settings.",
  },
  {
    id: "7.1.9",
    domain: "Lesson 7: Radiographic Definition & Distortion",
    question:
      "How does the thickness of an intensifying screen's phosphor layer affect screen speed and recorded detail?",
    options: [
      "Thicker phosphor layers decrease speed and increase recorded detail",
      "Thicker phosphor layers increase speed (absorbing more photons) but cause greater light diffusion, which increases unsharpness",
      "Thicker phosphor layers eliminate light diffusion completely",
      "Phosphor layer thickness has no impact on light diffusion",
    ],
    answer: 1,
    explanation:
      "Thicker phosphor layers increase system speed by absorbing more photons (reducing patient dose), but they lead to greater light diffusion, which degrades recorded detail.",
  },
  {
    id: "7.1.10",
    domain: "Lesson 7: Radiographic Definition & Distortion",
    question:
      "Why are Rare Earth phosphor screens preferred for high-quality imaging?",
    options: [
      "They require much thicker phosphor layers and higher mAs",
      "They are more efficient, allowing for thinner phosphor layers that produce minimal light diffusion and improve sharpness",
      "They completely eliminate the need for film processing",
      "They increase quantum mottle to sharpen bone edges",
    ],
    answer: 1,
    explanation:
      "Rare earth phosphors are more efficient at absorbing x-rays and converting them to light, allowing for thinner layers that minimize light diffusion and yield higher recorded detail.",
  },
  {
    id: "7.1.11",
    domain: "Lesson 7: Radiographic Definition & Distortion",
    question:
      "How is the image resolution (resolving power) of a screen-film system measured?",
    options: [
      "In Half Value Layers (mm Al) using an ionization chamber",
      "In line pairs per millimeter (line pairs/mm) using a leaded bar-test pattern",
      "In milliampere-seconds (mAs) using a step-wedge penetrometer",
      "In optical density units using a densitometer",
    ],
    answer: 1,
    explanation:
      "Image resolution is evaluated using a leaded bar-test pattern (where 1 line pair = 1 lead bar + 1 interspace) and is measured in line pairs per millimeter (line pairs/mm). High-quality systems typically demonstrate 8–10 line pairs/mm.",
  },
  {
    id: "7.1.12",
    domain: "Lesson 7: Radiographic Definition & Distortion",
    question: "What are the two primary categories of radiographic distortion?",
    options: [
      "Size distortion (magnification) and Shape distortion (elongation and foreshortening)",
      "Umbra distortion and Penumbra distortion",
      "Contrast distortion and Density distortion",
      "Inherent distortion and Added distortion",
    ],
    answer: 0,
    explanation:
      "The two primary types of distortion in radiology are size distortion (magnification) and shape distortion (true distortion: elongation and foreshortening).",
  },
  {
    id: "7.1.13",
    domain: "Lesson 7: Radiographic Definition & Distortion",
    question:
      "Using the Magnification Factor formula M = FFD / (FFD - OFD), what is the magnification factor and resulting image size for a 2.5 cm object located at a 4-inch OFD with a 40-inch FFD?",
    options: [
      "M = 1.0; Image size = 2.5 cm",
      "M = 1.1; Image size = 2.75 cm (or 2.8 cm)",
      "M = 1.5; Image size = 3.75 cm",
      "M = 2.0; Image size = 5.0 cm",
    ],
    answer: 1,
    explanation:
      "M = 40 / (40 - 4) = 40 / 36 = 1.1. Image Size = Actual Size × M = 2.5 cm × 1.1 = 2.75 cm (rounded to 2.8 cm).",
  },
  {
    id: "7.1.14",
    domain: "Lesson 7: Radiographic Definition & Distortion",
    question:
      "In shape distortion (true distortion), what is the difference between 'Foreshortening' and 'Elongation'?",
    options: [
      "Foreshortening makes the object appear longer; Elongation makes the object appear shorter",
      "Foreshortening makes the object appear shorter due to improper part-to-film alignment; Elongation makes the object appear longer due to misalignment",
      "Foreshortening is caused by OID; Elongation is caused by SID",
      "Both foreshortening and elongation represent uniform magnification without shape change",
    ],
    answer: 1,
    explanation:
      "Shape distortion results from improper alignment of the tube, part, and film: foreshortening makes the object appear shorter than its true size, whereas elongation makes it appear longer.",
  },
  {
    id: "7.1.15",
    domain: "Lesson 7: Radiographic Definition & Distortion",
    question:
      "According to Table 11-4 (Radiographic Quality), what are the primary CONTROLLING factors for Density, Contrast, Definition, and Distortion respectively?",
    options: [
      "Density: kVp | Contrast: mAs | Definition: Alignment | Distortion: Screens",
      "Density: mAs | Contrast: kVp | Definition: Focal spot size, OFD, Screens, Motion | Distortion: Alignment of Part, Film, and Tube",
      "Density: SID | Contrast: Grids | Definition: kVp | Distortion: mAs",
      "Density: Filtration | Contrast: Processing | Definition: Collimation | Distortion: Focal spot",
    ],
    answer: 1,
    explanation:
      "Table 11-4 lists the controlling factors as: Density = mAs; Contrast = kVp; Definition = Focal spot size, Object-film distance, Screens, Motion; Distortion = Alignment of Part, Film, and Tube.",
  },

  // =========================================================================
  // DOMAIN 3: LESSON 8 - SCATTER RADIATION, FILTRATION, AND PATIENT EXPOSURE
  // =========================================================================
  {
    id: "8.1.1",
    domain: "Lesson 8: Scatter Radiation, Filtration, and Patient Exposure",
    question:
      "What is the primary purpose of filtration (also called 'hardening the beam') in diagnostic radiography?",
    options: [
      "To remove high-energy penetrating photons so contrast is increased",
      "To selectively eliminate undesirable low-energy ('soft') x-ray photons that would be absorbed by the patient and have little chance of reaching the image receptor",
      "To increase the total number (quantity) of photons in the primary beam",
      "To absorb scatter radiation exiting the patient before it hits the film",
    ],
    answer: 1,
    explanation:
      "Filtration selectively removes low-energy (long-wavelength, 'soft') x-ray photons from the primary beam by inserting absorbing materials, reducing patient radiation dose.",
  },
  {
    id: "8.1.2",
    domain: "Lesson 8: Scatter Radiation, Filtration, and Patient Exposure",
    question:
      "As x-ray beam filtration is increased, what happens to the x-ray beam's QUALITY and QUANTITY?",
    options: [
      "Beam quality increases (higher average energy) and beam quantity decreases (fewer total photons)",
      "Beam quality decreases and beam quantity increases",
      "Both beam quality and beam quantity increase",
      "Both beam quality and beam quantity decrease",
    ],
    answer: 0,
    explanation:
      "Increasing filtration removes low-energy photons, which increases the average energy (quality) of the beam while decreasing the total number of photons (quantity).",
  },
  {
    id: "8.1.3",
    domain: "Lesson 8: Scatter Radiation, Filtration, and Patient Exposure",
    question:
      "Why is Aluminum (Z = 13) the most widely used material for diagnostic x-ray filters?",
    options: [
      "It has the highest atomic number of all metals",
      "It is efficient in removing low-energy x-rays, readily available, inexpensive, and easily shaped",
      "It increases the quantity of soft x-rays in the primary beam",
      "It is liquid at room temperature and cools the x-ray tube",
    ],
    answer: 1,
    explanation:
      "Aluminum (Z = 13) is the standard filter material because it efficiently removes low-energy photons, is readily available, inexpensive, and easily shaped. Other filter materials include Copper (Z=29), Tin (Z=50), Gadolinium (Z=64), and Holmium (Z=67).",
  },
  {
    id: "8.1.4",
    domain: "Lesson 8: Scatter Radiation, Filtration, and Patient Exposure",
    question:
      "What is 'Inherent Filtration' in a general-purpose x-ray tube, and what is its typical value?",
    options: [
      "Filtration from aluminum sheets outside the port; typically 2.0 mm Al equivalent",
      "Filtration resulting from the composition of the tube and housing (mainly the glass envelope window); approximately 0.5 mm Al equivalent",
      "Filtration from wedge filters attached to the collimator; typically 3.5 mm Al equivalent",
      "Filtration from the patient's soft tissue; typically 5.0 mm Al equivalent",
    ],
    answer: 1,
    explanation:
      "Inherent filtration results from the tube and housing (mostly the window of the glass envelope) and equals approximately 0.5 mm Al equivalent in a general-purpose tube.",
  },
  {
    id: "8.1.5",
    domain: "Lesson 8: Scatter Radiation, Filtration, and Patient Exposure",
    question:
      "How does the age of an x-ray tube affect its inherent filtration?",
    options: [
      "Inherent filtration decreases as the glass window thins over time",
      "Inherent filtration tends to increase with age because vaporized tungsten from the target and filament is deposited on the inside of the window",
      "Age has zero effect on inherent filtration",
      "Inherent filtration converts into compensating filtration over time",
    ],
    answer: 1,
    explanation:
      "With age, inherent filtration increases because tungsten metal from both the target and filament vaporizes and deposits on the inside surface of the tube window.",
  },
  {
    id: "8.1.6",
    domain: "Lesson 8: Scatter Radiation, Filtration, and Patient Exposure",
    question:
      "What are the two main sources of 'Added Filtration' in a standard diagnostic x-ray tube assembly, and what is the minimum required TOTAL filtration above 70 kVp?",
    options: [
      "0.5 mm Al inherent + 0.5 mm Al collimator = 1.0 mm Al total",
      "1.0 mm Al sheets at the port + 1.0 mm Al equivalent from the collimator mirror (plus 0.5 mm Al inherent) = 2.5 mm Al minimum total filtration",
      "2.5 mm Al inherent + 2.5 mm Al added = 5.0 mm Al total",
      "Compensating wedge filter + Bucky grid = 2.5 mm Al total",
    ],
    answer: 1,
    explanation:
      "Total filtration equals Inherent filtration (0.5 mm Al) + Added filtration (1.0 mm Al sheets + 1.0 mm Al collimator mirror) = 2.5 mm Al minimum total filtration for equipment operated at 70 kVp and above.",
  },
  {
    id: "8.1.7",
    domain: "Lesson 8: Scatter Radiation, Filtration, and Patient Exposure",
    question:
      "What is the 'Half Value Layer' (HVL), and what is its typical range for a diagnostic x-ray beam?",
    options: [
      "The thickness of tissue needed to double the x-ray intensity; typically 10–12 mm Al",
      "The amount of absorbing material that reduces the intensity of the primary beam to one-half (50%) its original value; typically 3 to 5 mm Al (or 3 to 6 cm of soft tissue)",
      "The time required for half of the x-ray photons to decay; typically 2.5 seconds",
      "The thickness of the intensifying screen phosphor layer; typically 150–300 mm",
    ],
    answer: 1,
    explanation:
      "HVL is the amount of absorbing material that reduces the primary beam intensity to 50% of its original value. It is the best method for specifying x-ray quality and usually ranges from 3 to 5 mm Al (with a minimum of 2.5 mm Al at ≥70 kVp).",
  },
  {
    id: "8.1.8",
    domain: "Lesson 8: Scatter Radiation, Filtration, and Patient Exposure",
    question:
      "What is the purpose of a 'Compensating Filter', and how should technical factors be adjusted when using one?",
    options: [
      "To compensate for unequal subject thicknesses/densities (thick part of filter placed over less dense body part); requires an INCREASE in mAs to maintain overall density",
      "To match the thick part of the filter to the thickest body part; requires a DECREASE in mAs",
      "To replace the radiographic grid during abdominal exams; requires no change in mAs",
      "To increase scatter radiation in thin body parts",
    ],
    answer: 0,
    explanation:
      "Compensating filters produce more uniform radiographic density across anatomical parts with unequal thickness/density by placing the thicker filter portion over the less dense body part. Their use requires an increase in mAs.",
  },
  {
    id: "8.1.9",
    domain: "Lesson 8: Scatter Radiation, Filtration, and Patient Exposure",
    question:
      "Which compensating filter is correctly matched with its clinical application?",
    options: [
      "Trough (Bilateral Wedge) Filter: Positioned with thin center over the mediastinum and thick lateral portions over the lungs in chest exams",
      "Bow-Tie Filter: Placed directly under the patient's shoulder in conventional radiography",
      "Boomerang Filter: Used exclusively inside Computed Tomography (CT) gantries",
      "Conic Filter: Used only for AP Foot and AP Femur radiographs",
    ],
    answer: 0,
    explanation:
      "Trough (bilateral wedge) filters have a thin central region over the mediastinum and thick lateral wedges over the lungs. Wedge filters are used for AP Foot/AP Femur; Boomerang filters go under the patient's shoulder; Bow-tie filters are used in CT; Conic filters are used in digital fluoroscopy; Step-wedge filters are used in serial angiography of the abdomen/lower limbs.",
  },
  {
    id: "8.1.10",
    domain: "Lesson 8: Scatter Radiation, Filtration, and Patient Exposure",
    question:
      "What is 'Backscatter Radiation', and how does Leaded Rubber Masking help control it?",
    options: [
      "Radiation leaking from the tube housing; controlled by increasing kVp",
      "Radiation created when the primary beam strikes the table-top or structures behind the patient; leaded rubber masking absorbs unused primary beam photons so less scatter reaches the patient and image receptor",
      "Radiation reflected off the ceiling; controlled by removing the collimator",
      "Radiation absorbed by the intensifying screen; controlled by prone positioning",
    ],
    answer: 1,
    explanation:
      "Backscatter occurs when the primary beam strikes the table-top and scatters back toward the patient and image receptor. Leaded rubber masking absorbs primary photons that miss the patient, reducing backscatter and improving contrast.",
  },
  {
    id: "8.1.11",
    domain: "Lesson 8: Scatter Radiation, Filtration, and Patient Exposure",
    question:
      "Which two practical techniques are specifically recommended to reduce part thickness (and thus reduce scatter radiation) when radiographing thick anatomical regions like the abdomen?",
    options: [
      "Using compression bands and positioning the patient prone",
      "Increasing the field size and using a supine position",
      "Removing the grid and increasing kVp",
      "Decreasing SID and removing added filtration",
    ],
    answer: 0,
    explanation:
      "Thicker body parts produce more scatter radiation. Using compression bands and positioning the patient prone (for abdominal radiographs) decreases tissue thickness, reducing scatter and improving image contrast and detail.",
  },
];

// App State
let userAnswers = {}; // { questionId: selectedOptionIndex }
let manualReveals = {}; // { questionId: boolean }
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

// Initialize Hover Peek Body Class
function syncHoverClass() {
  if (hoverPeekCheckbox.checked) {
    document.body.classList.add("hover-peek-enabled");
  } else {
    document.body.classList.remove("hover-peek-enabled");
  }
}

// Update Score Pill
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

// Render Quiz Questions
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

  // Group by Domain
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

      // Options HTML
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

// Event Delegation for Option Clicks and Peek Box Clicks
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

// Controls Event Listeners
searchInput.addEventListener("input", renderQuiz);
domainSelect.addEventListener("change", renderQuiz);
hoverPeekCheckbox.addEventListener("change", syncHoverClass);

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

// Initial Boot
syncHoverClass();
renderQuiz();
