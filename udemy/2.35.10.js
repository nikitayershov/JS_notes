const personalPlanPeter = {
    name: "Peter",
    age: "29",
    skills: {
        languages: ['ru', 'eng'],
        programmingLangs: {
            js: '20%',
            php: '10%',
            ruby: '30%'
        },
        exp: '1 month'
    },
    showAgeAndLangs: function (plan) {
        return `Мне ${plan.age} и я владею языками: ${plan.skills.languages.join(" ").toUpperCase()} `;
    }
};

function showExperience(plan) {
    const {exp} = plan.skills;
    return exp;
}

function showProgrammingLangs(plan) {
    let message = "";
    for (let lang in plan.skills.programmingLangs) {
        message += `Язык ${lang} изучен на ${plan.skills.programmingLangs[lang]}\n`;
    }
    return message;
}
console.log(showProgrammingLangs(personalPlanPeter));

console.log(personalPlanPeter.showAgeAndLangs(personalPlanPeter));

