/** @format */

const p = (text) => `<p> ${text} </p>`;

const html = (name) => `${p(`Hey ${name}`)}
${p(
  'You are now registered for Hack Club Asia’ Virtual conf. Asia conf is a perfectly curated experience for you to learn how to run a great Hack Club.'
)}
${p(
  'We will also showcase cool projects that Hack Clubbers in Asia are making to celebrate the great work happening in Hack Club Asia.'
)}
${p('Here is your ticket for the event.')}

<!--[if gte MSO 9]>
  <table width="640">
     <tr>
        <td>
<![endif]-->
  <table width="100%" style="max-width:640px;">
    <tr>
      <td>
        <img src="cid:ticket" width="100%" />
      </td>
    </tr>
  </table>
<!--[if gte MSO 9]>
      </td>
    </tr>
  </table>
<![endif]-->

${p(
  'Share your ticket on social media and let everyone know how excited you are about the event, don’t forget to tag us <a href="https://www.instagram.com/hackclubindia/" >@instagram</a> and <a href="https://twitter.com/HackClubIndia" >@twitter</a> using the hashtag #asia-conf '
)}

${p(
  'You can <a target="_blank" href="https://calendar.google.com/event?action=TEMPLATE&amp;tmeid=N2M5aTNna2pkMTNjcW44aHQ4YW5qc2t2MGQgaGFyc2hAaGFja2NsdWIuY29t&amp;tmsrc=harsh%40hackclub.com"> click here </a> to add this event to your calendar.</b> The link to the zoom call will be added to the event description soon.'
)}
${p(
  'We will also be <b>sending you an email with the link to the zoom call soon.</b>'
)}
 ${p('The event is on <i>3rd April, 7 PM IST ( Indian Standard Time ).</i>')} 
${p('See you there and till then happy hacking!')}
<pre>
Harsh Bajpai
Hack Club Asia Pacific
</pre>
 `;

export default html;
