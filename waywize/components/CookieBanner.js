'use client';

import { Button, Card, Text } from "@chakra-ui/react"
import Link from "next/link"

export default function CookieBanner(){

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
