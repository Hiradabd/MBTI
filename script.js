function calculateResult() {
    var form = document.getElementById('mbtiForm');
    var result = '';
    var scores = { 'E': 0, 'I': 0, 'S': 0, 'N': 0, 'T': 0, 'F': 0, 'J': 0, 'P': 0 };

    for (var i = 1; i <= 8; i++) { // Ensure this matches the number of questions
        var question = form['q' + i];
        for (var j = 0; j < question.length; j++) {
            if (question[j].checked) {
                scores[question[j].value]++;
            }
        }
    }

    result += scores['E'] > scores['I'] ? 'E' : 'I';
    result += scores['S'] > scores['N'] ? 'S' : 'N';
    result += scores['T'] > scores['F'] ? 'T' : 'F';
    result += scores['J'] > scores['P'] ? 'J' : 'P';

    var descriptions = {
        'ESTJ': 'The Executive: Practical, organized, logical, and hardworking.',
        'INFP': 'The Mediator: Idealistic, empathetic, open-minded, and creative.',
        'ISTJ': 'The Logistician: Practical, factual, dependable, and responsible.',
        'ENFP': 'The Campaigner: Enthusiastic, creative, sociable, and free-spirited.',
        // Add descriptions for all 16 types
    };

    document.getElementById('result').innerHTML = 'Your MBTI Type: ' + result + '<br>' + (descriptions[result] || 'No description available.');
}
