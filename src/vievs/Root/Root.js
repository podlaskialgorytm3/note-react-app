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
      twitter: [],
      article: [],
      note: [],
      isModalOpen: false
  };

  addItem = (e,newItem) => {
    e.preventDefault();
    this.setState(prevState => ({
      [newItem.type] : [...prevState[newItem.type],newItem],
    }))

    this.closeModal()
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
        {isModalOpen && <Modal closeModalFc={this.closeModal} />}
        <Header openModalFc={this.openModal}/>
        <Routes>
            <Route path="/" Component={TwittersView} />
            <Route path="/articles" Component={ArticlesView} />
            <Route path="/notes" Component={NotesView} />
        </Routes>
        
        </AppContext.Provider>
      </Router>
    );
  }
}

export default Root;
