import React, { useState, useRef } from "react";
import { useOnClickOutside } from "./hooks";
import Menu from "./components/menu/Menu/menu";
import { AppBackgroundHome, Content, Card } from "./style";

import Burger from "./components/menu/Burger/Burger";

export default function Home() {
  const [open, setOpen] = useState(false);
  const node = useRef();
  useOnClickOutside(node, () => setOpen(false));

  return (
    <AppBackgroundHome>
      <div ref={node}>
        <Burger open={open} setOpen={setOpen}></Burger>
        <Menu open={open} setOpen={setOpen}></Menu>
      </div>

      <Content>
        <Card>
          <h1>TESTE</h1>
        </Card>
      </Content>
    </AppBackgroundHome>
  );
}
