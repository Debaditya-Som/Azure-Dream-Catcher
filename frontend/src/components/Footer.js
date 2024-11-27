import React from 'react';
function Footer() {
  return (
    <footer style={footerStyle}>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'></div>
        <div>
          <a href='/' className='me-4 text-reset'>Facebook</a>
          <a href='/' className='me-4 text-reset'>Twitter</a>
          <a href='/' className='me-4 text-reset'>Google</a>
          <a href='/' className='me-4 text-reset'>Instagram</a>
          <a href='/' className='me-4 text-reset'>LinkedIn</a>
          <a href='/' className='me-4 text-reset'>GitHub</a>
        </div>
      </section>

      <div className='text-center p-4'>
        © {new Date().getFullYear()} Azure Dream Catcher. All rights reserved.
      </div>
    </footer>
  );
}

const footerStyle = {
  background: '#000000',
  color: '#fff',
  textAlign: 'center',
  padding: '1rem',
};

export default Footer;
