---
title: Meet the Team
---

<script setup>
import { VPTeamMembers } from 'vitepress/theme'
import { CORE_TEAM_MEMBERS, CONSULTANTS } from '@constants/team'
</script>

# Meet the Team

## Core Team

<VPTeamMembers size="small" :members="CORE_TEAM_MEMBERS" />

## Consultants

<VPTeamMembers size="small" :members="CONSULTANTS" />
