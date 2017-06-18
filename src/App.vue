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
      <v-toolbar-side-icon light v-if="!drawer" @click.native.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-logo>
        <img class="ui-logo" src="/public/logo.png" />
        <v-toolbar-title>Aria2</v-toolbar-title>
      </v-toolbar-logo>
      <v-menu bottom left>
        <v-btn icon="icon" slot="activator" light>
          <v-icon>more_vert</v-icon>
        </v-btn>
        <v-list dense class="pt-0 pb-0">
          <v-list-item>
            <v-list-tile ripple @click.native="auth = !auth">
              <v-list-tile-title>连接设置</v-list-tile-title>
              <aria2-auth :auth.sync="auth"></aria2-auth>
            </v-list-tile>
          </v-list-item>
          <v-list-item>
            <v-list-tile ripple>
              <v-list-tile-title>全局设置</v-list-tile-title>
            </v-list-tile>
          </v-list-item>
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
      <v-container fluid>
        <div class="title">额，不知道说啥~</div>
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
        { title: '正在下载', icon: 'archive', count: 6 },
        { title: '已完成', icon: 'done_all', count: 8 },
        { title: '已删除', icon: 'delete', count: 10 }
      ]
    }
  }
}
</script>
