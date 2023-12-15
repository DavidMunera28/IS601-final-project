import { Flex, Box, Heading, Text, Link, Input, Checkbox, Button, Image } from '@chakra-ui/react';
import { WarningIcon } from '@chakra-ui/icons';
import { useState, useEffect } from 'react';

export default function Subscribe() {
  // Email input management
    const [email, setEmail] = useState("");
    const handleEmailChange = (event) => {
    setEmail(event.target.value);
    };

  // Initialize Mailchimp form fields on client side
  useEffect(() => {
    window.fnames = new Array();
    window.ftypes = new Array();
    window.fnames[0] = 'EMAIL';
    window.ftypes[0] = 'email';
    window.fnames[1] = 'FNAME';
    window.ftypes[1] = 'text';
    window.fnames[2] = 'LNAME';
    window.ftypes[2] = 'text';
    window.fnames[3] = 'ADDRESS';
    window.ftypes[3] = 'address';
    window.fnames[4] = 'PHONE';
    window.ftypes[4] = 'phone';
    window.fnames[5] = 'BIRTHDAY';
    window.ftypes[5] = 'birthday';
  }, []);

  return (
    <Flex id="subscribe">

    {/* Begin call-to-action text */}
    <Box className="subscribe-text">
      <Heading as="h2">This Way to Seamless Navigation Solutions</Heading>

      <Text className="subscribe-subtext">Join our mailing list to receive exclusive updates and offers about cutting-edge facility and venue mapping solutions</Text>
      {/* Begin call-to-action text */}

      {/* Begin email entry field label */}
      <Text>Email Address <WarningIcon className="alert" /></Text>
      {/* End email entry field label */}
      {/* Begin user input form */}
      <form action="https://njit.us17.list-manage.com/subscribe/post?u=c04b8f9a229fa40f5d594ad9a&amp;id=8c80d48567&amp;v_id=4229&amp;f_id=003265e0f0" method="post" target="_blank">
      {/* Begin email entry field */}
        <Input type="email" name="EMAIL" className="required email" id="mce-EMAIL" required="" placeholder="Email" value={email} onChange={handleEmailChange} />
      {/* End email entry field */}

      {/* Begin permissions text & checkbox */}
        <Heading as="h3">Permissions</Heading>

        <Text className='permissions-text'>Please select all the ways you would like to hear from WayWize:</Text>

        <Checkbox id="gdpr_92049" name="gdpr[92049]" className="gdpr" value="Y">Email</Checkbox>

        <Text className='permissions-text'>You can unsubscribe at any time by clicking the link in the footer of our emails. For information about our privacy practices, please visit our website.</Text>

        <Text className='permissions-text'>We use <Link href="https://mailchimp.com/" target="_blank" role="link" aria-label="Navigate to Mailchimp's home page">MailChimp</Link> as our marketing platform. By clicking below to subscribe, you acknowledge that your information will be transferred to Mailchimp for processing.</Text>
        
        <div id="mce-responses" className="clear foot">
          <div className="response" id="mce-error-response" style={{ display: 'none' }}></div>
          <div className="response" id="mce-success-response" style={{ display: 'none' }}></div>
        </div>
      {/* End permissions text & checkbox */}
      {/* Begin subscribe button */}
        <Button type="submit" name="subscribe" id="mc-embedded-subscribe" className="subscribe-button" aria-label="Subscribe to WayWize's newsletter">Subscribe</Button>
      {/* End subscribe button */}
      </form>
      {/* End user input form */}
    </Box>
    {/* Begin decorative image */}
    <Box className="subscribe-img">
      <Image src="images/SUBSCRIBE.webp" alt="Open envelope showing an inner design that resembles a map" />
    </Box>
    {/* End decorative image */}
    </Flex>

  );
}
