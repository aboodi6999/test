function sortText() {
    var inputText = document.getElementById("inputText").value;
    var sortedText = sortMixedText(inputText);
    document.getElementById("output").innerText = sortedText;
}

function sortMixedText(text) {
    // قم بتنفيذ الخطوط البرمجية لترتيب النص هنا
    // يمكنك استخدام regex أو وسائل أخرى حسب متطلبات تطبيقك
    // في هذا المثال، سنفترض أننا نقوم بفصل الأحرف الإنجليزية والعربية
    var englishText = text.replace(/[\u0600-\u06FF]/g, '');
    var arabicText = text.replace(/[a-zA-Z]/g, '');
    var sortedText = englishText + arabicText;
    return sortedText;
}
