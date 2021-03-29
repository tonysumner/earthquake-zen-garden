<template>
  <div id="app">
    <!-- Master page header -->
    <div id="header">
      <div 
          class="realtor-logo-placeholder">
        <img 
          :src=siteData.logoImage 
          alt="realtor.oom logo"  
          @click = "displayView('listings')"
          />
      </div>
      <div class="site-title">
        <h2>Earthquake Zen Garden</h2>
      </div>
      <a href="#"
        @click = "displayView('profile')"
        >Welcome, {{ profile.firstName }}
      </a>
    </div>
    <!-- Master page content -->
    <div class="content">
      <Profile v-if = "openedView === 'profile'"
        :profile = profile 
        @displayView = displayView
      />
      <Listings v-if = "openedView === 'listings'"
        :listings=listings
        @displayListing = displayListing
        @displayView = displayView
      /> 
      <Detail v-if= "openedView === 'details'"
        :details=details
        @displayView = displayView
      /> 
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Profile from "./components/Profile.vue";
import Listings from "./components/Listings.vue";
import Detail from "./components/Detail.vue";

@Component({
  components: {
   Profile,
   Detail, 
   Listings
  },
})
export default class App extends Vue {

  // btw, best practice would include crafting an interface
  // for the sitedata, profile, details and listing objects 
  // then assigning each variable to an specific interface
  // and not 'any'

  // JSON data retrieved from given file
  private JSONdata: any = this.$parent.$data;
  
  // App view data source retrieved from JSONData
  private siteData: any = this.JSONdata.site;
  
  // Profile view data source retrieved from JSONData
  private profile: any = this.JSONdata.profile;

  // Details view data source retrieved from JSONData
  private details = {};
  
  // Listings view data source retrieved from JSONData
  private listings: any = this.JSONdata.data;
   
  // view currently open
  // Default: listings
  private openedView = "listings";

  /**
   * display current view {profile, listings, detail}
   */
  private displayView(newView:string){
    this.openedView = newView;
  }

  /**
   * @paramId listingId > retrieved from Listings.vue when 
   *                      user clicks listing to view details
   * 
   * sets details dataSource with selected listingId
   */

  private displayListing(listingId:string){
    const selectedListing = this.listings.features.find(
      (listing: any) => listing.id === listingId);
      this.details = selectedListing.properties;
  }
}
</script>

<style lang="scss">
  // imports compiled sass file
  @import "./assets/sass/_manifest.scss";
</style>
