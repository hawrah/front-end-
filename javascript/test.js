$('#quiz').quiz({
  //resultsScreen: '#results-screen',
  //counter: false,
  //homeButton: '#custom-home',
  counterFormat: 'Question %current from %total  questiones',
  questions: [
    {
      'q': 'هو يتحدث',
      'options': [
        'He speak',
        'He speaks'
      ],
      'correctIndex': 1,
      'correctResponse': 'Correct',
      'incorrectResponse': 'Wrong'
    },


    {
      'q': 'The woman ... a newspaper',
      'options': [
        'read',
        'is read',
        ' reads'
      ],
      'correctIndex': 2,
      'correctResponse': 'Correct',
      'incorrectResponse': 'The correct answer is "reads"'
    },
    {
      'q': 'تحدث الانجليزية من فضلك',
      'options': [
        'Speak English please',
        'Speaks English please'
      ],
      'correctIndex': 0,
      'correctResponse': 'Correct',
      'incorrectResponse': 'Wrong'
    },

    {
      'q': 'I work at a restaurant',
      'options': [
        'انا اعمل في الفندق',
        'انا اعمل في المطعم'
      ],
      'correctIndex': 1,
      'correctResponse': 'Correct',
      'incorrectResponse': 'Wrong'
    },

    {
      'q': 'It is a pleasure to meet you. I am Jack',
      'options': [
        'انه شرف لي لمقابلتك انا جاك',
        ' انه شرف لي للاستماع لك انا جاك  '
      ],
      'correctIndex': 0,
      'correctResponse': 'Correct',
      'incorrectResponse': 'Wrong'
    },

    {
      'q': 'How ... you play today',
      'options': [
        'do',
        ' did ',
        ' does '
      ],
      'correctIndex': 0,
      'correctResponse': 'Correct',
      'incorrectResponse': 'Wrong'
    },

    {
      'q': 'What club do you ... to hit 150 yards',
      'options': [
        'uses',
        'used  ',
        'use'
      ],
      'correctIndex': 2,
      'correctResponse': 'Correct',
      'incorrectResponse': 'Wrong'
    },

    {
      'q': 'I need to work on my putting. It ... right now',
      'options': [
        'suck',
        'sucks ',
        'sucking'
      ],
      'correctIndex': 1,
      'correctResponse': 'Correct',
      'incorrectResponse': 'Wrong'
    },

    {
      'q': '... you want to go golfing this weekend',
      'options': [
        'Dose',
        'Did  ',
        'Do',
        'What'
      ],
      'correctIndex': 2,
      'correctResponse': 'Correct',
      'incorrectResponse': 'Wrong'
    },

    {
      'q': 'Excuse me',
      'options': [
        'شكرا لك',
        'المعذرة',
        'سامحني'
      ],
      'correctIndex': 1,
      'correctResponse': 'Correct',
      'incorrectResponse': 'Wrong'
    }
  ]
});