import React from 'react';
import './index.css';
import ArticlesView from '../ArticlesView/ArticlesView';
import NotesView from '../NotesView/NotesView';
import TwittersView from '../TwittersView/TwittersView';

//import Form from '../../components/Form/Form';
//import ListWrapper from '../../components/List/List';

const initialStateItems = [
            {
                image: 'https://s3.eu-central-1.amazonaws.com/eduweb-image/blacksquare_01+(1).JPG',
                name: 'Dan Abramov',
                twitterLink: 'https://twitter.com/dan_abramov',
            },
            {
                image: 'https://s3.eu-central-1.amazonaws.com/eduweb-image/blacksquare_01+(1).JPG',
                name: 'Ryan Florence',
                description: 'Making React accessible for users and developers at https://reach.tech . Online learning, workshops, OSS, and consulting.',
                twitterLink: 'https://twitter.com/ryanflorence',
            },
            {
                image: 'https://s3.eu-central-1.amazonaws.com/eduweb-image/blacksquare_01+(1).JPG',
                name: 'Michael Jackson',
                description: 'Maker. Co-author of React Router. Working on @ReactTraining. Created @unpkg. Head over heels for @cari.',
                twitterLink: 'https://twitter.com/mjackson',
            },
            {
                image: 'https://s3.eu-central-1.amazonaws.com/eduweb-image/blacksquare_01+(1).JPG',
                name: 'Kent C. Dodds',
                description: 'Making software development more accessible · Husband, Father, Latter-day Saint, Teacher, OSS, GDE, @TC39 · @PayPalEng @eggheadio @FrontendMasters · #JS',
                twitterLink: 'https://twitter.com/kentcdodds',
            },
        ];

class Root extends React.Component { 
    state = {
        items: [...initialStateItems],
    }
    
    addItem = (e) => {
        e.preventDefault();
        console.log(this.state)
        const newItem = {
            name: e.target[0].value,
            twitterLink: e.target[1].value,
            image: e.target[2].value, 
            description: e.target[3].value,
        }
        
        this.setState(prevState => ({
            items: [...prevState.items, newItem],
        }));
        
        e.target.reset();
    }
    
    render() {
        return (
            <h1>Hello World</h1>
        )
    }
}

export default Root;
