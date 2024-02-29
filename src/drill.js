import { Kanji } from "https://cdn.jsdelivr.net/npm/@marmooo/kanji@0.0.8/esm/kanji.js";
import { JKAT } from "https://cdn.jsdelivr.net/npm/@marmooo/kanji@0.0.8/esm/jkat.js";

const jkat = new Kanji(JKAT);
const dirNames = [
  "小1",
  "小2",
  "小3",
  "小4",
  "小5",
  "小6",
  "中2",
  "中3",
  "高校",
  "常用",
  "準1級",
  "1級",
];
let kanjis = "";
let level = 2;
let prevCanvasSize;
let canvasSize = 140;
let maxWidth = 4;
if (globalThis.innerWidth > 768) {
  canvasSize = 280;
  maxWidth = 8;
}
const animCJKDir = "/animCJK";
const audioContext = new AudioContext();
const audioBufferCache = {};
loadAudio("stupid", "/touch-shuji/mp3/stupid5.mp3");
loadAudio("correct", "/touch-shuji/mp3/correct3.mp3");
loadAudio("correctAll", "/touch-shuji/mp3/correct1.mp3");
loadAudio("incorrect", "/touch-shuji/mp3/incorrect1.mp3");
loadConfig();

// function toKanji(kanjiId) {
//   return String.fromCodePoint(parseInt("0x" + kanjiId));
// }

function getDictUrl(kanji) {
  const baseUrl = "https://marmooo.github.io";
  const grade = jkat.getGrade(kanji);
  if (grade < 0) {
    return null;
  } else {
    return baseUrl + "/kanji-dict/" + dirNames[grade] + "/" + kanji + "/";
  }
}

function loadConfig() {
  if (localStorage.getItem("darkMode") == 1) {
    document.documentElement.setAttribute("data-bs-theme", "dark");
  }
  if (localStorage.getItem("hint") == 1) {
    document.getElementById("hint").textContent = "EASY";
  }
  if (localStorage.getItem("touch-shuji-level")) {
    level = parseInt(localStorage.getItem("touch-shuji-level"));
  }
}

// TODO: :host-context() is not supportted by Safari/Firefox now
function toggleDarkMode() {
  if (localStorage.getItem("darkMode") == 1) {
    localStorage.setItem("darkMode", 0);
    document.documentElement.setAttribute("data-bs-theme", "light");
    boxes.forEach((box) => {
      const target = box.shadowRoot.querySelectorAll("object, canvas");
      [...target].forEach((canvas) => {
        canvas.removeAttribute("style");
      });
    });
  } else {
    localStorage.setItem("darkMode", 1);
    document.documentElement.setAttribute("data-bs-theme", "dark");
    boxes.forEach((box) => {
      const target = box.shadowRoot.querySelectorAll("object, canvas");
      [...target].forEach((canvas) => {
        canvas.setAttribute("style", "filter: invert(1) hue-rotate(180deg);");
      });
    });
  }
}

function toggleHint(event) {
  if (localStorage.getItem("hint") == 1) {
    localStorage.setItem("hint", 0);
    event.target.textContent = "HARD";
  } else {
    localStorage.setItem("hint", 1);
    event.target.textContent = "EASY";
  }
  toggleAllStroke();
}

function toggleScroll() {
  const scrollOn = document.getElementById("scrollOn");
  const scrollOff = document.getElementById("scrollOff");
  if (scrollOn.classList.contains("d-none")) {
    document.body.style.overflow = "visible";
    scrollOn.classList.remove("d-none");
    scrollOff.classList.add("d-none");
  } else {
    document.body.style.overflow = "hidden";
    scrollOn.classList.add("d-none");
    scrollOff.classList.remove("d-none");
  }
}

async function playAudio(name, volume) {
  const audioBuffer = await loadAudio(name, audioBufferCache[name]);
  const sourceNode = audioContext.createBufferSource();
  sourceNode.buffer = audioBuffer;
  if (volume) {
    const gainNode = audioContext.createGain();
    gainNode.gain.value = volume;
    gainNode.connect(audioContext.destination);
    sourceNode.connect(gainNode);
    sourceNode.start();
  } else {
    sourceNode.connect(audioContext.destination);
    sourceNode.start();
  }
}

async function loadAudio(name, url) {
  if (audioBufferCache[name]) return audioBufferCache[name];
  const response = await fetch(url);
  const arrayBuffer = await response.arrayBuffer();
  const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);
  audioBufferCache[name] = audioBuffer;
  return audioBuffer;
}

function unlockAudio() {
  audioContext.resume();
}

class ProblemBox extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.adoptedStyleSheets = [globalCSS];

    const template = document.getElementById("problem-box")
      .content.cloneNode(true);
    this.shadowRoot.appendChild(template);
  }
}
customElements.define("problem-box", ProblemBox);

class TehonBox extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.adoptedStyleSheets = [globalCSS];

    const template = document.getElementById("tehon-box")
      .content.cloneNode(true);
    this.shadowRoot.appendChild(template);

    if (document.documentElement.getAttribute("data-bs-theme") == "dark") {
      [...this.shadowRoot.querySelectorAll("object")].forEach((canvas) => {
        canvas.setAttribute("style", "filter: invert(1) hue-rotate(180deg);");
      });
    }
  }
}
customElements.define("tehon-box", TehonBox);

class TegakiBox extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.adoptedStyleSheets = [globalCSS];

    const template = document.getElementById("tegaki-box")
      .content.cloneNode(true);
    if (globalThis.innerWidth > 768) {
      const canvas = template.querySelector("canvas");
      canvas.setAttribute("width", canvasSize);
      canvas.setAttribute("height", canvasSize);
    }
    this.shadowRoot.appendChild(template);

    if (document.documentElement.getAttribute("data-bs-theme") == "dark") {
      const target = this.shadowRoot.querySelectorAll("object, canvas");
      [...target].forEach((canvas) => {
        canvas.setAttribute("style", "filter: invert(1) hue-rotate(180deg);");
      });
    }
  }
}
customElements.define("tegaki-box", TegakiBox);

function getKakusu(object, kanjiId) {
  const id = "z" + kanjiId + "d";
  const paths = object.contentDocument.querySelectorAll('[id^="' + id + '"]');
  const ids = [...paths].map((path) => path.getAttribute("id"));
  const kakuIds = ids.map((id) => {
    if (/[a-z]/.test(id.slice(-1))) {
      return id.slice(0, -1);
    } else {
      return id;
    }
  });
  return new Set(kakuIds).size;
}

const alphabets = "abcefghijklmnopqrstuvwxyz".split("");
function getKakuPaths(contentDocument, kanjiId, pos) {
  const id = "z" + kanjiId + "d" + pos;
  const paths = contentDocument.querySelectorAll('[id="' + id + '"]');
  if (paths.length != 0) {
    return [...paths];
  } else {
    const paths = [];
    for (let i = 0; i < alphabets.length; i++) {
      const path = contentDocument.querySelectorAll(
        '[id="' + id + alphabets[i] + '"]',
      );
      paths.push(...path);
    }
    return paths;
  }
}

function getTehonCanvas(object, kanjiId, kakusu, kakuNo) {
  return new Promise((resolve) => {
    const clonedContent = object.contentDocument.cloneNode(true);
    for (let j = 1; j <= kakusu; j++) {
      const kakuPaths = getKakuPaths(clonedContent, kanjiId, j);
      if (kakuNo != j) {
        kakuPaths.forEach((kakuPath) => kakuPath.remove());
      } else {
        kakuPaths.forEach((kakuPath) => {
          kakuPath.setAttribute("stroke", "black");
        });
      }
    }
    const text = clonedContent.documentElement.outerHTML;
    const blob = new Blob([text], { type: "image/svg+xml" });
    const url = URL.createObjectURL(blob);
    const img = new Image();
    img.src = url;
    img.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = canvasSize;
      canvas.height = canvasSize;
      const ctx = canvas.getContext("2d", { alpha: false });
      ctx.drawImage(img, 0, 0, canvasSize, canvasSize);
      resolve(canvas);
    };
  });
}

const specials = [
  "20043",
  "21450",
  "27665",
  "29995",
  "30001",
  "30002",
  "30003",
  "30011",
  "31899",
  "37325",
  "37340",
];
function getKanjiDir(kanji, kanjiId) {
  if (/[ぁ-んァ-ヶ]/.test(kanji)) {
    return "svgsKana";
  } else {
    if (specials.includes(kanjiId)) {
      return "svgsJaSpecial";
    } else {
      return "svgsJa";
    }
  }
}

function toKanjiId(str) {
  const oct = str.codePointAt(0).toString(10);
  return ("00000" + oct).slice(-5);
}

function loadSVG(kanji, kanjiId, parentNode, pos, loadCanvas) {
  let box;
  if (loadCanvas) {
    box = new TegakiBox();
  } else {
    box = new TehonBox();
  }
  boxes.push(box);
  const object = box.shadowRoot.querySelector("object");
  const dataUrl = `${animCJKDir}/${getKanjiDir(kanji, kanjiId)}/${kanjiId}.svg`;
  object.setAttribute("alt", kanji);
  object.setAttribute("data", dataUrl);
  object.setAttribute("data-id", kanjiId);
  object.setAttribute("data-pos", pos);
  if (loadCanvas) {
    object.onload = initTegakiSVG;
  }
  parentNode.appendChild(box);
  return object;
}

function showKanjiScore(
  kanjiScore,
  kakuScores,
  scoreObj,
  tehonKanji,
  object,
  kanjiId,
  kakusu,
) {
  kanjiScore = Math.floor(kanjiScore);
  if (kanjiScore >= 80) {
    playAudio("correct", 0.3);
  } else {
    playAudio("incorrect", 0.3);
  }
  scoreObj.classList.remove("d-none");
  scoreObj.textContent = kanjiScore;
  for (let i = 0; i < kakusu; i++) {
    changePathColor(i + 1, tehonKanji, kanjiId, "black");
  }
  for (let i = 0; i < kakusu; i++) {
    if (!kakuScores[i][0] || kakuScores[i][0] < 80) {
      changePathColor(i + 1, tehonKanji, kanjiId, "red");
    }
  }
  if (localStorage.getItem("hint") != 1) {
    changeAllColor(object, kanjiId, "lightgray");
  }
}

function getKanjiScores(
  kakuScores,
  scoreObj,
  tehonKanji,
  object,
  kanjiId,
  kakusu,
) {
  return Promise.all(kakuScores).then((kakuScores) => {
    let kanjiScore = 0;
    let totalTehonCount = 0;
    kakuScores.forEach((kakuData) => {
      const [kakuScore, tehonCount] = kakuData;
      kanjiScore += kakuScore * tehonCount;
      totalTehonCount += tehonCount;
    });
    kanjiScore /= totalTehonCount;
    showKanjiScore(
      kanjiScore,
      kakuScores,
      scoreObj,
      tehonKanji,
      object,
      kanjiId,
      kakusu,
    );
    return kanjiScore;
  });
}

function getProblemScores(tegakiPanel, tehonPanel, objects, tegakiPads) {
  const promises = [];
  objects.forEach((object, i) => {
    const kanjiId = object.dataset.id;
    const kakusu = getKakusu(object, kanjiId);
    const pos = parseInt(object.dataset.pos);
    const tegakiData = tegakiPads[i].toData();
    let kanjiScores = 0;
    if (tegakiData.length != 0) {
      const tehonKanji = tehonPanel.children[pos]
        .shadowRoot.querySelector("object");
      const scoreObj = tegakiPanel.children[pos]
        .shadowRoot.querySelector(".score");
      const kakuScores = getKakuScores(tegakiData, object, kanjiId, kakusu);
      kanjiScores = getKanjiScores(
        kakuScores,
        scoreObj,
        tehonKanji,
        object,
        kanjiId,
        kakusu,
      );
    }
    promises[i] = kanjiScores;
  });
  return Promise.all(promises);
}

function setScoringButton(
  problemBox,
  tegakiPanel,
  tehonPanel,
  objects,
  tegakiPads,
  word,
) {
  const scoring = problemBox.shadowRoot.querySelector(".scoring");
  scoring.addEventListener("click", () => {
    getProblemScores(tegakiPanel, tehonPanel, objects, tegakiPads).then(
      (scores) => {
        if (scores.every((score) => score >= 80)) {
          problemBox.shadowRoot.querySelector(".guard").style.height = "100%";
          const next = problemBox.nextElementSibling;
          if (next) {
            next.shadowRoot.querySelector(".guard").style.height = "0";
            const headerHeight = document.getElementById("header").offsetHeight;
            const top = next.getBoundingClientRect().top +
              document.documentElement.scrollTop - headerHeight;
            globalThis.scrollTo({ top: top, behavior: "smooth" });
          }
        }
        // 点数があまりにも低いものは合格リストから除外
        let clearedKanjis = localStorage.getItem("touch-shuji");
        if (clearedKanjis) {
          let removed = false;
          scores.forEach((score, i) => {
            if (score < 40) {
              clearedKanjis = clearedKanjis.replace(word[i], "");
              removed = true;
            }
          });
          if (removed) {
            localStorage.setItem("touch-shuji", clearedKanjis);
          }
        }
      },
    );
  });
}

function setSignaturePad(object) {
  const canvas = object.parentNode.querySelector("canvas");
  const pad = new SignaturePad(canvas, {
    minWidth: 0.1,
    maxWidth: maxWidth,
    penColor: "black",
    throttle: 0,
    minDistance: 0,
    velocityFilterWeight: 0,
  });
  return pad;
}

function setEraser(tegakiPad, tegakiPanel, tehonPanel, object, kanjiId) {
  const currKanji = object.getRootNode().host;
  const kanjiPos = [...tegakiPanel.children].findIndex((x) => x == currKanji);
  const eraser = tehonPanel.children[kanjiPos]
    .shadowRoot.querySelector(".eraser");
  eraser.onclick = () => {
    const data = tegakiPad.toData();
    if (data) {
      tegakiPad.clear();
    }
    const pos = parseInt(object.dataset.pos);
    const scoreObj = tegakiPanel.children[pos]
      .shadowRoot.querySelector(".score");
    scoreObj.classList.add("d-none");
    if (localStorage.getItem("hint") != 1) {
      changeAllColor(object, kanjiId, "none");
    }
  };
}

function setDict(tehonPanel, object, kanji) {
  const pos = parseInt(object.dataset.pos);
  const dict = tehonPanel.children[pos].shadowRoot.querySelector(".dict");
  const url = getDictUrl(kanji);
  if (url) {
    dict.href = url;
  } else {
    dict.classList.add("d-none");
  }
}

function loadProblem(wordYomi) {
  const [word, yomi] = wordYomi.split("|");
  const problemBox = new ProblemBox();
  const shadow = problemBox.shadowRoot;
  const info = shadow.querySelector(".info");
  info.textContent = yomi;
  const search = shadow.querySelector(".search");
  search.href = "https://www.google.com/search?q=" + word + "とは";
  const objects = [];
  const tegakiPads = [];
  const tehon = shadow.querySelector(".tehon");
  const tegaki = shadow.querySelector(".tegaki");
  word.split("").forEach((kanji, pos) => {
    const kanjiId = toKanjiId(kanji);
    loadSVG(kanji, kanjiId, tehon, pos, false);
    const object = loadSVG(kanji, kanjiId, tegaki, pos, true);
    const tegakiPad = setSignaturePad(object);
    objects.push(object);
    tegakiPads.push(tegakiPad);
    setEraser(tegakiPad, tegaki, tehon, object, kanjiId);
    setDict(tehon, object, kanji);
  });
  setScoringButton(problemBox, tegaki, tehon, objects, tegakiPads, word);
  document.getElementById("problems").appendChild(problemBox);
  return tegakiPads;
}

function resizeTegakiContents(tegakiPads) {
  tegakiPads.forEach((tegakiPad) => {
    const canvas = tegakiPad.canvas;
    canvas.setAttribute("width", canvasSize);
    canvas.setAttribute("height", canvasSize);
    const data = tegakiPad.toData();
    if (data.length > 0) {
      tegakiPad.maxWidth = maxWidth;
      if (prevCanvasSize < canvasSize) {
        for (let i = 0; i < data.length; i++) {
          for (let j = 0; j < data[i].length; j++) {
            data[i][j].x /= 2;
            data[i][j].y /= 2;
          }
        }
      } else {
        for (let i = 0; i < data.length; i++) {
          for (let j = 0; j < data[i].length; j++) {
            data[i][j].x /= 2;
            data[i][j].y /= 2;
          }
        }
      }
      tegakiPad.fromData(data);
    }
  });
}

function loadDrill(drill) {
  let tegakiPads = [];
  drill.forEach((wordYomi) => {
    const pads = loadProblem(wordYomi);
    tegakiPads = tegakiPads.concat(pads);
  });
  globalThis.addEventListener("resize", () => {
    prevCanvasSize = canvasSize;
    if (globalThis.innerWidth >= 768) {
      canvasSize = 280;
      maxWidth = 8;
    } else {
      canvasSize = 140;
      maxWidth = 4;
    }
    if (prevCanvasSize != canvasSize) {
      resizeTegakiContents(tegakiPads);
    }
  });
}

// 器用差の大きい低学年の採点が緩くなるよう太さを変える
function setStrokeWidth(kakusu) {
  if (globalThis.innerWidth > 768) {
    return 20 + 12 / kakusu;
  } else {
    return 10 + 6 / kakusu;
  }
}

function toggleAllStroke() {
  const problems = document.getElementById("problems").children;
  for (const problem of problems) {
    const tegakiBoxes = problem.shadowRoot.querySelector(".tegaki").children;
    for (const tegakiBox of tegakiBoxes) {
      const object = tegakiBox.shadowRoot.querySelector("object");
      const kanjiId = object.dataset.id;
      toggleStroke(object, kanjiId);
    }
  }
}

function toggleStroke(object, kanjiId) {
  const id = "z" + kanjiId + "d";
  const paths = object.contentDocument.querySelectorAll('[id^="' + id + '"]');
  const width = 128;
  [...paths].forEach((path) => {
    if (localStorage.getItem("hint") != 1) {
      path.style.fill = "none";
      path.setAttribute("stroke", "none");
    } else {
      path.style.fill = "lightgray";
      path.setAttribute("stroke", "lightgray");
    }
    path.setAttribute("stroke-width", width);
  });
}

function changeAllColor(object, kanjiId, color) {
  const id = "z" + kanjiId + "d";
  const paths = object.contentDocument.querySelectorAll('[id^="' + id + '"]');
  [...paths].forEach((path) => {
    path.style.fill = color;
  });
}

function changePathColor(pos, object, kanjiId, color) {
  removeAnimations(object);
  const paths = getKakuPaths(object.contentDocument, kanjiId, pos);
  paths.forEach((path) => {
    path.style.fill = color;
  });
}

function countNoTransparent(data) {
  let count = 0;
  for (let i = 3; i < data.length; i += 4) {
    if (data[i] != 0) {
      count += 1;
    }
  }
  return count;
}

function getInclusionCount(tegakiImgData, tehonImgData) {
  for (let i = 3; i < tegakiImgData.length; i += 4) {
    if (tehonImgData[i] != 0) {
      tegakiImgData[i] = 0;
    }
  }
  const inclusionCount = countNoTransparent(tegakiImgData);
  return inclusionCount;
}

function getScoringFactor(level) {
  switch (level) {
    case 0:
      return 0.5 ** 2;
    case 1:
      return 0.6 ** 2;
    case 2:
      return 0.7 ** 2;
    case 3:
      return 0.8 ** 2;
    case 4:
      return 0.9 ** 2;
    default:
      return 0.7 ** 2;
  }
}

function calcKakuScore(tegakiCount, tehonCount, inclusionCount) {
  // 線長を優遇し過ぎると ["未","末"], ["土","士"] の見分けができなくなる
  let lineScore = 1 - Math.abs((tehonCount - tegakiCount) / tehonCount);
  if (lineScore > 1) lineScore = 1;
  // 包含率を優遇し過ぎると ["一","つ"], ["二","＝"] の見分けができなくなる
  let inclusionScore = (tegakiCount - inclusionCount) / tegakiCount;
  if (inclusionScore > 1) inclusionScore = 1;
  // 100点が取れないので少しだけ採点を甘くする
  let kakuScore = lineScore * inclusionScore * 100 / getScoringFactor(level);
  if (kakuScore < 0) kakuScore = 0;
  if (kakuScore > 100) kakuScore = 100;
  if (isNaN(kakuScore)) kakuScore = 0;
  return kakuScore;
}

function getKakuScores(tegakiData, object, kanjiId, kakusu) {
  const markerWidth = setStrokeWidth(kakusu);
  const promises = new Array(kakusu);
  for (let i = 0; i < kakusu; i++) {
    promises[i] = new Promise((resolve) => {
      if (tegakiData[i]) {
        tegakiData[i].minWidth = markerWidth;
        tegakiData[i].maxWidth = markerWidth;
        const markerCanvas = document.createElement("canvas");
        markerCanvas.setAttribute("width", canvasSize);
        markerCanvas.setAttribute("height", canvasSize);
        const markerContext = markerCanvas.getContext("2d", { alpha: false });
        const markerPad = new SignaturePad(markerCanvas, {
          minWidth: markerWidth,
          maxWidth: markerWidth,
          penColor: "black",
        });
        markerPad.fromData([tegakiData[i]]);
        const kakuData =
          markerContext.getImageData(0, 0, canvasSize, canvasSize).data;
        const kakuCount = countNoTransparent(kakuData);
        getTehonCanvas(object, kanjiId, kakusu, i + 1).then((tehonCanvas) => {
          const tehonImgData = tehonCanvas.getContext("2d", { alpha: false })
            .getImageData(0, 0, canvasSize, canvasSize).data;
          const tehonCount = countNoTransparent(tehonImgData);

          const inclusionCount = getInclusionCount(kakuData, tehonImgData);
          const kakuScore = calcKakuScore(
            kakuCount,
            tehonCount,
            inclusionCount,
          );
          resolve([kakuScore, tehonCount]);
        });
      } else {
        getTehonCanvas(object, kanjiId, kakusu, i + 1).then((tehonCanvas) => {
          const tehonImgData = tehonCanvas.getContext("2d", { alpha: false })
            .getImageData(0, 0, canvasSize, canvasSize).data;
          const tehonCount = countNoTransparent(tehonImgData);
          resolve([0, tehonCount]);
        });
      }
    });
  }
  return promises;
}

function removeAnimations(object) {
  const animations = object.contentDocument.querySelectorAll("path[clip-path]");
  [...animations].forEach((animation) => {
    animation.remove();
  });
}

function initTegakiSVG(event) {
  const object = event.target;
  const kanjiId = object.dataset.id;
  removeAnimations(object);
  toggleStroke(object, kanjiId);
}

function report() {
  const scores = [];
  const problems = document.getElementById("problems").children;
  for (let i = 0; i < problems.length; i++) {
    const tegakis = problems[i].shadowRoot.querySelector(".tegaki").children;
    for (let j = 0; j < tegakis.length; j++) {
      const score = tegakis[j].shadowRoot.querySelector(".score").textContent;
      scores.push(parseInt(score));
    }
  }
  let score = 0;
  for (let i = 0; i < scores.length; i++) {
    score += scores[i];
  }
  score /= scores.length;
  if (score >= 80) {
    playAudio("correctAll");
    let clearedKanjis = localStorage.getItem("touch-shuji");
    if (clearedKanjis) {
      kanjis.split("").forEach((kanji) => {
        if (!clearedKanjis.includes(kanji)) {
          clearedKanjis += kanji;
        }
      });
      localStorage.setItem("touch-shuji", clearedKanjis);
    } else {
      localStorage.setItem("touch-shuji", kanjis);
    }
    document.getElementById("report").classList.add("d-none");
    document.getElementById("correctReport").classList.remove("d-none");
    setTimeout(() => {
      location.href = "/touch-shuji/";
    }, 3000);
  } else {
    playAudio("stupid");
    document.getElementById("report").classList.add("d-none");
    document.getElementById("incorrectReport").classList.remove("d-none");
    setTimeout(() => {
      document.getElementById("report").classList.remove("d-none");
      document.getElementById("incorrectReport").classList.add("d-none");
    }, 6000);
  }
}

function shuffle(array) {
  for (let i = array.length; 1 < i; i--) {
    const k = Math.floor(Math.random() * i);
    [array[k], array[i - 1]] = [array[i - 1], array[k]];
  }
  return array;
}

function fetchJson(grade) {
  return new Promise((resolve) => {
    fetch(`/touch-shuji/data/${grade + 1}.json`)
      .then((response) => response.json())
      .then((data) => resolve(data));
  });
}

async function fetchJsons(grades) {
  const data = new Array(10);
  for (let i = 0; i < grades.length; i++) {
    await fetchJson(grades[i]).then((result) => {
      data[grades[i]] = result;
    });
  }
  return data;
}

function initQuery() {
  const num = 5;
  const query = new URLSearchParams(location.search);
  kanjis = query.get("q") || "学";
  const targetKanjis = [];
  const targetGrades = [];
  const grades = new Array(10);
  Array.from(kanjis).forEach((kanji) => {
    const g = jkat.getGrade(kanji);
    if (g >= 0) {
      targetKanjis.push(kanji);
      targetGrades.push(g);
      grades[g] = true;
    }
  });
  fetchJsons([...new Set(targetGrades)]).then((data) => {
    let problems = [];
    if (targetKanjis.length == 1) {
      const kanji = targetKanjis[0];
      const grade = targetGrades[0];
      problems = [data[grade][kanji].shift()];
      problems = problems.concat(shuffle(data[grade][kanji]).slice(0, num));
    } else {
      targetKanjis.forEach((kanji, i) => {
        const grade = targetGrades[i];
        const candidates = data[grade][kanji].slice(1);
        problems = problems.concat(shuffle(candidates)[0]);
      });
    }
    loadDrill(problems);
    document.getElementById("problems").children[0]
      .shadowRoot.querySelector(".guard").style.height = "0";
  });
}

function getGlobalCSS() {
  let cssText = "";
  for (const stylesheet of document.styleSheets) {
    try {
      for (const rule of stylesheet.cssRules) {
        cssText += rule.cssText;
      }
    } catch {
      // skip cross-domain issue (Google Fonts)
    }
  }
  const css = new CSSStyleSheet();
  css.replaceSync(cssText);
  return css;
}

const boxes = [];
const globalCSS = getGlobalCSS();
initQuery();

document.getElementById("toggleDarkMode").onclick = toggleDarkMode;
document.getElementById("hint").onclick = toggleHint;
document.getElementById("toggleScroll").onclick = toggleScroll;
document.getElementById("reportButton").onclick = report;
document.addEventListener("click", unlockAudio, {
  once: true,
  useCapture: true,
});
