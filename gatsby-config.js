let activeEnv =
    process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || "development";



require("dotenv").config({
    path: `.env.${activeEnv}`,
});

console.log(`Using environment config: '${activeEnv}'`);
console.log("gatsby-config:process.env.AUTH0_CALLBACK [" + process.env.AUTH0_CALLBACK + "]");
console.log("gatsby-config:process.env.AUTH0_DOMAIN[" + process.env.AUTH0_DOMAIN + "]");
console.log("gatsby-config:process.env.GA_TRACKING_ID[" + process.env.GA_TRACKING_ID + "]");

module.exports = {
    siteMetadata: {
        siteUrl: process.env.SITE_URL,
        title: `ETS ELC `,
        description: `ETS ELC.`,
        author: `@falcon`,
        gaid: process.env.GA_TRACKING_ID,
        authdom: process.env.AUTH0_DOMAIN,
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        'gatsby-plugin-offline',
        `gatsby-plugin-hotjar`,
        {
            resolve: 'gatsby-plugin-google-analytics',
            options: {
                trackingId: process.env.GA_TRACKING_ID,
                respectDNT: true
            }
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `software`,
                path: `${__dirname}/src/static/software/`,
                ignore: [`**/\.*`], // ignore files starting with a dot
            },
        },
        {
            resolve: `gatsby-plugin-hotjar`,
            options: {
              id: 1558085,
              sv: 6
            },
          },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `gatsby-starter-default`,
                short_name: `starter`,
                start_url: `/`,
                background_color: `#663399`,
                theme_color: `#663399`,
                display: `minimal-ui`,
                icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
            },
        },
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // `gatsby-plugin-offline`,
    ],
};
