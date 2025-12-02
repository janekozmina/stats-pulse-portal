import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">Central Bank</h3>
            <p className="text-primary-foreground/80 text-sm">
              Ensuring stability and efficient payments for the financial system.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="text-primary-foreground/80 hover:text-primary-foreground">Home</Link></li>
              <li><Link to="/about" className="text-primary-foreground/80 hover:text-primary-foreground">About</Link></li>
              <li><Link to="/statistics" className="text-primary-foreground/80 hover:text-primary-foreground">Statistics</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Payment Systems</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/payment-systems" className="text-primary-foreground/80 hover:text-primary-foreground">Overview</Link></li>
              <li><Link to="/statistics" className="text-primary-foreground/80 hover:text-primary-foreground">Statistics</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/monetary-policy" className="text-primary-foreground/80 hover:text-primary-foreground">Monetary Policy</Link></li>
              <li><a href="https://bian.cma.se/" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/80 hover:text-primary-foreground">Participant Portal</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm text-primary-foreground/80">
          <p>© {new Date().getFullYear()} Central Bank. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
