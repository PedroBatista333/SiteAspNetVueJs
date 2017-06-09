<template>
  <div id="app">
    <v-app id="example-3" class="elevation-1 " top-toolbar left-sidebar>
      <div class="content-screen">
        <v-toolbar class="grey darken-1">
          <v-toolbar-side-icon class="hidden-lg-and-up" @click.native.stop="sidebar4 = !sidebar4" />
          <v-toolbar-logo><v-icon style="font-size:1.2em;">ev_station</v-icon> Carros Elétricos</v-toolbar-logo>
        </v-toolbar>

        <video autoplay loop>
          <source src="/src/assets/videos/tesla.ogv" type="video/ogg">
        </video>

        <div class="work-title">
          <h1 class="white--text display-3">Atividades Práticas Supervisionadas</h1>
        </div>
      </div>
      <div class="content-screen">
        <main>
          <v-sidebar v-model="sidebar4" height="100vh">
            <v-list dense>
              <v-list-item v-for="(item,i) in sidebarItems" :key="i">

                <v-list-tile :href=item.href :router=item.router>
                  <v-list-tile-avatar>
                    <v-icon class="grey-text text--lighten-2">{{ item.avatar }}</v-icon>
                  </v-list-tile-avatar>
                  <v-list-tile-content>
                    <v-list-tile-title v-text="item.title" />
                  </v-list-tile-content>
                </v-list-tile>

              </v-list-item>
            </v-list>
          </v-sidebar>
          <v-content class="content-screen">
            <v-container>
              <router-view></router-view>
            </v-container>
          </v-content>
        </main>
      </div>
    </v-app>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      sidebarItems: [
        {
          href: "home",
          router: true,
          avatar: "home",
          title: "Início"
        },

        {
          href: "carroEletrico",
          router: true,
          avatar: "directions_car",
          title: "O Carro Elétrico"
        },
        {
          href: "motorEletricoCombustao",
          router: true,
          avatar: "ev_station",
          title: "Motor Elétrico e de Combustão"
        },
        {
          href: "tiposCarroEletrico",
          router: true,
          avatar: "airport_shuttle",
          title: "Tipos de Carros Elétricos"
        },
        {
          href: "poluicaoDosEletricos",
          router: true,
          avatar: "delete_forever",
          title: "Poluição dos Elétricos"
        },
        {
          href: "seraCarroEletricoAlternativa",
          router: true,
          avatar: "compare_arrows",
          title: "Uma real alternativa?"
        },
        {
          href: "referencias",
          router: true,
          avatar: "book",
          title: "Referências"
        }
      ]
    }
  }
}
</script>

<style>
nav {
  opacity: 0.7;
}
.toolbar__logo {
  margin:auto;
  -webkit-box-flex: none;
  flex:none;
  text-shadow: 1px 1px #000;
}
.work-title {
  display: -webkit-flex;
  display: flex;
  -webkit-align-items: center;
  align-items: center;
  -webkit-justify-content: center;
  justify-content: center;
  min-height: 90vh;
}
.work-title h1 {
  text-shadow: 2px 2px #666;
}
</style>