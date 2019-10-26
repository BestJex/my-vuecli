import Vue from 'vue'
import Router from 'vue-router'
import ainotelist from '@/components/ainotelist'
import index from '@/components/index'
import list from '@/components/list'
import editorlist from '@/components/editorlist'
import userlist from '@/components/userlist'
import markdownlist from '@/components/markdownlist'
import article from '@/components/article'
import detail from '@/components/detail'
import login from '@/components/login'
import regist from '@/components/regist'
import loginloglist from '@/components/loginloglist'
import logoutloglist from '@/components/logoutloglist'
import systemloglist from '@/components/systemloglist'
import markdown from '@/components/markdown'
import editor from '@/components/editor'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: '/index',
      component: index
    },
    {
      path: '/detail',
      name: 'detail',
      component: detail
    },
    {
      path: '/editorlist',
      name: 'editorlist',
      component: editorlist
    },
    {
      path: '/loginloglist',
      name: 'loginloglist',
      component: loginloglist
    },
    {
      path: '/logoutloglist',
      name: 'logoutloglist',
      component: logoutloglist
    },
    {
      path: '/ainotelist',
      name: 'ainotelist',
      component: ainotelist
    },
    {
      path: '/list',
      name: 'list',
      component: list
    },
    {
      path: '/markdown',
      name: 'markdown',
      component: markdown
    },
    {
      path: '/index',
      name: 'index',
      component: index
    },
    {
      path: '/userlist',
      name: 'userlist',
      component: userlist
    },
    {
      path: '/article',
      name: 'article',
      component: article
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/regist',
      name: 'regist',
      component: regist
    },
    {
      path: '/markdownlist',
      name: 'markdownlist',
      component: markdownlist
    },
    {
      path: '/systemloglist',
      name: 'systemloglist',
      component: systemloglist
    },
    {
      path: '/editor',
      name: 'editor',
      component: editor
    }

  ]
})
