import { Heading, Text } from "@chakra-ui/react"
import { WarningIcon } from '@chakra-ui/icons'
import Link from "next/link"

export default function Subscribe() {
    
    const htmlString = `
        <form action="https://njit.us17.list-manage.com/subscribe/post?u=c04b8f9a229fa40f5d594ad9a&amp;id=8c80d48567&amp;v_id=4229&amp;f_id=003265e0f0" method="post" target="_blank">

        <input type="email" name="EMAIL" class="required email" id="mce-EMAIL" required="" value="Email">
        
        <input type="checkbox" id="gdpr_92049" name="gdpr[92049]" class="gdpr" value="Y">

        <div id="mce-responses" class="clear foot">
            <div class="response" id="mce-error-response" style="display: none;"></div>
            <div class="response" id="mce-success-response" style="display: none;"></div>
        </div>

        <div aria-hidden="true" style="position: absolute; left: -5000px;">
            /* real people should not fill this in and expect good things - do not remove this or risk form bot signups */
            <input type="text" name="b_c04b8f9a229fa40f5d594ad9a_8c80d48567" tabindex="-1" value="">
        </div>

        <input type="submit" name="subscribe" id="mc-embedded-subscribe" class="button" value="Subscribe">

        </form>

        <script type="text/javascript" src="//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js"></script><script type="text/javascript">(function($) {window.fnames = new Array(); window.ftypes = new Array();fnames[0]='EMAIL';ftypes[0]='email';fnames[1]='FNAME';ftypes[1]='text';fnames[2]='LNAME';ftypes[2]='text';fnames[3]='ADDRESS';ftypes[3]='address';fnames[4]='PHONE';ftypes[4]='phone';fnames[5]='BIRTHDAY';ftypes[5]='birthday';}(jQuery));var $mcj = jQuery.noConflict(true);</script></div>
`
    
    return (
      <div id="subscribe">
        <Heading as="h2">This Way to Seamless Navigation Solutions</Heading>
        <Text>Join our mailing list to receive exclusive updates and offers about cutting-edge facility and venue mapping solutions</Text>
        <Text>Email Address <WarningIcon /></Text>
        <div dangerouslySetInnerHTML={{ __html: htmlString }} />
        <Heading as="h3">Permissions</Heading>
        <Text>Please select all the ways you would like to hear from WayWize:</Text>
        <Text>You can unsubscribe at any time by clicking the link in the footer of our emails. For information about our privacy practices, please visit our website.</Text>
        <Text>We use <Link href="https://mailchimp.com/">MailChimp</Link> as our marketing platform. By clicking below to subscribe, you acknowledge that your information will be transferred to Mailchimp for processing.</Text>
      </div>
    )
  }