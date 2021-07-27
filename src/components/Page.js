import React, { useEffect, useState } from "react";

import { Button } from "react-bootstrap";

function NewVocab() {
  var indents = [
    <div style={{}}>
      <div>Practice memorizing vocabulary BARRONS IELTS</div>
      <Button class="btn-primary" variant="primary">
        New Vocab
      </Button>
      <Button class="btn-primary" variant="primary">
        Start
      </Button>
    </div>,
  ];

  return indents;
}
const vocabInit = [
  {
    word: "a",
    def: "b",
  },
  {
    word: "c",
    def: "d",
  },
  {
    word: "e",
    def: "f",
  },
];
for (let i = 0; i < 4; i++) vocabInit.push({ word: i, def: i });

function Random() {
  var a = [];
  const [list, setCount] = useState(vocabInit);
  console.log("list", list);

  a.push(
    <div>
      {/* {JSON.stringify(list)} */}
      <div>
        <Button
          class="btn-primary"
          variant="primary"
          onClick={() => {
            let tempt = [...list];
            tempt.sort(() => Math.random() - 0.5);
            setCount(tempt);
          }}
        >
          Random
        </Button>
        <Button
          class="btn-primary"
          variant="primary"
          onClick={() => {
            setCount(list);
            console.log(list);
          }}
        >
          Add
        </Button>
      </div>
      {list.map((item, index) => (
        <div>
          <Button class="btn-primary" variant="primary">
            {index + 1}, {item.word}
          </Button>
          <Button class="btn-primary" variant="primary">
            {item.def}
          </Button>
        </div>
      ))}
    </div>
    //
  );

  return a;
}

function listShuffle() {
  vocabInit.sort(() => Math.random() - 0.5);
  console.log("listInit" + vocabInit);
}

// const shuffle = (listShuffle) => (e) => {
//   listShuffle = listShuffle.sort(() => Math.random() - 0.5);
//   console.log(listShuffle);
// };
function Page() {
  var indents = Random();
  // var indents = NewVocab();
  // for (var i = 0; i < 10; i++) {
  //   indents.push(
  //     <Button class="btn-primary" variant="primary">
  //       {i + 1}
  //     </Button>
  //   );
  // }
  // indents.push(RandomVocab());
  return indents;
}

function RandomVocab() {
  var indents = [];
  for (var i = 0; i < 10; i++) {
    indents.push(
      <div>
        <Button class="btn-primary" variant="primary">
          {i + 1}
        </Button>
        <Button class="btn-primary" variant="primary">
          Vocab
        </Button>
      </div>
    );
  }
  return indents;
}

export default Page;
