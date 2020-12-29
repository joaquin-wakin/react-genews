import React, { useEffect } from "react";

import disabled from "../Disabled";

const PrivacyPolicy = () => {
  useEffect(() => {
    disabled();
  }, []);

  return (
    <section id="privacy-policy">
      <div className="container-fluid">
        <h1 className="page-heading__other">Privacy Policy</h1>
        <h3 className="section-heading">Introduction</h3>
        <p className="privacy-policy-paragraph">
          GENEWS ("we" or "us" or "our") respects the privacy of our users ("user" or "you"). This Privacy Policy explains how we collect, use, disclose, and safeguard your
          information when you visit our website, including any other media form, media channel, mobile website, or mobile application related or connected thereto
          (collectively, the “site”). Please read this Privacy Policy carefully. If you do not agree with the terms of this Privacy Policy, please do not access the site.
        </p>

        <p className="privacy-policy-paragraph">
          We reserve the right to make changes to this Privacy Policy at any time and for any reason. We will alert you about any changes by updating the "last updated" date
          of this Privacy Policy. Any changes or modifications will be effective immediately upon posting the updated Privacy Policy on the Site, and you waive the right to
          receive specific notice of each such change or modification.
        </p>

        <p className="privacy-policy-paragraph">
          You are encouraged to periodically review this Privacy Policy to stay informed of updates. You will be deemed to have been made aware of, will be subject to, and
          will be deemed to have accepted the changes in any revised Privacy Policy by your continued use of the Site after the date such revised Privacy Policy is posted.
        </p>

        <h3 className="section-heading">Collection of your Information</h3>
        <p className="privacy-policy-paragraph">We may collect information about you in a variety of ways. The information we may collect on the site includes:</p>

        <h3>Personal Data</h3>
        <p className="privacy-policy-paragraph">
          Personally identifiable information, such as your name, shipping address, email address, and telephone number, and demographic information, such as your age, gender,
          hometown, and interests, that you voluntarily give to us (when you register with the site (or our mobile application,) or) when you choose to participate in various
          activities related to GENEWS, such as online chat and message boards. You are under no obligation to provide us with personal information of any kind, however your
          refusal to do so may prevent you from using certain features of the Genews.
        </p>

        <h3>Derivative Data</h3>
        <p className="privacy-policy-paragraph">
          Information our servers automatically collect when you access the site, such as your IP address, your browser type, your operating system, your access times, and the
          pages you have viewed directly before and after accessing the site. (If you are using our mobile application, this information may also include your device name and
          type, your operating system, your phone number, your country, your likes and replies to a post, and other interactions with the application and other users via
          server log files, as well as any other information you choose to provide.)
        </p>

        <h3>Facebook Permissions</h3>
        <p className="privacy-policy-paragraph">
          The site (and our mobile application) may by default access your{" "}
          <a href="https://www.facebook.com/about/privacy/" target="_blank">
            Facebook
          </a>{" "}
          basic account information, including your name, email, gender, birthday, current city, and profile picture URL, as well as other information that you choose to make
          public. We may also request access to other permissions related to your account, such as friends, checkins, and likes, and you may choose to grant or deny us access
          to each individual permission. For more information regarding Facebook permissions, refer to the{" "}
          <a href="https://developers.facebook.com/docs/permissions/reference" target="_blank">
            Facebook Permissions Reference
          </a>{" "}
          page.
        </p>

        <h3>Data from Social Networks</h3>
        <p className="privacy-policy-paragraph">
          User information from social networking sites, such as (Apple’s Game Center, Facebook, Google+, Instagram, Pinterest, Twitter), including your name, your social
          network username, location, gender, birth date, email address, profile picture, and public data for contacts, if you connect your account to such social networks.
          (If you are using our mobile application, this information may also include the contact information of anyone you invite to use and/or join our mobile application).
        </p>

        <h3>Mobile Device Data</h3>
        <p className="privacy-policy-paragraph">
          Device information, such as your mobile device ID, model, and manufacturer, and information about the location of your device, if you access the site from a mobile
          device.
        </p>

        <h3 className="section-heading">Use of your Information</h3>
        <p className="privacy-policy-paragraph">
          Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected
          about you via the site (or our mobile application) to:
        </p>

        <ul className="privacy-policy-list">
          <li>Compile anonymous statistical data and analysis for use internally or with third parties</li>
          <li>Create and manage your account</li>
          <li>Enable user-to-user communications</li>
          <li>Generate a personal profile about you to make future visits to the site (and our mobile application) more personalized</li>
          <li>Increase the efficiency and operation of the site (and our mobile application)</li>
          <li>Monitor and analyze usage and trends to improve your experience with the site (and our mobile application)</li>
          <li>Request feedback and contact you about your use of the Site (and our mobile application)</li>
          <li>Send you a newsletter</li>
        </ul>

        <h3 className="section-heading">Disclosure of your Information</h3>
        <p className="privacy-policy-paragraph">We may share information we have collected about you in certain situations. Your information may be disclosed as follows:</p>

        <h3>By Law or to Protect Rights</h3>
        <p className="privacy-policy-paragraph">
          If we believe the release of information about you is necessary to respond to legal process, to investigate or remedy potential violations of our policies, or to
          protect the rights, property, and safety of others, we may share your information as permitted or required by any applicable law, rule, or regulation. This includes
          exchanging information with other entities for fraud protection and credit risk reduction.
        </p>

        <h3>Online Postings</h3>
        <p className="privacy-policy-paragraph">
          When you post comments, contributions or other content to the site (or our mobile applications), your posts may be viewed by all users and may be publicly
          distributed outside the site (and our mobile application) in perpetuity.
        </p>

        <h3>Third-Party Advertisers</h3>
        <p className="privacy-policy-paragraph">
          We may use third-party advertising companies to serve ads when you visit the site (or our mobile application). These companies may use information about your visits
          to the site (and our mobile application) and other websites that are contained in web cookies in order to provide advertisements about goods and services of interest
          to you.
        </p>

        <h3>Social Media Contacts</h3>
        <p className="privacy-policy-paragraph">
          If you connect to the site (or our mobile application) through a social network, your contacts on the social network will see your name, profile photo, and
          descriptions of your activity.
        </p>

        <h3 className="section-heading">Tracking Technologies</h3>
        <h3>Cookies and Web Beacons</h3>
        <p className="privacy-policy-paragraph">
          We may use cookies, web beacons, tracking pixels, and other tracking technologies on the site (and our mobile application) to help customize the site (and our mobile
          application) and improve your experience. When you access the site (or our mobile application), your personal information is not collected through the use of
          tracking technology. Most browsers are set to accept cookies by default. You can remove or reject cookies, but be aware that such action could affect the
          availability and functionality of the site (or our mobile application). You may not decline web beacons. However, they can be rendered ineffective by declining all
          cookies or by modifying your web browser’s settings to notify you each time a cookie is tendered, permitting you to accept or decline cookies on an individual basis.
        </p>

        <p className="privacy-policy-paragraph">
          We may use cookies, web beacons, tracking pixels, and other tracking technologies on the site and our mobile application to help customize the site (and our mobile
          application) and improve your experience. For more information on how we use cookies, please refer to our Cookie Policy posted on the Site, which is incorporated
          into this Privacy Policy. By using the Site, you agree to be bound by our Cookie Policy.
        </p>

        <h3>Website Analytics</h3>
        <p className="privacy-policy-paragraph">
          We may also partner with selected third-party vendors, such as <ExternalLink link="https://www.adobe.com/privacy/experience-cloud.html" linkName="Adobe Analytics" />
          , <ExternalLink link="https://www.clicktale.com/errorpage.html?aspxerrorpath=/company/privacy-policy/" linkName="Clicktale" />,{" "}
          <ExternalLink link="https://clicky.com/terms" linkName="Clicky" />, <ExternalLink link="https://www.cloudflare.com/privacypolicy/" linkName="Cloudfare" />,{" "}
          <ExternalLink link="https://www.crazyegg.com/privacy/" linkName="Crazy Egg" />,{" "}
          <ExternalLink link="https://www.verizonmedia.com/policies/us/en/verizonmedia/privacy/products/developer/index.html" linkName="Flurry Analytics" />,{" "}
          <ExternalLink link="https://support.google.com/analytics/answer/6004245?hl=en" linkName="Google Analytics" />,{" "}
          <ExternalLink link="https://heap.io/privacy" linkName="Heap Analytics" />, <ExternalLink link="https://www.inspectlet.com/legal#privacy" linkName="Inspectlet" />,{" "}
          <ExternalLink link="https://www.kissmetrics.io/privacy/" linkName="Kissmetrics" />,{" "}
          <ExternalLink link="https://mixpanel.com/legal/privacy-policy/" linkName="Mixpanel" />, <ExternalLink link="https://matomo.org/privacy/" linkName="Piwik" />, and
          others, to allow tracking technologies and remarketing services on the site (and our mobile application) through the use of first party cookies and third-party
          cookies, to, among other things, analyze and track users’ use of the site (and our mobile application) , determine the popularity of certain content and better
          understand online activity. By accessing the site (our mobile application), you consent to the collection and use of your information by these third-party vendors.
          You are encouraged to review their privacy policy and contact them directly for responses to your questions. We do not transfer personal information to these
          third-party vendors. However, if you do not want any information to be collected and used by tracking technologies, you can visit the third-party vendor or the{" "}
          <ExternalLink link="https://optout.networkadvertising.org/?c=1" linkName="Network Advertising Initiative Opt-Out Tool" />, or{" "}
          <ExternalLink link="https://optout.aboutads.info/?c=2&lang=EN" linkName="Digital Advertising Alliance Opt-Out Tool" />.
        </p>

        <p className="privacy-policy-paragraph">
          You should be aware that getting a new computer, installing a new browser, upgrading an existing browser, or erasing or otherwise altering your browser’s cookies
          files may also clear certain opt-out cookies, plug-ins, or settings.
        </p>

        <h3 className="section-heading">Security of your Information</h3>
        <p className="privacy-policy-paragraph">
          We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the
          personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data
          transmission can be guaranteed against any interception or other type of misuse. Any information disclosed online is vulnerable to interception and misuse by
          unauthorized parties. Therefore, we cannot guarantee complete security if you provide personal information.
        </p>

        <h3 className="section-heading">Policy for Children</h3>
        <p className="privacy-policy-paragraph">
          We do not knowingly solicit information from or market to children under the age of 13. If you become aware of any data we have collected from children under age 13,
          please contact us using the contact information provided below.
        </p>

        <h3 className="section-heading">Options Regarding your Information</h3>
        <h3>Account Information</h3>
        <p className="privacy-policy-paragraph">You may at any time review or change the information in your account or terminate your account by:</p>
        <ul className="privacy-policy-list">
          <li>Logging into your account settings and updating your account</li>
          <li>Contacting us using the contact information provided below</li>
        </ul>

        <p className="privacy-policy-paragraph">
          Upon your request to terminate your account, we will deactivate or delete your account and information from our active databases. However, some information may be
          retained in our files to prevent fraud, troubleshoot problems, assist with any investigations, enforce our Terms of Use and/or comply with legal requirements.
        </p>

        <h3>E-mails and Communications</h3>
        <p className="privacy-policy-paragraph">If you no longer wish to receive correspondence, emails, or other communications from us, you may opt-out by:</p>
        <ul className="privacy-policy-list">
          <li>Noting your preferences at the time you register your account with the site (or our mobile application)</li>
          <li>Logging into your account settings and updating your preferences</li>
          <li>Contacting us using the contact information provided below</li>
        </ul>

        <p className="privacy-policy-paragraph">
          If you no longer wish to receive correspondence, e-mails, or other communications from third parties, you are responsible for contacting the third party directly.
        </p>

        <h3 className="section-heading">Contact</h3>
        <p className="privacy-policy-paragraph">If you have questions or comments about this Privacy Policy, please contact us at:</p>
        <p className="privacy-policy-paragraph contact-us">
          <b>GENEWS</b> <br /> Quirino Highway, Tungkong Mangga, San Jose Del Monte City, 3023 Bulacan <br /> valdez.188213@sjdelmonte.sti.edu.ph
        </p>
      </div>
    </section>
  );
};

const ExternalLink = (props) => {
  return (
    <a href={`${props.link}`} target="_blank">
      {props.linkName}
    </a>
  );
};

export default PrivacyPolicy;
