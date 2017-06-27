<template>
  <v-card>
    <v-card-title>
      <v-btn icon="icon" v-tooltip:bottom="{ html: '添加任务' }">
        <v-icon>add_circle_outline</v-icon>
      </v-btn>
      <v-btn icon="icon" class="ml-3" v-tooltip:bottom="{ html: '开始所选任务' }">
        <v-icon>play_circle_outline</v-icon>
      </v-btn>
      <v-btn icon="icon" class="ml-3" v-tooltip:bottom="{ html: '暂停所选任务' }">
        <v-icon>pause_circle_outline</v-icon>
      </v-btn>
      <v-btn icon="icon" class="ml-3" v-tooltip:bottom="{ html: '删除所选任务' }">
        <v-icon>remove_circle_outline</v-icon>
      </v-btn>
    </v-card-title>
    <v-divider dark class="grey lighten-1 elevation-1"></v-divider>
    <v-data-table class="elevation-0" dark hide-actions hide-details :headers="headers" :items="items" v-model="selected" select-all selected-key="id">
      <template slot="items" scope="props">
        <td style="width: 4%;">
          <v-checkbox primary hide-details v-model="props.selected"></v-checkbox>
        </td>
        <td style="width: 6%;">{{ props.item.status }}</td>
        <td>{{ props.item.name }}</td>
        <td style="width: 46%;">
          <v-layout fluid>
            <v-flex xs11 class="pr-0">
              <v-progress-linear :indeterminate="false" :height="13" v-model="props.item.process"></v-progress-linear>
            </v-flex>
            <v-flex xs1>
              <small class="ui-process-percent">{{ props.item.process }}%</small>
            </v-flex>
          </v-layout>
        </td>
        <td style="width: 10%;" class="text-xs-right">{{ props.item.time }}</td>
        <td style="width: 10%;" class="text-xs-right">{{ props.item.speed }}</td>
      </template>
    </v-data-table>
  </v-card>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: mapState({
    selected: state => state.download.url,
    headers: state => state.download.headers,
    items: state => state.download.items
  })
}
</script>
