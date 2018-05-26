<template>
  <StackLayout>
    <DatePicker @dateChange="onDateChange" />
    <ListPicker :items="gender"
      selectedIndex="1"
      @selectedIndexChange="selectedIndexChanged" />
  </StackLayout>
</template>
<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
import { DatePicker } from "tns-core-modules/ui/date-picker";

import { IeventData, ISelction } from "./interfaces";

@Component
export default class Picker extends Vue {
  @Prop({ type: String, default: "Pet" })
  title!: string;
  @Prop() addToScrapBook!: (selection: ISelction) => void;

  gender: string[] = ["male", "female", "others"];

  selection: ISelction = {
    title: this.title,
    gender: this.gender[1],
    age: 0
  };
  onDateChange(e: IeventData) {
    if (e.value instanceof Date) {
      const now = new Date();
      const age = now.getTime() - e.value.getTime();
      this.selection.age = new Date(age).getUTCFullYear() - 1970;
      this.addToScrapBook(this.selection);
    } else {
      alert("not a date");
      return false;
    }
  }
  selectedIndexChanged(e: IeventData) {
    if (typeof e.value === "number") {
      this.selection.gender = this.gender[e.value];
      this.addToScrapBook(this.selection);
    } else {
      alert(typeof e.value);
      return false;
    }
  }
}
</script>
