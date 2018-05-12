<template>
  <Page class="page">
    <ActionBar class="action-bar" title="Counter">
      <NavigationButton text="Go Back" android.systemIcon="ic_menu_back" @tap="$router.push('/home')"/>
    </ActionBar>

    <StackLayout>
      <FlexboxLayout flexDirection="row" justifyContent="center">
        <Button @tap="decrement" text="-" class="btn btn-outline"/>
        <Label :text="message" alignSelf="baseline" class="h2"/>
        <Button @tap="increment" text="+" class="btn btn-outline"/>
      </FlexboxLayout>
        <Button @tap="doMagic" text="Do Some Magic"></Button>
      <Image v-if="surprise" src="~/images/NativeScript-Vue.png"/>
    </StackLayout>

  </Page>
</template>
<script lang="ts">
import Vue from 'vue'
import { mapActions } from 'vuex';
export default Vue.extend({
    computed: {
      message (): string {
        return this.$store.state.counter.count.toString();
      },
      surprise (): boolean {
        return (this.$store.state.counter.count >= 5);
      },
    },
    methods: {
      ...mapActions([
      'decrement',
      'increment',
      ]),
      doMagic(){
        console.log("💩💩💩💩💩💩💩💩💩")
      }
    },
    data: ()=>({
      hello: 'world'
    })
  })
</script>

