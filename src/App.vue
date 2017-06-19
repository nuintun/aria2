<style lang="stylus">
  @import './stylus/main';

  html, body{
    overflow-y: auto;
  }

  .ui-logo {
    height: 56px;
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
    <v-toolbar fixed light>
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
        <v-toolbar class="transparent elevation-0" dark>
          <v-btn icon="icon" v-tooltip:bottom="{html: '全局设置'}">
            <v-icon>pause</v-icon>
          </v-btn>
        </v-toolbar>
        <v-divider dark></v-divider>
        <v-card>
          <v-card-title v-if="false">
            <v-btn icon="icon" v-tooltip:bottom="{html: '全局设置'}">
              <v-icon>settings</v-icon>
            </v-btn>
            <v-spacer></v-spacer>
            <v-text-field append-icon="search" label="Search" single-line hide-details v-model="table.search"></v-text-field>
          </v-card-title>
          <v-divider dark class="grey lighten-1"></v-divider>
          <v-data-table dark hide-actions :headers="table.headers" :items="table.items" :search="table.search" v-model="table.selected" select-all selected-key="id">
            <template slot="items" scope="props">
              <td>
                <v-checkbox primary hide-details v-model="props.selected"></v-checkbox>
              </td>
              <td>{{ props.item.status }}</td>
              <td>{{ props.item.type }}</td>
              <td>{{ props.item.name }}</td>
              <td>{{ props.item.process }}</td>
              <td class="text-xs-right">{{ props.item.speed }}</td>
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
        { title: '已删除', icon: 'delete', count: 10 }
      ],
      table: {
        search: '',
        selected: [],
        headers: [
          {
            text: '状态',
            left: true,
            sortable: false,
            value: 'status'
          },
          { text: '类型', value: 'type', left: true },
          { text: '名称', value: 'name', left: true },
          { text: '进度/剩余时间', value: 'process', left: true },
          { text: '下载速度', value: 'speed', left: false }
        ],
        items: [
          {
            id: 1,
            status: '下载',
            type: '',
            name: 87,
            process: '14%',
            speed: '1%'
          },
          {
            id: 2,
            status: '等待',
            type: 'Ice cream sandwich',
            name: 237,
            process: 9.0,
            speed: 37
          },
          {
            id: 3,
            status: '暂停',
            type: 'Eclair',
            name: 262,
            process: 16.0,
            speed: 23
          },
          {
            id: 4,
            status: '暂停',
            type: 'Eclair',
            name: 262,
            process: 16.0,
            speed: 23
          },
          {
            id: 5,
            status: '暂停',
            type: 'Eclair',
            name: 262,
            process: 16.0,
            speed: 23
          }
        ]
      }
    }
  }
}

// archive
</script>
