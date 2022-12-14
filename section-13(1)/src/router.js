import { createRouter, createWebHistory } from 'vue-router'

import TeamsList from './pages/TeamsList.vue';
import UsersList from './pages/UsersList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';
import NotFound from './pages/NotFound.vue';
import TeamsFooter from './pages/TeamsFooter.vue';
import UsersFooter from './pages/UsersFooter.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/teams'}, // URL will changed
    {
      name: 'teams',
      path: '/teams',
      meta: { needsAuth: true },
      components: {
        default: TeamsList,
        footer: TeamsFooter,
      },
      children: [
        { name: 'team-members', path: ':teamId', component: TeamMembers, props: true}, // /teams/t1
      ]
    }, // our-domain.com/teams => TeamsList // alias URL will not changed
    {
      path: '/users',
      components: {
        default: UsersList,
        footer: UsersFooter
      },
      beforeEnter(to, from, next) {
        console.log('users beforeEnter')
        console.log(to, from)
        next()
      }
    }, // our-domain.com/teams => UsersList
    { path: '/:notFound(.*)', component: NotFound}
  ],
  linkActiveClass: 'active',
  scrollBehavior(_, _2, savedPosition) {
    // console.log(to, from, savedPosition)
    if (savedPosition) {
      return savedPosition // click the go back button to last page
    }
    return { left:0 ,top:0}
  }
})

router.beforeEach(function(to, from, next) {
  console.log('Global beforeEach')
  console.log(to, from)
  if (to.meta.needsAuth) {
    console.log('Needs auth!')
    next()
  } else {
    next()
  }
  // next(false) // canceled to go to next page
  // if (to.name === 'team-members') {
  //   next()
  // } else {
  //   next({ name: 'team-members', params: { teamId: 't2'} })
  // }
  next()
})

router.afterEach(function(to, from) {
  // sending analytics data
  console.log('Global afterEach')
  console.log(to, from)
})

export default router