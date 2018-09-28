<template>
  <v-app>
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
      </v-list>
    </v-navigation-drawer>
    <v-toolbar 
      app
      :clipped-left="clipped"
    >
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-btn icon @click.stop="miniVariant = !miniVariant">
        <v-icon v-html="miniVariant ? 'chevron_right' : 'chevron_left'"></v-icon>
      </v-btn>
      <v-btn icon @click.stop="clipped = !clipped">
        <v-icon>web</v-icon>
      </v-btn>
      <!--v-btn icon @click.stop="fixed = !fixed">
        <v-icon>remove</v-icon>
      </v-btn-->
      <v-toolbar-title v-text="title"></v-toolbar-title>
      <v-spacer></v-spacer>

      <v-btn icon @click.stop="rightDrawer = !rightDrawer">
        <v-icon>menu</v-icon>
      </v-btn>
      
    </v-toolbar>
    <v-content>
    
        <!--v-tabs
          v-model="active"
          color="cyan"
          dark
          slider-color="yellow"
        >
          <v-tab
            v-for="n in 3"
            :key="n"
            ripple
          >
            Item {{ n }}
    
          </v-tab>
          <v-tab-item
            v-for="n in 3"
            :key="n"
          >
            <v-card flat>
              <v-card-text>{{ text }}</v-card-text>
            </v-card>
          </v-tab-item>
        </v-tabs>
    
        <div class="text-xs-center mt-3">
          <v-btn @click="next">next tab</v-btn>
        </div-->

        <v-card height="200px" flat>
          <div class="headline text-xs-center pa-5">
            Active: {{ bottomNav }}
          </div>
          <v-bottom-nav
            :active.sync="bottomNav"
            :value="true"
            absolute
            color="transparent"
          >
            <v-btn
              color="teal"
              flat
              value="home"
            >
              <span>Home</span>
              <v-icon>home</v-icon>
            </v-btn>

            <v-btn
              color="teal"
              flat
              value="favorites"
            >
              <span>Favorites</span>
              <v-icon>favorite</v-icon>
            </v-btn>

            <v-btn
              color="teal"
              flat
              value="nearby it"
            >
              <span>Nearby</span>
              <v-icon>place</v-icon>
            </v-btn>

            <v-btn
              color="teal"
              flat
              value="recent"
            >
              <span>Recent</span>
              <v-icon>history</v-icon>
            </v-btn>

            <v-btn
              color="teal"
              flat
              value="people"
            >
              <span>People</span>
              <v-icon>people</v-icon>
            </v-btn>
          </v-bottom-nav>
        </v-card>

      <!--router-view/-->
    </v-content>
    <v-navigation-drawer
      temporary
      :right="right"
      v-model="rightDrawer"
      fixed
      app
    >
      <v-list>
        <v-list-tile @click="right = !right">
        
          <!--v-list class="pa-0"> 
            <v-list-tile avatar>
              <v-list-tile-avatar>
                <img src="https://randomuser.me/api/portraits/men/85.jpg" />
              </v-list-tile-avatar>
              <v-list-tile-content>
                <v-list-tile-title>John Leider</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list-->

          <v-list-tile-action>
            <v-icon>compare_arrows</v-icon>
          </v-list-tile-action>
          <v-list-tile-title>Switch drawer (click me)</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <!--v-footer :fixed="fixed" app class="deep-purple">
      <span>&copy; 2018</span>
    </v-footer-->
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      clipped: true,
      drawer: false,
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
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
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