import { createRouter, createWebHistory } from "vue-router";
import SysInfo from '../views/sys-info/SysInfo.vue';

const routes = [
  {
    path: '/sysinfo',
    name: 'SysInfo',
    component: SysInfo
  },
  {
    path: '/teaselect',
    name: 'TeaSelect',
    component: () => import('../views/tea-select/TeaSelect.vue'),
  },
  {
    path: '/classqrytea',
    name: 'ClassQryTea',
    component: () => import('../views/class-qry-tea/ClassQryTea.vue'),
  },
  {
    path: '/teainfo',
    name: 'TeaInfo',
    component: () => import('../views/tea-info/TeaInfo.vue'),
  },
  {
    path: '/pmsg',
    name: 'PMsg',
    component: () => import('../views/pmsg/PMsg.vue'),
  },
  {
    path: '/ann',
    name: 'Ann',
    component: () => import('../views/ann/Ann.vue'),
  },
  {
    path: '/classhelp',
    name: 'ClassHelp',
    component: () => import('../views/class-help/ClassHelp.vue'),
  },
  {
    path: '/service',
    name: 'Service',
    component: () => import('../views/service/Service.vue'),
  },
  {
    path: '/stdinfo',
    name: 'StdInfo',
    component: () => import('../views/std-info/StdInfo.vue'),
  },
  {
    path: '/gclass',
    name: 'GClass',
    component: () => import('../views/gclass/GClass.vue'),
  },
  {
    path: '/grcourse',
    name: 'GrCourse',
    component: () => import('../views/grcourse/GrCourse.vue'),
  },
  {
    path: '/soc',
    name: 'Soc',
    component: () => import('../views/soc/Soc.vue'),
  },
  {
    path: '/idvsetup',
    name: 'IdvSetup',
    component: () => import('../views/idv-setup/IdvSetup.vue'),
  },
  {
    path: '/aiquesbank',
    name: 'AiQuesBank',
    component: () => import('../views/ai-ques-bank/AiQuesBank.vue'),
    redirect: { name: 'AiQuesBankIndex' },
    children: [
      {
        path: '',
        name: 'AiQuesBankIndex',
        component: () => import('../views/ai-ques-bank/AiQuesBankIndex.vue'),
      },
      {
        path: 'create',
        name: 'AiQuesBankCreate',
        component: () => import('../views/ai-ques-bank/AiQuesBankCreate.vue'),
      },
      {
        path: 'edit',
        name: 'AiQuesBankEdit',
        component: () => import('../views/ai-ques-bank/AiQuesBankEdit.vue'),
      }
    ],
  },
  {
    path: '/greet',
    name: 'Greet',
    component: () => import('../views/greet/Greet.vue'),
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
