<template>
  <div class="container mt-5">
    <form @submit.prevent="handleSubmit">
      <div class="mb-3">
        <label for="productName" class="form-label">Product Name</label>
        <input
          class="form-control"
          id="productName"
          aria-describedby="emailHelp"
          v-model="inputName"
        />
      </div>
      <div class="mb-3">
        <label for="ProductPrice" class="form-label">Product Price</label>
        <input class="form-control" id="ProductPrice" v-model="inputPrice" />
      </div>
      <div class="mb-3">
        <label for="ProductQuantity" class="form-label">Product Quantity</label>
        <input
          class="form-control"
          id="ProductQuantity"
          v-model="inputQuantity"
        />
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      inputName: '',
      inputQuantity: '',
      inputPrice: ''
    }
  },
  methods: {
    handleSubmit () {
      console.log(this.inputName, this.inputPrice, this.inputQuantity)
      this.inputName = ''
      this.inputQuantity = ''
      this.inputPrice = ''
    }
  }
}
</script>
