export type AnatomyEntry =
  | { type: 'muscle'; origin: string; insertion: string; action: string }
  | {
      type: 'joint'
      bones: string[]
      jointType: string
      classification: string
      axis: string
      actions: string[]
    }
  | { type: 'ligament'; connects: string }
  | { type: 'bone'; description: string }

export const anatomyData: Record<string, AnatomyEntry> = {
  // Muscles
  Iliopsoas: {
    type: 'muscle',
    origin: 'Psoas major: T12–L5 vertebral bodies/transverse processes. Iliacus: iliac fossa.',
    insertion: 'Lesser trochanter of the femur.',
    action: 'Hip flexion; assists external rotation of the hip.',
  },
  'Gluteus Medius': {
    type: 'muscle',
    origin: 'Outer surface of the ilium, between the anterior and posterior gluteal lines.',
    insertion: 'Greater trochanter of the femur (lateral surface).',
    action:
      'Hip abduction; anterior fibers assist internal rotation, posterior fibers assist external rotation; stabilizes the pelvis in single-leg stance.',
  },
  Hamstrings: {
    type: 'muscle',
    origin: 'Ischial tuberosity (long head of biceps femoris also from the sacrotuberous ligament).',
    insertion:
      'Biceps femoris → head of fibula. Semitendinosus/Semimembranosus → medial tibia (pes anserinus / posteromedial tibial condyle).',
    action: 'Knee flexion and hip extension.',
  },
  'Gluteus Maximus': {
    type: 'muscle',
    origin: 'Posterior ilium, sacrum, coccyx, and sacrotuberous ligament.',
    insertion: 'Iliotibial tract and gluteal tuberosity of the femur.',
    action: 'Hip extension and external rotation; upper fibers assist abduction, lower fibers assist adduction.',
  },
  'Latissimus Dorsi': {
    type: 'muscle',
    origin: 'Spinous processes of T7–L5, thoracolumbar fascia, iliac crest, and lower 3–4 ribs.',
    insertion: 'Intertubercular (bicipital) groove of the humerus.',
    action: 'Shoulder extension, adduction, and internal rotation.',
  },
  'Anterior Deltoid': {
    type: 'muscle',
    origin: 'Lateral third of the clavicle.',
    insertion: 'Deltoid tuberosity of the humerus.',
    action: 'Shoulder flexion and internal rotation.',
  },
  'Tibialis Anterior': {
    type: 'muscle',
    origin: 'Lateral condyle and upper lateral shaft of the tibia.',
    insertion: 'Medial cuneiform and base of the first metatarsal.',
    action: 'Dorsiflexion and inversion of the foot.',
  },
  'Tibialis Posterior': {
    type: 'muscle',
    origin: 'Posterior surfaces of the tibia, fibula, and interosseous membrane.',
    insertion: 'Navicular tuberosity, with slips to the cuneiforms and other tarsals.',
    action: 'Plantarflexion and inversion of the foot; supports the medial longitudinal arch.',
  },
  Piriformis: {
    type: 'muscle',
    origin: 'Anterior surface of the sacrum.',
    insertion: 'Greater trochanter of the femur.',
    action: 'External rotation of the hip (hip extended); assists abduction when the hip is flexed to 90°.',
  },
  'Obturator Internus': {
    type: 'muscle',
    origin: 'Internal surface of the obturator membrane and surrounding pelvic bone.',
    insertion: 'Greater trochanter of the femur (medial surface).',
    action: 'External rotation of the hip (hip extended); abduction when the hip is flexed.',
  },
  Quadriceps: {
    type: 'muscle',
    origin: 'Rectus femoris: anterior inferior iliac spine. Vastus lateralis/medialis/intermedius: shaft of the femur.',
    insertion: 'Patella via the quadriceps tendon, continuing as the patellar ligament to the tibial tuberosity.',
    action: 'Knee extension; rectus femoris also flexes the hip.',
  },
  Semimembranosus: {
    type: 'muscle',
    origin: 'Ischial tuberosity.',
    insertion: 'Posteromedial aspect of the medial tibial condyle.',
    action: 'Knee flexion and hip extension; assists internal rotation of the flexed knee.',
  },
  Coracobrachialis: {
    type: 'muscle',
    origin: 'Coracoid process of the scapula.',
    insertion: 'Medial shaft of the humerus.',
    action: 'Shoulder flexion and adduction.',
  },
  Brachialis: {
    type: 'muscle',
    origin: 'Distal anterior shaft of the humerus.',
    insertion: 'Coronoid process and tuberosity of the ulna.',
    action: 'Elbow flexion.',
  },
  Triceps: {
    type: 'muscle',
    origin: 'Long head: infraglenoid tubercle of the scapula. Lateral/medial heads: posterior humeral shaft.',
    insertion: 'Olecranon process of the ulna.',
    action: 'Elbow extension; long head also extends/adducts the shoulder.',
  },
  Supraspinatus: {
    type: 'muscle',
    origin: 'Supraspinous fossa of the scapula.',
    insertion: 'Greater tubercle of the humerus (superior facet).',
    action: 'Initiates shoulder abduction (first ~15°); rotator cuff muscle stabilizing the humeral head.',
  },
  Trapezius: {
    type: 'muscle',
    origin: 'External occipital protuberance, nuchal ligament, spinous processes of C7–T12.',
    insertion: 'Lateral clavicle, acromion, and spine of the scapula.',
    action: 'Scapular elevation, retraction, and (upper/lower fibers together) upward rotation.',
  },
  Deltoid: {
    type: 'muscle',
    origin: 'Lateral clavicle, acromion, and spine of the scapula.',
    insertion: 'Deltoid tuberosity of the humerus.',
    action:
      'Shoulder abduction (all fibers); anterior fibers flex/internally rotate, posterior fibers extend/externally rotate.',
  },
  'Pectoralis Major': {
    type: 'muscle',
    origin: 'Medial clavicle, sternum, and upper costal cartilages.',
    insertion: 'Lateral lip of the intertubercular groove of the humerus.',
    action: 'Shoulder flexion (clavicular head), adduction, and internal rotation.',
  },
  'Pectoralis Minor': {
    type: 'muscle',
    origin: 'Ribs 3–5.',
    insertion: 'Coracoid process of the scapula.',
    action: 'Depresses and protracts (downwardly rotates) the scapula; assists forced inspiration.',
  },
  Subscapularis: {
    type: 'muscle',
    origin: 'Subscapular fossa (anterior surface of the scapula).',
    insertion: 'Lesser tubercle of the humerus.',
    action: 'Internal rotation of the shoulder; rotator cuff muscle stabilizing the humeral head.',
  },
  'Extensor Indicis': {
    type: 'muscle',
    origin: 'Posterior shaft of the ulna and interosseous membrane.',
    insertion: 'Extensor expansion of the index finger.',
    action: 'Extension of the index finger; assists wrist extension.',
  },
  'Flexor Digitorum Longus': {
    type: 'muscle',
    origin: 'Posterior surface of the tibia.',
    insertion: 'Distal phalanges of the lateral four toes.',
    action: 'Flexion of the lateral four toes; assists plantarflexion and inversion.',
  },
  Brachioradialis: {
    type: 'muscle',
    origin: 'Lateral supracondylar ridge of the humerus.',
    insertion: 'Styloid process of the radius.',
    action: 'Elbow flexion (strongest with the forearm in a neutral position).',
  },
  'Flexor Pollicis Longus': {
    type: 'muscle',
    origin: 'Anterior surface of the radius and interosseous membrane.',
    insertion: 'Base of the distal phalanx of the thumb.',
    action: 'Flexes the thumb at the interphalangeal and metacarpophalangeal joints.',
  },
  'Serratus Anterior': {
    type: 'muscle',
    origin: 'Outer surfaces of ribs 1–9.',
    insertion: 'Anterior surface of the medial border of the scapula.',
    action: 'Protracts and upwardly rotates the scapula; stabilizes the scapula against the ribcage.',
  },
  'Teres Minor': {
    type: 'muscle',
    origin: 'Upper lateral border of the scapula.',
    insertion: 'Greater tubercle of the humerus (inferior facet).',
    action: 'External rotation of the shoulder; rotator cuff muscle.',
  },
  'External Oblique': {
    type: 'muscle',
    origin: 'Outer surfaces of ribs 5–12.',
    insertion: 'Iliac crest, pubic tubercle, and linea alba (via aponeurosis).',
    action: 'Trunk flexion; ipsilateral side flexion; contralateral rotation.',
  },
  'Internal Oblique': {
    type: 'muscle',
    origin: 'Iliac crest, inguinal ligament, and thoracolumbar fascia.',
    insertion: 'Lower ribs (10–12) and linea alba.',
    action: 'Trunk flexion; ipsilateral side flexion; ipsilateral rotation.',
  },
  'Biceps Brachii': {
    type: 'muscle',
    origin: 'Long head: supraglenoid tubercle of the scapula. Short head: coracoid process.',
    insertion: 'Radial tuberosity, with the bicipital aponeurosis blending into the forearm fascia.',
    action: 'Elbow flexion and forearm supination; assists shoulder flexion.',
  },
  Rhomboid: {
    type: 'muscle',
    origin: 'Spinous processes of C7–T5.',
    insertion: 'Medial border of the scapula.',
    action: 'Retraction and downward rotation of the scapula.',
  },
  Semitendinosus: {
    type: 'muscle',
    origin: 'Ischial tuberosity.',
    insertion: 'Pes anserinus, on the proximal medial tibia.',
    action: 'Knee flexion and hip extension; assists internal rotation of the flexed knee.',
  },
  'Rectus Abdominis': {
    type: 'muscle',
    origin: 'Pubic crest and pubic symphysis.',
    insertion: 'Costal cartilages of ribs 5–7 and the xiphoid process.',
    action: 'Trunk flexion (flexes the lumbar spine) and posterior pelvic tilt.',
  },
  'Posterior Deltoid': {
    type: 'muscle',
    origin: 'Spine of the scapula.',
    insertion: 'Deltoid tuberosity of the humerus.',
    action: 'Shoulder extension and external rotation; assists horizontal abduction.',
  },
  'Teres Major': {
    type: 'muscle',
    origin: 'Inferior angle of the scapula.',
    insertion: 'Medial lip of the intertubercular groove of the humerus.',
    action: 'Shoulder extension, adduction, and internal rotation.',
  },
  'Extensor Digitorum': {
    type: 'muscle',
    origin: 'Lateral epicondyle of the humerus (common extensor origin).',
    insertion: 'Extensor expansions of the middle and distal phalanges of digits 2–5.',
    action: 'Extends the fingers at the metacarpophalangeal and interphalangeal joints; assists wrist extension.',
  },
  'Abductor Pollicis Brevis': {
    type: 'muscle',
    origin: 'Flexor retinaculum, scaphoid, and trapezium.',
    insertion: 'Lateral side of the base of the proximal phalanx of the thumb.',
    action: 'Abducts the thumb at the carpometacarpal and metacarpophalangeal joints.',
  },
  'Flexor Carpi Ulnaris': {
    type: 'muscle',
    origin: 'Medial epicondyle of the humerus (common flexor origin) and the posterior border of the ulna.',
    insertion: 'Pisiform, hook of the hamate, and base of the 5th metacarpal.',
    action: 'Wrist flexion and ulnar deviation (adduction) of the wrist.',
  },
  Supinator: {
    type: 'muscle',
    origin: 'Lateral epicondyle of the humerus, the annular and radial collateral ligaments, and the supinator crest of the ulna.',
    insertion: 'Proximal lateral surface of the radius — note it ends on the radius, not the ulna.',
    action: 'Supinates the forearm.',
  },
  'Pronator Teres': {
    type: 'muscle',
    origin: 'Medial epicondyle of the humerus and the coronoid process of the ulna.',
    insertion: 'Lateral surface of the mid-shaft of the radius — it ends on the radius, not the ulna.',
    action: 'Pronates the forearm; assists elbow flexion.',
  },

  // Joints
  'Ankle Joint': {
    type: 'joint',
    bones: ['Tibia', 'Fibula', 'Talus'],
    jointType: 'Synovial',
    classification: 'Hinge',
    axis: 'Uniaxial',
    actions: ['Dorsiflexion', 'Plantarflexion'],
  },
  'Patellofemoral Joint': {
    type: 'joint',
    bones: ['Patella', 'Femur'],
    jointType: 'Synovial',
    classification: 'Plane (gliding)',
    axis: 'Non-axial (gliding)',
    actions: ['Gliding of the patella during knee flexion/extension'],
  },
  'Radioulnar Joint': {
    type: 'joint',
    bones: ['Radius', 'Ulna'],
    jointType: 'Synovial',
    classification: 'Pivot',
    axis: 'Uniaxial',
    actions: ['Pronation', 'Supination'],
  },
  'Acromioclavicular Joint': {
    type: 'joint',
    bones: ['Scapula (acromion)', 'Clavicle'],
    jointType: 'Synovial',
    classification: 'Plane (gliding)',
    axis: 'Non-axial (gliding)',
    actions: ['Gliding, contributing to scapular rotation/tilt during arm elevation'],
  },
  'Radiocarpal Joint': {
    type: 'joint',
    bones: ['Radius', 'Scaphoid', 'Lunate', 'Triquetrum'],
    jointType: 'Synovial',
    classification: 'Condyloid (ellipsoid)',
    axis: 'Biaxial',
    actions: ['Flexion', 'Extension', 'Abduction (radial deviation)', 'Adduction (ulnar deviation)'],
  },
  'Subtalar Joint': {
    type: 'joint',
    bones: ['Talus', 'Calcaneus'],
    jointType: 'Synovial',
    classification: 'Plane (gliding)',
    axis: 'Uniaxial (oblique axis)',
    actions: ['Inversion', 'Eversion'],
  },
  'PIP Joint': {
    type: 'joint',
    bones: ['Proximal phalanx', 'Middle phalanx'],
    jointType: 'Synovial',
    classification: 'Hinge',
    axis: 'Uniaxial',
    actions: ['Flexion', 'Extension'],
  },
  'DIP Joint': {
    type: 'joint',
    bones: ['Middle phalanx', 'Distal phalanx'],
    jointType: 'Synovial',
    classification: 'Hinge',
    axis: 'Uniaxial',
    actions: ['Flexion', 'Extension'],
  },
  'Hip Joint': {
    type: 'joint',
    bones: ['Femur', 'Acetabulum'],
    jointType: 'Synovial',
    classification: 'Ball and Socket',
    axis: 'Triaxial',
    actions: ['Flexion', 'Extension', 'Abduction', 'Adduction', 'Internal Rotation', 'External Rotation'],
  },
  'Proximal Radioulnar Joint': {
    type: 'joint',
    bones: ['Radius (head)', 'Ulna (radial notch)'],
    jointType: 'Synovial',
    classification: 'Pivot',
    axis: 'Uniaxial',
    actions: ['Pronation', 'Supination'],
  },
  'Sternoclavicular Joint': {
    type: 'joint',
    bones: ['Sternum (manubrium)', 'Clavicle'],
    jointType: 'Synovial',
    classification: 'Saddle',
    axis: 'Biaxial',
    actions: ['Elevation', 'Depression', 'Protraction', 'Retraction'],
  },
  'C1-C2 Joint': {
    type: 'joint',
    bones: ['Atlas (C1)', 'Axis (C2)'],
    jointType: 'Synovial',
    classification: 'Pivot',
    axis: 'Uniaxial',
    actions: ['Rotation of the head'],
  },
  'Proximal Tibiofibular Joint': {
    type: 'joint',
    bones: ['Tibia', 'Fibula'],
    jointType: 'Synovial',
    classification: 'Plane (gliding)',
    axis: 'Non-axial (gliding)',
    actions: ['Slight gliding accompanying ankle movement'],
  },
  'Atlanto-Occipital Joint': {
    type: 'joint',
    bones: ['Occipital condyles', 'Atlas (C1)'],
    jointType: 'Synovial',
    classification: 'Condyloid (ellipsoid)',
    axis: 'Biaxial',
    actions: ['Flexion/Extension (nodding "yes")', 'Lateral flexion'],
  },
  'Tibiofemoral Joint': {
    type: 'joint',
    bones: ['Tibia', 'Femur'],
    jointType: 'Synovial',
    classification: 'Modified Hinge',
    axis: 'Uniaxial (with a small rotational component when flexed)',
    actions: ['Flexion', 'Extension', 'Slight internal/external rotation when flexed'],
  },

  // Ligaments
  MCL: {
    type: 'ligament',
    connects:
      'Medial epicondyle of the femur to the medial condyle of the tibia — resists valgus (outward) stress on the knee.',
  },
  PCL: {
    type: 'ligament',
    connects:
      'Posterior intercondylar area of the tibia to the medial condyle of the femur — resists posterior displacement of the tibia relative to the femur.',
  },
  LCL: {
    type: 'ligament',
    connects:
      'Lateral epicondyle of the femur to the head of the fibula — resists varus (inward) stress on the knee.',
  },
  'Annular Ligament': {
    type: 'ligament',
    connects:
      'Wraps around the head of the radius and attaches to the anterior and posterior margins of the radial notch of the ulna — holds the radial head against the ulna, permitting pronation/supination.',
  },

  // Bones / landmarks
  'Greater Trochanter': {
    type: 'bone',
    description:
      'A large bony prominence on the proximal lateral femur, serving as an attachment point for hip muscles like the gluteus medius and piriformis.',
  },
  'Coracoid Process': {
    type: 'bone',
    description:
      'A hook-like bony projection from the anterior scapula, serving as an attachment point for the coracobrachialis, pectoralis minor, and short head of the biceps.',
  },
  Femur: {
    type: 'bone',
    description:
      'The thigh bone — the longest and strongest bone in the body, running from the hip joint to the knee joint.',
  },
  Tibia: {
    type: 'bone',
    description: 'The larger, weight-bearing bone of the lower leg (shin bone), running from the knee to the ankle.',
  },
  Patella: {
    type: 'bone',
    description:
      'The kneecap — a sesamoid bone embedded in the quadriceps tendon that improves the muscle\'s leverage over the knee.',
  },
  Acetabulum: {
    type: 'bone',
    description:
      'The cup-shaped socket on the pelvis (formed by the ilium, ischium, and pubis) that receives the head of the femur to form the hip joint.',
  },
  'Phalang 1': {
    type: 'bone',
    description:
      'The proximal phalanx — the first bone segment of a finger or toe, closest to the hand/foot, articulating with the metacarpal/metatarsal at its base.',
  },
  Radius: {
    type: 'bone',
    description:
      'One of the two forearm bones, on the thumb side, that rotates around the ulna to allow pronation and supination.',
  },
  Ulna: {
    type: 'bone',
    description:
      'The forearm bone on the little-finger side. Its olecranon and trochlear notch form the main hinge with the humerus at the elbow. It does not articulate with the carpal bones at the radiocarpal joint.',
  },
  Scaphoid: {
    type: 'bone',
    description:
      'Boat-shaped carpal bone in the proximal row on the thumb side. It articulates with the radius and is part of the radiocarpal joint; also the most commonly fractured carpal bone.',
  },
  Lunate: {
    type: 'bone',
    description:
      'Crescent-shaped carpal bone in the proximal row, sitting between the scaphoid and triquetrum. It articulates with the radius and is part of the radiocarpal joint.',
  },
  'Metacarpal 2': {
    type: 'bone',
    description:
      'The metacarpal of the index finger, in the palm. It sits distal to the carpal bones, so it belongs to the carpometacarpal joint — not the radiocarpal joint.',
  },
}
