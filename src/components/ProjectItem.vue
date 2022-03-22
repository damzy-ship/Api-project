<template>
<div class="wrapper mb-3">
      <div class="row">
        <div class="col-md-4 col-sm-12">
            <img
            class="project-image" v-bind:src="data.url" alt="project-image"/>
        </div>
        <div class="col content-box">
          <div class="top-text ms-5 mb-4">
            <h2 class="me-4 project-price">N{{data.price}}m</h2>
            <h5 class="or-more">or more</h5>
          </div>
          <div class="row">
            <div class="col-md-1 col-sm-12"></div>
            <div class="col-sm-12 col-md-10 ms-3">
              <p class="project-name">{{data.name}}</p>
              <div class="row">
                <div class="col-sm-12 col-md-3"></div>
                <div class="col">
                  <p class="project-content-light">
                    {{data.description}}
                  </p>
                </div>
              </div>
              <div class="row">
                <div class="col">
                  <p class="project-content-light mb-0">{{data.backers}} Backers</p>
                </div>
              </div>
              <div class="row">
                <div class="col-sm-12 col-md-6">
                  <p class="project-content-heavy">{{data.status}}</p>
                </div>
                <div class="col-sm-12 col-md-6" style="position: relative">
                  <p class="delivery-date">Estimated delivery: {{data['delivery-date']}}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="short-box-wrapper col ms-2">
        <div
          class=""
          style="height: 5px; width: 25px; background-color: black"
        ></div>
      </div>
      <div class="col" style="text-align: end">
        <div v-if="data['availability-stat']"  class="status-colored-div-green">
          <p class="available-stat">Featured</p>
        </div>
        <div v-if="!data['availability-stat']"  class="status-colored-div">
           <p class="available-stat">No more available</p>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  props: ['data']
}
</script>
