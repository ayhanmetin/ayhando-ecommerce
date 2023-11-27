import { Link } from 'react-router-dom';

function PageNotFound() {
  return (
    <>
      <h1>Page Not Found</h1>
      <Link to="/" className="btn btn-info">
        Go to Home Page
      </Link>
    </>
  );
}

export default PageNotFound;
