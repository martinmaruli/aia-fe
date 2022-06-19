import { Breadcrumb } from 'react-bootstrap';

const Footer = () => {
  return (
    <div className="footer pt-3 pb-3">
      <div className="footerContent col-11 mx-auto">
        <div className="mediaSocia d-flex mb-3">
          <div className="twitter d-flex fw-bold justify-content-center align-items-center rounded">
            <span className="text-primary">t</span>
          </div>
          <div className="linkedin d-flex fw-bold justify-content-center align-items-center rounded">
            <span className="text-primary">i</span>
          </div>
          <div className="facebook d-flex fw-bold justify-content-center align-items-center rounded">
            <span className="text-primary">f</span>
          </div>
        </div>
        <div>
          <div className="breadcrumb">
            <Breadcrumb.Item href="#">About</Breadcrumb.Item>
            <Breadcrumb.Item href="#">For Bussiness</Breadcrumb.Item>
            <Breadcrumb.Item href="#">Suggestion</Breadcrumb.Item>
            <Breadcrumb.Item href="#">FAQ's</Breadcrumb.Item>
            <Breadcrumb.Item href="#">Contacts</Breadcrumb.Item>
            <Breadcrumb.Item href="#">Pricing</Breadcrumb.Item>
          </div>
        </div>
        <div>
          <div className="copyright">
            &copy; Copyright 2022 SocialNetwork.inc
          </div>
          <div className="breadcrumb">
            <Breadcrumb.Item href="#">Privacy</Breadcrumb.Item>
            <Breadcrumb.Item href="#">Terms</Breadcrumb.Item>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;