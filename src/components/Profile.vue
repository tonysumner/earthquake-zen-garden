<template>
  <div>
    <div class="sub-head">Profile</div>
    <div class="align-horiz-center justify-content-center flex-start">
      <div class="avatar-image-placeholder">
        <img :src=profile.avatarImage class="avatar-image" />
      </div>
      <dl id="profile-dl">
        <dt>First Name</dt>
        <dd>{{ profile.firstName }}</dd>
        <dt>Last Name</dt>
        <dd>{{ profile.lastName }}</dd>
        <dt>Phone</dt>
        <dd>{{ profile.phone }}</dd>
        <dt>Email</dt>
        <dd>{{ profile.email }}</dd>
        <dt>Bio</dt>
        <dd>{{ profile.bio }}</dd>
      </dl>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
@Component
export default class Profile extends Vue {
  /**
   * Datasource from parent
   */
  @Prop() private profile: any;
}
</script>
