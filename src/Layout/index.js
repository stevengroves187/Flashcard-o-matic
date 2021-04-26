import React from "react";
import { Route, Switch } from 'react-router-dom';
import Header from "./Header";
import NotFound from "./NotFound";
import Home from "./Home";
import CreateDeck from "../Decks/CreateDeck";
import Study from "../Decks/Study/Study.js";
import EditDeck from "../Decks/EditDeck";
import CreateCard from "../Card/CreateCard";
import EditCard from "../Card/EditCard";
import ViewDeck from "../Decks/ViewDeck";


function Layout() {
  return (
    <>
      <Header />
      <div className="container">
        <Switch>
          <Route path="/decks/new">
            <CreateDeck />
          </Route>
          <Route exact path="/decks/:deckId">
            <ViewDeck />
          </Route>
          <Route path="/decks/:deckId/study">
            <Study />
          </Route>
          <Route path="/decks/:deckId/edit">
            <EditDeck />
          </Route>
          <Route path="/decks/:deckId/cards/new">
            <CreateCard />
          </Route>
          <Route path="/decks/:deckId/cards/:cardId/edit">
            <EditCard />
          </Route>
          <Route exact path="/decks">
            <Home />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </div>
    </>
  );
}

export default Layout;
