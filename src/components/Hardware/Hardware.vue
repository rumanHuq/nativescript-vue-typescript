<template>
  <Page @loaded="getFile">
    <GridLayout rows="auto, auto" columns="*">
      <StackLayout row="0" col="0">
        <Button text="Scrapebook" @tap="goTo('Scrapebook')"/>
      </StackLayout>
      <StackLayout row="1" col="0">
        <Label :text="getTexts" textWrap="true"/>
      </StackLayout>
    </GridLayout>
  </Page>
</template>
<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import Lib from "../Lib";
import * as fileSystem from "tns-core-modules/file-system";

@Component
export default class Hardware extends Lib {
  sampleTexts="";

  /* READ FILE FROM DEVICE */
  async getFile(){
    const json = {
      name: "mara",
      title: "ruman's sexy love"
    };

    /**
     * create a arbitrary file. the getFile() will search for a given filename
     * if not found, it will create a file with given name
     *
    */
    const file = await fileSystem.knownFolders.documents().getFile("sample.txt");
    await file.writeText(JSON.stringify(json, null, 2), 'utf8');
    console.log(await fileSystem.knownFolders.documents().getEntities())
    this.sampleTexts = await file.readText();
  }

  get getTexts(){
    return this.sampleTexts;
  }
}
</script>

