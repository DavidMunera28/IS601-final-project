import CookieConsent from 'react-cookie-consent';
import { Card, Flex, Heading, Button, Text } from "@chakra-ui/react";
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
        <Card
          id="cookie-banner"
          enableDeclineButton
          onAccept={handleAccept}
          onDecline={handleDecline}
          buttonText="Accept All"
          declineButtonText="Essential Only"
          cookieName="cookieConsent"
        >
          <Heading as="h2">Cookies Settings</Heading>
          <Text>
          We use cookies to enhance your browsing experience, serve personalized ads or content, and analyze our traffic. By clicking “Accept All”, you consent to our use of cookies. <Link href="privacy">Read More</Link>
          </Text>
          <Flex className="cookie-buttons">
            <Button className="cookie-button" onClick={handleDecline}>
              Reject All
            </Button>
            <Button className="cookie-button" onClick={handleAccept}>
              Accept All
            </Button>
          </Flex>
        </Card>
      )}
    </>
  );
}