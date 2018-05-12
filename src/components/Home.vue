<template>
  <Page @loaded="onLoaded">
    <GridLayout rows="auto, *"
      class="parent-grid">
      <StackLayout class="child-stack">
        <Label text="I am header"
          horizontalAlignment="center"
          margin="15" />
      </StackLayout>
      <GridLayout rows="*"
        row="1"
        class="child-grid">
        <ListView for="item in Items">
          <v-template>
            <Label :text="item.title" />
          </v-template>
        </ListView>
      </GridLayout>
    </GridLayout>
  </Page>
</template>
<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
type item = { title: string; id: number };

@Component
export default class Home extends Vue {
  Items: item[] = [
    {
      title: "😍",
      id: 1
    },
    {
      title: "😍😍",
      id: 2
    },
    {
      title: "😍😍😍",
      id: 3
    },
    {
      title: "😍😍😍😍",
      id: 4
    }
  ];
  onLoaded(): void {
    console.log("It's loaded");
  }
}
</script>

<style lang="scss" scoped>
.parent-grid {
  background-color: #bada55;
}
.child-grid {
  background-color: #6e774d;
}
.child-stack {
  background-color: #34410d;
}
</style>


