import Vue from "vue";
import { Component } from "vue-property-decorator";

@Component
export default class Lib extends Vue {
  public goTo(link: string) {
    this.$navigateTo(require(`./${link}/${link}.vue`).default);
  }
}
