import './Footer.scss';

import TextView from '../TextView/TextView';
import LinkView from '../LinkView/LinkView';

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-country">
        <TextView text="Turkey" textColor="muted" />
      </div>
      <div className="footer-links">
        <div className="footer-links-left">
          <LinkView to="#" text="About" priority="muted" />
          <LinkView to="#" text="Advertising" priority="muted" />
          <LinkView to="#" text="Business" priority="muted" />
          <LinkView to="#" text="How Search works" priority="muted" />
        </div>
        <div className="footer-links-right">
          <LinkView to="#" text="Privacy" priority="muted" />
          <LinkView to="#" text="Terms" priority="muted" />
          <LinkView to="#" text="Settings" priority="muted" />
        </div>
      </div>
    </div>
  );
}