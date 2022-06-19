import {  useContext } from "react";
import { Row, Col, Pagination } from 'react-bootstrap';
import Content from './Content';
import Loading from './Loading';
import { ContentContext } from '../context';

const ContentWrapper = () => {
  const context = useContext(ContentContext)
  const {data, pagination} = context

  const paginationBtn = [];

  const [page, setPage] = pagination;


  // const id = '623a08803f69bbf06ea5d3e6';

  

  

  for (let i = 1; i <= data.data.allPage; i++) {
    paginationBtn.push(
      <Pagination.Item
        key={i}
        active={i === page}
        onClick={() => setPage(i)}>
        {i}
      </Pagination.Item>
    );
  }


  return (
    <div className="content pt-4 pb-5">
      <div className="container mainContent d-flex justify-content-center">
          {/* Right Content */}
          {/* Video Section */}
          <Row className="contentGallery g-3 pt-2">
            {data.loading ? (
              <Loading />
            ) : (
              <>
                <Content data={data.data} />
              </>
            )}
            <Col sm='12' className='d-flex justify-content-center'>
              <Pagination>
                {paginationBtn}
              </Pagination>
            </Col>
          </Row>
      </div>
      
    </div>
  );
};

export default ContentWrapper;