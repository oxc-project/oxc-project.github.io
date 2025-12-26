<script setup>
import { sponsors } from "./sponsors";

import Hero from "./Hero.vue";
// import TrustedBy from '@components/oss/TrustedBy.vue'
import HeadingSection from "@components/oss/HeadingSection.vue";
import FeatureToolbar from "./FeatureToolbar.vue";
import FeatureLinter from "./FeatureLinter.vue";
import FeatureFormatter from "./FeatureFormatter.vue";
import FeatureParser from "./FeatureParser.vue";
import FeatureResolver from "./FeatureResolver.vue";
import FeatureTransformer from "./FeatureTransformer.vue";
import FeatureMinifier from "./FeatureMinifier.vue";
import Sponsors from "@components/oss/Sponsors.vue";
import Spacer from "@components/shared/Spacer.vue";
import Footer from "@components/oss/Footer.vue";
</script>

<template>
  <Hero />
  <!-- 'shopify' requires public/trusted-by/shopify.svg -->
  <!-- <TrustedBy :logos="['shopify', 'airbnb', 'atlassian']" /> -->
  <HeadingSection heading="Foundation of Modern JavaScript Tooling" />
  <section id="features">
    <FeatureToolbar />
    <FeatureLinter />
    <FeatureFormatter />
    <FeatureParser />
    <FeatureTransformer />
    <FeatureResolver />
    <FeatureMinifier />
  </section>
  <Spacer />
  <Sponsors
    description="Oxc is free and open source, made possible by wonderful sponsors."
    sponsorLink="/sponsor"
    :sponsors="sponsors"
    :side-by-side-tiers="['Bronze Sponsors', 'Backers']"
    logo-style="opencollective"
  />
  <Footer
    heading="Explore the Oxc ecosystem"
    subheading="Lint, format, parse, minify, transform and resolve JavaScript at blazing speed"
    button-text="Get started"
    button-link="/docs/guide/introduction"
  />
</template>
