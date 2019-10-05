import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routes = [
  {
    path: '/list',
    text: 'list',
    icon: 'mdi-chip',
    component: () => import('@/views/List.vue')
  },
  {
    path: '/about',
    text: 'about',
    icon: 'mdi-circle-outline',
    component: () => import('@/views/About.vue')
  },
  {
    path: '',
    text: 'menu01',
    icon: 'mdi-nuke',
    model: false,
    component: () => import('@/views/menu01/Menu01Main.vue'),
    redirect: { name: 'menu01-sub01' },
    children: [
      {
        path: '/menu01/sub01',
        text: 'menu01-sub01',
        //icon: 'mdi-circle-outline',
        component: () => import('@/views/menu01/Menu01sub01.vue')
      },
      {
        path: '/menu01/sub02',
        text: 'menu01-sub02',
        //icon: 'mdi-circle-outline',
        component: () => import('@/views/menu01/Menu01sub02.vue')
      },
      {
        path: '/menu01/sub03',
        text: 'menu01-sub03',
        //icon: 'mdi-circle-outline',
        component: () => import('@/views/menu01/Menu01sub03.vue')
      },
    ]
  },
  {
    path: '',
    text: 'menu02',
    icon: 'mdi-nuke',
    model: false,
    component: () => import('@/views/menu02/Menu02Main.vue'),
    redirect: { name: 'menu02-sub01' },
    children: [
      {
        path: '/menu02/sub01',
        text: 'menu02-sub01',
        //icon: 'mdi-circle-outline',
        component: () => import('@/views/menu02/Menu02sub01.vue')
      },
      {
        path: '/menu02/sub02',
        text: 'menu02-sub02',
        //icon: 'mdi-circle-outline',
        component: () => import('@/views/menu02/Menu02sub02.vue')
      },
      {
        path: '/menu02/sub03',
        text: 'menu02-sub03',
        //icon: 'mdi-circle-outline',
        component: () => import('@/views/menu02/Menu02sub03.vue')
      },
    ]
  },
];


const router = new Router({
  mode: 'history',
  base: '/',
  routes: routes
});

export default router;