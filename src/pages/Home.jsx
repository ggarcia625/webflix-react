import React from "react";
import Main from "../components/Main";
import Row from "../components/Row";
import Api from "../Api"
function Home() {
  return (
    <>
      <Main />
      <Row rowID='1' title={"Upcoming"} fetchURL={Api.upcoming}/>
      <Row rowID='2' title={"Popular"} fetchURL={Api.popular}/>
      <Row rowID='3' title={"Trending"} fetchURL={Api.trending}/>
      <Row rowID='4' title={"Top Rated"} fetchURL={Api.topRated}/>
      <Row rowID='5' title={"Horror"} fetchURL={Api.horror}/>
      <Row rowID='6' title={"Popular TV"} fetchURL={Api.TVPopular} />
    </>
  );
}

export default Home;
