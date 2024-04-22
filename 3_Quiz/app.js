var timer;
var ele = document.getElementById('setTimer');

const timestoper = ()=>{
    var sec = 15;
    timer = setInterval(()=>{
        ele.innerHTML = sec;
        sec--;
        if(sec === 0){
            clearInterval(timer);
            index++;
            loadQuestion();
            
        }
    }, 1000)
   
}


const question = [
{
    'que': 'Which of the following is markup Language?',
    'a': 'HTML',
    'b':'CSS',
    'c': 'JavaScript',
    'd' : 'PHP',
    'correct': 'a'
},
{
    'que': '"Which year was JavaScript launched?',
    'a': '1996',
    'b':'1995',
    'c': '1994',
    'd' : 'none of the above',
    'correct': 'b'
},
{
    'que': 'What does the acronym "DOM" stand for in JavaScript?',
    'a': 'Document Object Model',
    'b':'Data Object Model',
    'c': 'Document Oriented Model',
    'd' : 'Data Oriented Model',
    'correct': 'a'
},
{
    'que': 'Which keyword is used to declare variables in JavaScript?',
    'a': 'var',
    'b':'let',
    'c': 'const',
    'd' : ' All of the above',
    'correct': 'd'
},
{
    'que': 'What does the console.log() function do in JavaScript?',
    'a': 'Displays output in the browser console',
    'b':'Displays output in an alert box',
    'c': 'Prints output on the webpage',
    'd' : 'None of the above',
    'correct': 'a'
}
]

let index = 0;
let total = question.length;
let right = 0;
let wrong = 0;
const queBox = document.getElementById('content')
const optionInput = document.querySelectorAll('.btn')

const loadQuestion = () => {
    if(index === total){
        return endQuiz()
    }
    else{
    const data = question[index]
    timestoper();
    // console.log(data);
    queBox.innerText = `${index+1}) ${data.que}`;
    optionInput[0].innerText =  `A. ${data.a}`;
    optionInput[1].innerText =  `B. ${data.b}`;
    optionInput[2].innerText =  `C. ${data.c}`;
    optionInput[3].innerText =  `D. ${data.d}`;
}
}
const submitQuiz = (selectedValue) =>{
    const data = question[index]
    // const ans = getAnswer()
    if(selectedValue === data.correct){
        right++;
        let scores = document.getElementById('display-score');
        scores.innerText = `Score: `+`${right}`;
        
    }
    else{
        wrong++;
    }
    
    clearInterval(timer);
    index++;
    loadQuestion();
    return;
}

// const getAnswer = () => {
//     // let answer;
//     optionInput.forEach(
//         (input) =>{
//             input.addEventListener('click', () => {
//                 submitQuiz(input.value); // Call submitQuiz with the selected value
//             }, { once: true });

//         //     if(input.addEventListener('click',()=>{
//         //         // return input.values;
//         //         return answer = input.value;
//         //     })){
              
//         //     }
//         }
//     );
// }

const getAnswer = () => {
    optionInput.forEach((input) => {
        input.addEventListener('click', () => {
            submitQuiz(input.value); // Call submitQuiz with the selected value
        }, { once: true });
    });
}

const endQuiz = ()=>{
    document.querySelector('.main').innerHTML =
    `
    <div id="result">
    <h1> Thanks you for Playing the quiz</h1><br>
    <h2> ${right} / ${total} are correct </h2>
    </div>
    `
}



// let scores = document.getElementById('display-score')
// scores = score + `${right}`;
loadQuestion();//initial call