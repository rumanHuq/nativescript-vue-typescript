<template>
  <Page @loaded="onLoad">
    <GridLayout rows="auto,auto,*,*,*"
      columns="*,*"
      width="90%"
      height="600">
      <Button text="About"
        @tap="goTo('About')"
        row="0"
        col="0" />
      <Button text="Hardware"
        @tap="goTo('Hardware')"
        row="0"
        col="1" />
      <StackLayout row="1"
        col="0"
        colSpan="2"
        class="tile highlight">
        <StackLayout class="tile--title">
          <Label text="Super Marshmallow Man"
            textWrap="true" />
        </StackLayout>
        <StackLayout orientation="horizontal">
          <Image src="~/images/super-marshmallow-man" />
          <StackLayout>
            <Label textWrap="true"
              text="Escape from certain death
        in this wild adventure!" />
            <Label text="$34.99"
              class="price" />
          </StackLayout>
        </StackLayout>
      </StackLayout>
      <StackLayout class="tile"
        row="2"
        col="0">
        <Label class="tile--title"
          text="Couch Commander"
          textWrap="true" />
        <Image src="~/images/couch-commander"
          width="75"
          height="75"
          stretch="aspectFill" />
        <Label class="price"
          text="$24.99" />
      </StackLayout>

      <StackLayout class="tile"
        row="2"
        col="1">
        <Label class="tile--title"
          text="Mummy Madness"
          textWrap="true" />
        <Image src="~/images/mummy-madness"
          width="75"
          height="75"
          stretch="aspectFill" />
        <Label class="price"
          text="$32.99" />
      </StackLayout>

      <StackLayout class="tile"
        row="3"
        col="0">
        <Label class="tile--title"
          text="Pyro Robots"
          textWrap="true" />
        <Image src="~/images/pyro-robots"
          width="75"
          height="75"
          stretch="aspectFill" />
        <Label class="price"
          text="$19.99" />
      </StackLayout>

      <StackLayout class="tile"
        row="3"
        col="1">
        <Label class="tile--title"
          text="Rescue Pups"
          textWrap="true" />
        <Image src="~/images/rescue-pups"
          width="75"
          height="75"
          stretch="aspectFill" />
        <Label class="price"
          text="$9.99" />
      </StackLayout>

      <StackLayout class="tile"
        row="4"
        col="0"
        colSpan="2">
        <Label class="tile--title"
          text="Vampire Valkyrie"
          textWrap="true" />
        <Image src="~/images/vampire-valkyrie"
          width="75"
          height="75"
          stretch="aspectFill" />
        <Label class="price"
          text="$21.99" />
      </StackLayout>
    </GridLayout>
  </Page>
</template>

<script lang="ts">
import Vue from "vue";
import * as fileSys from "tns-core-modules/file-system";
import { Component } from "vue-property-decorator";
import Lib from "../Lib";

@Component
export default class Home extends Lib {
  onLoad() {
    const file = fileSys.knownFolders.documents();
    console.log("file");
  }
}
</script>

<style lang="scss" scoped>
Page {
  background: #efefef;
  .tile {
    background: #fff;
    margin: 2;
    &--title {
      background: rgb(162, 201, 171);
      font-size: 14;
      text-align: center;
      padding: 5;
    }
  }
  .price {
    text-align: right;
    color: #bada55;
    font-size: 18;
    padding: 5;
  }
  .highlight {
    image {
      height: 100;
      width: 100;
    }
  }
}
</style>


