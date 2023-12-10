import { Heading, Text } from "@chakra-ui/react"
import { WarningIcon } from '@chakra-ui/icons'

export default function Subscribe() {
    
    const htmlString = `<div id="mc_embed_shell">
    <link href="//cdn-images.mailchimp.com/embedcode/classic-061523.css" rel="stylesheet" type="text/css">
<style type="text/css">
      #mc_embed_signup{background:#fff; clear:left; font:14px Helvetica,Arial,sans-serif; width: 600px;}
      /* Add your own Mailchimp form style overrides in your site stylesheet or in this style block.
         We recommend moving this block and the preceding CSS link to the HEAD of your HTML file. */
</style><style type="text/css">
      #mc-embedded-subscribe-form input[type=checkbox]{display: inline; width: auto;margin-right: 10px;}
#mergeRow-gdpr {margin-top: 20px;}
#mergeRow-gdpr fieldset label {font-weight: normal;}
#mc-embedded-subscribe-form .mc_fieldset{border:none;min-height: 0px;padding-bottom:0px;}
</style>
<div id="mc_embed_signup">
  <form action="https://njit.us17.list-manage.com/subscribe/post?u=c04b8f9a229fa40f5d594ad9a&amp;id=8c80d48567&amp;v_id=4229&amp;f_id=003265e0f0" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank">
      <div id="mc_embed_signup_scroll">
          <div class="mc-field-group"><input type="email" name="EMAIL" class="required email" id="mce-EMAIL" required="" value=""></div><div id="mergeRow-gdpr" class="mergeRow gdpr-mergeRow content__gdprBlock mc-field-group"><div class="content__gdpr"><fieldset class="mc_fieldset gdprRequired mc-field-group" name="interestgroup_field"><label class="checkbox subfield" for="gdpr92049"><input type="checkbox" id="gdpr_92049" name="gdpr[92049]" class="gdpr" value="Y"><span>Email</span></label></fieldset></div></div>
      <div id="mce-responses" class="clear foot">
          <div class="response" id="mce-error-response" style="display: none;"></div>
          <div class="response" id="mce-success-response" style="display: none;"></div>
      </div>
  <div aria-hidden="true" style="position: absolute; left: -5000px;">
      /* real people should not fill this in and expect good things - do not remove this or risk form bot signups */
      <input type="text" name="b_c04b8f9a229fa40f5d594ad9a_8c80d48567" tabindex="-1" value="">
  </div>
      <div class="optionalParent">
          <div class="clear foot">
              <input type="submit" name="subscribe" id="mc-embedded-subscribe" class="button" value="Subscribe">
              <p style="margin: 0px auto;"><a href="http://eepurl.com/iD-MeM" title="Mailchimp - email marketing made easy and fun"><span style="display: inline-block; background-color: transparent; border-radius: 4px;"><img class="refferal_badge" src="https://digitalasset.intuit.com/render/content/dam/intuit/mc-fe/en_us/images/intuit-mc-rewards-text-dark.svg" alt="Intuit Mailchimp" style="width: 220px; height: 40px; display: flex; padding: 2px 0px; justify-content: center; align-items: center;"></span></a></p>
          </div>
      </div>
  </div>
</form>
</div>
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
        <Text>We use MailChimp as our marketing platform. By clicking below to subscribe, you acknowledge that your information will be transferred to Mailchimp for processing.</Text>
      </div>
    )
  }