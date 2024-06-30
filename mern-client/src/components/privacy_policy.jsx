import React from 'react'
import './privacy.css';

const Privacy = () => {
    return (
        <div className='top'>
            <section className="privacy-policy">
                <h2>Privacy Policy</h2>
                <p>We collect your information to provide you with the best possible shopping experience. We will never share your information with third parties without your consent.</p>
                <ul>
                    <li>The types of information we collect include your name, email address, shipping address, and billing information.</li>
                    <li>We use your information to process your orders, send you shipping confirmations, and respond to your inquiries.</li>
                    <li>We may also use your information to send you marketing emails, but you can unsubscribe from these at any time.</li>
                </ul>
            </section>
            <section className="terms-of-use">
                <h2>Terms of Use</h2>
                <p>By using our website, you agree to our terms of use. These terms outline your rights and responsibilities as a user of our website.</p>
                <ul>
                    <li>You agree to use our website for lawful purposes only.</li>
                    <li>You agree not to use our website to post offensive or harmful content.</li>
                    <li>You agree to indemnify us for any damages you cause to others by using our website.</li>
                </ul>
            </section>
            <section className="faq">
                <h2>Frequently Asked Questions</h2>
                <p>Here are some frequently asked questions about our privacy policy and terms of use.</p>
                <ul>
                    <div class="faq-item">
                        <h3>What information do you collect from me?</h3>
                        <p>We collect your name, email address, shipping address, and payment information when you create an account or place an order on our website. We may also collect information about your browsing behavior on our website, such as the pages you visit and the products you view.</p>
                    </div>
                    <div class="faq-item">
                        <h3>How do you use my information?</h3>
                        <p>We use your information to process your orders, provide you with customer service, and send you marketing communications. We may also use your information to improve our website and services.</p>
                    </div>
                    <div class="faq-item">
                        <h3>Do you share my information with third parties?</h3>
                        <p>We do not share your information with third parties unless we are required to do so by law or to prevent fraud. We may also share your information with third parties who provide services to us, such as our website hosting provider and our payment processor.</p>
                    </div>
                    <div class="faq-item">
                        <h3>How can I access and update my information?</h3>
                        <p>You can access and update your information by logging into your account on our website. You can also contact us via email or phone to request access to your information.</p>
                    </div>
                    <div class="faq-item">
                        <h3>How do you protect my information?</h3>
                        <p>We take your privacy seriously and we have implemented a number of security measures to protect your information from unauthorized access, use, disclosure, alteration, or destruction. These measures include firewalls, encryption, and access controls.</p>
                    </div>
                    <p>If you violate the terms of use, we may suspend or terminate your account.</p>
                </ul>
            </section>
        </div>

    )
}

export default Privacy
