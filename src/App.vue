<style lang="stylus">
  @import './stylus/main'
</style>

<template>
  <v-app>
    <v-navigation-drawer persistent :mini-variant="miniVariant" :clipped="clipped" v-model="drawer">
      <v-list>
        <v-list-item v-for="(item, i) in items" :key="i">
          <v-list-tile value="true">
            <v-list-tile-action>
              <v-icon light v-html="item.icon"></v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>{{item.title}} ({{item.count}})</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar>
      <v-toolbar-side-icon @click.native.stop="miniVariant = !miniVariant"></v-toolbar-side-icon>
      <v-toolbar-title v-text="title"></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon @click.native.stop="rightDrawer = !rightDrawer">
        <v-icon>settings</v-icon>
      </v-btn>
    </v-toolbar>
    <main>
      <v-container fluid>
        <v-slide-y-transition mode="out-in">
          <v-layout column align-center>
            <img src="/public/v.png" alt="Vuetify.js" class="mb-5" />
            <blockquote>
              <footer>
                <small>
                  <em>额，不知道说啥~</em>
                </small>
              </footer>
            </blockquote>
          </v-layout>
        </v-slide-y-transition>
      </v-container>
    </main>
    <v-navigation-drawer temporary :right="right" v-model="rightDrawer">
      <v-list>
        <v-list-item>
          <v-list-tile @click.native="right = !right">
            <v-list-tile-action>
              <v-icon light>compare_arrows</v-icon>
            </v-list-tile-action>
            <v-list-tile-title>Switch drawer (click me)</v-list-tile-title>
          </v-list-tile>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-footer :fixed="fixed">
      <span>&copy; 2017</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      clipped: true,
      drawer: true,
      fixed: true,
      items: [
        { icon: 'cloud_download', title: '正在下载', count: 3 },
        { icon: 'done_all', title: '已完成', count: 5 },
        { icon: 'delete', title: '已删除', count: 2 }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Aria2'
    }
  }
}
</script>
