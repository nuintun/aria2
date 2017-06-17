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
              <v-dialog persistent v-model="auth" :width="600">
                <v-card>
                  <v-card-row>
                    <v-card-title>Aria2 设置</v-card-title>
                  </v-card-row>
                  <v-divider light></v-divider>
                  <v-card-row>
                    <v-card-text>
                      <v-text-field prepend-icon="dns" class="ml-2" label="服务器地址" required hint="Aria2 RPC 所在服务器的 IP 或域名（默认：127.0.0.1）" v-model="url" dark></v-text-field>
                      <v-text-field prepend-icon="link" class="ml-2" label="服务器端口" required hint="Aria2 端口（默认：6800）" v-model="port" dark></v-text-field>
                      <v-text-field prepend-icon="swap_calls" class="ml-2" label="RPC路径" required hint="Aria2 RPC 地址（默认：/jsonrpc）" v-model="rpc" dark></v-text-field>
                      <v-text-field prepend-icon="verified_user" class="ml-2" label="服务器密码" type="password" hint="Aria2 访问密码（默认为空）" v-model="password" dark></v-text-field>
                      <v-switch primary hide-details label="SSL/TLS 加密" v-model="ssl" class="mt-0 ml-2" dark></v-switch>
                      <small class="right">提示：带 * 为必填项</small>
                    </v-card-text>
                  </v-card-row>
                  <v-divider light></v-divider>
                  <v-card-row actions>
                    <v-btn light primary @click.native="auth = false">保存</v-btn>
                    <v-btn light secondary class="ml-2" @click.native="auth = false">取消</v-btn>
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
      url: '127.0.0.1',
      port: 6800,
      rpc: '/jsonrpc',
      password: '',
      ssl: false,
      mini: false,
      auth: false,
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
