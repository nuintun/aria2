<template>
  <v-dialog persistent v-model="open" :width="600">
    <v-card>
      <v-card-row>
        <v-card-title>Aria2 设置</v-card-title>
      </v-card-row>
      <v-divider light></v-divider>
      <v-card-row>
        <v-card-text>
          <v-text-field prepend-icon="dns" class="ml-2" label="服务器地址" required hint="Aria2 RPC 服务器的 IP或域名（默认：127.0.0.1）" v-model="url" dark></v-text-field>
          <v-text-field prepend-icon="link" class="ml-2" label="服务器端口" required hint="Aria2 RPC 服务端口（默认：6800）" v-model="port" dark></v-text-field>
          <v-text-field prepend-icon="swap_calls" class="ml-2" label="RPC路径" required hint="Aria2 RPC 服务路径（默认：/jsonrpc）" v-model="rpc" dark></v-text-field>
          <v-text-field prepend-icon="verified_user" class="ml-2" label="服务器密码" type="password" hint="Aria2 访问密码（默认为空）" v-model="password" dark></v-text-field>
          <v-switch primary hide-details label="SSL/TLS 加密" v-model="ssl" class="mt-0 ml-2" dark></v-switch>
          <small class="right">提示：带 * 为必填项</small>
        </v-card-text>
      </v-card-row>
      <v-divider light></v-divider>
      <v-card-row actions>
        <v-btn light primary @click.native="auth()">保存</v-btn>
        <v-btn light secondary class="ml-2" @click.native="close()">取消</v-btn>
      </v-card-row>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapState } from 'vuex';

export default {
  props: {
    open: {
      type: Boolean,
      required: true
    }
  },
  data() {
    var auth = this.$store.state.auth;

    return {
      url: auth.url,
      port: auth.port,
      rpc: auth.rpc,
      password: auth.password,
      ssl: auth.ssl
    };
  },
  methods: {
    close: function () {
      this.$emit('update:open', false);
    },
    auth: function () {
      this.close();
      this.$store.commit('auth', {
        url: this.url,
        port: this.port,
        rpc: this.rpc,
        password: this.password,
        ssl: this.ssl
      });
    }
  }
}
</script>

