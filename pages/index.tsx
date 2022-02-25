import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { asyncQuery } from "../atom/state";
import { useRecoilValueLoadable } from "recoil";
import { useMemo } from "react";

const Home: NextPage = () => {
  const data = useRecoilValueLoadable(asyncQuery);
  const dataMemo = useMemo(
    () => (data.state === "hasValue" ? data.contents : "2"),
    [data.state]
  );
  return <div>{dataMemo}</div>;
};

export default Home;
