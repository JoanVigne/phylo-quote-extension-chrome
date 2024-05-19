async function getPhilosophers() {
  const response = await fetch("./philosopher.json");
  const data = await response.json();
  console.log(data.results);

  displayInfos(data.results);
}

function displayInfos(results) {
  const date = new Date();
  const seed =
    date.getFullYear() * 10000 + (date.getMonth() + 1) * 100 + date.getDate();
  const randomPhilosopher = seed % 9;
  let randomIdea = seed % 101;

  while (results[randomPhilosopher].ideas.length < randomIdea) {
    randomIdea /= 2;
  }

  const philosopherName = document.querySelector(".name");
  /*   const philosopherNationality = document.querySelector(".nationality"); */
  const philosopherPhoto = document.querySelector(".photo");
  const philosopherIdeas = document.querySelector(".idea");

  philosopherName.textContent = results[randomPhilosopher].name;
  /*   philosopherNationality.textContent = results[randomPhilosopher].nationality; */

  philosopherIdeas.textContent =
    '"' + results[randomPhilosopher].ideas[randomIdea] + '"';
  philosopherPhoto.src = results[randomPhilosopher].photo;
}
getPhilosophers();
