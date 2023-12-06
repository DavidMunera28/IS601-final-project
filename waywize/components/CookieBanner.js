'use client';

import { getLocalStorage, setLocalStorage } from '@/lib/storageHelper';
import { useState, useEffect } from 'react';
import { Button, Card, Text } from "@chakra-ui/react"
import Link from "next/link"

export default function CookieBanner(){

    const [cookieConsent, setCookieConsent] = useState(false);
    
        useEffect (() => {
            const storedCookieConsent = getLocalStorage("cookie_consent", null)
    
            setCookieConsent(storedCookieConsent)
        }, [setCookieConsent])
    
        
        useEffect(() => {
            const newValue = cookieConsent ? 'granted' : 'denied'
    
            window.gtag("consent", 'update', {
                'analytics_storage': newValue
            });
    
            setLocalStorage("cookie_consent", cookieConsent)
    
            //For Testing
            console.log("Cookie Consent: ", cookieConsent)
    
        }, [cookieConsent]);

return (
    <Card id="cookie-banner">
        <div class="cookie-text">
            <Text>This site uses cookies to enhance the user experience. By clicking 'Accept All', you consent to the use of all cookies. By clicking 'Essential Only', you consent only to the use of essential cookies. You can review our <Link href="privacy">Privacy Policy</Link> for more information about what data we collect.
            </Text>
        </div>

        <div class="cookie-buttons">
            <Button>Accept All</Button>
            <Button>Essential Only</Button>
            <Button>Close</Button>
        </div>
    </Card>
)}
