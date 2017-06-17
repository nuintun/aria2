<style lang="stylus">
  @import './stylus/main';

  html, body{
    overflow-y: auto;
  }
</style>

<template>
  <v-app>
    <v-navigation-drawer persistent :mini-variant.sync="mini" v-model="drawer">
      <v-list class="pa-0">
        <v-list-item>
          <v-list-tile avatar tag="div">
            <v-list-tile-avatar>
              <img src="/public/logo.png" />
            </v-list-tile-avatar>
            <v-list-tile-content>
              <v-list-tile-title>Aria2</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list-item>
      </v-list>
      <v-divider light></v-divider>
      <v-list class="pt-0" dense>
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
      <v-toolbar-side-icon light @click.native.stop="mini = !mini"></v-toolbar-side-icon>
      <v-spacer></v-spacer>
      <v-menu bottom left>
        <v-btn icon="icon" slot="activator" light>
          <v-icon>more_vert</v-icon>
        </v-btn>
        <v-list dense class="pt-0 pb-0">
          <v-list-item>
            <v-list-tile ripple>
              <v-list-tile-title @click="auth = !auth">连接设置</v-list-tile-title>
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
