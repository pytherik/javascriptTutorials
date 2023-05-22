const questTemplate = document.querySelector('[data-quest-template]');
const questContainer = document.querySelector('[data-quests-container]');


const url = 'https://opentdb.com/api.php?amount=10';



const getAsyncQuestions = async () => {
  try {
    let data =await fetch(url);
    data = await data.json();
    // for (let i in data.results) {
    //   console.log(data.results[i].question);
    // }
    console.log(data.results);
    const quests = data.results.map((result) => {
      const questCard = questTemplate.content.cloneNode(true).children[0];
      const header = questCard.querySelector('[data-question]');
      const body = questCard.querySelector('[data-answer]');
      header.textContent = result.question;
      body.textContent = result.correct_answer;
      questContainer.append(questCard);
      return {quest: result.question, answer: result.correct_answer, element: questCard}
    })
    console.log(quests);
  } catch (err) {
    console.log(err);
  }
}

getAsyncQuestions();



// const getPromiseQuestions = () => {
//   fetch(url)
//     .then(res => res.json())
//     .then((data) => {
//       for (let i in data.results) {
//         console.log(data.results[i].question);
//       }
//     }).catch(err => {
//     console.log(err);
//   })
// }
//
// getPromiseQuestions();
