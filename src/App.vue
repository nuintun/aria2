<template>
  <v-app>
    <v-navigation-drawer persistent enable-resize-watcher :mini-variant="mini" v-model="drawer" :clipped="clipped">
      <v-list dense class="pa-0">
        <v-list-item v-for="item in items" :key="item">
          <v-list-tile ripple router append :to="item.href">
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
      <v-toolbar-side-icon light v-tooltip:bottom="{ html: '显示菜单' }" v-if="!drawer" @click.native.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-logo>
        <img class="ui-logo" src="/public/logo.png">
        <v-toolbar-title>Aria👌</v-toolbar-title>
      </v-toolbar-logo>
      <v-btn icon="icon" light v-tooltip:bottom="{ html: '连接设置' }" @click.native="auth = !auth">
        <v-icon>account_circle</v-icon>
        <aria2-auth :auth.sync="auth"></aria2-auth>
      </v-btn>
      <v-btn icon="icon" light v-tooltip:bottom="{ html: '全局设置' }">
        <v-icon>settings</v-icon>
      </v-btn>
      <v-menu bottom left>
        <v-btn icon="icon" slot="activator" light v-tooltip:bottom="{ html: '其它选项' }">
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
        <router-view></router-view>
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
        { title: '正在下载', icon: 'cloud_download', count: 6, href: '/download' },
        { title: '已完成', icon: 'done_all', count: 8, href: '/done' },
        { title: '已删除', icon: 'delete_sweep', count: 10, href: '/deleted' }
      ]
    }
  }
}
</script>
