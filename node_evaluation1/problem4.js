var goals = require("./data/goals.json");
var symptomsList = require("./data/symptoms.json");

console.log(solution("yoga"));//output { title: 'Yoga', symptoms: [ 'Low mood' ] }

console.log(solution("meditate"));
/*output {
    title: 'Meditate',
    description: '',
    symptoms: [ 'Low mood', 'Drop in functioning', 'Illogical thinking' ]
  }*/
  
function solution(key){
    let goalObject = goals[key];

    let replacedSymptoms = goalObject.symptoms.map(Element=> {
        return symptomsList[Element];
    });

    return {...goalObject, symptoms:replacedSymptoms};
}