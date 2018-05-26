<template>
  <Page>
    <ScrollView>
      <StackLayout>
        <Button text="Home"
          @tap="goTo('Home')" />
        <Label textWrap="true"
          text="About Us" />
        <Label textWrap="true"
          text="Tekmo is a small online retailer..." />
        <Label textWrap="true"
          text="Our Mission" />
        <Label textWrap="true"
          :text="texts" />
      </StackLayout>
    </ScrollView>
  </Page>
</template>
<script lang="ts">
import Vue from "vue";
import Lib from "../Lib";
import { Component } from "vue-property-decorator";

@Component
export default class Home extends Lib {
  texts: string = `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis aliquid vero quaerat quis voluptatibus in, iusto provident error, similique aliquam blanditiis nesciunt rem quae fugit ipsam quia labore recusandae ut!
    Delectus error consectetur numquam? Animi, tempora sequi a, fuga velit optio facere explicabo, hic eos doloremque fugiat officia. Officiis, dolore molestiae incidunt cum vitae beatae facilis repudiandae sunt quia aliquam.
    Praesentium expedita doloremque dolores quis ea libero repudiandae omnis officiis qui accusantium molestiae dicta, ducimus eos perferendis architecto tenetur rerum! Laboriosam distinctio ipsam dolorem? Consequatur quod eveniet reprehenderit deserunt veniam.
    Blanditiis iusto nulla minus dolor eos aliquam delectus, error sint debitis ad necessitatibus illum alias nostrum nesciunt explicabo architecto esse! Nisi suscipit laudantium voluptas quos modi laborum, libero eveniet corrupti.
    Repellat ipsa labore recusandae pariatur nobis adipisci, deserunt eum consequatur similique illo veniam delectus deleniti tempora maiores dolores, ratione quod eveniet provident ipsum tempore, quo quasi totam nemo. Labore, quas!
    Vitae porro repudiandae accusantium impedit repellat quia, facere eius laboriosam praesentium nobis blanditiis fugit, ex rem sapiente accusamus laborum esse molestiae quisquam id cupiditate exercitationem. Nemo, vero neque! Quis, illum.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis aliquid vero quaerat quis voluptatibus in, iusto provident error, similique aliquam blanditiis nesciunt rem quae fugit ipsam quia labore recusandae ut!
    Delectus error consectetur numquam? Animi, tempora sequi a, fuga velit optio facere explicabo, hic eos doloremque fugiat officia. Officiis, dolore molestiae incidunt cum vitae beatae facilis repudiandae sunt quia aliquam.
    Praesentium expedita doloremque dolores quis ea libero repudiandae omnis officiis qui accusantium molestiae dicta, ducimus eos perferendis architecto tenetur rerum! Laboriosam distinctio ipsam dolorem? Consequatur quod eveniet reprehenderit deserunt veniam.
    Blanditiis iusto nulla minus dolor eos aliquam delectus, error sint debitis ad necessitatibus illum alias nostrum nesciunt explicabo architecto esse! Nisi suscipit laudantium voluptas quos modi laborum, libero eveniet corrupti.
    Repellat ipsa labore recusandae pariatur nobis adipisci, deserunt eum consequatur similique illo veniam delectus deleniti tempora maiores dolores, ratione quod eveniet provident ipsum tempore, quo quasi totam nemo. Labore, quas!
    Vitae porro repudiandae accusantium impedit repellat quia, facere eius laboriosam praesentium nobis blanditiis fugit, ex rem sapiente accusamus laborum esse molestiae quisquam id cupiditate exercitationem. Nemo, vero neque! Quis, illum.`;
}
</script>
