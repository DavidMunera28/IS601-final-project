import { Flex, Box, Heading, Text, Link, Input, Checkbox, Button, Image } from '@chakra-ui/react';
import { WarningIcon } from '@chakra-ui/icons';
import { useState, useEffect } from 'react';

export default function Subscribe() {

    const [email, setEmail] = useState("");

    const handleEmailChange = (event) => {
    setEmail(event.target.value);
    };

  useEffect(() => {
    // Move the script block here to execute it on the client side
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

    <Box className="subscribe-text">
      <Heading as="h2">This Way to Seamless Navigation Solutions</Heading>

      <Text className="subscribe-subtext">Join our mailing list to receive exclusive updates and offers about cutting-edge facility and venue mapping solutions</Text>

      <Text>Email Address <WarningIcon className="alert" /></Text>

      <form action="https://njit.us17.list-manage.com/subscribe/post?u=c04b8f9a229fa40f5d594ad9a&amp;id=8c80d48567&amp;v_id=4229&amp;f_id=003265e0f0" method="post" target="_blank">

        <Input type="email" name="EMAIL" className="required email" id="mce-EMAIL" required="" placeholder="Email" value={email} onChange={handleEmailChange} />


        <Heading as="h3">Permissions</Heading>

        <Text className='permissions-text'>Please select all the ways you would like to hear from WayWize:</Text>

        <Checkbox id="gdpr_92049" name="gdpr[92049]" className="gdpr" value="Y">Email</Checkbox>

        <Text className='permissions-text'>You can unsubscribe at any time by clicking the link in the footer of our emails. For information about our privacy practices, please visit our website.</Text>

        <Text className='permissions-text'>We use <Link href="https://mailchimp.com/" target="_blank">MailChimp</Link> as our marketing platform. By clicking below to subscribe, you acknowledge that your information will be transferred to Mailchimp for processing.</Text>
        
        <div id="mce-responses" className="clear foot">
          <div className="response" id="mce-error-response" style={{ display: 'none' }}></div>
          <div className="response" id="mce-success-response" style={{ display: 'none' }}></div>
        </div>

        <div aria-hidden="true" style={{ position: 'absolute', left: '-5000px' }}>
          <Input type="text" name="b_c04b8f9a229fa40f5d594ad9a_8c80d48567" tabIndex="-1" value="" />
        </div>

        <Button type="submit" name="subscribe" id="mc-embedded-subscribe" className="subscribe-button">Subscribe</Button>
      </form>
    </Box>

    <Box className="subscribe-img">
      <Image src="images/SUBSCRIBE.png" />
    </Box>
    </Flex>

  );
}
