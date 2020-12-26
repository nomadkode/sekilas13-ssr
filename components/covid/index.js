import Container from "react-bootstrap/Container";
import Tabel from "./Tabel";
import Card from "./Card";

export default function Covid({ covidData }) {
  return (
    <Container fluid>
      <Card covidData={covidData} />
      <Tabel />
    </Container>
  );
}
