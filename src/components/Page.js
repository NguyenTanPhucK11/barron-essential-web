import React from "react";
import { Button } from "react-bootstrap";

function NewVocab() {
  var indents = [
    <div style={{}}>
      <div>Practice memorizing vocabulary BARRONS IELTS</div>
      <Button style={{ margin: "5px" }} variant="primary">
        New Vocab
      </Button>
      <Button style={{ margin: "5px" }} variant="primary">
        Start
      </Button>
    </div>,
  ];

  return indents;
}

function Page() {
  var indents = NewVocab();
  for (var i = 0; i < 10; i++) {
    indents.push(
      <Button style={{ margin: "5px" }} variant="primary">
        {i + 1}
      </Button>
    );
  }
  indents.push(RandomVocab());
  return indents;
}

function RandomVocab() {
  var indents = [];
  for (var i = 0; i < 10; i++) {
    indents.push(
      <div>
        <Button style={{ margin: "3px" }} variant="primary">
          {i + 1}
        </Button>
        <Button style={{ margin: "3px" }} variant="primary">
          Vocab
        </Button>
      </div>
    );
  }
  return indents;
}

export default Page;
