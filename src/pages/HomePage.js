import NavbarComponent from '../components/Navbar';
import ContentWrapper from '../components/ContentWrapper';
import Footer from '../components/Footer';
import { ContentContext } from '../context'; 
import { useState, useEffect } from 'react';
import axios from 'axios';

const HomePage = () => {
  const [data, setData] = useState({
    loading: true,
    data: [],
    error: false,
  });

  const [page, setPage] = useState(1);
  const reqData = (search = '', pageNumber = 1) => {
    axios({
      method: "post",
      url: `https://aia-be.herokuapp.com/api/v1/getFlickr?page=${pageNumber}`,
      data: {
        search,
      }
    })
      .then((response) => {
        setData({
          loading: false,
          data: response.data,
          error: false,
        });
      })
      .catch((error) => {
        setData({
          loading: false,
          data: false,
          error: error.message,
        });
      });
  };
  useEffect(() => {
    reqData('', page);
    // eslint-disable-next-line
  }, [page]);
  const contextValue = {
    data,
    reqData,
    pagination: [page, setPage]
  }
    return (
      <>
        <ContentContext.Provider value={contextValue}>
          <NavbarComponent />
          <ContentWrapper />
        </ContentContext.Provider>
      </>
    );
  };
  
  export default HomePage;
  