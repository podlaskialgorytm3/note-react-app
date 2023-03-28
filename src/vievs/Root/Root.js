import React from "react";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TwittersView from '../TwittersView/TwittersView';
import ArticlesView from '../ArticlesView/ArticlesView';
import NotesView from '../NotesView/NotesView';
//import Navigation from '../../components/Header/Navigation';
import Header from "../../components/Header/Header";
import Modal from '../../components/Modal/Modal'
import AppContext from "../../context";


class Root extends React.Component {
  state = {
    items: [{
      twitters: [],
      articles: [],
      notes: []
    }],
    isModalOpen: false
  };

  addItem = e => {
    e.preventDefault();
    
  };
  openModal = () => {
    this.setState({
      isModalOpen: true
    })
  }
  closeModal = () => {
    this.setState({
      isModalOpen: false
    })
  }

  render() {
    const {isModalOpen} = this.state
    const contextElements = {
      ...this.state,
      addItem: this.addItem
    }
    return (
      <Router>
        <AppContext.Provider value={contextElements}>
        <Header openModalFc={this.openModal}/>
          <h1>hello world</h1>
        <Routes>
            <Route path="/" Component={TwittersView} />
            <Route path="/articles" Component={ArticlesView} />
            <Route path="/notes" Component={NotesView} />
        </Routes>
        {isModalOpen && <Modal closeModalFc={this.closeModal} />}
        </AppContext.Provider>
      </Router>
    );
  }
}

export default Root;
