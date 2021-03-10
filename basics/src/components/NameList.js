import React from "react";
import Person from "./Person";

function NameList() {
  const names =['A','B','C'];
  const persons = [
    {
      id: 1,
      name: "A",
      age: 12,
      skill: "Java",
    },
    {
      id: 2,
      name: "B",
      age: 15,
      skill: "JavaScript",
    },
    {
      id: 3,
      name: "C",
      age: 19,
      skill: "React",
    },
  ];
  const nameList = names.map((name) => (
    <h1>{name}</h1>
  ));
  return <div>{nameList}</div>;
}

export default NameList;
