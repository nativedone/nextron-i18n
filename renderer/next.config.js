const withPlugins = require("next-compose-plugins");
const withFonts = require("next-fonts");
const withImages = require("next-images");

console.log("process.env.NEXT_TRANSLATE_PATH", process.env.NEXT_TRANSLATE_PATH);

// TODO: i18n routing does not work for 'next export' which nextron relays on
// to create an electron app from a next.js project.
// We need to investigate i18n routing alternatives
// See https://nextjs.org/docs/advanced-features/i18n-routing#how-does-this-work-with-static-generation
const nextTranslate = require("next-translate");

const nextConfig = nextTranslate({
  webpack: (config, { isServer }) => {
    // TODO: see how to use 'electron-renderer' target because webpack has optimizations for it
    // config.target = "electron-renderer";
    return config;
  },
});

module.exports = withPlugins(
  [
    withImages,
    [
      withFonts,
      {
        // assetPrefix: "https://example.com",
      },
    ],
  ],
  nextConfig
);
