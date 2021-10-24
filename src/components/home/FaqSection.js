import React from 'react';
import {Box, Container, Typography} from "@mui/material";
import AccordionCustom from "../common/AccordionCustom";
// import Image from "next/image";

const FaqSection = () => {

    const faqs = [
        {
            id: 1,
            heading: ` What are Tiny Turtles?`,
            description: `Tiny Turtles are a collection made up of uniquely generated pieces of art using over 100
hand drawn traits.
`,
        }, {
            id: 2,
            heading: `How can I mint a Tiny Turtle?`,
            description: `Once the mint begins, click the “Mint” button on our mint page and proceed to connect
your wallet (Phantom or Sollet). After you have connected, you can now proceed with
the transaction to receive your Turtle!`,
        }, {
            id: 3,
            heading: `What benefit do tiny turtles provide to holders?`,
            description: `We have a plan to start having weekly giveaways to benefit holders of Tiny Turtles. This
being Shell Of The Week and random airdrops of various amounts of SOL to random
holders`,
        }, {
            id: 4,
            heading: `What is the Shell Of The Week?`,
            description: `We will pick a random shell each week to be entered into a contest to win the prize of
that week!. We are doing this to make the rare shells have more to them than just being
rare! If you get a low quantity shell your chances are higher to win!
`,
        }, {
            id: 5,
            heading: `What % of royalties will there be on secondary?`,
            description: `There will be 5% royalties on each sale in any secondary market. These royalties will be
distributed into a few different categories. Such as the SOTW fund, future roadmap
plans, and donations.`,
        }, {
            id: 6,
            heading: `Why did we choose the Solana ecosystem?`,
            description: `We chose Solana because the gas fees are much lower than Ethereum. We did not
want to pick a network that punishes the holders into paying an astronomical amount in
gas fees hurting not only the holder but the community as well.`,
        }, {
            id: 7,
            heading: `Is there a community Fund?`,
            description: `Yes!
These funds will be used however the community decides!
Whether it is buying more of the floor or holding an event.
`,
        }, {
            id: 8,
            heading: `Where to buy after mint?`,
            description: `We plan to create listings on solanart, Alpha Art, digital eyes,
and magic eden.
`,
        }, {
            id: 9,
            heading: `How will the secondary market be looking?`,
            description: `We understand that a crucial part after a Mint is the floor price
            and paper hands… We are putting a large sum of SOL into a
    separate wallet to keep the secondary markets in check. We
    will use these funds to buy back the floor priced Turtles
    continuously. We want to protect the turtles from being stranded
    at all costs.`,
        }, {
            id: 10,
            heading: `What will happen to the Tiny Turtles that are bought back?`,
            description: `We will let the community decide what they would like us to do
with the Tiny Turtles that have been bought back. Some options
will be giving them away, burning, airdrops etc. Whichever you
decide!`,
        }, {
            id: 11,
            heading: `How do we contact the team?`,
            description: `We will be most active on our discord which you can join here!`,
        },
    ]

    return (


        <Box
            py={'6rem'}
            id={'faq'}
            sx={{
                background: theme => theme.palette.primary.main,
            }}
        >
            <Container maxWidth={'xxl'}>

                <Typography
                    color={'#fff'}
                    fontWeight={'bold'}
                    textAlign={'center'}
                    variant={'h1'}
                >
                    What the faq?!
                </Typography>

                {/*     Accordion Section     */}

                <Box mt={'3rem'}>

                    {
                        faqs.map(({heading,id,description}) => {
                            return(
                                <AccordionCustom
                                    key={id}
                                    heading={heading}
                                    description={[
                                       description,
                                    ]}
                                />
                            )
                        })
                    }

                </Box>

            </Container>
        </Box>

    );
};

export default FaqSection;