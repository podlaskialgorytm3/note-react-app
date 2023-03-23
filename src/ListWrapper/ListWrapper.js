import React from "react";

import ListItem from "./ListItem/ListItem"
import { twitterAccounts } from "../data/twitterAccounts";


import './ListWrapper.css'


const ListWrapper = () => (
    <ul>
        {twitterAccounts.map((account) => (
            <ListItem key={account.name} {...account} />
        ))}
    </ul>
)

export default ListWrapper;