import React, { createContext, useState, useEffect } from "react";
import { fetchDataFromApi } from "../utils/api";
import Data from "../data.json";

export const context = createContext();

export const AppContext = (props) => {
    const [loading, setLoading] = useState(false);
    const [searchResults, setSearchResults] = useState(false);
    const [selectCategories, setSelectCategories] = useState("New");
    const [mobileMenu, setMobileMenu] = useState(false);

    const trigger = true;

    useEffect(() => {
        fetchSelectedCategoryData(selectCategories);
    }, [selectCategories]);

    const fetchSelectedCategoryData = (query) => {
        setLoading(true);
        if (trigger) {
            fetchDataFromApi(`search/?q=${query}`).then(({ contents }) => {
                // console.log(contents);
                setSearchResults(contents);
                setLoading(false);
            })
        } else {
            setSearchResults(Data);
            setLoading(false);
        }
    }

    return (
        <context.Provider
            value={{
                loading,
                setLoading,
                searchResults,
                selectCategories,
                setSelectCategories,
                mobileMenu,
                setMobileMenu
            }}>
            {props.children}
        </context.Provider>
    )
}