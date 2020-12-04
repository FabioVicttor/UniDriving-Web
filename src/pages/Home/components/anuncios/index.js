import React from "react";

import { Card, Box, Container, ButtonMenu } from "./style";

export default function Anuncios() {
  return (
    <Card>
      <div
        style={{
          display: "inline-flex",
          justifyContent: "space-evenly",
          width: "100%",
          borderTopLeftRadius: "30px",
          borderTopRightRadius: "30px",
        }}
      >
        <ButtonMenu style={{ borderTopLeftRadius: "30px" }}>
          Anuncios
        </ButtonMenu>
        <ButtonMenu style={{ borderTopRightRadius: "30px" }}>
          Meus Anuncios
        </ButtonMenu>
      </div>
      <Container class="scrollbar" id="style-5">
        <div class="force-overflow">
          <Box>
            <h1>Title</h1>
            <p>
              Less unicorn and apart and credibly yikes touched much jeez that
              so reverent the by a as that kiwi fed wherever more aboard.
            </p>
          </Box>
          <Box>
            <h1>Title</h1>
            <p>
              Less unicorn and apart and credibly yikes touched much jeez that
              so reverent the by a as that kiwi fed wherever more aboard.
            </p>
          </Box>
          <Box>
            <h1>Title</h1>
            <p>
              Less unicorn and apart and credibly yikes touched much jeez that
              so reverent the by a as that kiwi fed wherever more aboard.
            </p>
          </Box>
          <Box>
            <h1>Title</h1>
            <p>
              Less unicorn and apart and credibly yikes touched much jeez that
              so reverent the by a as that kiwi fed wherever more aboard.
            </p>
          </Box>
          <Box>
            <h1>Title</h1>
            <p>
              Less unicorn and apart and credibly yikes touched much jeez that
              so reverent the by a as that kiwi fed wherever more aboard.
            </p>
          </Box>
          <Box>
            <h1>Title</h1>
            <p>
              Less unicorn and apart and credibly yikes touched much jeez that
              so reverent the by a as that kiwi fed wherever more aboard.
            </p>
          </Box>
        </div>
      </Container>
    </Card>
  );
}
