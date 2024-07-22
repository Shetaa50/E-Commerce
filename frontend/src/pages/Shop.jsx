import React from "react";
import Rounder from "../components/rounder/Rounder";
import Popular from "../components/popular/popular";
import Offers from "../components/offers/offers";
import NewCollections from "../components/new-collections/NewCollections";
import NewsLetter from "../components/newsletter/NewsLetter";
const Shop = ()=>{
    return(
        <div>
            <Rounder/>
            <Popular/>
            <Offers/>
            <NewCollections/>
            <NewsLetter/>
        </div>
    )
}
export default Shop 