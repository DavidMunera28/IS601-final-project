'use client';

import { Card, Flex, Heading, Button, Text } from "@chakra-ui/react";
import Link from "next/link";
import { getLocalStorage, setLocalStorage } from '@/lib/storageHelper';
import { useEffect, useState } from "react";

export default function CookieBanner() {

  const [cookieConsent, setCookieConsent] = useState(false);

  // useEffect hook to run when 'setCookieConsent' changes.
  useEffect (() => {
      // Get  value of 'cookie_consent' from local storage, else use NULL
      const storedCookieConsent = getLocalStorage("cookie_consent", null)

      // Update 'cookieConsent' with stored value
      setCookieConsent(storedCookieConsent)
  }, [setCookieConsent])

  // useEffect hook to run when 'cookieConsent' changes.
  useEffect(() => {
    // Determine new value (granted vs. denied) based on 'cookieConsent' state (true vs. false).
      const newValue = cookieConsent ? 'granted' : 'denied'

      // Update Google Analytics with the new consent value.
      window.gtag("consent", 'update', {
          'analytics_storage': newValue
      });

      // Save 'cookieConsent' value to local storage.
      setLocalStorage("cookie_consent", cookieConsent)

      // For visual testing
      console.log("Cookie Consent: ", cookieConsent)

  }, [cookieConsent]);

  return (
    <>
        <Card
          id="cookie-banner"
        >
          {/* Begin cookie consent text */}
          <Heading as="h2">Cookies Settings</Heading>
          <Text>
          We use cookies to enhance your browsing experience, serve personalized ads or content, and analyze our traffic. By clicking “Accept All”, you consent to our use of cookies. Read more on our <Link href="privacy" role="link" aria-label="Navigate to WayWize's privacy policy page">Privacy Policy</Link>.
          </Text>
          {/* End cookie consent text */}
          {/* Begin cookie consent choices */}
          <Flex className="cookie-buttons">
            <Button className="cookie-button" onClick={() => setCookieConsent(false)} aria-label="Reject all cookies">
              Reject All
            </Button>
            <Button className="cookie-button" onClick={() => setCookieConsent(true)} aria-label="Accept all cookies">
              Accept All
            </Button>
          </Flex>
          {/* End cookie consent choices */}
        </Card>
    </>
  );
}