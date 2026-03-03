
const loadLessons = () => {
    fetch("https://openapi.programming-hero.com/api/levels/all")
    .then((res) => res.json())
    .then((json) => displayLesson(json.data));
};

const loadLevelWord = (id) =>{
    console.log(id);
    const url = `https://openapi.programming-hero.com/api/level/${id}`;
    fetch(url)
    .then((res) => res.json())
    .then ((data) => displayLevelWord(data.data));
};

const displayLevelWord = (words) =>{
   // console.log(words);
   const wordContainer = document.getElementById("word-container");
   wordContainer.innerHTML = "";


   // {
// "id": 4,
// "level": 5,
// "word": "Diligent",
// "meaning": "পরিশ্রমী",
// "pronunciation": "ডিলিজেন্ট"
// },

   words.forEach(word =>{
    console.log(word);

    const card = document.createElement("div");
    card.innerHTML = `
      <div class="bg-white rounded-xl shadow-sm text-center py-10 px-5 space-y-4">
    <h2 class="font-bold text-2xl">${word.word}</h2>
    <p class="font-semibold">Meaning/pronounciation</p>

    <div class="font-semibold text-2xl font-bangla">"${word.meaning} / ${word.pronunciation}"</div>
    <div class="flex justify-between items-center">
      <button class="btn bg-[#1a91ff1A] hover:bg-[#1a91ff80]"><i class="fa-solid fa-circle-info"></i></button>
      <button class="btn bg-[#1a91ff1A] hover:bg-[#1a91ff80]"><i class="fa-solid fa-volume-high"></i></button>
    </div>

  </div>
    
    `;
    wordContainer.append(card);
   });

};



const displayLesson = (lessons) => {
   // console.log(lessons);

   const levelContainer = document.getElementById("level-container");
   levelContainer.innerHTML = "";

   for (let lesson of lessons){
    console.log(lesson);
    const btnDiv = document.createElement("div");
    btnDiv.innerHTML = `
       <button onClick = "loadLevelWord(${lesson.level_no})" class="btn btn-outline btn-primary"><i class="fa-solid fa-book-open"></i>Lesson - ${lesson.level_no}</button>

    `;
    levelContainer.append(btnDiv);
   }

};

loadLessons();

