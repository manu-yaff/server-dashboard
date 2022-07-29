<template>
  <h2>component</h2>
  <div style="background-color: white" v-for="channel in files" :key="channel">
    <h2>{{ channel.Channel }} channel</h2>
    <table class="clients-list">
      <tr class="clients-list__heading">
        <th>
          <h2>Name</h2>
        </th>
        <th>
          <h2>Size</h2>
        </th>
      </tr>
      <tr v-for="file in channel.Files" :key="file">
        <td>{{ file.Name }}</td>
        <td>{{ file.Size }}</td>
      </tr>
    </table>
  </div>
</template>

<style scoped lang="scss" src="./FilesListComponent.scss"></style>
<script lang="ts" src="./FilesListComponent"></script>
