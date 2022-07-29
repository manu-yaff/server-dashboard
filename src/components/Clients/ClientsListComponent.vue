<template>
  <CardComponent>
    <template v-slot:card-content>
      <div v-if="!clients">
        <p>There are no clients connected</p>
      </div>
      <div v-else>
        <table class="clients-list">
          <tr class="clients-list__heading">
            <th v-for="columnTitle in clientTableColumns" :key="columnTitle">
              <h2>{{ columnTitle }}</h2>
            </th>
          </tr>
          <client-item
            v-for="client in clients"
            :key="client.Name"
            :client="client"
          />
        </table>
      </div>
    </template>
  </CardComponent>
</template>

<style scoped lang="scss" src="./ClientsListComponent.scss"></style>
<script lang="ts" src="./ClientsListComponent.ts"></script>
