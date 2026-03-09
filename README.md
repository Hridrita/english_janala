# ENGLISH <img width="25px" src="./assets/logo.png" /> JANALA

---

## ⚡ API Endpoints

1. Get ⚡ All Levels

```bash
https://openapi.programming-hero.com/api/levels/all
```

1. Get ⚡ Words by Levels <br/>
   https:// openapi.programming-hero.com/api/level/{id}

```bash
https://openapi.programming-hero.com/api/level/5
```

1. Get ⚡ Words Detail <br/>
   https:// openapi.programming-hero.com/api/word/{id}

```bash
https://openapi.programming-hero.com/api/word/5
```

1. Get ⚡ All Words <br/>

```bash
https://openapi.programming-hero.com/api/words/all
```

# Worked on

### 1. Showed Levels on The UI

- [ ] Showed a center-aligned heading as Figma

---

- [ ] Created dynamically generated buttons from **API-01** for each lesson
- [ ] Lesson Buttons will be displayed on page load

---

### 2. Showed Word Cards Based on Level

- [ ] Showed a default text that will be displayed in the Vocabulary section initially
- [ ] on Clicking a Specific Lesson Button Load All the words from **API-02**
- [ ] Displayed all words for a selected lesson in a card format, showing:

  - [ ] Word
  - [ ] Word meaning & pronunciation
  - [ ] Two buttons with relevant icons as per Figma

- [ ] Showed **\*No Word Found** message if no words exist for a lesson

---

- [ ] Created functionality to highlight the active lesson button

---

### 3. Used Different Color on The Active Level Button

- [ ] After Successfully Loading words of a level , diffirentiated the button so user can understand which button is active

### 4. Vocabulary Details

- [ ] Created functionality to open a modal when clicking the details icon
- [ ] Data will be load from **API-03**
- [ ] modal will displays:
  - [ ] Word with pronunciation
  - [ ] Example sentence
  - [ ] Synonyms
  - [ ] A "Complete Learning" button to close the modal

### 5. Handling Invalid Data

- [ ] avoid displaying falsy values like `undefined` or `null`
- [ ] displayed relevant words if no data is found

### 6. Loading Spinner

- [ ] Created a loading spinner that will be display when vocabulary is loading from API



```js
function pronounceWord(word) {
  const utterance = new SpeechSynthesisUtterance(word);
  utterance.lang = "en-EN"; // English
  window.speechSynthesis.speak(utterance);
}
```


---
