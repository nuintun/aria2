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
export default {
  data() {
    return {
      selected: [],
      headers: [
        { text: '状态', value: 'status', left: true, sortable: false },
        { text: '名称', value: 'name', left: true, sortable: false },
        { text: '进度', value: 'process', left: true, sortable: false },
        { text: '剩余时间', value: 'time', left: false, sortable: false },
        { text: '下载速度', value: 'speed', left: false, sortable: false }
      ],
      items: [
        {
          id: 1,
          status: '下载',
          name: 'node.js',
          process: 10,
          time: '10s',
          speed: 512
        },
        {
          id: 2,
          status: '等待',
          name: 'git.exe',
          process: 9,
          time: '10s',
          speed: 300
        },
        {
          id: 3,
          status: '暂停',
          name: 'aria2.exe',
          process: 16,
          time: '10m',
          speed: 1204
        },
        {
          id: 4,
          status: '暂停',
          name: 'qq.exe',
          process: 100,
          time: '10h',
          speed: 128
        },
        {
          id: 5,
          status: '暂停',
          name: 'download.zip',
          process: 16,
          time: '10m',
          speed: 160
        }
      ]
    }
  }
}
</script>
