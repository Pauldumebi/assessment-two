import React from "react";
import ImageFrame from "./components/ImageFrame";
import { ErrorToast } from "./components/ToastNotification";
import { useState, Fragment, useEffect } from "react";
import { BASE_URL, API_KEY } from "./config";
import debounce from "lodash.debounce";
import SearchInput from "./components/SearchInput";
import Spinner from "./components/Spinner/Spinner";
import Banner from "components/Banner";
import Header from "components/Header";

const Home = () => {
  const [movies, setMovies] = useState({
    movies: [],
    totalPage: "",
    loading: false,
  });
  const [searchWord, setSearchWord] = useState("batman");

  const getRequest = (searchWord) => {
    const baseUrl = `${BASE_URL}?s=${searchWord}&apikey=${API_KEY}&page=1`;
    setMovies({
      loading: true,
    });
    try {
      fetch(baseUrl)
        .then((response) => response.json())
        .then((data) => {
          setMovies({
            movies: data.Search,
            totalPage: data.totalResults,
            loading: false,
          });
        });
    } catch (error) {
      ErrorToast(error);
    }
  };
  const handleSearch = debounce((e) => {
    setSearchWord(e.target.value);
    getRequest(e.target.value);
  }, 500);

  useEffect(() => {
    getRequest(searchWord);
  }, [searchWord]);
  return (
    <Fragment>
      <Header />
      <Banner />
      <SearchInput handleSearch={handleSearch} />
      {movies?.loading ? (
        <Spinner />
      ) : (
        <>
          <ImageFrame movies={movies.movies} />
        </>
      )}
    </Fragment>
  );
};

export default Home;