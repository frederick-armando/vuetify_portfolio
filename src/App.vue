<template>

<div id="app">

  <v-app id="inspire" :dark="goDark">

    <v-tabs 
      centered 
      icons-and-text
    >

      <v-tab>Home<v-icon>home</v-icon></v-tab>
      <v-tab>About<v-icon>favorite</v-icon></v-tab>
      <v-tab>Skills<v-icon>account_box</v-icon></v-tab>
      <v-tab>Works<v-icon>history</v-icon></v-tab>
      <v-tab>Mail<v-icon>place</v-icon></v-tab>

      <v-tabs-slider color="primary"></v-tabs-slider>

      <!--v-tab-item><v-card flat><v-card-text><router-view/></v-card-text></v-card></v-tab-item-->

      <v-tab-item v-scroll="onScroll"><v-card flat><v-card-text>
        <v-container fluid grid-list-md>
          <v-layout row wrap>
            <v-flex d-flex xs12 sm6 md4>
              <v-card color="purple" dark>
                <v-card-title primary class="title">Lorem</v-card-title>
                <v-card-text>{{ lorem }}</v-card-text>
              </v-card>
            </v-flex>
            <v-flex d-flex xs12 sm6 md3>
              <v-layout row wrap>
                <v-flex d-flex>
                  <v-card color="indigo" dark>
                    <v-card-text>{{ lorem.slice(0, 70) }}</v-card-text>
                  </v-card>
                </v-flex>
                <v-flex d-flex>
                  <v-layout row wrap>
                    <v-flex
                      v-for="n in 2"
                      :key="n"
                      d-flex
                      xs12
                    >
                      <v-card
                        color="red lighten-2"
                        dark
                      >
                        <v-card-text>{{ lorem.slice(0, 40) }}</v-card-text>
                      </v-card>
                    </v-flex>
                  </v-layout>
                </v-flex>
              </v-layout>
            </v-flex>
            <v-flex d-flex xs12 sm6 md2 child-flex>
              <v-card color="green lighten-2" dark>
                <v-card-text>{{ lorem.slice(0, 90) }}</v-card-text>
              </v-card>
            </v-flex>
            <v-flex d-flex xs12 sm6 md3>
              <v-card color="blue lighten-2" dark>
                <v-card-text>{{ lorem.slice(0, 50) }}</v-card-text>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card-text></v-card> </v-tab-item>

      <v-tab-item><v-card flat><v-card-text>
        <v-container fluid grid-list-md>
          <div class="m-div">
            <h2>{{titreb}}</h2>
            <p class="m-content">{{textb}}</p>
          </div>  
        </v-container>
      </v-card-text></v-card> </v-tab-item>

      <v-tab-item><v-card flat><v-card-text>
        <v-container fluid grid-list-md>
          <div class="m-div">
            <h2>{{titrec}}</h2>
            <p class="m-content m-bis">{{textc}}</p>
          </div>  
        </v-container>  
      </v-card-text></v-card> </v-tab-item>

      <v-tab-item><v-card flat><v-card-text>
        <v-container fluid grid-list-md>
          <div class="m-div">
            <h2>{{titred}}</h2>
            <p class="m-content">{{textd}}</p>
          </div>  
        </v-container>
      </v-card-text></v-card> </v-tab-item>

      <v-tab-item><v-card flat><v-card-text>
        <v-container fluid grid-list-md>
          <div class="m-div">
            <h2>{{titree}}</h2>
            <div class="m-flex">
              <p class="m-content">{{texte}}</p>
              <p class="m-content m-bis">{{texte}}</p>
            </div>
          </div>  
        </v-container>
      </v-card-text></v-card> </v-tab-item>

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

      <v-list>

        <v-tooltip right>
        <v-list-tile slot="activator" value="true" v-for="(item, i) in items" :key="i" href="#" target="_blank">
          
            <v-list-tile-action><v-icon v-html="item.icon" color="orange darken-2"></v-icon></v-list-tile-action>
            <v-list-tile-content><v-list-tile-title v-text="item.title7"></v-list-tile-title></v-list-tile-content> 
          
        </v-list-tile>
        <span>Ankama</span>
        </v-tooltip>

        <v-tooltip right>
        <v-list-tile slot="activator" value="true" v-for="(item, i) in items" :key="i" href="https://goo.gl/c1nMyj" target="_blank">
          
            <v-list-tile-action><v-icon v-html="item.icon" color="red darken-2"></v-icon></v-list-tile-action>
            <v-list-tile-content><v-list-tile-title v-text="item.title6"></v-list-tile-title></v-list-tile-content> 
          
        </v-list-tile>
        <span>Ebenup</span>
        </v-tooltip>
        
        <v-tooltip right>
        <v-list-tile slot="activator" value="true" v-for="(item, i) in items" :key="i" href="https://goo.gl/Jxcqe3" target="_blank">

          <v-list-tile-action><v-icon v-html="item.icon" color="grey darken-2"></v-icon></v-list-tile-action>
          <v-list-tile-content><v-list-tile-title v-text="item.title5"></v-list-tile-title></v-list-tile-content>

        </v-list-tile>
        <span>CND AR</span>
        </v-tooltip>

        <v-tooltip right>
        <v-list-tile slot="activator" value="true" v-for="(item, i) in items" :key="i" href="https://goo.gl/jpcwLd" target="_blank">

          <v-list-tile-action><v-icon v-html="item.icon" color="blue darken-2"></v-icon></v-list-tile-action>
          <v-list-tile-content><v-list-tile-title v-text="item.title4"></v-list-tile-title></v-list-tile-content>

        </v-list-tile>
        <span>Keluro</span>
        </v-tooltip>

        <v-tooltip right>
        <v-list-tile slot="activator"  value="true" v-for="(item, i) in items" :key="i" href="https://uxvr.fr/" target="_blank">

          <v-list-tile-action><v-icon v-html="item.icon" color="teal darken-2"></v-icon></v-list-tile-action>
          <v-list-tile-content><v-list-tile-title v-text="item.title3"></v-list-tile-title></v-list-tile-content>

        </v-list-tile>
        <span>UXVR.fr</span>
        </v-tooltip>

        <v-tooltip right>
        <v-list-tile slot="activator"  value="true" v-for="(item, i) in items" :key="i" href="https://goo.gl/sb8eNj" target="_blank">

          <v-list-tile-action><v-icon v-html="item.icon" color="green darken-2"></v-icon></v-list-tile-action>
          <v-list-tile-content><v-list-tile-title v-text="item.title2"></v-list-tile-title></v-list-tile-content>

        </v-list-tile>
        <span>Guide Var</span>
        </v-tooltip>

        <v-tooltip right>
        <v-list-tile slot="activator"  value="true" v-for="(item, i) in items" :key="i" href="http://asc.frederickarmando.com/" target="_blank">

          <v-list-tile-action><v-icon v-html="item.icon" color="pink darken-2"></v-icon></v-list-tile-action>
          <v-list-tile-content><v-list-tile-title v-text="item.title1"></v-list-tile-title></v-list-tile-content>

        </v-list-tile>
        <span>ASC Communication</span>
        </v-tooltip>

        <v-tooltip right>
        <v-list-tile slot="activator"  value="true" v-for="(item, i) in items" :key="i" href="http://d90.frederickarmando.com/" target="_blank">

          <v-list-tile-action><v-icon v-html="item.icon" color="orange darken-2"></v-icon></v-list-tile-action>
          <v-list-tile-content><v-list-tile-title v-text="item.title0"></v-list-tile-title></v-list-tile-content>

        </v-list-tile>
        <span>Domicile 90</span>
        </v-tooltip>

        <v-tooltip right>
        <v-list-tile slot="activator"  value="true" v-for="(item, i) in items" :key="i" href="http://virtua-media.fr/" target="_blank">

          <v-list-tile-action><v-icon v-html="item.icon" color="red darken-2"></v-icon></v-list-tile-action>
          <v-list-tile-content><v-list-tile-title v-text="item.title"></v-list-tile-title></v-list-tile-content>

        </v-list-tile>
        <span>Virtua Media</span>
        </v-tooltip>

        <!--v-tooltip right-->
        <v-list-tile value="true" v-for="(item, i) in items" :key="i">

          <v-list-tile-action><v-btn icon @click.stop="miniVariant = !miniVariant"><v-icon v-html="miniVariant ? 'chevron_right' : 'chevron_left'"></v-icon></v-btn></v-list-tile-action>
          <v-list-tile-content>{{back}}</v-list-tile-content>
          
        </v-list-tile>
        <!--span>Panel Toogle</span>
        </v-tooltip-->

      </v-list>

    </v-navigation-drawer>

    <v-toolbar 
      app
      :clipped-left="clipped"
    >
      <v-tooltip bottom>
        <v-toolbar-side-icon slot="activator" @click.stop="drawer = !drawer"></v-toolbar-side-icon>
        <span>Panel</span>
      </v-tooltip>

      <v-toolbar-title v-text="title"></v-toolbar-title>

      <v-spacer></v-spacer>

      <v-tooltip bottom>
        <v-btn slot="activator" icon @click="goDark = !goDark"><v-icon>invert_colors</v-icon></v-btn>
        <span>Color</span>
      </v-tooltip>

    </v-toolbar>

    <v-content></v-content>

  </v-app>

</div>

</template>

<script>
export default {
  data () {
    return {
      goDark: false,
      clipped: true,
      drawer: false, //settrue
      fixed: false,
      items: [{
        icon: 'bubble_chart',
        title7: 'Ankama',
        title6: 'Ebenup',
        title5: 'CND AR',
        title4: 'Keluro',
        title3: 'UXVR.fr',
        title2: 'Guide Var',
        title1: 'ASC Communication',
        title0: 'Domicile 90',
        title: 'Virtua Media'
      }],
      miniVariant: true,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js',
      active: null,
      lorem: `Lorem ipsum dolor sit amet, mel at clita quando. Te sit oratio vituperatoribus, nam ad ipsum posidonium mediocritatem, explicari dissentiunt cu mea. Repudiare disputationi vim in, mollis iriure nec cu, alienum argumentum ius ad. Pri eu justo aeque torquatos.`,
        titrea: 'Exemple 1',
      texta: '1 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        titreb: 'Exemple 2',
      textb: '2 Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 2 Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        titrec: 'Exemple 3',
      textc: '3 Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        titred: 'Exemple 4',
      textd: '4 Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 2 Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        titree: 'Exemple 5',
      texte: '5 Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      back: 'Close panel'
    }
  },
  name: 'App'
}
</script>

<style lang="scss" scoped>
  @import "assets/scss/index.scss"
</style>