export default function Legal(){
    return(
        <div className="container mt-5">
            <h1>Legal Information</h1>
            <p>Last updated: April 09, 2025</p>
            <p>Welcome to the legal section of our website. Here you can find important information regarding our policies and terms of service.</p>
            <ul>
                <li><a href="/legal/Disclaimer" className="text-decoration-none text-muted">Disclaimer</a></li>
                <li><a href="/legal/CookiePolicy" className="text-decoration-none text-muted">Cookie Policy</a></li>
                <li><a href="/legal/ReturnPolicy" className="text-decoration-none text-muted">Return and Refund Policy</a></li>
                <li><a href="/legal/PrivacyPolicy" className="text-decoration-none text-muted">Privacy Policy</a></li>
                <li><a href="/legal/TermsAndConditions" className="text-decoration-none text-muted">Terms And Conditions</a></li>
            </ul>
        </div>
    )
}