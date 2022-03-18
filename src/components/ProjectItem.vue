<template>
  <div class="project mt-3 mb-3">
    <div class="image-container"></div>
    <div class="text-content">
      <div class="text-content__container">
        <h2 class="project__price fw-bolder">N{{project.price}}m</h2>
        <div class="ms-5 inner-content-container">
          <p class="project__name fw-bold mt-4">
            {{project.name}}
          </p>
          <div class="project__description--box">
            <p class="project__description">
                {{project.description}}
            </p>
          </div>
          <p class="backers mt-4 mb-0">{{project.backers}} Backers</p>
          <div class="end_text">
            <p class="project__availability-quantity-status fw-bold">
              {{project.status}}
            </p>
            <p class="delivery-date">Estimated delivery: {{project['delivery-date']}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['project']
}
</script>
