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
        <b-form @submit.prevent="register()" class="h65 bg-light mt5 justify-content-center">
            <div v-if="!haveLocation" id="map" class="row mx-3 h-100 position-relative">
                <div class="col-12 col-md-4">
                    <b-form-group label="business address">
                        <b-form-input v-model="address" placeholder="e.g., 12 Main St boise id" required></b-form-input>
                        <button @click="updateMap()" class="btn btn-dark">search</button>
                    </b-form-group>
                </div>
                <button @click="haveLocation = !haveLocation" id="confirm" class="btn btn-dark">confirm location</button>
            </div>
            <div v-else class="row mx-3 h-100 justify-content-between">
                <div class="col-12 col-md-4">
                    <b-form-group label="business name">
                        <b-form-input v-model="business.name" placeholder="e.g., XYZ Company" required></b-form-input>
                    </b-form-group>
                </div>
                <div class="col-12 col-md-4">
                    <b-form-group label="business pin" description="Your business's pin is used by other TimeKeepr users wishing to join your business as an employee. Only share this information with people you trust.">
                        <b-form-input v-model="business.pin" placeholder="e.g., 57204" type="number" required pattern=".{4,}" oninvalid="this.setCustomValidity('At least 4 numbers')" oninput="this.setCustomValidity('')"></b-form-input>
                    </b-form-group>
                </div>
                <button type="submit" class="btn btn-dark d-flex align-self-start">Register {{business.name}}</button>
            </div>
        </b-form>
    </div>
</template>
<script>
export default {
  name: "business-register",
  data() {
    return {
      haveLocation: false,
      address: "",
      business: {
        lat: 0,
        lng: 0,
        name: "",
        pin: "",
        managerId: ""
      }
    };
  },
  computed: {
      user() {
          return this.$store.state.user
      }
  },
  methods: {
    home() {
      this.$router.push({ path: "/" });
      this.haveLocation = false,
      this.address = "",
      this.business = {
        lat: 0,
        lng: 0,
        name: "",
        pin: ""
      }
    },
    updateMap() {
      let map = document.getElementById("map");
      let qStr = this.address.replace(/\s+/g, "+");
      fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${qStr}&key=AIzaSyCdGJdNjNuImKhNr3KciXIhqDAub2qUn9A`
      )
        .then(res => res.json())
        .then(res => {
          let coords = res.results[0].geometry.location;
          map.style.backgroundImage = `url("https://maps.googleapis.com/maps/api/staticmap?center=${
            coords.lat
          },${
            coords.lng
          }&zoom=17&size=1000x1000&sensor=false&key=AIzaSyCdGJdNjNuImKhNr3KciXIhqDAub2qUn9A")`;
          map.style.backgroundRepeat = "no-repeat";
          map.style.backgroundPosition = "center";
          map.style.backgroundSize = "cover";
          this.business.lat = coords.lat;
          this.business.lng = coords.lng;
          let wait = setTimeout(() => {
              document.getElementById("confirm").style.visibility = "visible"
          }, 2000);
        });
    },
    register() {
        if (!this.business.pin || !this.business.name) return
        this.business.managerId = this.user.id
        this.$store.dispatch('registerBusiness', this.business)
    }
  }
};
</script>
<style>
    #confirm {
        position: absolute;
        bottom: 2vh;
        right: 2vh;
        visibility: hidden;
    }
</style>