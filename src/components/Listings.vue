<template>
  <div>
    <div class="sub-head">
      {{ listings.metadata.title }}
    </div>
    <table id="listings-table"> 
      <tr>
        <th @click="sort('place')">Title</th>
        <th @click="sort('mag')">Magnitude</th>
        <th @click="sort('time')">Time</th>
      </tr>
      <!--  th's being clickable not WCAG 2.0 AA compliant -->
      <!--  but behavior was specified in requirements -->
      <tr v-for="listing in listings.features" :key="listing.id">
        <td class="column-title">
          <a href="#" 
            @click="changeView(listing.id)">
              {{ listing.properties.place }}
          </a>
        </td>
        <td>{{ listing.properties.mag }}</td>
        <td>{{ moment(listing.properties.time).format("MMM DD, YYYY, hh:mm A") }}</td>
      </tr>
    </table>
  </div>
</template>

<script lang="ts">
import {Component, Prop, Vue} from "vue-property-decorator";
@Component
export default class Listings extends Vue {
  /**
   * datasource from parent
   */
  @Prop() private listings: any;
  
  /**
   * stores columns that have been sorted ASC
   */
  private sortedColumnsAsc: string[] = [];
 
  /** 
   * Emits back to parent
   * 1) to display details view
   * 2) selected listing ID
  */
  private changeView(listingId: string){
    this.$emit('displayView','details');
    this.$emit('displayListing', listingId);
  }

  /**
   *  param @property -- selected property to sort 
   *  > if asc oolumn name NOT in sortedColumnAsc[], 
   *    then sort array by column ASC, 
   *    and store property in sortedColumnsAsc[]
   *  > else 
   *    then sort array by column DESC, 
   *    and remove property from sortedColumnsAsc[]
   */
  private sort(property: string){
    let tempSortedArray: [any];
    
    if(!(this.sortedColumnsAsc.some((el)=>el === property))){ //sort asc
      tempSortedArray = this.listings.features.sort((a: any,b: any)=>
        (a.properties[property] < b.properties[property]) ? -1 :
          ((a.properties[property] > b.properties[property]) ? 1 : 0 ));
      // add sorted column ASC item
      this.sortedColumnsAsc.push(property);
    } else { //sort desc
      tempSortedArray = this.listings.features.sort((a: any,b: any)=>
        (b.properties[property] < a.properties[property]) ? -1 :
        ((b.properties[property] > a.properties[property]) ? 1 : 0 ));

      // remove sorted column ASC item
      let removeIdx = this.sortedColumnsAsc.findIndex((p)=> p === property);
      this.sortedColumnsAsc.splice(removeIdx, 1);    
    }

    this.listings.features = tempSortedArray;
  
  }

}
</script>