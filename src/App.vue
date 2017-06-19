<style lang="stylus">
  @import './stylus/main';

  .ui-process-percent {
    display: block;
    margin-top: 12px;
  }

  td, th{
    white-space: nowrap;
  }
</style>

<template>
  <v-app>
    <v-navigation-drawer persistent enable-resize-watcher :mini-variant="mini" v-model="drawer" :clipped="clipped">
      <v-list dense>
        <v-list-item v-for="item in items" :key="item">
          <v-list-tile ripple>
            <v-list-tile-action>
              <v-icon light>{{ item.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>{{ item.title }} ({{ item.count }})</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar fixed light class="elevation-1">
      <v-toolbar-side-icon light v-tooltip:bottom="{html: '显示菜单'}" v-if="!drawer" @click.native.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-logo>
        <img class="ui-logo" src="/public/logo.png" />
        <v-toolbar-title>Aria2</v-toolbar-title>
      </v-toolbar-logo>
      <v-btn icon="icon" light v-tooltip:bottom="{html: '连接设置'}" @click.native="auth = !auth">
        <v-icon>account_circle</v-icon>
        <aria2-auth :auth.sync="auth"></aria2-auth>
      </v-btn>
      <v-btn icon="icon" light v-tooltip:bottom="{html: '全局设置'}">
        <v-icon>settings</v-icon>
      </v-btn>
      <v-menu bottom left>
        <v-btn icon="icon" slot="activator" light v-tooltip:bottom="{html: '其它选项'}">
          <v-icon>more_vert</v-icon>
        </v-btn>
        <v-list dense class="pt-0 pb-0">
          <v-list-item>
            <v-list-tile ripple>
              <v-list-tile-title>服务器信息</v-list-tile-title>
            </v-list-tile>
          </v-list-item>
          <v-list-item>
            <v-list-tile ripple>
              <v-list-tile-title>关于和捐助</v-list-tile-title>
            </v-list-tile>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-toolbar>
    <main>
      <v-container fluid class="pa-0">
        <v-card>
          <v-card-title>
            <v-btn icon="icon" v-tooltip:bottom="{html: '添加任务'}">
              <v-icon>add_circle_outline</v-icon>
            </v-btn>
            <v-btn icon="icon" class="ml-3" v-tooltip:bottom="{html: '开始所选任务'}">
              <v-icon>play_circle_outline</v-icon>
            </v-btn>
            <v-btn icon="icon" class="ml-3" v-tooltip:bottom="{html: '暂停所选任务'}">
              <v-icon>pause_circle_outline</v-icon>
            </v-btn>
            <v-btn icon="icon" class="ml-3" v-tooltip:bottom="{html: '删除所选任务'}">
              <v-icon>remove_circle_outline</v-icon>
            </v-btn>
          </v-card-title>
          <v-divider dark class="grey lighten-1 elevation-1"></v-divider>
          <v-data-table class="elevation-0" dark hide-actions hide-details :headers="table.headers" :items="table.items" v-model="table.selected" select-all selected-key="id">
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
      </v-container>
    </main>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      clipped: true,
      auth: false,
      mini: false,
      drawer: true,
      configure: false,
      items: [
        { title: '正在下载', icon: 'cloud_download', count: 6 },
        { title: '已完成', icon: 'done_all', count: 8 },
        { title: '已删除', icon: 'delete_sweep', count: 10 }
      ],
      table: {
        selected: [],
        headers: [
          { text: '状态', value: 'status', sortable: false, left: true },
          { text: '名称', value: 'name', left: true },
          { text: '进度', value: 'process', left: true },
          { text: '剩余时间', value: 'time', left: false },
          { text: '下载速度', value: 'speed', left: false }
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
}
</script>
