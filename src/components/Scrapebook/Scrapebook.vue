<template>
  <Page>
    <ActionBar title="MyApp">
      <ActionItem @tap="onAddTap"
        ios.position="right"
        text="Add"
        android.position="actionBar" />
    </ActionBar>
    <ScrollView>
      <StackLayout>
        <Label :text="header"
          class="header" />
        <Image src="~/images/pyro-robots.png"
          class="hero" />
        <Label :text="footer"
          class="footer" />
        <StackLayout orientation="horizontal"
          horizontalAlignment="center">
          <Button text="About"
            @tap="goTo('About')"
            class="marginRight" />
          <Button text="Continue"
            class="marginLeft" />
        </StackLayout>
        <Picker :title="header" :add-to-scrap-book="addToScrapBook"></Picker>
      </StackLayout>
    </ScrollView>
  </Page>
</template>
<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import Picker from "./Picker.vue";
import Lib from "../Lib";
import {ISelction} from "./interfaces";

const meta = {
  components: {
    Picker
  }
};

@Component(meta)
export default class Scrapebook extends Lib {
  header: string = "ScrapeBook";
  footer: string = "Ruman©2018";

  addToScrapBook(selection: ISelction){
    console.log(JSON.stringify(selection));
  }
}
</script>

<style lang="scss" scoped>
.header {
  font-size: 32px;
  text-align: center;
}
.footer {
  font-size: 10px;
  text-align: center;
}
.marginRight {
  margin-right: 10px;
}
.marginLeft {
  margin-left: 10px;
}
</style>

