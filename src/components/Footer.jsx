import React from 'react';

export default function Footer() {
  // Inline styles
  const footerStyle = {
    marginTop: '5rem',
    color: 'gray',
    paddingBottom: '4rem',
    backgroundColor: 'white',
  };

  const sectionHeaderStyle = {
    color: 'black',
    marginBottom: '1rem',
  };

  const navLinkStyle = {
    color: 'gray',
    textDecoration: 'none',
    paddingBottom: '0.5rem',
  };

  const logoStyle = {
    height: '20px',
    marginRight: '10px',
  };

  const copyrightStyle = {
    paddingTop: '4rem',
    borderTop: '1px solid #e7e7e7',
  };

  // Function to render a nav section
  const renderNavSection = (title, links) => (
    <div className="col-6 col-md-2 mb-3">
      <h5 style={sectionHeaderStyle}>{title}</h5>
      <ul className="nav flex-column">
        {links.map((link) => (
          <li key={link} className="nav-item mb-2">
            <a href="#" style={navLinkStyle}>
              {link}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <div style={footerStyle}>
      <div className="container">
        <footer>
          <div
            className="d-flex flex-column flex-sm-row justify-content-between"
            style={copyrightStyle}
          ></div>
          <div className="row">
            {renderNavSection('Help & Contact', [
              'See all help topics',
              'Paying by invoice',
              'Track your parcel',
              'Report a damaged item',
              'Discover Ayhando Plus',
              'Delivery information',
              'Return an order',
              'Find the right size',
              'Report a vulnerability',
            ])}
            {renderNavSection('Gift Cards', [
              'Buy Gift Cards',
              'About gift cards and vouchers',
              'Redeem a Gift Card',
              'Corporate Gift Cards',
            ])}
            {renderNavSection('About us', [
              'Visit our corporate site',
              'Ayhando careers',
              'Newsroom',
              'Investor Relations',
            ])}
            {renderNavSection('Our partners', [
              'DHL',
              'DHL Express',
              'Hermes',
              'GLS',
            ])}
            {renderNavSection('Our payment methods', [
              'Mastercard',
              'Visa',
              'PayPal',
              'Invoice',
              'SEPA ENG',
              'Amex',
              'Discover',
              'Diners Club',
            ])}
            {renderNavSection('Our promises', [
              'Free delivery for orders over 29,90 €',
              '100-day return policy',
              'Flexible payment options',
            ])}
            {renderNavSection('Our services', [
              'Connect your stores',
              'Marketing Services',
              'Learn more',
            ])}
          </div>

          <div
            className="d-flex flex-column flex-sm-row justify-content-between"
            style={copyrightStyle}
          >
            <p>© 2024 Ayhan Metin. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  );
}
