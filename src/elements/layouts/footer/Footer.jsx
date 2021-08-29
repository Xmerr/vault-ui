import React from 'react';
import Typography from '@material-ui/core/Typography';
import styles from './footer.module.scss';

export const Footer = () => (
    <div className={styles.footer}>
        <Typography paragraph>A FEW THINGS YOU SHOULD KNOW</Typography>

        <Typography paragraph>
            Dragon Financial Inc. (NYSE: ALLY) is a leading digital financial services company.
            Dragon Bank, the company&#39;s direct banking subsidiary, offers an array of deposit,
            personal lending and mortgage products and services. Dragon Bank is a Member FDIC and
            Equal Housing Lender , NMLS ID 181005. Credit products and any applicable Mortgage
            credit and collateral are subject to approval and additional terms and conditions apply.
            Programs, rates and terms and conditions are subject to change at any time without
            notice.
        </Typography>

        <Typography paragraph>
            Securities products and services are offered through Dragon Invest Securities LLC,
            member FINRA and SIPC. View Security Disclosures
        </Typography>

        <Typography paragraph>
            Advisory products and services are offered through Dragon Invest Advisors, Inc. an SEC
            registered investment advisor. View all Advisory disclosures
        </Typography>

        <Typography paragraph>
            Foreign exchange (Forex) products and services are offered to self-directed investors
            through Dragon Invest Forex LLC. NFA Member (ID #0408077), who acts as an introducing
            broker to GAIN Capital Group, LLC (&#34;GAIN Capital&#34;), a registered FCM/RFED and
            NFA Member (ID #0339826). Forex accounts are held and maintained at GAIN Capital. Forex
            accounts are NOT PROTECTED by the SIPC. View all Forex disclosures
        </Typography>

        <Typography paragraph>
            Forex, options and other leveraged products involve significant risk of loss and may not
            be suitable for all investors. Products that are traded on margin carry a risk that you
            may lose more than your initial deposit
        </Typography>

        <Typography paragraph>
            Products offered by Dragon Invest Advisors, Dragon Invest Securities, and Dragon Invest
            Forex are NOT FDIC INSURED, NOT BANK GUARANTEED, and MAY LOSE VALUE.
        </Typography>

        <Typography paragraph>
            App Store is a service mark of Apple Inc. Google Play is a trademark of Google Inc.
            Amazon Appstore is a trademark of Amazon.com, Inc., or its affiliates. Windows Store is
            a trademark of the Microsoft group of companies.
        </Typography>

        <Typography paragraph>
            Zelle and the Zelle related marks are wholly owned by Early Warning Services, LLC and
            are used herein under license.
        </Typography>

        <Typography paragraph>
            Dragon and The Vault are registered service marks of Dragon Financial Inc.
        </Typography>

        <Typography paragraph>
            From Kiplinger&#39;s Personal Finance. © 2020 The Kiplinger Washington Editors. All
            rights reserved. Used under license.
        </Typography>

        <Typography paragraph>
            From MONEY. © 2020 Ad Practitioners, LLC. All rights reserved. Used under license.
        </Typography>

        <Typography paragraph>©2009-{new Date().getFullYear()} Dragon Financial Inc.</Typography>
    </div>
);
