<template>
  <h1>Component that unifies two other</h1>
  <statistics :filesInfo="filesInfo" />
  <files-by-channel :filesInfo="filesInfo" />
</template>

<script lang="ts" src="./FilesComponent.ts"></script>
