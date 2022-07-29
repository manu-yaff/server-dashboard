<template>
  <div v-if="!filesInfo?.FilesByChannel">
    <p>There are no files to show</p>
  </div>
  <div
    v-else
    class="channel-container"
    v-for="channel in filesInfo?.FilesByChannel"
    :key="channel.Channel"
  >
    <h2># {{ channel.Channel }} channel</h2>
    <div class="flex-container">
      <th>
        <h2>File Name</h2>
      </th>
      <th>
        <h2>Size (bytes)</h2>
      </th>
    </div>
    <div
      class="flex-container"
      v-for="(file, index) in channel.Files"
      :key="index"
    >
      <td>{{ file.Name }}</td>
      <td>{{ file.Size }}</td>
    </div>
  </div>
</template>

<style scoped lang="scss" src="./FilesByChannel.scss"></style>
<script lang="ts" src="./FilesByChannel.ts"></script>
