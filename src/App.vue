<template>
<div id="app">
  <v-app id="inspire" :dark="goDark">
    
    <v-tabs
        centered
        icons-and-text
      >
        <!--v-tab-item
          v-for="i in 3"
          :id="'tab-' + i"
          :key="i"
          align-end
        >
        
          <v-card>
            <v-card-text>{{ text }}</v-card-text>
          </v-card>

        </v-tab-item-->

        <v-tab-item
          v-for="i in 5"
          :id="'tab-' + i"
          :key="i"
          align-end
        >
        
          <v-card>
            <v-card-text><router-view/></v-card-text>
          </v-card>

        </v-tab-item>
        
        <v-tabs-slider color="primary"></v-tabs-slider>
    
        <v-tab href="#tab-1">
          Home
          <v-icon>home</v-icon>
        </v-tab>
    
        <v-tab href="#tab-2">
          About
          <v-icon>favorite</v-icon>
        </v-tab>
    
        <v-tab href="#tab-3">
          Skills
          <v-icon>account_box</v-icon>
        </v-tab>
    
        <v-tab href="#tab-4">
          Works
          <v-icon>history</v-icon>
        </v-tab>
    
        <v-tab href="#tab-5">
          Mail
          <v-icon>place</v-icon>
        </v-tab>
    
      </v-tabs>

    <v-navigation-drawer
      persistent
      :mini-variant="miniVariant"
      :clipped="clipped"
      v-model="drawer"
      enable-resize-watcher
      fixed
      app
    >
      <v-list >
        <v-list-tile
          value="true"
          v-for="(item, i) in items"
          :key="i"
        >
          <v-list-tile-action>
            <v-icon v-html="item.icon"></v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title"></v-list-tile-title>
          </v-list-tile-content>

        </v-list-tile>

        <v-list-tile
          value="true"
          v-for="(item, i) in items"
          :key="i"
        >
          <v-list-tile-action>
            <v-icon v-html="item.icon"></v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title"></v-list-tile-title>
          </v-list-tile-content>

        </v-list-tile>

        <v-list-tile
          value="true"
          v-for="(item, i) in items"
          :key="i"
        >

          <v-list-tile-action>
            <v-btn icon @click.stop="miniVariant = !miniVariant">
              <v-icon v-html="miniVariant ? 'chevron_right' : 'chevron_left'"></v-icon>
            </v-btn>
          </v-list-tile-action>
          
          <v-list-tile-content>
            {{ back }}
          </v-list-tile-content>
          
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
      <v-toolbar 
        app
        :clipped-left="clipped"
      >
        <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
        <!--v-btn icon @click.stop="miniVariant = !miniVariant">
          <v-icon v-html="miniVariant ? 'chevron_right' : 'chevron_left'"></v-icon>
        </v-btn>
        <v-btn icon @click.stop="clipped = !clipped">
          <v-icon>web</v-icon>
        </v-btn-->
        <!--v-btn icon @click.stop="fixed = !fixed">
          <v-icon>remove</v-icon>
        </v-btn-->
        <v-toolbar-title v-text="title"></v-toolbar-title>
        <v-spacer></v-spacer>

        <!--v-switch
            label="red"
            color="red"
            :label="`English`"
            v-model="goDark">
        </v-switch>

        <p>{{ people }}</p>
        <v-switch v-model="people" label="Langue" value="French = !English"></v-switch-->

        <!--select v-model="language" selected="A">
          <option value="A" selected disabled>Français</option>
          <option value="B">English</option>
        </select-->

        <v-btn icon @click="goDark = !goDark">
          <v-icon>invert_colors</v-icon>
        </v-btn>

      </v-toolbar>
    <v-content>

    </v-content>
  </v-app>
</div>
</template>

<script>
export default {
  data () {
    return {
      goDark: false,
      clipped: true,
      drawer: true,
      fixed: false,
      items: [{
        icon: 'bubble_chart',
        title: 'Inspire'
      }],
      miniVariant: true,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js',
      bottomNav: 'recent',
      active: null,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      back: 'Retour'
    }
  },
  methods: {
      next () {
        const active = parseInt(this.active)
        this.active = (active < 2 ? active + 1 : 0)
      }
    },
  name: 'App'
}
</script>

<style lang="scss" scoped>
  @import "assets/scss/index.scss"
</style>