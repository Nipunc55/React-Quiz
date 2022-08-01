const segment = {
  basic: 'basic',
  medium: 'medium',
  advanced: 'advanced',
}

const quiz = {
  quizTitle: 'Cricket',
  quizSynopsis: 'Cricket questions',
  questions: [
    {
      question: ' එක් කණ්ඩායමක ක්‍රීඩකයින් කී දෙනෙක් සිටීද?',
      questionType: 'text',
      answers: ['10', '15', '20', '11'],
      correctAnswer: '4',
      messageForCorrectAnswer: 'ඔබ නිවැරදි ..!',
      messageForIncorrectAnswer: 'හොඳයි, ඔබට එය මග හැරුණි..!',
      point: '1',
    },
    {
      question: 'එක ඕවරයක පන්දු කීයක් තිබේද?',
      questionType: 'text',
      answers: ['5', '6', '3', '10'],
      correctAnswer: '2',
      messageForCorrectAnswer: 'ඔබ නිවැරදි ..!',
      messageForIncorrectAnswer: 'ඔබට එය මග හැරුණි..!',
      point: '2',
    },
    {
      question: '1975 පළමු ක්‍රිකට් ලෝක කුසලානය දිනුවේ කවුද?',
      questionType: 'text',
      answers: ['Australia', 'England', 'India', 'West Indies'],
      correctAnswer: '4',
      messageForCorrectAnswer: 'ඔබ නිවැරදි ..!',
      messageForIncorrectAnswer: 'ඔබට එය මග හැරුණි..!',
      point: '1',
    },
  ],
}
export default quiz
