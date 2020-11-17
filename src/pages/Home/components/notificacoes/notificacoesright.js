import React from "react";
import "../../style";
import { Button } from "@progress/kendo-react-buttons";

import { Card } from "../../style";

export default function HomeNotificacoesRight() {
  const [hide, setHide] = React.useState(true);
  function click() {
    setHide(!hide);
  }
  if (hide) {
    return (
      <Card className="Card-laterais-right">
        <div class="container">
          <Button
            onClick={click}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span
              style={{ fontSize: "50px", padding: "2%", color: "#2c73d2" }}
              className="k-icon k-i-bell"
            ></span>{" "}
            <h1 style={{ color: "#2c73d2" }}>Notificações</h1>
          </Button>
          <div class="box">
            <div class="boxContent">
              <h1 class="title">Title</h1>
              <p class="desc">
                Less unicorn and apart and credibly yikes touched much jeez that
                so reverent the by a as that kiwi fed wherever more aboard.
              </p>
            </div>
            {/* <a href="#"></a> */}
          </div>
          <div class="box">
            <div class="boxContent">
              <h1 class="title">Title</h1>
              <p class="desc">
                Less unicorn and apart and credibly yikes touched much jeez that
                so reverent the by a as that kiwi fed wherever more aboard.
              </p>
            </div>
            {/* <a href="#"></a> */}
          </div>
          <div class="box">
            <div class="boxContent">
              <h1 class="title">Title</h1>
              <p class="desc">
                Less unicorn and apart and credibly yikes touched much jeez that
                so reverent the by a as that kiwi fed wherever more aboard.
              </p>
            </div>
            {/* <a href="#"></a> */}
          </div>
          <div class="box">
            <div class="boxContent">
              <h1 class="title">Title</h1>
              <p class="desc">
                Less unicorn and apart and credibly yikes touched much jeez that
                so reverent the by a as that kiwi fed wherever more aboard.
              </p>
            </div>
            {/* <a href="#"></a> */}
          </div>
          <div class="box">
            <div class="boxContent">
              <h1 class="title">Title</h1>
              <p class="desc">
                Less unicorn and apart and credibly yikes touched much jeez that
                so reverent the by a as that kiwi fed wherever more aboard.
              </p>
            </div>
            {/* <a href="#"></a> */}
          </div>
          <div class="box">
            <div class="boxContent">
              <h1 class="title">Title</h1>
              <p class="desc">
                Less unicorn and apart and credibly yikes touched much jeez that
                so reverent the by a as that kiwi fed wherever more aboard.
              </p>
            </div>
            {/* <a href="#"></a> */}
          </div>
        </div>
      </Card>
    );
  } else {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <nav>
          <Button
            onClick={click}
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <span
              style={{ fontSize: "50px", padding: "2%", color: "#2c73d2" }}
              className="k-icon k-i-bell"
            ></span>{" "}
          </Button>
        </nav>
      </div>
    );
  }
}
