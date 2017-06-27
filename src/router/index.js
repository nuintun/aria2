import download from '../components/Download.vue';
import done from '../components/Done.vue';
import deleted from '../components/Deleted.vue';

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
