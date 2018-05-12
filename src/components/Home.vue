<template>
  <Page @loaded="onLoaded">
    <GridLayout rows="auto, *"
      class="parent-grid">
      <StackLayout class="child-stack">
        <Label text="I am header"
          horizontalAlignment="center"
          margin="15" />
      </StackLayout>
      <GridLayout rows="*, *, *"
        row="1"
        class="child-grid">
        <ListView for="todo in todos" row=0>
          <v-template>
            <Label :text="todo.text" />
          </v-template>
        </ListView>
        <TextField row=1 v-model="newTodo.text" hint="Enter text..." @returnPress="addTodo(newTodo)"/>
        <Button row=2 @tap="getTodo(Math.ceil(Math.random()*100))">GET</Button>
      </GridLayout>
    </GridLayout>
  </Page>
</template>
<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import {State, Getter, Mutation, Action} from "vuex-class";

import {InterfaceTodo} from "../store/types"

@Component
export default class Home extends Vue {
  newTodo: {text: string, checked: boolean} = {text:"", checked: false};

  @State (state => state.mainState.todos) todos: InterfaceTodo[];

  @Getter completed: InterfaceTodo[];
  @Getter notCompleted: InterfaceTodo[];
  @Mutation addTodo: any;
  @Action getTodo: any;

  onLoaded(){
    console.log("I am aliveeeeee! 😍 ");
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
  color: #bada55
}
</style>


