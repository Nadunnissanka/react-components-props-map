import React from "react";
import Heading from "./Heading";
import Card from "./Card";
import Contacts from "../contacts";

console.log(Contacts);

function createCard(Contacts) {
  return (
    <Card
      id={Contacts.id}
      key={Contacts.id}
      name={Contacts.name}
      img={Contacts.img}
      tel={Contacts.phone}
      email={Contacts.email}
    />
  );
}

function App() {
  return (
    <div>
      <Heading />
      {Contacts.map(createCard)}
    </div>
  );
}

export default App;
