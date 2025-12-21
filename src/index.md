---
titleTemplate: "The JavaScript Oxidation Compiler"
layout: home
theme: dark
---

<script setup>
import { sponsors } from './sponsors'
</script>

<Hero/>
<TrustedBy :logos="['mercedes', 'shopify', 'posthog', 'airbnb', 'shopee']" />
<HeadingSection
  heading="Fast compiler tools for JavaScript"
/>
<FeatureToolbar/>
<FeatureParser/>
<FeatureLinter/>
<FeatureResolver/>
<FeatureTransformer/>
<FeatureMinifierFormatter/>
<Spacer />
<Sponsors
  description="Oxc is free and open source, made possible by wonderful sponsors."
  sponsorLink="/sponsor"
  :sponsors="sponsors"
  :side-by-side-tiers="['bronze', 'backers']"
/>
<Spacer />
<Footer
  heading="Explore the Oxc ecosystem"
  subheading="Lint, format, parse, minify, transform and resolve JavaScript at blazing speed"
  button-text="Get started"
  button-link="/docs/guide/introduction"
/>
