// Year 9 Music · Theory — full syllabus content for Notate.
// Question types:
//   notate : place notes on the stave (clef, given tonic, target notes)
//   choice : tap the correct option; `show` optionally draws notation above the options
//   match  : pair each term with its meaning (dropdowns)
// Notes in notate/show are [letter, octave, acc]  acc: '' | 's'(#) | 'f'(b) | 'n'(natural)
// show.cols: array of columns; each column an array of "C4"/"F#5"/"Eb4" strings (stacked = chord).

const IVL = ['m2','M2','m3','M3','P4','P5','m6','M6','m7','M7','P8'];

const UNITS = [
{ id:'u1', name:'Notation', qs:[
  {t:'notate', prompt:'Notate: A, C, E, G', sub:'Treble clef. Tonic given.', clef:'treble', given:1,
    notes:[['A',4,''],['C',5,''],['E',5,''],['G',5,'']]},
  {t:'notate', prompt:'Notate: D, F, A, C', sub:'Bass clef. Tonic given.', clef:'bass', given:1,
    notes:[['D',3,''],['F',3,''],['A',3,''],['C',4,'']]},
  {t:'choice', prompt:'Name this note.', show:{clef:'treble', cols:[['E4']]}, options:['C','D','E','F','G'], answer:'E'},
  {t:'choice', prompt:'Name this note.', show:{clef:'treble', cols:[['C5']]}, options:['A','B','C','D','E'], answer:'C', why:'Third space in the treble staff.'},
  {t:'choice', prompt:'Name this note.', show:{clef:'bass', cols:[['F3']]}, options:['D','E','F','G','A'], answer:'F', why:'Fourth line of the bass staff, between the two dots of the F clef.'},
  {t:'choice', prompt:'Name this note (ledger lines).', show:{clef:'treble', cols:[['C6']]}, options:['A','B','C','D'], answer:'C', why:'Two octaves above middle C.'},
  {t:'choice', prompt:'Middle C in scientific pitch notation is…', options:['C3','C4','C5'], answer:'C4'},
  {t:'choice', prompt:'One octave below middle C is…', options:['C2','C3','C5'], answer:'C3'},
  {t:'choice', prompt:'The treble-clef spaces (bottom to top) spell…', options:['FACE','EGBDF','GBDFA'], answer:'FACE'},
  {t:'choice', prompt:'The bass-clef lines (bottom to top) are…', options:['E G B D F','G B D F A','F A C E G'], answer:'G B D F A'},
]},

{ id:'u2', name:'Rhythm', qs:[
  {t:'choice', prompt:'In simple time the beat divides into…', options:['two','three','four'], answer:'two'},
  {t:'choice', prompt:'In compound time the beat divides into…', options:['two','three','six'], answer:'three'},
  {t:'choice', prompt:'The beat note in 6/8 (all compound time) is a…', options:['crotchet','dotted crotchet','quaver'], answer:'dotted crotchet'},
  {t:'choice', prompt:'How many beats in a 12/8 bar?', options:['3','4','6'], answer:'4', why:'12 quavers ÷ 3 = 4 dotted-crotchet beats.'},
  {t:'choice', prompt:'How many beats in a 9/8 bar?', options:['2','3','4'], answer:'3'},
  {t:'choice', prompt:'Is 6/8 simple or compound?', options:['simple','compound'], answer:'compound'},
  {t:'choice', prompt:'Is 3/4 simple or compound?', options:['simple','compound'], answer:'simple'},
  {t:'choice', prompt:'A triplet fits three equal notes into the time of…', options:['one','two','four'], answer:'two'},
  {t:'choice', prompt:'Three triplet quavers last the same as…', options:['one crotchet','one minim','two crotchets'], answer:'one crotchet'},
  {t:'choice', prompt:'In a swing feel, written straight quavers are played…', options:['short–long','long–short','evenly'], answer:'long–short'},
  {t:'choice', prompt:'The swing feel is based on dividing the beat into a…', options:['duplet','triplet','quadruplet'], answer:'triplet'},
  {t:'choice', prompt:'In 6/8, quavers are beamed in groups of…', options:['two','three','four'], answer:'three'},
  {t:'choice', prompt:'A tie joins two notes of the…', options:['same pitch','same length','next beat'], answer:'same pitch'},
  {t:'choice', prompt:'An anacrusis is…', options:['a pick-up before bar 1','an accent on the off-beat','a held note'], answer:'a pick-up before bar 1'},
  {t:'choice', prompt:'Syncopation places the accent on…', options:['the first beat','a weak / off-beat','the last bar'], answer:'a weak / off-beat'},
  {t:'match', prompt:'Match each tempo term to its meaning.', pairs:[
    ['andante','at a walking pace'],['allegretto','fairly quick'],['rallentando','gradually slower'],
    ['accelerando','gradually faster'],['a tempo','back to the original speed']]},
  {t:'choice', prompt:'Order from slowest to fastest:', options:['largo, andante, allegretto','andante, largo, allegretto','allegretto, andante, largo'], answer:'largo, andante, allegretto'},
]},

{ id:'u3', name:'Scales', qs:[
  {t:'notate', prompt:'A major, ascending', sub:'3 sharps. Tonic given.', clef:'treble', given:1,
    notes:[['A',4,''],['B',4,''],['C',5,'s'],['D',5,''],['E',5,''],['F',5,'s'],['G',5,'s'],['A',5,'']]},
  {t:'notate', prompt:'E♭ major, ascending', sub:'3 flats. Tonic given.', clef:'treble', given:1,
    notes:[['E',4,'f'],['F',4,''],['G',4,''],['A',4,'f'],['B',4,'f'],['C',5,''],['D',5,''],['E',5,'f']]},
  {t:'notate', prompt:'F♯ natural minor, ascending', sub:'3 sharps. Tonic given.', clef:'treble', given:1,
    notes:[['F',4,'s'],['G',4,'s'],['A',4,''],['B',4,''],['C',5,'s'],['D',5,''],['E',5,''],['F',5,'s']]},
  {t:'notate', prompt:'C natural minor, ascending', sub:'3 flats. Tonic given.', clef:'treble', given:1,
    notes:[['C',4,''],['D',4,''],['E',4,'f'],['F',4,''],['G',4,''],['A',4,'f'],['B',4,'f'],['C',5,'']]},
  {t:'notate', prompt:'A harmonic minor, ascending', sub:'Raised 7th. Tonic given.', clef:'treble', given:1,
    notes:[['A',4,''],['B',4,''],['C',5,''],['D',5,''],['E',5,''],['F',5,''],['G',5,'s'],['A',5,'']]},
  {t:'notate', prompt:'E harmonic minor, ascending', sub:'Raised 7th. Tonic given.', clef:'treble', given:1,
    notes:[['E',4,''],['F',4,'s'],['G',4,''],['A',4,''],['B',4,''],['C',5,''],['D',5,'s'],['E',5,'']]},
  {t:'notate', prompt:'A blues scale, ascending', sub:'A C D E♭ E G A. Tonic given.', clef:'treble', given:1,
    notes:[['A',4,''],['C',5,''],['D',5,''],['E',5,'f'],['E',5,'n'],['G',5,''],['A',5,'']]},
  {t:'choice', prompt:'The major scale pattern of tones (T) and semitones (S) is…', options:['T T S T T T S','T S T T S T T','T T T S T T S'], answer:'T T S T T T S'},
  {t:'choice', prompt:'The natural minor scale pattern is…', options:['T S T T S T T','T T S T T T S','S T T S T T T'], answer:'T S T T S T T'},
  {t:'choice', prompt:'In the major scale, the semitones fall between degrees…', options:['2–3 and 5–6','3–4 and 7–8','1–2 and 4–5'], answer:'3–4 and 7–8'},
  {t:'choice', prompt:'The harmonic minor scale raises which degree?', options:['the 6th','the 7th','the 5th'], answer:'the 7th'},
  {t:'choice', prompt:'How many sharps does A major have?', options:['two','three','four'], answer:'three'},
  {t:'choice', prompt:'The relative minor of C major is…', options:['A minor','E minor','D minor'], answer:'A minor'},
  {t:'choice', prompt:'The relative minor of G major is…', options:['E minor','B minor','A minor'], answer:'E minor'},
  {t:'choice', prompt:'The blues scale degrees are…', options:['1 2 3 5 6','1 ♭3 4 ♭5 5 ♭7','1 3 4 5 ♭7'], answer:'1 ♭3 4 ♭5 5 ♭7'},
  {t:'choice', prompt:'Changing key within a piece is called…', options:['transposition','modulation','inversion'], answer:'modulation'},
]},

{ id:'u4', name:'Intervals', qs:[
  {t:'choice', prompt:'Name this interval.', show:{clef:'treble', cols:[['C4'],['A4']]}, options:IVL, answer:'M6'},
  {t:'choice', prompt:'Name this interval.', show:{clef:'treble', cols:[['C4'],['B4']]}, options:IVL, answer:'M7'},
  {t:'choice', prompt:'Name this interval.', show:{clef:'treble', cols:[['C4'],['Ab4']]}, options:IVL, answer:'m6'},
  {t:'choice', prompt:'Name this interval.', show:{clef:'treble', cols:[['C4'],['Bb4']]}, options:IVL, answer:'m7'},
  {t:'choice', prompt:'Name this interval.', show:{clef:'treble', cols:[['E4'],['C5']]}, options:IVL, answer:'m6'},
  {t:'choice', prompt:'Name this interval.', show:{clef:'treble', cols:[['G4'],['E5']]}, options:IVL, answer:'M6'},
  {t:'choice', prompt:'Name this interval.', show:{clef:'treble', cols:[['C4'],['C5']]}, options:IVL, answer:'P8'},
  {t:'choice', prompt:'How many semitones in a major 6th?', options:['8','9','10'], answer:'9'},
  {t:'choice', prompt:'How many semitones in a minor 7th?', options:['9','10','11'], answer:'10'},
  {t:'choice', prompt:'How many semitones in a perfect octave?', options:['11','12','13'], answer:'12'},
  {t:'choice', prompt:'A descending interval is measured downward from the…', options:['lower note','higher (top) note','middle'], answer:'higher (top) note'},
  {t:'choice', prompt:'6ths and 7ths are described as major or…', options:['perfect','minor','diminished'], answer:'minor'},
  {t:'choice', prompt:'Octaves, 4ths and 5ths are described as…', options:['major','minor','perfect'], answer:'perfect'},
]},

{ id:'u5', name:'Chords', qs:[
  {t:'choice', prompt:'A major triad is a major 3rd then a…', options:['major 3rd','minor 3rd','perfect 4th'], answer:'minor 3rd'},
  {t:'choice', prompt:'A minor triad is a minor 3rd then a…', options:['minor 3rd','major 3rd','perfect 5th'], answer:'major 3rd'},
  {t:'choice', prompt:'Name this triad.', show:{clef:'treble', cols:[['C4','E4','G4']]}, options:['C major','C minor','A minor'], answer:'C major'},
  {t:'choice', prompt:'Name this triad.', show:{clef:'treble', cols:[['D4','F4','A4']]}, options:['D major','D minor','F major'], answer:'D minor'},
  {t:'choice', prompt:'Name this triad.', show:{clef:'treble', cols:[['E4','G4','B4']]}, options:['E major','E minor','G major'], answer:'E minor'},
  {t:'choice', prompt:'Spell a D major triad (root up).', options:['D F A','D F♯ A','D F♯ A♯'], answer:'D F♯ A'},
  {t:'choice', prompt:'Spell a G minor triad (root up).', options:['G B D','G B♭ D','G B♭ D♯'], answer:'G B♭ D'},
  {t:'choice', prompt:'The primary triads I, IV and V sit on scale degrees…', options:['1, 3 and 5','1, 4 and 5','1, 4 and 6'], answer:'1, 4 and 5'},
  {t:'choice', prompt:'In C major, chord IV is…', options:['C','F','G'], answer:'F'},
  {t:'choice', prompt:'In a minor key, chords i and iv are minor but V is made…', options:['diminished','major','augmented'], answer:'major', why:'The leading note is raised to make V major.'},
  {t:'choice', prompt:'In A minor, chord iv is…', options:['D minor','D major','E major'], answer:'D minor'},
  {t:'choice', prompt:'The chord vi in a major key is…', options:['major','minor','diminished'], answer:'minor'},
  {t:'choice', prompt:'In C major, chord vi is…', options:['A minor','E minor','D minor'], answer:'A minor'},
  {t:'choice', prompt:'Complete the pop progression: I – V – vi – …', options:['II','IV','iii'], answer:'IV'},
  {t:'choice', prompt:'A dominant 7th (V7) adds which interval above the triad?', options:['a major 7th','a minor 7th','a major 6th'], answer:'a minor 7th'},
  {t:'choice', prompt:'In C major, V7 (G7) is spelled…', options:['G B D F','G B D F♯','G B♭ D F'], answer:'G B D F'},
  {t:'choice', prompt:'V7 gives a strong pull back to the…', options:['subdominant','tonic (I)','dominant'], answer:'tonic (I)'},
]},

{ id:'u6', name:'Devices', qs:[
  {t:'match', prompt:'Match each device to what it is.', pairs:[
    ['Riff','a short, catchy repeated phrase'],['Ostinato','a pattern repeated persistently'],
    ['Pedal','a sustained/repeated note under changing harmony'],['Sequence','an idea repeated higher or lower']]},
  {t:'choice', prompt:'A short catchy guitar or bass phrase repeated through a song is a…', options:['riff','pedal','sequence'], answer:'riff'},
  {t:'choice', prompt:'A single bass note held under changing chords is a…', options:['riff','pedal','ostinato'], answer:'pedal'},
  {t:'choice', prompt:'A motif repeated a step higher, then higher again, is a…', options:['sequence','ostinato','inversion'], answer:'sequence'},
  {t:'choice', prompt:'The main musical idea of a piece is called the…', options:['motif','theme','riff'], answer:'theme'},
  {t:'choice', prompt:'Restating a theme with changes each time produces…', options:['a sequence','theme and variations','an ostinato'], answer:'theme and variations'},
  {t:'choice', prompt:'Turning a melodic idea upside-down is called…', options:['inversion','augmentation','imitation'], answer:'inversion'},
]},

{ id:'u7', name:'Dynamics', qs:[
  {t:'match', prompt:'Match each dynamic sign to its meaning.', pairs:[
    ['pp','very soft'],['mp','moderately soft'],['mf','moderately loud'],['ff','very loud'],['sfz','a sudden strong accent']]},
  {t:'choice', prompt:'A crescendo means gradually…', options:['softer','louder','slower'], answer:'louder'},
  {t:'choice', prompt:'A decrescendo (diminuendo) means gradually…', options:['louder','softer','faster'], answer:'softer'},
  {t:'choice', prompt:'Order from softest to loudest:', options:['mf, pp, mp, ff','pp, mp, mf, ff','pp, mf, mp, ff'], answer:'pp, mp, mf, ff'},
  {t:'match', prompt:'Match each articulation to its meaning.', pairs:[
    ['staccato','short, detached'],['legato','smooth, joined'],['accent','stress the note'],['tenuto','held for full value']]},
  {t:'choice', prompt:'A loud, accented, staccato line sounds brighter and harder — the articulation has altered the…', options:['tempo','timbre / tone colour','metre'], answer:'timbre / tone colour'},
]},

{ id:'u8', name:'Timbre & Texture', qs:[
  {t:'match', prompt:'Match each instrument to its family.', pairs:[
    ['Violin','strings'],['Trumpet','brass'],['Clarinet','woodwind'],['Timpani','percussion'],['Double bass','strings']]},
  {t:'choice', prompt:'The four main voice types from high to low are…', options:['soprano, alto, tenor, bass','alto, soprano, bass, tenor','tenor, bass, soprano, alto'], answer:'soprano, alto, tenor, bass'},
  {t:'choice', prompt:'Brass players make their sound by…', options:['blowing across an edge','buzzing the lips in the mouthpiece','a reed'], answer:'buzzing the lips in the mouthpiece'},
  {t:'choice', prompt:'A device that softens or changes a brass or string timbre is a…', options:['mute','pedal','capo'], answer:'mute'},
  {t:'choice', prompt:'A gritty, overdriven electric-guitar sound is produced by…', options:['reverb','distortion','delay'], answer:'distortion'},
  {t:'match', prompt:'Match each texture to what you hear.', pairs:[
    ['Monophonic','a single melodic line'],['Homophonic','melody + accompaniment'],['Polyphonic','two or more independent melodies']]},
  {t:'choice', prompt:'Two or more independent melodies sounding together is a…', options:['homophonic','polyphonic','monophonic'], answer:'polyphonic'},
]},
];
