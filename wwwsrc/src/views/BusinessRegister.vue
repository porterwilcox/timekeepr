<template>
    <div class="business-register container-fluid">
        <div class="row bg-dark text-white h25">
            <div class="col-10 d-flex justify-content-center align-items-center">
                <h1>Business Registration</h1>
            </div>
            <div class="col-2 d-flex justify-content-end align-items-center">
                <button @click="home()" class="btn btn-outline-light">cancel</button>
            </div>
        </div>
        <b-form id="map" class="h65 bg-light mt5 justify-content-center">
            <div class="row mx-3">
                <div class="col col-md-4">
                    <b-form-group label="business location">
                        <b-form-input placeholder="e.g., 12 Main St or XYZ Incs"></b-form-input>
                        <button @click="updateMap()" class="btn btn-outline-dark">search</button>
                    </b-form-group>
                </div>
                <div  class="col col-md-8 h65">
                </div>
            </div>
        </b-form>
    </div>
</template>
<script>
export default {
  name: "business-register",
  methods: {
      home() {
          this.$router.push({path: '/'})
      },
      updateMap() {
          
          let map = document.getElementById('map')
          map.style.backgroundImage = `url("https://maps.googleapis.com/maps/api/staticmap?center=43.61656,-116.200835&zoom=17&size=400x300&sensor=false&key=AIzaSyCdGJdNjNuImKhNr3KciXIhqDAub2qUn9A")`
          map.style.backgroundRepeat = "no-repeat"
          map.style.backgroundPosition = "center"
      }
  }
};
</script>
<style>
</style>