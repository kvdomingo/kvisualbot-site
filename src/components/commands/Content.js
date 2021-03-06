import React from "react";
import { Container } from "reactstrap";
import Legend from "./Legend";
import Header from "./Header";
import Commands from "./Commands";
import main from "./Main.json";
import subscriptions from "./Subscriptions.json";
import admin from "./Admin.json";

export const commands = [
  { header: "Main", commands: main },
  { header: "Subscription", commands: subscriptions },
  { header: "Restricted/Experimental", commands: admin },
];

export default function Content() {
  return (
    <Container className="my-5">
      <Header />
      <Legend />
      {commands.map((command, i) => (
        <Commands {...command} key={i} />
      ))}
    </Container>
  );
}
