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
        'ESTJ': 'مدیر: عملی، سازمان‌یافته، منطقی و سخت‌کوش.',
        'INFP': 'میانجی: ایده‌آل‌گرا، همدل، ذهن باز و خلاق.',
        'ISTJ': 'لجستیکی: عملی، واقع‌بین، قابل اعتماد و مسئولیت‌پذیر.',
        'ENFP': 'فعال: مشتاق، خلاق، اجتماعی و آزادی‌خواه.',
        'ESFP': 'سرگرم‌کننده: خودجوش، پرانرژی و مشتاق.',
        'ISFJ': 'مدافع: قابل اعتماد، صبور و عملی.',
        'ENTP': 'بحث‌کننده: نوآور، کنجکاو و دیدگاه‌دار.',
        'INTJ': 'معمار: استراتژیک، منطقی و دنبال دانش.',
        'ISFP': 'ماجراجو: انعطاف‌پذیر، جذاب و هنرمند.',
        'ESFJ': 'مشاور: مراقب، اجتماعی و محبوب.',
        'ENTJ': 'فرمانده: جسور، خلاق و اراده قوی.',
        'INFJ': 'حامی: آرام، اسرارآمیز و الهام‌بخش.',
        'ISTP': 'هنرمند: جسور، عملی و استاد ابزارها.',
        'ENFJ': 'قهرمان: جذاب، الهام‌بخش و رهبر طبیعی.',
        'INTP': 'منطق‌دان: نوآور، فکری و جدا از احساسات.',
        'ESTP': 'کارآفرین: پرانرژی، تیزبین و مستقیم.'
    };

    document.getElementById('result').innerHTML = 'تیپ شخصیتی شما: ' + result + '<br>' + (descriptions[result] || 'توضیحات موجود نیست.');
}

function toggleTheme() {
    document.body.classList.toggle('dark');
}