<template>
  <div>
    <div class="sub-head align-left">
      {{ details.title }}
    </div>
    <dl>
      <dt>Title</dt><dd>{{ details.title }}</dd>
      <dt>Magnitude</dt><dd>{{ details.mag }}</dd>
      <dt>Time</dt><dd>{{ moment(details.time).format("MMM DD, YYYY, hh:mm A") }}</dd>
      <dt>Status</dt><dd>{{ details.status }}</dd>
      <dt>Tsunami</dt><dd>{{ details.tsunami }}</dd>
      <dt>Type</dt><dd>{{ details.type }}</dd>
    </dl>
  </div>
</template>

<script lang="ts">
import {Component, Prop, Vue} from "vue-property-decorator";
@Component
export default class Detail extends Vue {
  /** 
   * Datasource from parent
   */
   @Prop() private details: any;
}
</script>
