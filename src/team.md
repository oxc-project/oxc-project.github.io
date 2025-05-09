---
layout: page
title: Meet the Team
sidebar: false
aside: false
---

<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamPageSection,
  VPTeamMembers
} from 'vitepress/theme'
import { CORE_TEAM_MEMBERS, CONSULTANTS, EMERITI } from '@constants/team'
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>Meet the Team</template>
  </VPTeamPageTitle>

<VPTeamMembers :members="CORE_TEAM_MEMBERS" />

<VPTeamPageSection>
    <template #title>Consultants</template>
    <template #members>
      <VPTeamMembers size="small" :members="CONSULTANTS" />
    </template>
  </VPTeamPageSection>

<VPTeamPageSection>
    <template #title>Team Emeriti</template>
    <template #members>
      <VPTeamMembers size="small" :members="EMERITI" />
    </template>
  </VPTeamPageSection>
</VPTeamPage>
