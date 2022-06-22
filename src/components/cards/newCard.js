
import image from "../../assets/images/whyus.png"

import { Card, Grid, Text, Button, Row } from "@nextui-org/react";

export default function App() {
  return (
    <Grid.Container justify="center" gap={2}>
  
  <Grid sm={12} md={5}>
        <Card css={{ mw: "330px" }}>
          <Card.Header>
          <Card.Body css={{ p: 0 }}>
      <Card.Image
        src={image}
        objectFit="cover"
        width="100%"
        height="100%"
        alt="Relaxing app background"
      />
    </Card.Body>
          </Card.Header>
          <Card.Divider />
          
          <Card.Body css={{ py: "$10" }}>
          <Text b>Mission</Text>
            <Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Text>
          </Card.Body>
          <Card.Divider />

        </Card>
      </Grid>

      <Grid sm={12} md={5}>
        <Card css={{ mw: "330px" }}>
          <Card.Header>
          <Card.Body css={{ p: 0 }}>
      <Card.Image
        src={image}
        objectFit="cover"
        width="100%"
        height="100%"
        alt="Relaxing app background"
      />
    </Card.Body>
          </Card.Header>
          <Card.Divider />
          
          <Card.Body css={{ py: "$10" }}>
          <Text b>Vision</Text>
            <Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Text>
          </Card.Body>
          <Card.Divider />

        </Card>
      </Grid>
    </Grid.Container>
  );
}