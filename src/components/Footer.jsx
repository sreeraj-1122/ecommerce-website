import React from 'react'
import '../styles/Footer.css'
function Footer() {
  return (
    <>
        <footer className='footer'>
            <div className='footer-section'>
                <div className="headings">
                    <div>Home</div>
                    <div>Features</div>
                    <div>Pricing</div>
                    <div>FAQs</div>
                    <div>About</div>
                </div>
                <hr className='line' />
                <div className="date">© 2024 Shopify, Inc</div>
                <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/payment-method-c454fb.svg" alt="" />  
            </div>
            
        </footer>
    </>
  )
}

export default Footer