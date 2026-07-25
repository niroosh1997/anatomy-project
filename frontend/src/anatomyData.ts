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
  Infraspinatus: {
    type: 'muscle',
    origin: 'Medial two-thirds of the infraspinous fossa on the posterior surface of the scapula (and the overlying infraspinous fascia).',
    insertion: 'Middle facet of the greater tubercle of the humerus, blending with the shoulder joint capsule.',
    action: 'Laterally (externally) rotates the humerus at the glenohumeral joint and, as a rotator cuff muscle, holds the humeral head in the glenoid cavity; innervated by the suprascapular nerve (C5-C6).',
  },
  'Levator Scapulae': {
    type: 'muscle',
    origin: 'Transverse processes of vertebrae C1-C4 (posterior tubercles of C3-C4, transverse processes of the atlas and axis).',
    insertion: 'Medial (vertebral) border of the scapula, between the superior angle and the root of the spine of the scapula.',
    action: 'Elevates the scapula and rotates the glenoid cavity downwards (inferior/downward rotation); with the scapula fixed it laterally flexes the cervical spine to the same side. Innervated by the dorsal scapular nerve (C5) and branches of C3-C4.',
  },
  Sternocleidomastoid: {
    type: 'muscle',
    origin: 'Two heads: the sternal head from the anterior surface of the manubrium of the sternum, and the clavicular head from the superior surface of the medial third of the clavicle.',
    insertion: 'Lateral surface of the mastoid process of the temporal bone and the lateral half of the superior nuchal line of the occipital bone.',
    action: 'Acting alone it tilts the head towards the same shoulder while turning the face to the opposite side; acting together the two muscles flex the neck (and extend the head at the atlanto-occipital joint) and assist forced inspiration. Motor supply is the spinal accessory nerve (CN XI), with C2-C3 for proprioception.',
  },
  'Palmaris Longus': {
    type: 'muscle',
    origin: 'Medial epicondyle of the humerus, via the common flexor tendon.',
    insertion: 'Distal half of the flexor retinaculum and the apex of the palmar aponeurosis.',
    action: 'Weakly flexes the wrist and tenses the palmar aponeurosis; innervated by the median nerve (C7-C8). It is a variable muscle, absent in roughly 10-15% of people.',
  },
  Humerus: {
    type: 'bone',
    description: 'The single long bone of the arm, running from the shoulder to the elbow. Its rounded head articulates with the glenoid cavity of the scapula at the glenohumeral joint, while distally the trochlea meets the trochlear notch of the ulna and the capitulum meets the head of the radius at the elbow. Key landmarks are the greater and lesser tubercles separated by the intertubercular (bicipital) groove, the surgical neck (axillary nerve), the deltoid tuberosity, the radial (spiral) groove for the radial nerve, and the medial and lateral epicondyles.',
  },
  Acromion: {
    type: 'bone',
    description: 'The broad, flattened lateral projection of the spine of the scapula that forms the bony point of the shoulder and arches over the glenohumeral joint. Its medial facet articulates with the lateral (acromial) end of the clavicle at the acromioclavicular joint; the deltoid arises from its lateral border and anterior surface, trapezius inserts on its upper border and posterior edge of the spine, and the coracoacromial ligament passes from its anterior tip to the coracoid process to complete the coracoacromial arch.',
  },
  'Glenoid Fossa': {
    type: 'bone',
    description: 'The shallow, pear-shaped articular surface on the superolateral angle (head) of the scapula that receives the head of the humerus to form the glenohumeral joint. It is deepened slightly by the fibrocartilaginous glenoid labrum around its rim; the supraglenoid tubercle just above it gives origin to the long head of biceps brachii and the infraglenoid tubercle just below it to the long head of triceps brachii.',
  },
  'Bicipital Groove': {
    type: 'bone',
    description: 'The intertubercular sulcus: a vertical groove on the anterior aspect of the proximal humerus lying between the greater tubercle laterally and the lesser tubercle medially. It transmits the tendon of the long head of biceps brachii (held in by the transverse humeral ligament) together with the ascending branch of the anterior circumflex humeral artery; pectoralis major inserts on its lateral lip, teres major on its medial lip, and latissimus dorsi on its floor.',
  },
  'Spine of Scapula': {
    type: 'bone',
    description: 'The prominent triangular ridge crossing the upper part of the posterior surface of the scapula, continuing laterally and upwards as the acromion. It divides the dorsal scapular surface into the supraspinous fossa above (origin of supraspinatus) and the infraspinous fossa below (origin of infraspinatus); its lower border and crest give origin to the posterior fibres of deltoid, and its upper border receives the insertion of the trapezius.',
  },
  Clavicle: {
    type: 'bone',
    description: 'The S-shaped long bone lying horizontally at the root of the neck, forming the anterior strut of the shoulder girdle. Medially it articulates with the manubrium of the sternum at the sternoclavicular joint (the only bony articulation between the upper limb and the axial skeleton) and laterally with the acromion at the acromioclavicular joint, being further anchored to the coracoid process by the coracoclavicular (conoid and trapezoid) ligaments. It gives attachment to pectoralis major, deltoid, trapezius, sternocleidomastoid and subclavius, and is most commonly fractured at the junction of its middle and lateral thirds.',
  },
  'Transverse Abdominis': {
    type: 'muscle',
    origin: 'Inner surfaces of the costal cartilages of ribs 7-12, the thoracolumbar fascia, the anterior two-thirds of the inner lip of the iliac crest, and the lateral third of the inguinal ligament.',
    insertion: 'Via a broad aponeurosis into the linea alba (contributing to the rectus sheath), and onto the pubic crest and pecten pubis through the conjoint tendon.',
    action: 'Compresses the abdominal contents to raise intra-abdominal pressure and brace the lumbar spine and pelvis; it is the deepest abdominal muscle and produces no significant trunk flexion or rotation.',
  },
  'Quadratus Lumborum': {
    type: 'muscle',
    origin: 'Iliolumbar ligament and the adjacent posterior part of the iliac crest.',
    insertion: 'Inferior border of the 12th rib and the transverse processes of L1-L4.',
    action: 'Laterally flexes the lumbar spine to the same side and fixes or depresses the 12th rib (steadying it for the diaphragm in inspiration); acting bilaterally it extends the lumbar spine, and it hitches the hip upward when the trunk is fixed.',
  },
  Longissimus: {
    type: 'muscle',
    origin: 'The common erector spinae tendon from the sacrum, posterior iliac crest and lumbar spinous processes (longissimus thoracis), with the cervicis and capitis parts arising from the transverse processes of the upper thoracic (T1-T5) and lower cervical vertebrae.',
    insertion: 'Transverse processes of the thoracic and cervical vertebrae and the lower nine or ten ribs (thoracis), the posterior tubercles of the cervical transverse processes (cervicis), and the mastoid process of the temporal bone (capitis).',
    action: 'Acting bilaterally it extends the vertebral column and head; acting unilaterally it laterally flexes the spine and, through longissimus capitis, rotates the head to the same side.',
  },
  'Psoas Major': {
    type: 'muscle',
    origin: 'Transverse processes of L1-L5 and the bodies and intervertebral discs of T12 to L5.',
    insertion: 'Lesser trochanter of the femur, via a tendon shared with iliacus (the two together forming the iliopsoas).',
    action: 'The chief flexor of the hip; with the femur fixed it flexes the trunk on the thigh (as in sitting up from lying), and it acts as a lateral stabiliser of the lumbar spine.',
  },
  Iliacus: {
    type: 'muscle',
    origin: 'Upper two-thirds of the iliac fossa, the inner lip of the iliac crest, the ala of the sacrum and the anterior sacroiliac and iliolumbar ligaments.',
    insertion: 'Lesser trochanter of the femur, its fibres joining the lateral side of the psoas major tendon (the combined muscle being the iliopsoas).',
    action: 'Flexes the hip joint and, with psoas major, flexes the trunk on the thigh; it also helps stabilise the hip joint during standing and walking.',
  },
  'Gluteus Minimus': {
    type: 'muscle',
    origin: 'External (gluteal) surface of the ilium, between the anterior and inferior gluteal lines.',
    insertion: 'Anterior facet on the anterolateral surface of the greater trochanter of the femur.',
    action: 'Abducts and medially rotates the thigh; with gluteus medius it steadies the pelvis over the supporting leg during walking, preventing the opposite hip dropping (loss of which gives a Trendelenburg gait).',
  },
  'Adductor Brevis': {
    type: 'muscle',
    origin: 'Outer surface of the body and inferior ramus of the pubis, below the origin of adductor longus.',
    insertion: 'Pectineal line and the proximal third of the linea aspera of the femur.',
    action: 'Adducts the thigh at the hip joint and assists in flexing it; it lies between pectineus/adductor longus in front and adductor magnus behind, and the anterior division of the obturator nerve crosses its front surface.',
  },
  'Adductor Longus': {
    type: 'muscle',
    origin: 'Anterior surface of the body of the pubis, in the angle between the pubic crest and the pubic symphysis, just below the pubic tubercle.',
    insertion: 'Middle third of the medial lip of the linea aspera of the femur.',
    action: 'Adducts the thigh at the hip and assists in flexing it; it is the most anterior of the adductors and forms the medial border of the femoral triangle.',
  },
  'Tensor Fasciae Latae': {
    type: 'muscle',
    origin: 'Anterior part of the outer lip of the iliac crest, the anterior superior iliac spine (ASIS) and the notch just below it, and the deep surface of the fascia lata.',
    insertion: 'It has no direct bony insertion on the femur: its fibres end about a third of the way down the thigh in the iliotibial tract (iliotibial band) of the fascia lata, which descends to attach to Gerdy\'s tubercle on the anterolateral condyle of the tibia. Gluteus maximus inserts into the same iliotibial tract, so the two muscles share it.',
    action: 'Tenses the fascia lata and iliotibial tract, thereby helping to stabilise and extend the knee; it also abducts, medially rotates and flexes the thigh, and helps gluteus medius and minimus steady the pelvis on the stance leg.',
  },
  Sartorius: {
    type: 'muscle',
    origin: 'Anterior superior iliac spine (ASIS) and the upper half of the notch immediately below it.',
    insertion: 'Upper part of the medial surface of the tibia, just below the medial condyle, as the most anterior of the three tendons of the pes anserinus (in front of gracilis and semitendinosus).',
    action: 'Flexes, abducts and laterally rotates the thigh at the hip and flexes the leg at the knee - the combined movement of sitting cross-legged; it is the longest muscle in the body and forms the lateral border of the femoral triangle.',
  },
  Gastrocnemius: {
    type: 'muscle',
    origin: 'Two heads from the posterior surfaces of the medial and lateral condyles of the femur, i.e. from ABOVE the knee joint.',
    insertion: 'Posterior surface of the calcaneus via the calcaneal (Achilles) tendon, fused with the soleus tendon.',
    action: 'Plantarflexes the ankle AND flexes the knee, because unlike the soleus it is a two-joint muscle that crosses both the knee and the ankle; it shares ankle plantarflexion with the soleus but is the only one of the pair to act on the knee.',
  },
  Soleus: {
    type: 'muscle',
    origin: 'Soleal line and middle third of the medial border of the posterior tibia, plus the posterior aspect of the head and upper shaft of the fibula - entirely BELOW the knee joint.',
    insertion: 'Posterior surface of the calcaneus via the calcaneal (Achilles) tendon, shared with gastrocnemius (together the triceps surae).',
    action: 'Plantarflexes the ankle only; it does NOT cross the knee, so it has no action at the knee - this is the single difference from gastrocnemius, which performs the same ankle plantarflexion but additionally flexes the knee.',
  },
  'Peroneus Longus': {
    type: 'muscle',
    origin: 'Head and upper two-thirds of the lateral surface of the fibula, with some fibres from the lateral condyle of the tibia and the adjacent intermuscular septa.',
    insertion: 'Tendon passes behind the lateral malleolus and crosses obliquely across the sole to insert on the lateral side of the base of the first metatarsal and the medial cuneiform.',
    action: 'Everts the foot and assists plantarflexion at the ankle; its oblique course across the sole also supports the transverse and lateral longitudinal arches.',
  },
  'Flexor Hallucis Longus': {
    type: 'muscle',
    origin: 'Posterior surface of the distal two-thirds of the fibula and the adjacent interosseous membrane.',
    insertion: 'Plantar surface of the base of the distal phalanx of the great toe (hallux).',
    action: 'Flexes the great toe at the metatarsophalangeal and interphalangeal joints, and assists plantarflexion and inversion of the foot; important for the final push-off in gait.',
  },
  'Vastus Medialis': {
    type: 'muscle',
    origin: 'FEMUR: the intertrochanteric line, spiral line, medial lip of the linea aspera and the medial supracondylar line - it arises from bone only, never from the pelvis.',
    insertion: 'Medial border and base of the patella, and through the quadriceps tendon and patellar ligament to the tibial tuberosity.',
    action: 'Extends the knee; its distal oblique fibres (vastus medialis obliquus) pull the patella medially and resist lateral patellar tracking. It crosses the knee only, NOT the hip.',
  },
  'Rectus Femoris': {
    type: 'muscle',
    origin: 'PELVIS (ilium), not the femur: a straight head from the anterior inferior iliac spine and a reflected head from the groove above the rim of the acetabulum.',
    insertion: 'Base of the patella, and through the patellar ligament to the tibial tuberosity.',
    action: 'Extends the knee and flexes the hip - it is the ONLY one of the four quadriceps muscles that crosses the hip joint. Consequently, if asked which quadriceps muscle has its origin on the femur, the answer is one of the three vasti (vastus medialis, lateralis or intermedius), never rectus femoris.',
  },
  'Iliotibial Band': {
    type: 'bone',
    description: 'A thick longitudinal thickening of the fascia lata on the lateral thigh, running from the iliac tubercle of the iliac crest down to Gerdy\'s tubercle on the anterolateral tibial condyle. Two muscles insert into it: the TENSOR FASCIAE LATAE anteriorly and the superficial fibres of GLUTEUS MAXIMUS posteriorly; through it they stabilise the extended knee and steady the pelvis in single-leg stance.',
  },
  'Medial Meniscus': {
    type: 'bone',
    description: 'A C-shaped (semicircular) fibrocartilage lying on the medial tibial plateau, which deepens the articular surface, distributes load and acts as a shock absorber. Its periphery is firmly attached to the joint capsule AND to the tibial (medial) collateral ligament, which makes it far less mobile than the lateral meniscus and therefore much more frequently torn.',
  },
  'Knee Joint': {
    type: 'joint',
    bones: ['Femur', 'Tibia', 'Patella'],
    jointType: 'Synovial',
    classification: 'Modified hinge (bicondylar)',
    axis: 'Primarily uniaxial (flexion-extension), with limited axial rotation available when the knee is flexed',
    actions: ['Flexion', 'Extension', 'Medial (internal) rotation of the tibia when the knee is flexed', 'Lateral (external) rotation of the tibia when the knee is flexed'],
  },
  Ilium: {
    type: 'bone',
    description: 'The largest and most superior of the three bones that fuse to form the hip bone (os coxae), consisting of a body that contributes the superior two-fifths of the acetabulum and a broad flared ala whose upper margin is the iliac crest. Its gluteal surface gives origin to the gluteal muscles, its iliac fossa to iliacus, and its auricular surface articulates with the sacrum at the sacroiliac joint.',
  },
}
