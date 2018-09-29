<template>
  <v-ons-page>
    <v-ons-toolbar :style="swipeTheme">
      <div class="center">Swiping Tab Bar</div>
    </v-ons-toolbar>

    <v-ons-tabbar
      swipeable
      position="top"
      :tabs="tabs"
      :on-swipe="onSwipe"
      :tabbar-style="swipeTheme"
    />
  </v-ons-page>
</template>

<script>
import Home from './pages/Home.vue';
import Forms from './pages/Forms.vue';
import Animations from './pages/Animations.vue';
// Just a linear interpolation formula
const lerp = (x0, x1, t) => parseInt((1 - t) * x0 + t * x1, 10);
// RGB colors
const red = [244, 67, 54];
const blue = [30, 136, 229];
const purple = [103, 58, 183];
export default {
  data () {
    return {
      colors: red,
      animationOptions: {},
      tabs: [
        {
          page: Home,
          label: 'Home',
          theme: red
        },
        {
          page: Forms,
          label: 'Forms',
          theme: blue
        },
        {
          page: Animations,
          label: 'Anim',
          theme: purple
        }
      ]
    };
  },
  computed: {
    swipeTheme() {
      return {
        backgroundColor: `rgb(${this.colors.join(',')})`,
        transition: `all ${this.animationOptions.duration || 0}s ${this.animationOptions.timing || ''}`
      }
    }
  },
  methods: {
    onSwipe(index, animationOptions) {
      // Apply the same transition as v-ons-tabbar
      this.animationOptions = animationOptions;
      // Interpolate colors
      const a = Math.floor(index), b = Math.ceil(index), ratio = index % 1;
      this.colors = this.colors.map((c, i) => lerp(this.tabs[a].theme[i], this.tabs[b].theme[i], ratio));
    }
  }
};
</script>