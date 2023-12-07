import CookieConsent from 'react-cookie-consent';
import { Button, Text } from "@chakra-ui/react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function CookieBanner() {
// Establish cookieConsent and initialize to null
  const [cookieConsent, setCookieConsent] = useState(null);
  
// Establish isVisible and initialize to true
  const [isVisible, setIsVisible] = useState(true);

  // Define actions when user clicks 'Accept All'
  const handleAccept = () => {
    console.log('Cookies accepted');
    setCookieConsent(true);
    setIsVisible(false);
  };

  // Define actions when user clicks 'Essential Only'
  const handleDecline = () => {
    console.log('Cookies rejected');
    setCookieConsent(false);
    setIsVisible(false);
  };

  // Define actions when user clicks 'Close'
  const handleClose = () => {
    console.log('Close button clicked');
    setIsVisible(false);
  };

  // Store the user's consent choice in a cookie
  useEffect(() => {
    if (cookieConsent !== null) {
      document.cookie = `cookieConsent=${cookieConsent}; max-age=${365 * 24 * 60 * 60}`;
    }
  }, [cookieConsent]);

  return (
    <>
      {isVisible && (
        <CookieConsent
          id="cookie-banner"
          enableDeclineButton
          onAccept={handleAccept}
          onDecline={handleDecline}
          buttonText="Accept All"
          declineButtonText="Essential Only"
          cookieName="cookieConsent"
        >
          <Text>
            This site uses cookies to enhance the user experience. By clicking 'Accept All', you consent to the use of all cookies. By clicking 'Essential Only', you consent only to the use of essential cookies. You can review our <Link href="privacy">Privacy Policy</Link> for more information about what data we collect.
          </Text>
          <Button onClick={handleClose}>
            Close
          </Button>
        </CookieConsent>
      )}
    </>
  );
}