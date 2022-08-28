import styled from "styled-components";

import ROUTES from "@constants/routes";
import Head from "@components/Head";
import { APP } from "@constants/main";
import Link from "next/link";
import MainContainer from "@components/Layout/MainContainer";
import { NextPage } from "next";

const Error: NextPage = () => {
  return (
    <Container>
      <Head title={"error.head.title"} />
      <Title>{"error.title"}</Title>
      <Description>
        {"error.desc"} <Link href={ROUTES.HOME}>{APP.NAME}</Link>.
      </Description>
    </Container>
  );
};

const Container = styled(MainContainer)`
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  flex-direction: column;
  height: calc(100vh - 60px - 200px);
`;

const Title = styled.h2`
  font-weight: 600;
  font-size: 24px;
`;

const Description = styled.h2`
  margin-top: 30px;

  a {
    color: ${({ theme }) => theme.colors.text.lightest};
    font-weight: ${({ theme }) => theme.weight.bold};
  }
`;

export default Error;
