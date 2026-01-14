import { copyFileSync, existsSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const rootDir = join(__dirname, "..");
const sponsorsDir = join(rootDir, "sponsors");

const sponsorsJson = JSON.parse(readFileSync(join(rootDir, "sponsors/sponsors.json"), "utf-8"));

// Tier thresholds based on sponsorkit.config.js
const TIER_THRESHOLDS = {
  gold: 500,
  silver: 200,
  bronze: 100,
  supporters: 20,
};

function getSponsorTier(monthlyDollars) {
  if (monthlyDollars >= TIER_THRESHOLDS.gold) return "gold";
  if (monthlyDollars >= TIER_THRESHOLDS.silver) return "silver";
  if (monthlyDollars >= TIER_THRESHOLDS.bronze) return "bronze";
  return "backers";
}

function createSponsorItem(entry) {
  const sponsor = entry.sponsor;
  const name = sponsor.name || sponsor.login;
  const url = sponsor.linkUrl;
  const img = sponsor.avatarUrl;

  return { name, url, img };
}

// Group sponsors by tier
const tiers = {
  gold: [],
  silver: [],
  bronze: [],
  backers: [],
};

for (const entry of sponsorsJson) {
  const monthlyDollars = entry.monthlyDollars || 0;
  const tier = getSponsorTier(monthlyDollars);
  const item = createSponsorItem(entry);
  tiers[tier].push(item);
}

// Build output
const output = [];

if (tiers.gold.length > 0) {
  output.push({
    tier: "Gold Sponsors",
    size: "big",
    items: tiers.gold,
  });
}

if (tiers.silver.length > 0) {
  output.push({
    tier: "Silver Sponsors",
    size: "big",
    items: tiers.silver,
  });
}

if (tiers.bronze.length > 0) {
  output.push({
    tier: "Bronze Sponsors",
    size: "medium",
    items: tiers.bronze,
  });
}

if (tiers.backers.length > 0) {
  output.push({
    tier: "Backers",
    size: "avatar",
    items: tiers.backers,
  });
}

// Generate TypeScript file
const tsContent = `/**
 * OXC Sponsor Data
 * Generated from sponsors/sponsors.json
 */

import type { SponsorTier } from "@voidzero-dev/vitepress-theme/src/types/sponsors";

export const sponsors: SponsorTier[] = ${JSON.stringify(output, null, 2)};
`;

writeFileSync(join(rootDir, ".vitepress/theme/landing/sponsors.ts"), tsContent);

console.log("Generated sponsors.ts");
console.log(`  Gold: ${tiers.gold.length}`);
console.log(`  Silver: ${tiers.silver.length}`);
console.log(`  Bronze: ${tiers.bronze.length}`);
console.log(`  Backers: ${tiers.backers.length}`);

// Copy sponsors.svg to public if it exists
const svgSource = join(sponsorsDir, "sponsors.svg");
const svgDest = join(rootDir, "public/sponsors.svg");
if (existsSync(svgSource)) {
  copyFileSync(svgSource, svgDest);
  console.log("Copied sponsors.svg to public/");
}
