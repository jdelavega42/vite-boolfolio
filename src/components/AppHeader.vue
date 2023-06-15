<script>
 export default {
    name: 'AppHeader',
    data(){
        return {
            menuItems: [
                {
                    label: "Home",
                    routeName: "home"
                },
                {
                    label: "About us",
                    routeName: "about"
                },
                {
                    label: "Contact us",
                    routeName: "contact"
                }
            ]
        }
    }

 }
</script>
<template>
 <h2>Io sono Header</h2>
 <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item" v-for="">
          <a class="nav-link" href="#">Features</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
</template>