function parseName(input) {
        var fullName = input || "ManojKumar Hc";
        var result = {};

        if (fullName.length > 0) {
            var nameTokens = fullName.match(/[A-ZÁ-ÚÑÜ][a-zá-úñü]+|([aeodlsz]+\s+)+[A-ZÁ-ÚÑÜ][a-zá-úñü]+/g) || [];

            if (nameTokens.length > 3) {
                result.name = nameTokens.slice(0, 2).join(' ');
            } else {
                result.name = nameTokens.slice(0, 1).join(' ');
            }

            if (nameTokens.length > 2) {
                result.lastName = nameTokens.slice(-2, -1).join(' ');
                result.secondLastName = nameTokens.slice(-1).join(' ');
            } else {
                result.lastName = nameTokens.slice(-1).join(' ');
                result.secondLastName = "";
            }
        }
}
console.log('fullName');