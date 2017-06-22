import download from '../components/download.vue';
import done from '../components/done.vue';
import deleted from '../components/deleted.vue';

export default {
  routes: [
    {
      path: '/',
      name: 'index',
      redirect: { name: 'download' }
    },
    {
      path: '/download',
      name: 'download',
      component: download
    },
    {
      path: '/done',
      name: 'done',
      component: done
    },
    {
      path: '/deleted',
      name: 'deleted',
      component: deleted
    }
  ]
};
