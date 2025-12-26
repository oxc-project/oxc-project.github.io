<script setup>
import { sponsors } from "./sponsors";

import Hero from "@components/oxc/Hero.vue";
// import TrustedBy from '@components/oss/TrustedBy.vue'
import HeadingSection from "@components/oss/HeadingSection.vue";
import FeatureToolbar from "@components/oxc/FeatureToolbar.vue";
import FeatureLinter from "@components/oxc/FeatureLinter.vue";
import FeatureFormatter from "@components/oxc/FeatureFormatter.vue";
import FeatureParser from "@components/oxc/FeatureParser.vue";
import FeatureResolver from "@components/oxc/FeatureResolver.vue";
import FeatureTransformer from "@components/oxc/FeatureTransformer.vue";
import FeatureMinifier from "@components/oxc/FeatureMinifier.vue";
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
