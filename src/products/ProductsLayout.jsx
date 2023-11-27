import { Outlet } from 'react-router-dom';
import Categories from './Categories';

function ProductsLayout({ user }) {
  return (
    <>
      <div className="row">
        <div className="col-sm-8">
          <Outlet />
        </div>
        <div className="col-sm-4">
          <Categories />
        </div>
      </div>
    </>
  );
}

export default ProductsLayout;
