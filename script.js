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
        'ESFP': 'The Entertainer: Spontaneous, energetic, and enthusiastic.',
        'ISFJ': 'The Defender: Reliable, patient, and practical.',
        'ENTP': 'The Debater: Innovative, curious, and visionary.',
        'INTJ': 'The Architect: Strategic, logical, and driven by knowledge.',
        'ISFP': 'The Adventurer: Flexible, charming, and artistic.',
        'ESFJ': 'The Consul: Caring, sociable, and popular.',
        'ENTJ': 'The Commander: Bold, imaginative, and strong-willed.',
        'INFJ': 'The Advocate: Quiet, mystical, and inspiring.',
        'ISTP': 'The Virtuoso: Bold, practical, and master of all kinds of tools.',
        'ENFJ': 'The Protagonist: Charismatic, inspiring, and a natural leader.',
        'INTP': 'The Logician: Innovative, intellectual, and detached.',
        'ESTP': 'The Entrepreneur: Energetic, perceptive, and direct.'
    };

    document.getElementById('result').innerHTML = 'Your MBTI Type: ' + result + '<br>' + (descriptions[result] || 'No description available.');
}

function toggleTheme() {
    document.body.classList.toggle('dark');
}
