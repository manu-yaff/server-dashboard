<template>
  {{ filesInfo?.FilesByChannel }}
  <div class="flex-container">
    <div class="chart-container" style="width: 70%">
      <canvas id="channels-chart"></canvas>
    </div>
    <div class="statistics">
      <div>
        <h2>Total Files</h2>
        <p>{{ filesInfo?.TotalFiles }}</p>
      </div>
      <div>
        <h2>Total Data</h2>
        <p>{{ filesInfo?.TotalData }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss" src="./FileStatisticsComponent.scss"></style>
<script lang="ts" src="./FileStatisticsComponent.ts"></script>
