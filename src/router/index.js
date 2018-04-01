import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/page/index'
import Headercom from '@/components/Headercom'
import Content from '@/components/content'
import Index02 from '@/page/index02'
import Index03 from '@/page/index03'
import Index04 from '@/page/index04'
import Index05 from '@/page/index05'
import Index06 from '@/page/index06'
import Index07 from '@/page/index07'
import Index08 from '@/page/index08'
import Index09 from '@/page/index09'
import Index10 from '@/page/index10'


Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [{
        path: '/',
        name: 'index',
        component: Index
    }, {
        path: '/',
        component: Content,
        children: [{
            path: 'index02',
            name: 'index02',
            component: Index02,

        }, {
            path: 'index03',
            name: 'index03',
            component: Index03
        }, {
            path: 'index04',
            name: 'index04',
            component: Index04
        }, {
            path: 'index05',
            name: 'index05',
            component: Index05
        }, {
            path: 'index06',
            name: 'index06',
            component: Index06
        }, {
            path: 'index07',
            name: 'index07',
            component: Index07
        }, {
            path: 'index08',
            name: 'index08',
            component: Index08
        }, {
            path: 'index09',
            name: 'index09',
            component: Index09
        }, {
            path: 'index10',
            name: 'index10',
            component: Index10
        }, ]
    }]
})

// export default router;