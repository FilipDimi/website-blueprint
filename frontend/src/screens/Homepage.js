import React from "react";
import { Container } from "react-bootstrap";
import { useQuery } from "@apollo/client";
import { GET_DUMMIES } from "../GraphQL/Queries";

const Homepage = () => {
  const { loading, error, data } = useQuery(GET_DUMMIES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  console.log(data);

  return (
    <Container className="mt-3" fluid>
      <h1>HomePage</h1>
      {data.allDummies.map(res => <p>{res.name} - Level: {res.level}</p>)}
    </Container>
  );
};

export default Homepage;
