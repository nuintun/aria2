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
              <v-dialog v-model="auth" scrollable :width="600">
                <v-card>
                  <v-card-row>
                    <v-card-title>Aria2设置</v-card-title>
                  </v-card-row>
                  <v-card-row>
                    <v-card-text>
                      <v-text-field label="服务器地址" required dark autofocus></v-text-field>
                      <v-text-field label="服务器端口" required hint="Aria2默认端口：6800" dark></v-text-field>
                      <v-text-field label="RPC路径" required hint="Aria2默认RPC：/jsonrpc" dark></v-text-field>
                      <v-text-field label="服务器密码" type="password" dark></v-text-field>
                      <v-switch label="SSL/TLS 加密" primary v-model="ssl" dark></v-switch>
                      <small>带*为必填项</small>
                    </v-card-text>
                  </v-card-row>
                  <v-card-row actions>
                    <v-btn light info @click.native="dialog = false">保存</v-btn>
                    <v-btn light class="ml-2 grey darken-1" @click.native="dialog = false">取消</v-btn>
                  </v-card-row>
                </v-card>
              </v-dialog>
            </v-list-tile>
          </v-list-item>
          <v-list-item>
            <v-list-tile ripple>
              <v-list-tile-title>全局设置</v-list-tile-title>
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
      url: '127.0.0.1',
      port: 6800,
      auth: false,
      configure: false,
      drawer: true,
      ssl: false,
      items: [
        { title: '正在下载', icon: 'archive', count: 6 },
        { title: '已完成', icon: 'done_all', count: 8 },
        { title: '已删除', icon: 'delete', count: 10 }
      ],
      mini: false,
      right: null
    }
  }
}
</script>
