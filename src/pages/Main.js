import { Fragment } from "react";
import ButtonGroup from "../components/ButtonGroup";
import Card from "../components/Card";
import Content from "../components/Content";
import Input from "../components/Input";
import "./Main.css";
import Header from "../components/Header";
import ContentContainer from "../components/ContentContainer";
import ContentEnd from "../components/ContentEnd";

const Aside = (props) => {
  const cards = [];

  for (let i = 0; i <= 10; i++) {
    cards.push(<Card key={i} />);
  }

  return (
    <Fragment>
      <div className="sidenav">
        <button className="top-btn">button</button>
        <Content />
        <ButtonGroup />
        <Input />
        {cards}
      </div>
      <div className="main">
        <Header />
        <div
          style={{
            maxWidth: "100%",
            borderBottom: "3px solid black",
            margin: "4px",
          }}
        ></div>
        <div style={{ float: "right", marginTop: "12px" }}>
          <button>button</button>
          <button>button</button>
        </div>
        <div>text</div>
        <ContentContainer />
        <div style={{ marginTop: "5px" }}>text</div>
        <div
          style={{
            maxWidth: "100%",
            borderBottom: "3px solid black",
            margin: "4px",
          }}
        ></div>
        <ContentEnd />
      </div>
    </Fragment>
  );
};

export default Aside;
