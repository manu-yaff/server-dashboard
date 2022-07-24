<template>
  <tr>
    <td>{{ client.Name }}</td>
    <td>{{ client.Ip }}</td>
    <td>{{ client.Date }}</td>
    <td v-if="!client.Channels || !client.Channels.length">
      Client is not connected to any channel
    </td>
    <td v-else class="channels-list">
      <span
        v-for="channel in client.Channels"
        :key="channel"
        class="channels-list__item"
      >
        {{ channel }}
      </span>
    </td>
  </tr>
</template>

<style scoped lang="scss" src="./ClientItemComponent.scss"></style>
<script lang="ts" src="./ClientItemComponent.ts"></script>
