(window.webpackJsonp = window.webpackJsonp || []).push([[0], {
  108: function(e, t, a) {
    'use strict'
    a.d(t, 'b', function() {
      return i
    }), a.d(t, 'c', function() {
      return c
    }), a.d(t, 'a', function() {
      return s
    })
    var n = a(173), r = a.n(n), o = a(174), i = function e (t) {
      var a = []
      return t.forEach(function(t) {
        a.push(t.path), t.children && (a = a.concat(e(t.children)))
      }), a
    }, c = function(e, t) {
      return e.filter(function(e) {
        return !!e && r()(e).test(t)
      })
    }, s = function(e) {
      var t = e.location.pathname, a = e.flatMenuKeys
      return Object(o.a)(t).map(function(e) {
        return c(a, e)[0]
      }).filter(function(e) {
        return e
      })
    }
  }, 135: function(e, t, a) {
    e.exports = {
      container: 'antd-pro-layouts-auth-layout-container',
      lang: 'antd-pro-layouts-auth-layout-lang',
      content: 'antd-pro-layouts-auth-layout-content',
      top: 'antd-pro-layouts-auth-layout-top',
      header: 'antd-pro-layouts-auth-layout-header',
      logo: 'antd-pro-layouts-auth-layout-logo',
      title: 'antd-pro-layouts-auth-layout-title',
      desc: 'antd-pro-layouts-auth-layout-desc'
    }
  }, 1352: function(e, t, a) {
    'use strict'
    a.r(t)
    for (var n, r, o = a(1), i = a.n(o), c = a(7), s = a.n(c), l = a(55), u = a(85), p = a(128), d = a(572), m = a(573), h = a.n(m), g = a(38), f = {
      count: 0,
      isIncrementing: !1,
      isDecrementing: !1
    }, b = {
      collapsed: !1,
      navTheme: 'dark',
      layout: 'sidemenu',
      contentWidth: 'Fluid',
      fixedHeader: !1,
      autoHideHeader: !1,
      fixSiderbar: !1
    }, v = {
      currentUser: { email: null },
      token: null,
      notices: [{
        id: '000000001',
        avatar: 'https://gw.alipayobjects.com/zos/rmsportal/ThXAXghbEsBCCSDihZxY.png',
        title: '\u4f60\u6536\u5230\u4e86 14 \u4efd\u65b0\u5468\u62a5',
        datetime: '2017-08-09',
        type: 'notification'
      }, {
        id: '000000002',
        avatar: 'https://gw.alipayobjects.com/zos/rmsportal/OKJXDXrmkNshAMvwtvhu.png',
        title: '\u4f60\u63a8\u8350\u7684 \u66f2\u59ae\u59ae \u5df2\u901a\u8fc7\u7b2c\u4e09\u8f6e\u9762\u8bd5',
        datetime: '2017-08-08',
        type: 'notification'
      }, {
        id: '000000003',
        avatar: 'https://gw.alipayobjects.com/zos/rmsportal/kISTdvpyTAhtGxpovNWd.png',
        title: '\u8fd9\u79cd\u6a21\u677f\u53ef\u4ee5\u533a\u5206\u591a\u79cd\u901a\u77e5\u7c7b\u578b',
        datetime: '2017-08-07',
        read: !0,
        type: 'notification'
      }, {
        id: '000000004',
        avatar: 'https://gw.alipayobjects.com/zos/rmsportal/GvqBnKhFgObvnSGkDsje.png',
        title: '\u5de6\u4fa7\u56fe\u6807\u7528\u4e8e\u533a\u5206\u4e0d\u540c\u7684\u7c7b\u578b',
        datetime: '2017-08-07',
        type: 'message'
      }, {
        id: '000000005',
        avatar: 'https://gw.alipayobjects.com/zos/rmsportal/ThXAXghbEsBCCSDihZxY.png',
        title: '\u5185\u5bb9\u4e0d\u8981\u8d85\u8fc7\u4e24\u884c\u5b57\uff0c\u8d85\u51fa\u65f6\u81ea\u52a8\u622a\u65ad',
        datetime: '2017-08-07',
        type: 'notification'
      }, {
        id: '000000006',
        avatar: 'https://gw.alipayobjects.com/zos/rmsportal/fcHMVNCjPOsbUGdEduuv.jpeg',
        title: '\u66f2\u4e3d\u4e3d \u8bc4\u8bba\u4e86\u4f60',
        description: '\u63cf\u8ff0\u4fe1\u606f\u63cf\u8ff0\u4fe1\u606f\u63cf\u8ff0\u4fe1\u606f',
        datetime: '2017-08-07',
        type: 'message',
        clickClose: !0
      }, {
        id: '000000007',
        avatar: 'https://gw.alipayobjects.com/zos/rmsportal/fcHMVNCjPOsbUGdEduuv.jpeg',
        title: '\u6731\u504f\u53f3 \u56de\u590d\u4e86\u4f60',
        description: '\u8fd9\u79cd\u6a21\u677f\u7528\u4e8e\u63d0\u9192\u8c01\u4e0e\u4f60\u53d1\u751f\u4e86\u4e92\u52a8\uff0c\u5de6\u4fa7\u653e\u300e\u8c01\u300f\u7684\u5934\u50cf',
        datetime: '2017-08-07',
        type: 'message',
        clickClose: !0
      }, {
        id: '000000008',
        avatar: 'https://gw.alipayobjects.com/zos/rmsportal/fcHMVNCjPOsbUGdEduuv.jpeg',
        title: '\u6807\u9898',
        description: '\u8fd9\u79cd\u6a21\u677f\u7528\u4e8e\u63d0\u9192\u8c01\u4e0e\u4f60\u53d1\u751f\u4e86\u4e92\u52a8\uff0c\u5de6\u4fa7\u653e\u300e\u8c01\u300f\u7684\u5934\u50cf',
        datetime: '2017-08-07',
        type: 'message',
        clickClose: !0
      }, {
        id: '000000009',
        title: '\u4efb\u52a1\u540d\u79f0',
        description: '\u4efb\u52a1\u9700\u8981\u5728 2017-01-12 20:00 \u524d\u542f\u52a8',
        extra: '\u672a\u5f00\u59cb',
        status: 'todo',
        type: 'event'
      }, {
        id: '000000010',
        title: '\u7b2c\u4e09\u65b9\u7d27\u6025\u4ee3\u7801\u53d8\u66f4',
        description: '\u51a0\u9716\u63d0\u4ea4\u4e8e 2017-01-06\uff0c\u9700\u5728 2017-01-07 \u524d\u5b8c\u6210\u4ee3\u7801\u53d8\u66f4\u4efb\u52a1',
        extra: '\u9a6c\u4e0a\u5230\u671f',
        status: 'urgent',
        type: 'event'
      }, {
        id: '000000011',
        title: '\u4fe1\u606f\u5b89\u5168\u8003\u8bd5',
        description: '\u6307\u6d3e\u7af9\u5c14\u4e8e 2017-01-09 \u524d\u5b8c\u6210\u66f4\u65b0\u5e76\u53d1\u5e03',
        extra: '\u5df2\u8017\u65f6 8 \u5929',
        status: 'doing',
        type: 'event'
      }, {
        id: '000000012',
        title: 'ishaan sharma ',
        description: '\u51a0\u9716\u63d0\u4ea4\u4e8e 2017-01-06\uff0c\u9700\u5728 2017-01-07 \u524d\u5b8c\u6210\u4ee3\u7801\u53d8\u66f4\u4efb\u52a1',
        extra: '\u8fdb\u884c\u4e2d',
        status: 'processing',
        type: 'notification'
      }],
      buttonLoading: !1,
      categories: ['Information Technology', 'Education', 'Finance', 'E-Commerce', 'Web Application', 'Cooperate', 'Personal', 'Medical']
    }, E = Object(p.c)({
      counter: function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : f
        switch ((arguments.length > 1 ? arguments[1] : void 0).type) {
          case'counter/INCREMENT_REQUESTED':
            return Object(g.a)({}, e, { isIncrementing: !0 })
          case'counter/INCREMENT':
            return Object(g.a)({}, e, { count: e.count + 1, isIncrementing: !e.isIncrementing })
          case'counter/DECREMENT_REQUESTED':
            return Object(g.a)({}, e, { isDecrementing: !0 })
          case'counter/DECREMENT':
            return Object(g.a)({}, e, { count: e.count - 1, isDecrementing: !e.isDecrementing })
          default:
            return e
        }
      }, theme: function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : b
        switch ((arguments.length > 1 ? arguments[1] : void 0).type) {
          case'TOGGLE_SIDEBAR_COLLAPSED':
            return Object(g.a)({}, e, { collapsed: !e.collapsed })
          default:
            return e
        }
      }, global: function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : v,
          t = arguments.length > 1 ? arguments[1] : void 0
        switch (t.type) {
          case'SET_CURRENT_USER':
            return Object(g.a)({}, e, { currentUser: t.user })
          case'LOGOUT':
            return Object(g.a)({}, e, { currentUser: {} })
          case'SHOW_BTN_LOADING':
            return Object(g.a)({}, e, { buttonLoading: !0 })
          case'HIDE_BTN_LOADING':
            return Object(g.a)({}, e, { buttonLoading: !1 })
          case'SET_AUTH_TOKEN':
            return Object(g.a)({}, e, { token: t.token })
          default:
            return e
        }
      }
    }), y = h()(), C = [d.a, Object(u.routerMiddleware)(y)], A = p.d.apply(void 0, [p.a.apply(void 0, C)].concat([])), w = Object(p.e)(Object(u.connectRouter)(y)(E), {}, A), j = a(17), O = a(16), x = a(20), k = a(19), S = a(21), W = a(1363), B = a(1364), N = a(1365), V = function(e) {
      function t (e) {
        return Object(j.a)(this, t), Object(x.a)(this, Object(k.a)(t).call(this, e))
      }

      return Object(S.a)(t, e), Object(O.a)(t, [{
        key: 'render', value: function() {
          return i.a.createElement('div', { className: 'asdf' }, i.a.createElement('h1', null, 'This is Dashboard here'), i.a.createElement('p', null, 'Did you get here via Redux?'))
        }
      }]), t
    }(o.Component), D = (a(630), a(601)), F = (a(285), a(180)), T = (a(101), a(39)), K = (a(1361), a(600)), Y = (a(95), a(10)), U = a(48), P = a.n(U), I = a(73), L = (a(288), a(146)), Q = (a(289), a(69)), H = a(127), q = (a(656), a(602)), R = (a(286), a(110)), M = a(2), z = a.n(M), G = a(60), J = a.n(G), Z = (a(660), a(149)), X = a(59), _ = a(173), $ = a.n(_), ee = a(174), te = function(e, t) {
      var a = e[t]
      return a || Object.keys(e).forEach(function(n) {
        $()(n).test(t) && (a = e[n])
      }), a || {}
    }, ae = (o.PureComponent, R.a.TabPane), ne = function(e) {
      function t () {
        var e, a
        Object(j.a)(this, t)
        for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++) r[o] = arguments[o]
        return (a = Object(x.a)(this, (e = Object(k.a)(t)).call.apply(e, [this].concat(r)))).onChange = function(e) {
          var t = a.props.onTabChange
          t && t(e)
        }, a
      }

      return Object(S.a)(t, e), Object(O.a)(t, [{
        key: 'render', value: function() {
          var e = this.props, t = e.title, a = e.logo, n = e.action, r = e.content, o = e.extraContent, c = e.tabList,
            s = e.className, l = e.tabActiveKey, u = e.tabDefaultActiveKey, p = e.tabBarExtraContent, d = e.loading,
            m = void 0 !== d && d, h = e.wide, g = void 0 !== h && h, f = (e.hiddenBreadcrumb, z()(J.a.pageHeader, s)),
            b = {}
          return void 0 !== u && (b.defaultActiveKey = u), void 0 !== l && (b.activeKey = l), i.a.createElement('div', { className: f }, i.a.createElement('div', { className: g ? J.a.wide : '' }, i.a.createElement(q.a, {
            loading: m,
            title: !1,
            active: !0,
            paragraph: { rows: 3 },
            avatar: { size: 'large', shape: 'circle' }
          }, i.a.createElement('div', { className: J.a.detail }, a && i.a.createElement('div', { className: J.a.logo }, a), i.a.createElement('div', { className: J.a.main }, i.a.createElement('div', { className: J.a.row }, t && i.a.createElement('h1', { className: J.a.title }, t), n && i.a.createElement('div', { className: J.a.action }, n)), i.a.createElement('div', { className: J.a.row }, r && i.a.createElement('div', { className: J.a.content }, r), o && i.a.createElement('div', { className: J.a.extraContent }, o)))), c && c.length ? i.a.createElement(R.a, Object.assign({ className: J.a.tabs }, b, {
            onChange: this.onChange,
            tabBarExtraContent: p
          }), c.map(function(e) {
            return i.a.createElement(ae, { tab: e.tab, key: e.key })
          })) : null)))
        }
      }]), t
    }(o.PureComponent), re = a(279), oe = a.n(re), ie = function(e) {
      function t () {
        return Object(j.a)(this, t), Object(x.a)(this, Object(k.a)(t).apply(this, arguments))
      }

      return Object(S.a)(t, e), Object(O.a)(t, [{
        key: 'render', value: function() {
          var e = this.props, t = e.contentWidth, a = e.children, n = ''.concat(oe.a.main)
          return 'Fixed' === t && (n = ''.concat(oe.a.main, ' ').concat(oe.a.wide)), i.a.createElement('div', { className: n }, a)
        }
      }]), t
    }(o.PureComponent), ce = Object(l.connect)(function(e) {
      return { contentWidth: e.theme.contentWidth }
    })(ie), se = a(575), le = a.n(se), ue = Object(o.createContext)(), pe = Object(l.connect)(function(e) {
      return { contentWidth: e.theme.contentWidth }
    })(function(e) {
      var t = e.children, a = e.contentWidth, n = e.wrapperClassName, r = e.top,
        o = Object(H.a)(e, ['children', 'contentWidth', 'wrapperClassName', 'top'])
      return i.a.createElement('div', {
        style: { margin: '-24px -24px 0' },
        className: n
      }, r, i.a.createElement(ue.Consumer, null, function(e) {
        return i.a.createElement(ne, Object.assign({
          wide: 'Fixed' === a,
          home: 'Home'
        }, e, { key: 'pageheader' }, o, {
          linkElement: W.a, itemRender: function(e) {
            return e.title
          }
        }))
      }), t ? i.a.createElement('div', { className: le.a.content }, i.a.createElement(ce, null, t)) : null)
    }), de = a(50), me = a.n(de), he = a(13), ge = a.n(he), fe = a(576), be = a.n(fe).a.create({ baseURL: 'http://portfolio.scizers.com' }), ve = new (function() {
      function e () {
        Object(j.a)(this, e), this.error = function(e) {
          try {
            401 === e.response.status && localStorage.clear()
          } catch (t) {
          }
        }
      }

      return Object(O.a)(e, [{
        key: 'deleteHeads', value: function(e) {
          var t = this
          return new Promise(function(a, n) {
            be.delete('/heads', { data: { _id: e } }, { headers: { Authorization: 'Bearer ' + localStorage.getItem('token') } }).then(function(e) {
              a(e.data)
            }).catch(function(e) {
              n(e), t.error(e)
            })
          })
        }
      }, {
        key: 'login', value: function(e) {
          var t = this
          return new Promise(function(a, n) {
            be.post('/login', e).then(function(e) {
              a(e.data)
            }).catch(function(e) {
              a({ error: !0, err: e }), t.error(e)
            })
          })
        }
      }, {
        key: 'addWebsite', value: function(e) {
          var t = this
          return new Promise(function(a) {
            be.post('/website', { data: e }).then(function(e) {
              a(e.data)
            }).catch(function(e) {
              a({ error: !0, err: e }), t.error(e)
            })
          })
        }
      }, {
        key: 'getWebsites', value: function(e) {
          var t = this
          return new Promise(function(a) {
            be.post('/websites', Object(g.a)({}, e)).then(function(e) {
              a(e.data)
            }).catch(function(e) {
              a({ error: !0, err: e }), t.error(e)
            })
          })
        }
      }, {
        key: 'getWebsite', value: function(e) {
          var t = this
          return new Promise(function(a) {
            be.get('/website/'.concat(e)).then(function(e) {
              a(e.data)
            }).catch(function(e) {
              a({ error: !0, err: e }), t.error(e)
            })
          })
        }
      }, {
        key: 'editWebsiteScreens', value: function(e) {
          var t = this, a = e.slug, n = e.data
          return new Promise(function(e) {
            be.put('/website/'.concat(a), n).then(function(t) {
              e(t.data)
            }).catch(function(a) {
              e({ error: !0, err: a }), t.error(a)
            })
          })
        }
      }, {
        key: 'toggleWebsiteEnabled', value: function(e) {
          var t = this, a = e.urlSlug
          return new Promise(function(e) {
            be.get('/website/'.concat(a, '/toggle')).then(function(t) {
              e()
            }).catch(function(a) {
              e({ error: !0, err: a }), t.error(a)
            })
          })
        }
      }, {
        key: 'deleteWebsite', value: function(e) {
          var t = this, a = e.urlSlug
          return new Promise(function(e) {
            be.delete('/website/'.concat(a)).then(function(t) {
              e(t.data)
            }).catch(function(a) {
              e({ error: !0, err: a }), t.error(a)
            })
          })
        }
      }, {
        key: 'undoDeleteWebsite', value: function(e) {
          var t = this, a = e.urlSlug
          return new Promise(function(e) {
            be.patch('/website/'.concat(a)).then(function(t) {
              e(t.data)
            }).catch(function(a) {
              e({ error: !0, err: a }), t.error(a)
            })
          })
        }
      }]), e
    }()), Ee = function() {
      return { type: 'SHOW_BTN_LOADING' }
    }, ye = function() {
      return { type: 'HIDE_BTN_LOADING' }
    }, Ce = Q.a.Item, Ae = [{ label: 'Desktop', limit: 1, name: 'desktop', ext: 'jpg' }, {
      label: 'Desktop Full',
      limit: 1,
      name: 'desktop-full',
      ext: 'jpg'
    }, { label: 'iPad', limit: 1, name: 'ipad', ext: 'jpg' }, {
      label: 'iPad Full',
      limit: 1,
      name: 'ipad-full',
      ext: 'jpg'
    }, { label: 'iPhone', limit: 1, name: 'iphone', ext: 'jpg' }, {
      label: 'iPhone Full',
      limit: 1,
      name: 'iphone-full',
      ext: 'jpg'
    }, { label: 'Logo Feature', limit: 1, name: 'logoFeature', ext: 'jpg' }, {
      label: 'Main Feature',
      limit: 1,
      name: 'mainFeature',
      ext: 'png'
    }], we = Q.a.create()(n = function(e) {
      function t (e) {
        var a
        return Object(j.a)(this, t), (a = Object(x.a)(this, Object(k.a)(t).call(this, e))).defaultError = function() {
          L.a.error({ message: 'Error', description: 'Unable to get data' })
        }, a.handleCancel = function() {
          return a.setState({ previewVisible: !1 })
        }, a.handlePreview = function(e) {
          a.setState({ previewImage: e.url || e.thumbUrl, previewVisible: !0 })
        }, a.setFormValues = function() {
          var e = Object(I.a)(P.a.mark(function e (t) {
            var n, r, o, i, c, s
            return P.a.wrap(function(e) {
              for (; ;) switch (e.prev = e.next) {
                case 0:
                  return e.next = 2, ve.getWebsite(t)
                case 2:
                  n = e.sent, r = n.data, o = n.websiteUrl, a.setState({ websiteUrl: o }), r ? (i = [], c = r.extraUrlsCount, r.customImages || (c = r.extraUrls.length), me.a.times(c, function(e) {
                    var t = e + 1
                    i.push({
                      uid: t,
                      name: ''.concat(r.urlSlug, '-extras-').concat(t, '.jpg'),
                      status: 'done',
                      url: ''.concat(o, '/screenshots/').concat(r.urlSlug, '-extras-').concat(t, '.jpg')
                    })
                  }), s = {}, me.a.each(Ae, function(e) {
                    s[e.name] = [{
                      uid: e.name,
                      name: ''.concat(r.urlSlug, '-').concat(e.name),
                      status: 'done',
                      url: ''.concat(o, '/screenshots/').concat(r.urlSlug, '-').concat(e.name, '.').concat(e.ext)
                    }]
                  }), a.props.form.setFields  Value(Object(g.a)({ extraUrls: i }, s)), a.setState({ allFormData: Object(g.a)({ extraUrls: i }, s) })) : a.defaultError()
                case 7:
                case'end':
                  return e.stop()
              }
            }, e, this)
          }))
          return function(t) {
            return e.apply(this, arguments)
          }
        }(), a.uploadFileHandler = function(e, t) {
          if (console.log(e, t), Array.isArray(e)) return e
          var n = a.state.allFormData
          return n[t] = e.fileList, a.setState({ allFormData: n }), e && e.fileList
        }, a.handleSubmit = function() {
          var e = Object(I.a)(P.a.mark(function e (t) {
            var n, r, o
            return P.a.wrap(function(e) {
              for (; ;) switch (e.prev = e.next) {
                case 0:
                  n = a.props, n.dispatch, r = n.form, o = a.state.slug, t.preventDefault(), r.validateFieldsAndScroll(function() {
                    var e = Object(I.a)(P.a.mark(function e (t, a) {
                      var n
                      return P.a.wrap(function(e) {
                        for (; ;) switch (e.prev = e.next) {
                          case 0:
                            if (t) {
                              e.next = 6
                              break
                            }
                            return me.a.each(a, function(e, t) {
                              me.a.each(e, function(e) {
                                delete e.thumbUrl
                              })
                            }), e.next = 4, ve.editWebsiteScreens({ slug: o, data: a })
                          case 4:
                            n = e.sent, console.log(n)
                          case 6:
                          case'end':
                            return e.stop()
                        }
                      }, e, this)
                    }))
                    return function(t, a) {
                      return e.apply(this, arguments)
                    }
                  }())
                case 4:
                case'end':
                  return e.stop()
              }
            }, e, this)
          }))
          return function(t) {
            return e.apply(this, arguments)
          }
        }(), a.state = { previewVisible: !1, previewImage: '', websiteUrl: '', extraUrls: [], allFormData: {} }, a
      }

      return Object(S.a)(t, e), Object(O.a)(t, [{
        key: 'componentDidMount', value: function() {
          var e = new URLSearchParams(this.props.search).get('slug')
          e ? (this.setFormValues(e), this.setState({ slug: e })) : this.defaultError()
        }
      }, {
        key: 'render', value: function() {
          var e = this, t = this.props, a = t.form.getFieldDecorator, n = t.token, r = this.state, o = r.previewVisible,
            c = r.previewImage, s = r.websiteUrl, l = r.allFormData, u = {
              labelCol: { xs: { span: 24 }, sm: { span: 8 }, md: { span: 8 } },
              wrapperCol: { xs: { span: 24 }, sm: { span: 16 }, md: { span: 12 } }
            }, p = function(t, r, o, c) {
              return o || (o = 1), i.a.createElement(Ce, Object.assign({}, u, { label: ''.concat(r, ' (').concat(c, ')') }), a(t, {
                valuePropName: 'fileList',
                getValueFromEvent: function(a) {
                  return console.log('are you here sir '), e.uploadFileHandler(a, t)
                }
              })(i.a.createElement(K.a, {
                accept: 'jpg' === c ? 'image/jpeg' : 'image/png',
                name: 'file',
                headers: { Authorization: 'Bearer '.concat(n) },
                action: ''.concat(s, '/filesUploader'),
                listType: 'picture-card',
                onPreview: e.handlePreview
              }, void 0 !== l[t] && l[t].length < o ? i.a.createElement('div', null, i.a.createElement(Y.a, { type: 'plus' }), i.a.createElement('div', { className: 'ant-upload-text' }, 'Upload')) : null)))
            }
          return i.a.createElement(pe, {
            title: 'Add New Website',
            content: 'This is some descopt '
          }, i.a.createElement(F.a, { bordered: !0 }, i.a.createElement(Q.a, {
            onSubmit: this.handleSubmit,
            hideRequiredMark: !0,
            style: { marginTop: 8 }
          }, Ae.map(function(e, t) {
            return i.a.createElement(i.a.Fragment, { key: t }, p(e.name, e.label, e.limit, e.ext))
          }), p('extraUrls', 'Extra Urls Screenshots', 5, 'jpg'), i.a.createElement(Ce, Object.assign({}, {
            wrapperCol: {
              xs: {
                span: 24,
                offset: 0
              }, sm: { span: 10, offset: 7 }, md: { span: 12, offset: 8 }
            }
          }, { style: { marginTop: 32 } }), i.a.createElement(T.a, {
            type: 'primary',
            htmlType: 'submit',
            loading: this.props.loading
          }, 'Submit')))), i.a.createElement(D.a, {
            width: 800,
            visible: o,
            footer: null,
            onCancel: this.handleCancel
          }, i.a.createElement('img', {
            alt: 'example',
            style: { display: 'inline-block', margin: '0 auto', maxWidth: '100%' },
            src: c
          })))
        }
      }]), t
    }(o.PureComponent)) || n, je = Object(l.connect)(function(e) {
      var t = e.global, a = e.router
      return { loading: t.buttonLoading, token: t.token, search: a.location.search }
    }, function(e) {
      return { dispatch: e }
    })(we), Oe = (a(1362), a(598)), xe = (a(116), a(78)), ke = (a(320), a(87)), Se = a(388), We = a(578), Be = a.n(We), Ne = (a(909), a(579)), Ve = Q.a.Item, De = ke.a.Option, Fe = [], Te = 10; Te < 36; Te++) Fe.push(i.a.createElement(De, { key: Te.toString(36) + Te }, Te.toString(36) + Te))
    var Ke = Q.a.create()(r = function(e) {
        function t (e) {
          var a
          return Object(j.a)(this, t), (a = Object(x.a)(this, Object(k.a)(t).call(this, e))).handleSubmit = function(e) {
            var t = a.props, n = t.dispatch, r = t.form
            e.preventDefault(), r.validateFieldsAndScroll(function() {
              var e = Object(I.a)(P.a.mark(function e (t, a) {
                var r, o
                return P.a.wrap(function(e) {
                  for (; ;) switch (e.prev = e.next) {
                    case 0:
                      if (t) {
                        e.next = 9
                        break
                      }
                      return r = me.a.clone(a), me.a.each(r, function(e, t) {
                        'baseColor' !== t && 'logoBgColor' !== t || (r[t] = e.hex)
                      }), n(Ee()), e.next = 6, ve.addWebsite(r)
                    case 6:
                      o = e.sent, n(ye()), o.error ? Ne.notification.error({
                        message: 'Error Saving',
                        description: o.message
                      }) : console.log(o)
                    case 9:
                    case'end':
                      return e.stop()
                  }
                }, e, this)
              }))
              return function(t, a) {
                return e.apply(this, arguments)
              }
            }())
          }, a.setFormValues = function() {
            var e = Object(I.a)(P.a.mark(function e (t) {
              var n, r, o
              return P.a.wrap(function(e) {
                for (; ;) switch (e.prev = e.next) {
                  case 0:
                    return e.next = 2, ve.getWebsite(t)
                  case 2:
                    n = e.sent, r = n.data, a.setState({ extraFeilds: r.extraUrls.length }), o = {
                      url: r.url,
                      category: r.category,
                      tags: r.tags,
                      description: r.description,
                      baseColor: r.baseColor,
                      logoBgColor: r.logoBgColor,
                      logoUrl: r.logoUrl,
                      projectDate: ge()(r.projectDate)
                    }, me.a.each(r.extraUrls, function(e, t) {
                      o['extraUrl-'.concat(t)] = e
                    }), a.props.form.setFieldsValue(o)
                  case 8:
                  case'end':
                    return e.stop()
                }
              }, e, this)
            }))
            return function(t) {
              return e.apply(this, arguments)
            }
          }(), a.state = {
            editorState: '<div \n                        \n                        \n                        <h1>Bulb fox</h1>\n                        <h5>The client</h5>\n                        <p>We focus on creating highly intuitive, usable and impactful digital products and services. Ideas is seamlessly integrated into our design process to produce the most effective, elegant and engaging work.</p>\n                        <h5>The objective</h5>\n                        <p>Ideas is seamlessly integrated into our design process to produce the most effective, elegant and engaging work.</p>\n                        <h5>The solution</h5>\n                        <p>We reimagined deas is seamlessly integrated into our design process to produce the most effective, elegant and engaging work.By using a combination of sketching, 3-D modeling, rapid prototyping, user testing and analytics analysis, we\u2019re able to continuously grow and improve upon a given product. We focus most effective, elegant and engaging work on creating highly intuitive, usable and impactful digital products and services.</p>\n                        \n                        \n                        \n                        \n                        \n                        \n                        \n                    </div>',
            extraFeilds: 2
          }, a
        }

        return Object(S.a)(t, e), Object(O.a)(t, [{
          key: 'componentDidMount', value: function() {
            var e = new URLSearchParams(this.props.search).get('slug')
            e && this.setFormValues(e)
          }
        }, {
          key: 'render', value: function() {
            var e = this, t = (this.props.submitting, this.props.form), a = t.getFieldDecorator,
              n = (t.getFieldValue, this.state.editorState, {
                labelCol: {
                  xs: { span: 24 },
                  sm: { span: 8 },
                  md: { span: 8 }
                }, wrapperCol: { xs: { span: 24 }, sm: { span: 16 }, md: { span: 12 } }
              }), r = {
                wrapperCol: {
                  xs: { span: 24, offset: 0 },
                  sm: { span: 10, offset: 7 },
                  md: { span: 12, offset: 8 }
                }
              }
            return i.a.createElement(pe, {
              title: 'Add New Website',
              content: 'This is some descopt '
            }, i.a.createElement(F.a, { bordered: !0 }, i.a.createElement(Q.a, {
              onSubmit: this.handleSubmit,
              hideRequiredMark: !0,
              style: { marginTop: 8 }
            }, i.a.createElement(Ve, Object.assign({}, n, { label: 'URL' }), a('url', {
              rules: [{
                required: !0,
                message: 'website url is required'
              }]
            })(i.a.createElement(xe.a, { placeholder: 'https://example.com' }))), i.a.createElement(Ve, Object.assign({}, n, { label: 'Category' }), a('category', {
              rules: [{
                required: !0,
                message: 'Category is required'
              }]
            })(i.a.createElement(ke.a, {
              mode: 'multiple',
              style: { width: '100%' },
              placeholder: 'Please select'
            }, this.props.categories.map(function(e, t) {
              return i.a.createElement(De, { key: e }, e)
            })))), i.a.createElement(Ve, Object.assign({}, n, { label: 'Tags' }), a('tags')(i.a.createElement(ke.a, {
              mode: 'tags',
              style: { width: '100%' },
              placeholder: 'Please select'
            }, Fe))), i.a.createElement(Ve, Object.assign({}, n, { label: 'Description' }), a('description', {
              initialValue: this.state.editorState,
              valuePropName: 'value',
              getValueFromEvent: this.onChange
            })(i.a.createElement(Be.a, null))), i.a.createElement(Ve, Object.assign({}, n, { label: 'Website Primary Color' }), a('baseColor', {
              valuePropName: 'color',
              trigger: 'onChange'
            })(i.a.createElement(Se.ChromePicker, null))), i.a.createElement(Ve, Object.assign({}, n, { label: 'Logo BG Color' }), a('logoBgColor', {
              initialValue: '#ff00FF',
              valuePropName: 'color',
              trigger: 'onChange'
            })(i.a.createElement(Se.ChromePicker, null))), i.a.createElement(Ve, Object.assign({}, n, { label: 'Logo Url' }), a('logoUrl')(i.a.createElement(xe.a, null))), me.a.times(this.state.extraFeilds, function(e) {
              return i.a.createElement(Ve, Object.assign({}, n, {
                key: e,
                label: 'Extra Urls '.concat(e + 1)
              }), a('extraUrl-'.concat(e))(i.a.createElement(xe.a, null)))
            }), i.a.createElement(Q.a.Item, r, i.a.createElement(T.a, {
              type: 'dashed', onClick: function() {
                e.setState({ extraFeilds: e.state.extraFeilds + 1 })
              }, style: { width: '100%' }
            }, i.a.createElement(Y.a, { type: 'plus' }), ' Add Extra Urls')), i.a.createElement(Ve, Object.assign({}, n, { label: 'Project Date (Approx)' }), a('projectDate')(i.a.createElement(Oe.a, null))), i.a.createElement(Ve, Object.assign({}, r, { style: { marginTop: 32 } }), i.a.createElement(T.a, {
              type: 'primary',
              htmlType: 'submit',
              loading: this.props.loading
            }, 'Submit')))))
          }
        }]), t
      }(o.PureComponent)) || r, Ye = Object(l.connect)(function(e) {
        var t = e.global, a = e.router
        return { loading: t.buttonLoading, categories: t.categories, search: a.location.search }
      }, function(e) {
        return { dispatch: e }
      })(Ke), Ue = (a(1359), a(599)), Pe = (a(287), a(132)), Ie = (a(1199), a(588)), Le = a(390), Qe = a.n(Le),
      He = a(587), qe = a.n(He), Re = a(217), Me = a.n(Re), ze = a(179), Ge = a(188), Je = a.n(Ge), Ze = function(e) {
        function t (e) {
          var a
          return Object(j.a)(this, t), (a = Object(x.a)(this, Object(k.a)(t).call(this, e))).state = {
            data: [],
            pagination: {},
            loading: !1,
            searchText: '',
            dataSearchParams: {}
          }, a.handleTableChange = function(e, t, n) {
            var r = Object(g.a)({}, a.state.pagination)
            r.current = e.current, a.setState({ pagination: r }), a.fetch2(Object(g.a)({
              results: e.pageSize,
              page: e.current,
              sortField: n.field,
              sortOrder: n.order
            }, t))
          }, a.fetch = Object(I.a)(P.a.mark(function e () {
            var t, n, r, o = arguments
            return P.a.wrap(function(e) {
              for (; ;) switch (e.prev = e.next) {
                case 0:
                  return t = o.length > 0 && void 0 !== o[0] ? o[0] : {}, a.setState({
                    loading: !0,
                    dataSearchParams: t
                  }), e.next = 4, ve.getWebsites(Object(g.a)({}, t))
                case 4:
                  n = e.sent, (r = Object(g.a)({}, a.state.pagination)).total = n.count, a.setState({
                    loading: !1,
                    data: n.data,
                    pagination: r
                  })
                case 8:
                case'end':
                  return e.stop()
              }
            }, e, this)
          })), a.getColumnSearchProps = function(e) {
            return {
              filterDropdown: function(t) {
                var n = t.setSelectedKeys, r = t.selectedKeys, o = t.confirm, c = t.clearFilters
                return i.a.createElement('div', { className: Me.a.filterDropdown }, i.a.createElement(xe.a, {
                  ref: function(e) {
                    a.searchInput = e
                  }, placeholder: 'Search '.concat(e), value: r[0], onChange: function(e) {
                    return n(e.target.value ? [e.target.value] : [])
                  }, onPressEnter: function() {
                    return a.handleSearch(r, o)
                  }, style: { width: 188, marginBottom: 8, display: 'block' }
                }), i.a.createElement(T.a, {
                  type: 'primary', onClick: function() {
                    return a.handleSearch(r, o)
                  }, icon: 'search', size: 'small', style: { width: 90, marginRight: 8 }
                }, 'Search'), i.a.createElement(T.a, {
                  onClick: function() {
                    return a.handleReset(c)
                  }, size: 'small', style: { width: 90 }
                }, 'Reset'))
              }, filterIcon: function(e) {
                return i.a.createElement(Y.a, { type: 'search', style: { color: e ? '#1890ff' : void 0 } })
              }, onFilterDropdownVisibleChange: function(e) {
                e && setTimeout(function() {
                  return a.searchInput.select()
                })
              }, render: function(e) {
                return i.a.createElement(qe.a, {
                  highlightStyle: { backgroundColor: '#ffc069', padding: 0 },
                  searchWords: [a.state.searchText],
                  autoEscape: !0,
                  textToHighlight: e.toString()
                })
              }
            }
          }, a.handleSearch = function(e, t) {
            t(), a.setState({ searchText: e[0] })
          }, a.handleReset = function(e) {
            e(), a.setState({ searchText: '' })
          }, a.toogleEnabled = function() {
            var e = Object(I.a)(P.a.mark(function e (t) {
              var n, r, o, i
              return P.a.wrap(function(e) {
                for (; ;) switch (e.prev = e.next) {
                  case 0:
                    return n = t.urlSlug, r = a.state.data, o = me.a.findIndex(r, { urlSlug: n }), i = Je()(r, Object(X.a)({}, o, { rowLoading: { $set: !0 } })), a.setState({ data: i }), e.next = 7, ve.toggleWebsiteEnabled({ urlSlug: n })
                  case 7:
                    i = Je()(r, Object(X.a)({}, o, {
                      enabled: { $set: !r[o].enabled },
                      rowLoading: { $set: !1 }
                    })), a.setState({ data: i })
                  case 9:
                  case'end':
                    return e.stop()
                }
              }, e, this)
            }))
            return function(t) {
              return e.apply(this, arguments)
            }
          }(), a.deleteWebsite = function() {
            var e = Object(I.a)(P.a.mark(function e (t) {
              var n, r, o, c
              return P.a.wrap(function(e) {
                for (; ;) switch (e.prev = e.next) {
                  case 0:
                    return n = t.urlSlug, r = a.state.data, o = me.a.findIndex(r, { urlSlug: n }), c = Je()(r, Object(X.a)({}, o, { deleteLoading: { $set: !0 } })), a.setState({ data: c }), e.next = 7, ve.deleteWebsite({ urlSlug: n })
                  case 7:
                    c = Je()(r, { $splice: [[o, 1]] }), a.setState({ data: c }), L.a.success({
                      message: 'Website Deleted Successfully',
                      duration: 20,
                      key: ''.concat(n, '-close'),
                      btn: i.a.createElement(T.a, {
                        onClick: Object(I.a)(P.a.mark(function e () {
                          return P.a.wrap(function(e) {
                            for (; ;) switch (e.prev = e.next) {
                              case 0:
                                return e.next = 2, ve.undoDeleteWebsite({ urlSlug: n })
                              case 2:
                                a.fetch2(a.state.dataSearchParams), L.a.close(''.concat(n, '-close'))
                              case 4:
                              case'end':
                                return e.stop()
                            }
                          }, e, this)
                        }))
                      }, 'Undo Delete')
                    })
                  case 10:
                  case'end':
                    return e.stop()
                }
              }, e, this)
            }))
            return function(t) {
              return e.apply(this, arguments)
            }
          }(), a.fetch2 = Object(ze.a)(a.fetch), a
        }

        return Object(S.a)(t, e), Object(O.a)(t, [{
          key: 'componentDidMount', value: function() {
            this.fetch2()
          }
        }, {
          key: 'render', value: function() {
            var e = this, t = this.props, a = t.categories, n = t.dispatch, r = [Object(g.a)({
              title: 'Website Url',
              width: 300,
              dataIndex: 'url',
              key: 'url',
              sorter: !0
            }, this.getColumnSearchProps('url')), {
              title: 'Category',
              width: 200,
              sorter: !0,
              dataIndex: 'category',
              key: 'category',
              render: function(e) {
                return e
              },
              filters: a.map(function(e) {
                return { text: e, value: e }
              })
            }, {
              title: 'Tags', width: 100, dataIndex: 'tags', key: 'tags', render: function(e) {
                return e.join(', ')
              }
            }, {
              title: 'Logo Bg Color', width: 100, dataIndex: 'logoBgColor', key: 'logoBgColor', render: function(e) {
                return i.a.createElement('div', {
                  style: {
                    backgroundColor: e,
                    color: Qe()(e).isDark() ? 'white' : 'black',
                    padding: '2px 5px',
                    border: '1px #c1c1c1 solid'
                  }
                }, e)
              }
            }, {
              title: 'Base Color', width: 100, dataIndex: 'baseColor', key: 'baseColor', render: function(e) {
                return i.a.createElement('div', {
                  style: {
                    backgroundColor: e,
                    color: Qe()(e).isDark() ? 'white' : 'black',
                    padding: '2px 5px',
                    border: '1px #c1c1c1 solid'
                  }
                }, e)
              }
            }, {
              title: 'Enabled', width: 100, render: function(t) {
                return i.a.createElement(i.a.Fragment, null, i.a.createElement(Ie.a, {
                  checkedChildren: i.a.createElement(Y.a, { type: 'check' }),
                  unCheckedChildren: i.a.createElement(Y.a, { type: 'close' }),
                  checked: t.enabled,
                  loading: t.rowLoading,
                  onChange: function() {
                    e.toogleEnabled({ urlSlug: t.urlSlug })
                  }
                }))
              }
            }, {
              title: 'Action', key: 'operation', fixed: 'right', width: 150, render: function(t) {
                return i.a.createElement(i.a.Fragment, null, i.a.createElement(Pe.a, { title: 'Edit Details' }, i.a.createElement(T.a, {
                  className: Me.a.btn,
                  shape: 'circle',
                  onClick: function() {
                    n(_e('websites.edit', { slug: t.urlSlug }))
                  },
                  icon: 'edit'
                })), i.a.createElement(Pe.a, { title: 'Edit Screenshot' }, i.a.createElement(T.a, {
                  className: Me.a.btn,
                  onClick: function() {
                    n(_e('websites.screenshots', { slug: t.urlSlug }))
                  },
                  shape: 'circle',
                  icon: 'snippets'
                })), i.a.createElement(Pe.a, { title: 'Delete Domain' }, i.a.createElement(T.a, {
                  className: Me.a.btn,
                  loading: t.deleteLoading,
                  onClick: function() {
                    e.deleteWebsite({ urlSlug: t.urlSlug })
                  },
                  type: 'danger',
                  shape: 'circle',
                  icon: 'delete'
                })))
              }
            }]
            return i.a.createElement(pe, { title: 'All Websites' }, i.a.createElement(F.a, { bordered: !0 }, i.a.createElement(Ue.a, {
              bordered: !0,
              columns: r,
              scroll: {
                x: me.a.sumBy(r, function(e) {
                  return e.width
                })
              },
              rowKey: function(e) {
                return e._id
              },
              dataSource: this.state.data,
              pagination: this.state.pagination,
              loading: this.state.loading,
              onChange: this.handleTableChange
            })))
          }
        }]), t
      }(o.Component), Xe = [{
        path: '/dashboard',
        name: 'Dashboard',
        icon: 'dashboard',
        key: 'dashboard',
        homepage: !0,
        component: V,
        authority: ['admin', 'user']
      }, {
        path: '/websites',
        icon: 'chrome',
        name: 'Websites',
        key: 'websites',
        authority: ['admin', 'user'],
        children: [{
          path: '/websites/add-website',
          name: 'Add Website',
          title: 'Add Website',
          key: 'add',
          component: Ye
        }, {
          path: '/websites/all-website',
          name: 'All Website',
          title: 'All Website',
          component: Object(l.connect)(function(e) {
            return { categories: e.global.categories }
          }, function(e) {
            return { dispatch: e }
          })(Ze)
        }, {
          path: '/websites/edit-website',
          name: 'Edit Website',
          key: 'edit',
          title: 'Edit Website',
          component: Ye,
          dontShowOnMenu: !0
        }, {
          path: '/websites/screen-website',
          name: 'WebsiteScreenShot',
          key: 'screenshots',
          title: 'Website ScreenShots',
          component: je,
          dontShowOnMenu: !0
        }]
      }], _e = function(e, t) {
        return Object(u.push)($e(e, t))
      }, $e = function(e, t) {
        t || (t = {})
        var a = e.split('.'), n = me.a.find(Xe, function(e) {
          return e.key === a[0]
        })
        if (!n) return '/'
        if (2 === a.length && (n = me.a.find(n.children, function(e) {
          return e.key === a[1]
        })), !n) return '/'
        var r = Object.keys(t).map(function(e) {
          return e + '=' + t[e]
        }).join('&')
        return ''.concat(n.path, '?').concat(r)
      }, et = Xe, tt = {
        403: {
          img: 'https://gw.alipayobjects.com/zos/rmsportal/wZcnGqRDyhPOEYFcZDnb.svg',
          title: '403',
          desc: 'Sorry, you do not have access to the page\n'
        },
        404: {
          img: 'https://gw.alipayobjects.com/zos/rmsportal/KpnpchXsobRgLElEozzI.svg',
          title: '404',
          desc: 'Sorry, the page you visited does not exist.\n'
        },
        500: {
          img: 'https://gw.alipayobjects.com/zos/rmsportal/RVRUAYdCGeYNBWoKiIwB.svg',
          title: '500',
          desc: 'Sorry, there is a server error.'
        }
      }, at = a(148), nt = a.n(at), rt = function(e) {
        function t (e) {
          var a
          return Object(j.a)(this, t), (a = Object(x.a)(this, Object(k.a)(t).call(this, e))).state = {}, a
        }

        return Object(S.a)(t, e), Object(O.a)(t, [{
          key: 'render', value: function() {
            var e = this.props, t = e.className, a = e.backText, n = e.linkElement, r = void 0 === n ? 'a' : n,
              c = e.type, s = e.title, l = e.desc, u = e.img, p = e.actions, d = e.redirect,
              m = Object(H.a)(e, ['className', 'backText', 'linkElement', 'type', 'title', 'desc', 'img', 'actions', 'redirect']),
              h = c in tt ? c : '404', g = z()(nt.a.exception, t)
            return i.a.createElement('div', Object.assign({ className: g }, m), i.a.createElement('div', { className: nt.a.imgBlock }, i.a.createElement('div', {
              className: nt.a.imgEle,
              style: { backgroundImage: 'url('.concat(u || tt[h].img, ')') }
            })), i.a.createElement('div', { className: nt.a.content }, i.a.createElement('h1', null, s || tt[h].title), i.a.createElement('div', { className: nt.a.desc }, l || tt[h].desc), i.a.createElement('div', { className: nt.a.actions }, p || Object(o.createElement)(r, {
              to: d,
              href: d
            }, i.a.createElement(T.a, { type: 'primary' }, a)))))
          }
        }]), t
      }(i.a.PureComponent)
    rt.defaultProps = { backText: 'back to home', redirect: '/' }
    var ot = rt, it = a(135), ct = a.n(it), st = a(216), lt = a.n(st), ut = a(280), pt = a.n(ut), dt = function(e) {
        var t = e.className, a = e.links, n = e.copyright, r = z()(pt.a.globalFooter, t)
        return i.a.createElement('footer', { className: r }, a && i.a.createElement('div', { className: pt.a.links }, a.map(function(e) {
          return i.a.createElement('a', {
            key: e.key,
            title: e.key,
            target: e.blankTarget ? '_blank' : '_self',
            href: e.href
          }, e.title)
        })), n && i.a.createElement('div', { className: pt.a.copyright }, n))
      }, mt = [{ key: 'help', title: 'HELP', href: '' }],
      ht = i.a.createElement(o.Fragment, null, 'Copyright ', i.a.createElement(Y.a, { type: 'copyright' }), ' 2018'),
      gt = function(e) {
        function t () {
          return Object(j.a)(this, t), Object(x.a)(this, Object(k.a)(t).apply(this, arguments))
        }

        return Object(S.a)(t, e), Object(O.a)(t, [{
          key: 'render', value: function() {
            var e = this.props.children
            return i.a.createElement('div', { className: ct.a.container }, i.a.createElement('div', { className: ct.a.content }, i.a.createElement('div', { className: ct.a.top }, i.a.createElement('div', { className: ct.a.header }, i.a.createElement(W.a, { to: '/' }, i.a.createElement('img', {
              alt: 'logo',
              className: ct.a.logo,
              src: lt.a
            }), i.a.createElement('span', { className: ct.a.title }, 'Ant Design'))), i.a.createElement('div', { className: ct.a.desc }, 'Ant Design \u662f\u897f\u6e56\u533a\u6700\u5177\u5f71\u54cd\u529b\u7684 Web \u8bbe\u8ba1\u89c4\u8303')), e), i.a.createElement(dt, {
              links: mt,
              copyright: ht
            }))
          }
        }]), t
      }(i.a.PureComponent), ft = (a(358), a(131)), bt = a(589), vt = a.n(bt), Et = a(255), yt = a.n(Et), Ct = a(590),
      At = a(607), wt = (a(1228), a(595)), jt = a(29), Ot = a(271), xt = a(591), kt = a(65), St = a.n(kt),
      Wt = (a(208), a(100)), Bt = (a(562), a(272)), Nt = (a(563), a(74)), Vt = (a(436), a(277)), Dt = a(603),
      Ft = a(592), Tt = a.n(Ft), Kt = (a(1328), a(606)), Yt = (a(531), a(183)), Ut = a(593), Pt = a.n(Ut),
      It = function(e) {
        function t () {
          return Object(j.a)(this, t), Object(x.a)(this, Object(k.a)(t).apply(this, arguments))
        }

        return Object(S.a)(t, e), Object(O.a)(t, [{
          key: 'render', value: function() {
            var e = this.props, t = e.overlayClassName, a = Object(H.a)(e, ['overlayClassName'])
            return i.a.createElement(Yt.a, Object.assign({ overlayClassName: z()(Pt.a.container, t) }, a))
          }
        }]), t
      }(o.PureComponent), Lt = (a(1332), a(283)), Qt = a(80), Ht = a.n(Qt)

    function qt (e) {
      var t = e.data, a = void 0 === t ? [] : t, n = e.onClick, r = e.onClear, o = e.title, c = e.locale,
        s = e.emptyText, l = e.emptyImage, u = e.showClear, p = void 0 === u || u
      return 0 === a.length ? i.a.createElement('div', { className: Ht.a.notFound }, l ? i.a.createElement('img', {
        src: l,
        alt: 'not found'
      }) : null, i.a.createElement('div', null, s || c.emptyText)) : i.a.createElement('div', null, i.a.createElement(Lt.a, { className: Ht.a.list }, a.map(function(e, t) {
        var a = z()(Ht.a.item, Object(X.a)({}, Ht.a.read, e.read)),
          r = e.avatar ? 'string' === typeof e.avatar ? i.a.createElement(Bt.a, {
            className: Ht.a.avatar,
            src: e.avatar
          }) : e.avatar : null
        return i.a.createElement(Lt.a.Item, {
          className: a, key: e.key || t, onClick: function() {
            return n(e)
          }
        }, i.a.createElement(Lt.a.Item.Meta, {
          className: Ht.a.meta,
          avatar: i.a.createElement('span', { className: Ht.a.iconElement }, r),
          title: i.a.createElement('div', { className: Ht.a.title }, e.title, i.a.createElement('div', { className: Ht.a.extra }, e.extra)),
          description: i.a.createElement('div', null, i.a.createElement('div', {
            className: Ht.a.description,
            title: e.description
          }, e.description), i.a.createElement('div', { className: Ht.a.datetime }, e.datetime))
        }))
      })), p ? i.a.createElement('div', { className: Ht.a.clear, onClick: r }, c.clear, ' ', o) : null)
    }

    var Rt = a(190), Mt = a.n(Rt), zt = R.a.TabPane, Gt = function(e) {
      function t () {
        var e, a
        Object(j.a)(this, t)
        for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++) r[o] = arguments[o]
        return (a = Object(x.a)(this, (e = Object(k.a)(t)).call.apply(e, [this].concat(r)))).state = { visible: !1 }, a.onItemClick = function(e, t) {
          var n = a.props.onItemClick, r = e.clickClose
          n(e, t), r && a.popover.click()
        }, a.onClear = function(e) {
          var t = a.props, n = t.onClear, r = t.clearClose
          n(e), r && a.popover.click()
        }, a.onTabChange = function(e) {
          (0, a.props.onTabChange)(e)
        }, a.handleVisibleChange = function(e) {
          var t = a.props.onPopupVisibleChange
          a.setState({ visible: e }), t(e)
        }, a
      }

      return Object(S.a)(t, e), Object(O.a)(t, [{
        key: 'getNotificationBox', value: function() {
          var e = this, t = this.props, a = t.children, n = t.loading, r = t.locale
          if (!a) return null
          var c = i.a.Children.map(a, function(t) {
            var a = t.props, n = a.list, o = a.title, c = a.name, s = a.count, l = n && n.length ? n.length : 0,
              u = s || 0 === s ? s : l, p = u > 0 ? ''.concat(o, ' (').concat(u, ')') : o
            return i.a.createElement(zt, { tab: p, key: c }, i.a.createElement(qt, Object.assign({}, t.props, {
              data: n,
              onClick: function(a) {
                return e.onItemClick(a, t.props)
              },
              onClear: function() {
                return e.onClear(c)
              },
              title: o,
              locale: r
            })))
          })
          return i.a.createElement(o.Fragment, null, i.a.createElement(Wt.a, {
            spinning: n,
            delay: 0
          }, i.a.createElement(R.a, { className: Mt.a.tabs, onChange: this.onTabChange }, c)))
        }
      }, {
        key: 'render', value: function() {
          var e = this, t = this.props, a = t.className, n = t.count, r = t.popupVisible, o = t.bell,
            c = this.state.visible, l = z()(a, Mt.a.noticeButton), u = this.getNotificationBox(),
            p = o || i.a.createElement(Y.a, { type: 'bell', className: Mt.a.icon }),
            d = i.a.createElement('span', { className: z()(l, { opened: c }) }, i.a.createElement(Kt.a, {
              count: n,
              style: { boxShadow: 'none' },
              className: Mt.a.badge
            }, p))
          if (!u) return d
          var m = {}
          return 'popupVisible' in this.props && (m.visible = r), i.a.createElement(It, Object.assign({
            placement: 'bottomRight',
            overlay: u,
            overlayClassName: Mt.a.popover,
            trigger: ['click'],
            visible: c,
            onVisibleChange: this.handleVisibleChange
          }, m, {
            ref: function(t) {
              return e.popover = s.a.findDOMNode(t)
            }
          }), d)
        }
      }]), t
    }(o.PureComponent)
    Gt.Tab = zt, Gt.defaultProps = {
      onItemClick: function() {
      },
      onPopupVisibleChange: function() {
      },
      onTabChange: function() {
      },
      onClear: function() {
      },
      loading: !1,
      clearClose: !1,
      locale: { emptyText: 'No notifications', clear: 'Clear' },
      emptyImage: 'https://gw.alipayobjects.com/zos/rmsportal/wAhyIChODzsoKIOBHcBk.svg'
    }
    a(1337)
    var Jt, Zt, Xt, _t, $t, ea, ta, aa = a(605), na = a(377), ra = a.n(na), oa = a(256), ia = a.n(oa), ca = a(281),
      sa = a.n(ca), la = (Jt = ia()(), Zt = ra()(500, { leading: !0, trailing: !1 }), $t = _t = function(e) {
        function t (e) {
          var a
          return Object(j.a)(this, t), (a = Object(x.a)(this, Object(k.a)(t).call(this, e))).onKeyDown = function(e) {
            if ('Enter' === e.key) {
              var t = a.props.onPressEnter, n = a.state.value
              a.timeout = setTimeout(function() {
                t(n)
              }, 0)
            }
          }, a.onChange = function(e) {
            var t = a.props.onChange
            a.setState({ value: e }), t && t(e)
          }, a.enterSearchMode = function() {
            (0, a.props.onVisibleChange)(!0), a.setState({ searchMode: !0 }, function() {
              a.state.searchMode && a.input.focus()
            })
          }, a.leaveSearchMode = function() {
            a.setState({ searchMode: !1, value: '' })
          }, a.state = { searchMode: e.defaultOpen, value: '' }, a
        }

        return Object(S.a)(t, e), Object(O.a)(t, null, [{
          key: 'getDerivedStateFromProps', value: function(e) {
            return 'open' in e ? { searchMode: e.open } : null
          }
        }]), Object(O.a)(t, [{
          key: 'componentWillUnmount', value: function() {
            clearTimeout(this.timeout)
          }
        }, {
          key: 'debouncePressEnter', value: function() {
            (0, this.props.onPressEnter)(this.state.value)
          }
        }, {
          key: 'render', value: function() {
            var e = this, t = this.props, a = t.className, n = t.placeholder,
              r = (t.open, Object(H.a)(t, ['className', 'placeholder', 'open'])), o = this.state, c = o.searchMode,
              s = o.value
            delete r.defaultOpen
            var l = z()(sa.a.input, Object(X.a)({}, sa.a.show, c))
            return i.a.createElement('span', {
              className: z()(a, sa.a.headerSearch),
              onClick: this.enterSearchMode,
              onTransitionEnd: function(t) {
                'width' !== t.propertyName || c || (0, e.props.onVisibleChange)(c)
              }
            }, i.a.createElement(Y.a, {
              type: 'search',
              key: 'Icon'
            }), i.a.createElement(aa.a, Object.assign({ key: 'AutoComplete' }, r, {
              className: l,
              value: s,
              onChange: this.onChange
            }), i.a.createElement(xe.a, {
              ref: function(t) {
                e.input = t
              }, 'aria-label': n, placeholder: n, onKeyDown: this.onKeyDown, onBlur: this.leaveSearchMode
            })))
          }
        }]), t
      }(o.PureComponent), _t.defaultProps = {
        defaultActiveFirstOption: !1, onPressEnter: function() {
        }, onSearch: function() {
        }, className: '', placeholder: '', dataSource: [], defaultOpen: !1, onVisibleChange: function() {
        }
      }, Xt = $t, Object(Ot.a)(Xt.prototype, 'debouncePressEnter', [Jt, Zt], Object.getOwnPropertyDescriptor(Xt.prototype, 'debouncePressEnter'), Xt.prototype), Xt),
      ua = function(e) {
        function t () {
          var e, a
          Object(j.a)(this, t)
          for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++) r[o] = arguments[o]
          return (a = Object(x.a)(this, (e = Object(k.a)(t)).call.apply(e, [this].concat(r)))).getUnreadData = function(e) {
            var t = {}
            return Object.entries(e).forEach(function(e) {
              var a = Object(Dt.a)(e, 2), n = a[0], r = a[1]
              t[n] || (t[n] = 0), Array.isArray(r) && (t[n] = r.filter(function(e) {
                return !e.read
              }).length)
            }), t
          }, a.changeReadState = function(e) {
            var t = e.id;
            (0, a.props.dispatch)({ type: 'global/changeNoticeReadState', payload: t })
          }, a
        }

        return Object(S.a)(t, e), Object(O.a)(t, [{
          key: 'getNoticeData', value: function() {
            var e = this.props.notices, t = void 0 === e ? [] : e
            if (0 === t.length) return {}
            var a = t.map(function(e) {
              var t = Object(g.a)({}, e)
              if (t.datetime && (t.datetime = ge()(e.datetime).fromNow()), t.id && (t.key = t.id), t.extra && t.status) {
                var a = { todo: '', processing: 'blue', urgent: 'red', doing: 'gold' }[t.status]
                t.extra = i.a.createElement(Vt.a, { color: a, style: { marginRight: 0 } }, t.extra)
              }
              return t
            })
            return Tt()(a, 'type')
          }
        }, {
          key: 'render', value: function() {
            var e = this, t = this.props, a = t.currentUser, n = t.fetchingNotices, r = t.onNoticeVisibleChange,
              o = t.onMenuClick, c = t.onNoticeClear, s = t.theme, l = i.a.createElement(Nt.a, {
                className: St.a.menu,
                selectedKeys: [],
                onClick: o
              }, i.a.createElement(Nt.a.Item, { key: 'userCenter' }, i.a.createElement(Y.a, { type: 'user' }), i.a.createElement('span', null, 'account center')), i.a.createElement(Nt.a.Item, { key: 'userinfo' }, i.a.createElement(Y.a, { type: 'setting' }), i.a.createElement('span', null, 'user info')), i.a.createElement(Nt.a.Item, { key: 'triggerError' }, i.a.createElement(Y.a, { type: 'close-circle' }), i.a.createElement('span', null, 'trigger error')), i.a.createElement(Nt.a.Divider, null), i.a.createElement(Nt.a.Item, { key: 'logout' }, i.a.createElement(Y.a, { type: 'logout' }), i.a.createElement('span', null, 'logout'))),
              u = this.getNoticeData(), p = this.getUnreadData(u), d = St.a.right
            return 'dark' === s && (d = ''.concat(St.a.right, '  ').concat(St.a.dark)), i.a.createElement('div', { className: d }, i.a.createElement(la, {
              className: ''.concat(St.a.action, ' ').concat(St.a.search),
              placeholder: 'Search Anything Here',
              dataSource: [],
              onSearch: function(e) {
                console.log('input', e)
              },
              onPressEnter: function(e) {
                console.log('enter', e)
              }
            }), i.a.createElement(Gt, {
              className: St.a.action,
              count: 11,
              onItemClick: function(t, a) {
                console.log(t, a), e.changeReadState(t, a)
              },
              locale: { emptyText: 'No notifications', clear: 'Clear' },
              onClear: c,
              onPopupVisibleChange: r,
              loading: n,
              clearClose: !0
            }, i.a.createElement(Gt.Tab, {
              count: p.notification,
              list: u.notification,
              title: 'Notification',
              name: 'notification',
              emptyText: 'You have viewed all notifications.',
              emptyImage: 'https://gw.alipayobjects.com/zos/rmsportal/wAhyIChODzsoKIOBHcBk.svg'
            }), i.a.createElement(Gt.Tab, {
              count: p.message,
              list: u.message,
              title: 'Message',
              name: 'message',
              emptyText: 'You have viewed all Messages.',
              emptyImage: 'https://gw.alipayobjects.com/zos/rmsportal/sAuJeJzSKbUmHfBQRzmZ.svg'
            })), a.email ? i.a.createElement(It, { overlay: l }, i.a.createElement('span', { className: ''.concat(St.a.action, ' ').concat(St.a.account) }, i.a.createElement(Bt.a, {
              size: 'small',
              className: St.a.avatar,
              src: a.avatar ? a.avatar : 'data:image/png;base64,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',
              alt: 'avatar'
            }), i.a.createElement('span', { className: St.a.name }, a.email))) : i.a.createElement(Wt.a, {
              size: 'small',
              style: { marginLeft: 8, marginRight: 8 }
            }))
          }
        }]), t
      }(o.PureComponent), pa = (ea = Object(xt.debounce)(600), ta = function(e) {
        function t () {
          var e, a
          Object(j.a)(this, t)
          for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++) r[o] = arguments[o]
          return (a = Object(x.a)(this, (e = Object(k.a)(t)).call.apply(e, [this].concat(r)))).toggle = function() {
            var e = a.props, t = e.collapsed;
            (0, e.onCollapse)(!t), a.triggerResizeEvent()
          }, a
        }

        return Object(S.a)(t, e), Object(O.a)(t, [{
          key: 'componentWillUnmount', value: function() {
            this.triggerResizeEvent.cancel()
          }
        }, {
          key: 'triggerResizeEvent', value: function() {
            var e = document.createEvent('HTMLEvents')
            e.initEvent('resize', !0, !1), window.dispatchEvent(e)
          }
        }, {
          key: 'render', value: function() {
            var e = this.props, t = e.collapsed, a = e.isMobile, n = e.logo
            return i.a.createElement('div', { className: St.a.header }, a && i.a.createElement(W.a, {
              to: '/',
              className: St.a.logo,
              key: 'logo'
            }, i.a.createElement('img', {
              src: n,
              alt: 'logo',
              width: '32'
            })), i.a.createElement('span', {
              className: St.a.trigger,
              onClick: this.toggle
            }, i.a.createElement(Y.a, { type: t ? 'menu-unfold' : 'menu-fold' })), i.a.createElement(ua, this.props))
          }
        }]), t
      }(o.PureComponent), Object(Ot.a)(ta.prototype, 'triggerResizeEvent', [ea], Object.getOwnPropertyDescriptor(ta.prototype, 'triggerResizeEvent'), ta.prototype), ta),
      da = a(1360), ma = a(108), ha = a(136), ga = a.n(ha), fa = function(e) {
        function t () {
          var e, a
          Object(j.a)(this, t)
          for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++) r[o] = arguments[o]
          return (a = Object(x.a)(this, (e = Object(k.a)(t)).call.apply(e, [this].concat(r)))).state = { maxWidth: void 0 }, a
        }

        return Object(S.a)(t, e), Object(O.a)(t, [{
          key: 'render', value: function() {
            var e = this, t = this.props, a = t.navTheme, n = t.contentWidth, r = t.menuData, o = t.logo,
              c = this.state.maxWidth, s = Object(ma.b)(r)
            return i.a.createElement('div', { className: ''.concat(ga.a.head, ' ').concat('light' === a ? ga.a.light : '') }, i.a.createElement('div', {
              ref: function(t) {
                e.maim = t
              }, className: ''.concat(ga.a.main, ' ').concat('Fixed' === n ? ga.a.wide : '')
            }, i.a.createElement('div', { className: ga.a.left }, i.a.createElement('div', {
              className: ga.a.logo,
              key: 'logo',
              id: 'logo'
            }, i.a.createElement(W.a, { to: '/' }, i.a.createElement('img', {
              src: o,
              alt: 'logo'
            }), i.a.createElement('h1', null, 'Ant asdfsdaf '))), i.a.createElement('div', { style: { maxWidth: c } }, i.a.createElement(da.default, Object.assign({}, this.props, {
              flatMenuKeys: s,
              className: ga.a.menu
            })))), i.a.createElement(ua, this.props)))
          }
        }], [{
          key: 'getDerivedStateFromProps', value: function(e) {
            return { maxWidth: ('Fixed' === e.contentWidth ? 1200 : window.innerWidth) - 280 - 165 - 40 }
          }
        }]), t
      }(o.PureComponent), ba = a(594), va = a.n(ba), Ea = ft.a.Header, ya = function(e) {
        function t () {
          var e, a
          Object(j.a)(this, t)
          for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++) r[o] = arguments[o]
          return (a = Object(x.a)(this, (e = Object(k.a)(t)).call.apply(e, [this].concat(r)))).state = { visible: !0 }, a.handleMenuClick = function(e) {
            var t = e.key, n = a.props.dispatch
            switch (t) {
              case'logout':
                n({ type: 'LOGOUT' })
                break
              default:
                console.log(t, ' this is working')
            }
          }, a.getHeadWidth = function() {
            var e = a.props, t = e.isMobile, n = e.collapsed, r = (e.setting, {})
            return t || !r.fixedHeader || 'topmenu' === r.layout ? '100%' : n ? 'calc(100% - 80px)' : 'calc(100% - 256px)'
          }, a.handleNoticeClear = function(e) {
            wt.a.success('this is ttest message')
            a.props.dispatch
            console.log(e, ' this is working here')
          }, a.handleNoticeVisibleChange = function(e) {
            console.log(e, ' this is worign here ')
          }, a.handScroll = function() {
            var e = a.props.autoHideHeader, t = a.state.visible
            if (e) {
              var n = document.body.scrollTop + document.documentElement.scrollTop
              a.ticking || (a.ticking = !0, requestAnimationFrame(function() {
                a.oldScrollTop > n ? a.setState({ visible: !0 }) : n > 300 && t ? a.setState({ visible: !1 }) : n < 300 && !t && a.setState({ visible: !0 }), a.oldScrollTop = n, a.ticking = !1
              }))
            }
          }, a
        }

        return Object(S.a)(t, e), Object(O.a)(t, [{
          key: 'componentWillUnmount', value: function() {
            document.removeEventListener('scroll', this.handScroll)
          }
        }, {
          key: 'componentDidMount', value: function() {
            document.addEventListener('scroll', this.handScroll, { passive: !0 })
            var e = this.props.dispatch, t = localStorage.getItem('user')
            e({ type: 'SET_CURRENT_USER', user: t = JSON.parse(t) })
          }
        }, {
          key: 'render', value: function() {
            var e = this.props, t = e.isMobile, a = e.handleMenuCollapse, n = e.theme, r = n.navTheme, o = n.layout,
              c = n.fixedHeader, s = this.state.visible, l = 'topmenu' === o, u = this.getHeadWidth(),
              p = s ? i.a.createElement(Ea, {
                style: { padding: 0, width: u },
                className: c ? va.a.fixedHeader : ''
              }, l && !t ? i.a.createElement(fa, Object.assign({
                theme: r,
                mode: 'horizontal',
                onCollapse: a,
                onNoticeClear: this.handleNoticeClear,
                onMenuClick: this.handleMenuClick,
                onNoticeVisibleChange: this.handleNoticeVisibleChange
              }, this.props)) : i.a.createElement(pa, Object.assign({
                onCollapse: a,
                onNoticeClear: this.handleNoticeClear,
                onMenuClick: this.handleMenuClick,
                onNoticeVisibleChange: this.handleNoticeVisibleChange
              }, this.props))) : null
            return i.a.createElement(jt.default, { component: '', transitionName: 'fade' }, p)
          }
        }], [{
          key: 'getDerivedStateFromProps', value: function(e, t) {
            return e.autoHideHeader || t.visible ? null : { visible: !0 }
          }
        }]), t
      }(o.PureComponent), Ca = Object(l.connect)(function(e) {
        var t = e.global, a = e.theme
        return { currentUser: t.currentUser, notices: t.notices, theme: a }
      }, function(e) {
        return { dispatch: e }
      })(ya), Aa = (a(1346), a(596)), wa = a(182), ja = a(147), Oa = a.n(ja), xa = function() {
        return i.a.createElement('div', {
          style: {
            paddingTop: 100,
            textAlign: 'center'
          }
        }, i.a.createElement(Wt.a, { size: 'large' }))
      }, ka = i.a.lazy(function() {
        return Promise.resolve().then(a.bind(null, 1360))
      }), Sa = ft.a.Sider, Wa = function(e) {
        function t (e) {
          var a
          return Object(j.a)(this, t), (a = Object(x.a)(this, Object(k.a)(t).call(this, e))).isMainMenu = function(e) {
            return a.props.menuData.some(function(t) {
              return !!e && (t.key === e || t.path === e)
            })
          }, a.handleOpenChange = function(e) {
            var t = e.filter(function(e) {
              return a.isMainMenu(e)
            }).length > 1
            a.setState({ openKeys: t ? [e.pop()] : Object(wa.a)(e) })
          }, a.state = { openKeys: Object(ma.a)(e) }, a
        }

        return Object(S.a)(t, e), Object(O.a)(t, [{
          key: 'render', value: function() {
            var e, t = this.props, a = t.logo, n = t.collapsed, r = t.onCollapse, c = t.fixSiderbar, s = t.theme,
              l = this.state.openKeys, u = n ? {} : { openKeys: l },
              p = z()(Oa.a.sider, (e = {}, Object(X.a)(e, Oa.a.fixSiderbar, c), Object(X.a)(e, Oa.a.light, 'light' === s), e))
            return i.a.createElement(Sa, {
              trigger: null,
              collapsible: !0,
              collapsed: n,
              breakpoint: 'lg',
              onCollapse: r,
              width: 256,
              theme: s,
              className: p
            }, i.a.createElement('div', {
              className: Oa.a.logo,
              id: 'logo'
            }, i.a.createElement(W.a, { to: '/' }, i.a.createElement('img', {
              src: a,
              alt: 'logo'
            }), i.a.createElement('h1', null, 'Ant Design Pro'))), i.a.createElement(o.Suspense, { fallback: i.a.createElement(xa, null) }, i.a.createElement(ka, Object.assign({}, this.props, {
              mode: 'inline',
              handleOpenChange: this.handleOpenChange,
              onOpenChange: this.handleOpenChange,
              style: { padding: '16px 0', width: '100%' }
            }, u))))
          }
        }], [{
          key: 'getDerivedStateFromProps', value: function(e, t) {
            var a = t.pathname
            return e.location.pathname !== a ? { pathname: e.location.pathname, openKeys: Object(ma.a)(e) } : null
          }
        }]), t
      }(o.PureComponent), Ba = i.a.memo(function(e) {
        var t = e.isMobile, a = e.menuData, n = e.collapsed, r = e.onCollapse, o = Object(ma.b)(a)
        return t ? i.a.createElement(Aa.a, {
          visible: !n, placement: 'left', onClose: function() {
            return r(!0)
          }, style: { padding: 0, height: '100vh' }
        }, i.a.createElement(Wa, Object.assign({}, e, {
          flatMenuKeys: o,
          collapsed: !t && n
        }))) : i.a.createElement(Wa, Object.assign({}, e, { flatMenuKeys: o }))
      }), Na = a(597), Va = a.n(Na), Da = ft.a.Content, Fa = {
        'screen-xs': { maxWidth: 575 },
        'screen-sm': { minWidth: 576, maxWidth: 767 },
        'screen-md': { minWidth: 768, maxWidth: 991 },
        'screen-lg': { minWidth: 992, maxWidth: 1199 },
        'screen-xl': { minWidth: 1200, maxWidth: 1599 },
        'screen-xxl': { minWidth: 1600 }
      }, Ta = function(e) {
        function t (e) {
          var a
          return Object(j.a)(this, t), (a = Object(x.a)(this, Object(k.a)(t).call(this, e))).matchParamsPath = function(e, t) {
            return t[Object.keys(t).find(function(t) {
              return $()(t).test(e)
            })]
          }, a.getPageTitle = function(e, t) {
            if (!a.matchParamsPath(e, t)) return 'Ant Design Pro'
            return ''.concat('Some Page nmae', ' - Ant Design Pro')
          }, a.getLayoutStyle = function() {
            var e = a.props, t = e.fixSiderbar, n = e.isMobile, r = e.collapsed, o = e.layout
            return t && 'topmenu' !== o && !n ? { paddingLeft: r ? '80px' : '256px' } : null
          }, a.handleMenuCollapse = function(e) {
            a.props.dispatch({ type: 'TOGGLE_SIDEBAR_COLLAPSED' })
          }, a.getPageTitle = Object(ze.a)(a.getPageTitle), a.matchParamsPath = Object(ze.a)(a.matchParamsPath, yt.a), a
        }

        return Object(S.a)(t, e), Object(O.a)(t, [{
          key: 'componentWillMount', value: function() {
            (0, this.props.dispatch)({ type: 'SET_AUTH_TOKEN', token: localStorage.getItem('token') })
          }
        }, {
          key: 'componentDidUpdate', value: function(e) {
            var t = this.props, a = t.collapsed, n = t.isMobile, r = t.currentUser, o = t.dispatch
            !n || e.isMobile || a || this.handleMenuCollapse(!1), Object.is(e.currentUser, r) || me.a.isEmpty(r) && (localStorage.removeItem('token'), localStorage.removeItem('user'), o(Object(u.push)('/login')))
          }
        }, {
          key: 'getContext', value: function() {
            var e = this.props
            return { location: e.location, breadcrumbNameMap: e.breadcrumbNameMap }
          }
        }, {
          key: 'render', value: function() {
            var e = this, t = this.props, a = t.navTheme, n = t.layout, r = t.children,
              o = (t.location.pathname, t.isMobile), c = t.menuData, s = (t.breadcrumbNameMap, t.fixedHeader),
              l = t.pageTitle, u = 'topmenu' === n, p = s ? {} : { paddingTop: 0 },
              d = i.a.createElement(ft.a, null, u && !o ? null : i.a.createElement(Ba, Object.assign({}, this.props, {
                logo: lt.a,
                theme: a,
                onCollapse: this.handleMenuCollapse,
                menuData: c,
                isMobile: o
              })), i.a.createElement(ft.a, { style: Object(g.a)({}, this.getLayoutStyle(), { minHeight: '100vh' }) }, i.a.createElement(Ca, Object.assign({
                menuData: c,
                handleMenuCollapse: this.handleMenuCollapse,
                logo: lt.a,
                isMobile: o
              }, this.props)), i.a.createElement(Da, { className: Va.a.content, style: p }, r)))
            return i.a.createElement(i.a.Fragment, null, i.a.createElement(vt.a, { title: l }, i.a.createElement(Ct.ContainerQuery, { query: Fa }, function(t) {
              return i.a.createElement(ue.Provider, { value: e.getContext() }, i.a.createElement('div', { className: z()(t) }, d))
            })))
          }
        }]), t
      }(i.a.PureComponent), Ka = Object(l.connect)(function(e) {
        var t = e.theme, a = e.global
        return {
          collapsed: t.collapsed,
          layout: t.layout,
          theme: t.theme,
          navTheme: t.navTheme,
          fixSiderbar: t.fixSiderbar,
          breadcrumbNameMap: t.breadcrumbNameMap,
          currentUser: a.currentUser
        }
      }, function(e) {
        return { dispatch: e }
      })(function(e) {
        return i.a.createElement(At.a, { query: '(max-width: 599px)' }, function(t) {
          return i.a.createElement(Ta, Object.assign({}, e, { isMobile: t }))
        })
      }), Ya = (a(530), a(126)), Ua = a(282), Pa = a.n(Ua), Ia = function(e) {
        function t (e) {
          var a
          return Object(j.a)(this, t), (a = Object(x.a)(this, Object(k.a)(t).call(this, e))).handleSubmit = function(e) {
            var t = a.props.dispatch
            e.preventDefault(), a.props.form.validateFields(function() {
              var e = Object(I.a)(P.a.mark(function e (a, n) {
                var r
                return P.a.wrap(function(e) {
                  for (; ;) switch (e.prev = e.next) {
                    case 0:
                      if (a) {
                        e.next = 7
                        break
                      }
                      return t(Ee()), e.next = 4, ve.login(n)
                    case 4:
                      r = e.sent, t(ye()), r.error ? L.a.error({
                        message: 'Invalid Login',
                        description: r.message
                      }) : (localStorage.setItem('token', r.token), localStorage.setItem('user', JSON.stringify(r.user)), t({
                        type: 'SET_CURRENT_USER',
                        user: r.user
                      }), setTimeout(function() {
                        t(Object(u.push)('/'))
                      }, 300))
                    case 7:
                    case'end':
                      return e.stop()
                  }
                }, e, this)
              }))
              return function(t, a) {
                return e.apply(this, arguments)
              }
            }())
          }, a.state = { loading: !1 }, a
        }

        return Object(S.a)(t, e), Object(O.a)(t, [{
          key: 'render', value: function() {
            var e = this.props.form.getFieldDecorator, t = this.props.loading
            return i.a.createElement(Q.a, {
              onSubmit: this.handleSubmit,
              className: Pa.a.main
            }, i.a.createElement(Q.a.Item, null, e('email', {
              rules: [{
                required: !0,
                message: 'Please input your username!'
              }]
            })(i.a.createElement(xe.a, {
              prefix: i.a.createElement(Y.a, {
                type: 'user',
                style: { color: 'rgba(0,0,0,.25)' }
              }), placeholder: 'Username'
            }))), i.a.createElement(Q.a.Item, null, e('password', {
              rules: [{
                required: !0,
                message: 'Please input your Password!'
              }]
            })(i.a.createElement(xe.a, {
              prefix: i.a.createElement(Y.a, {
                type: 'lock',
                style: { color: 'rgba(0,0,0,.25)' }
              }), type: 'password', placeholder: 'Password'
            }))), i.a.createElement(Q.a.Item, null, e('remember', {
              valuePropName: 'checked',
              initialValue: !0
            })(i.a.createElement(Ya.a, null, 'Remember me')), i.a.createElement('a', {
              className: Pa.a.forgot,
              href: ''
            }, 'Forgot password'), i.a.createElement(T.a, {
              type: 'primary',
              loading: t,
              htmlType: 'submit',
              className: Pa.a.button
            }, 'Log in')))
          }
        }]), t
      }(i.a.Component), La = Q.a.create()(Ia), Qa = Object(l.connect)(function(e) {
        var t = e.counter, a = e.global
        return { count: t.count, loading: a.buttonLoading }
      }, function(e) {
        return { dispatch: e }
      })(La), Ha = (a(566), function() {
        return i.a.createElement(ot, {
          type: '404',
          desc: 'You Seems lost !!',
          linkElement: W.a,
          redirect: '/dashboard',
          backText: 'Go To Homepage?'
        })
      }), qa = function() {
        return i.a.createElement(ot, {
          type: '403',
          desc: 'Sorry You Don\'t have access to this area !!',
          linkElement: W.a,
          redirect: '/dashboard',
          backText: 'Go To Homepage?'
        })
      }, Ra = function(e) {
        function t () {
          return Object(j.a)(this, t), Object(x.a)(this, Object(k.a)(t).apply(this, arguments))
        }

        return Object(S.a)(t, e), Object(O.a)(t, [{
          key: 'render', value: function() {
            var e = this.props, t = e.menuData, a = e.component, n = e.path, r = e.user
            if (!r) return i.a.createElement(B.a, { to: '/login' })
            var o = me()(t).thru(function(e) {
              return me.a.union(e, me.a.map(e, 'children'))
            }).flatten().find({ path: n })
            return void 0 !== o.authority && -1 === o.authority.indexOf(r.userType) ? (console.log('this user should not be here ', n), i.a.createElement(qa, null)) : (o.title || (o.title = 'Untitled'), i.a.createElement(Ka, {
              location: window.location,
              pageTitle: ''.concat(o.title, ' - Scizers Portfolio App'),
              menuData: t
            }, a ? i.a.createElement(this.props.component, null) : i.a.createElement(Ha, null)))
          }
        }]), t
      }(o.Component), Ma = function(e) {
        function t (e) {
          var a
          return Object(j.a)(this, t), (a = Object(x.a)(this, Object(k.a)(t).call(this, e))).state = {
            token: localStorage.getItem('token'),
            user: 'undefined' != localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null
          }, a
        }

        return Object(S.a)(t, e), Object(O.a)(t, [{
          key: 'render', value: function() {
            var e = this.state.user
            return i.a.createElement('div', null, i.a.createElement(N.a, {
              exact: !0,
              path: '/form/basic-formsdf',
              render: function(e) {
                return i.a.createElement('div', null, 'asdfsdf', et.map(function(e, t) {
                  if (e.children) return e.children.map(function(t, a) {
                    return console.log(t.path), i.a.createElement('div', { key: e.children }, t.path)
                  })
                }))
              }
            }), et.map(function(t, a) {
              if (!t.children) return i.a.createElement(N.a, {
                exact: !0, path: t.path, key: t.path, render: function(a) {
                  return i.a.createElement(Ra, { component: t.component, path: t.path, user: e, menuData: et })
                }
              })
            }), et.map(function(t, a) {
              if (t.children) return t.children.map(function(t, a) {
                return i.a.createElement(N.a, {
                  exact: !0, path: t.path, key: t.path, render: function(a) {
                    return i.a.createElement(Ra, { component: t.component, path: t.path, user: e, menuData: et })
                  }
                })
              })
            }), i.a.createElement(N.a, {
              exact: !0, path: '/login', render: function(e) {
                return i.a.createElement(gt, { location: window.location, menuData: et }, i.a.createElement(Qa, null))
              }
            }), i.a.createElement(N.a, {
              exact: !0, path: '/', render: function(e) {
                return i.a.createElement(B.a, { to: '/dashboard' })
              }
            }))
          }
        }]), t
      }(o.Component), za = document.querySelector('#root')
    Object(c.render)(i.a.createElement(l.Provider, { store: w }, i.a.createElement(u.ConnectedRouter, { history: y }, i.a.createElement(Ma, null))), za)
  }, 136: function(e, t, a) {
    e.exports = {
      head: 'antd-pro-components-top-nav-header-index-head',
      light: 'antd-pro-components-top-nav-header-index-light',
      main: 'antd-pro-components-top-nav-header-index-main',
      wide: 'antd-pro-components-top-nav-header-index-wide',
      left: 'antd-pro-components-top-nav-header-index-left',
      right: 'antd-pro-components-top-nav-header-index-right',
      logo: 'antd-pro-components-top-nav-header-index-logo',
      menu: 'antd-pro-components-top-nav-header-index-menu'
    }
  }, 1360: function(e, t, a) {
    'use strict'
    a.r(t)
    var n = a(182), r = a(17), o = a(16), i = a(20), c = a(19), s = a(21), l = (a(95), a(10)), u = (a(563), a(74)),
      p = a(1), d = a.n(p), m = a(2), h = a.n(m), g = a(1363), f = a(174), b = a(108)
    a(38), a(13), a(391), a(188)
    var v = /(((^https?:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+(?::\d+)?|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)$/
    var E = a(147), y = a.n(E)
    a.d(t, 'default', function() {
      return w
    })
    var C = u.a.SubMenu, A = function(e) {
      return 'string' === typeof e && (t = e, v.test(t)) ? d.a.createElement('img', {
        src: e,
        alt: 'icon',
        className: y.a.icon
      }) : 'string' === typeof e ? d.a.createElement(l.a, { type: e }) : e
      var t
    }, w = function(e) {
      function t () {
        var e, a
        Object(r.a)(this, t)
        for (var n = arguments.length, o = new Array(n), s = 0; s < n; s++) o[s] = arguments[s]
        return (a = Object(i.a)(this, (e = Object(c.a)(t)).call.apply(e, [this].concat(o)))).getNavMenuItems = function(e, t) {
          return e ? e.filter(function(e) {
            return e.name && !e.hideInMenu
          }).map(function(e) {
            if (!e.dontShowOnMenu) return a.getSubMenuOrItem(e, t)
          }).filter(function(e) {
            return e
          }) : []
        }, a.getSelectedMenuKeys = function(e) {
          var t = a.props.flatMenuKeys
          return Object(f.a)(e).map(function(e) {
            return Object(b.c)(t, e).pop()
          })
        }, a.getSubMenuOrItem = function(e) {
          if (e.children && !e.hideChildrenInMenu && e.children.some(function(e) {
            return e.name
          })) {
            var t = e.name
            return d.a.createElement(C, {
              title: e.icon ? d.a.createElement('span', null, A(e.icon), d.a.createElement('span', null, t)) : t,
              key: e.path
            }, a.getNavMenuItems(e.children))
          }
          return d.a.createElement(u.a.Item, { key: e.path }, a.getMenuItemPath(e))
        }, a.getMenuItemPath = function(e) {
          var t = e.name, n = a.conversionPath(e.path), r = A(e.icon), o = e.target
          if (/^https?:\/\//.test(n)) return d.a.createElement('a', {
            href: n,
            target: o
          }, r, d.a.createElement('span', null, t))
          var i = a.props, c = i.location, s = i.isMobile, l = i.onCollapse
          return d.a.createElement(g.a, {
            to: n, target: o, replace: n === c.pathname, onClick: s ? function() {
              l(!0)
            } : void 0
          }, r, d.a.createElement('span', null, t))
        }, a.conversionPath = function(e) {
          return e && 0 === e.indexOf('http') ? e : '/'.concat(e || '').replace(/\/+/g, '/')
        }, a
      }

      return Object(s.a)(t, e), Object(o.a)(t, [{
        key: 'render', value: function() {
          var e = this.props, t = e.openKeys, a = e.navTheme, r = e.mode, o = e.location.pathname, i = e.className,
            c = e.collapsed, s = this.getSelectedMenuKeys(o)
          !s.length && t && (s = [t[t.length - 1]])
          var l = {}
          t && !c && (l = { openKeys: 0 === t.length ? Object(n.a)(s) : t })
          var p = this.props, m = p.handleOpenChange, g = p.style, f = p.menuData,
            b = h()(i, { 'top-nav-menu': 'horizontal' === r })
          return d.a.createElement(u.a, Object.assign({
            key: 'Menu',
            mode: r,
            theme: a,
            onOpenChange: m,
            selectedKeys: s,
            style: g,
            className: b
          }, l), this.getNavMenuItems(f))
        }
      }]), t
    }(p.PureComponent)
  }, 147: function(e, t, a) {
    e.exports = {
      logo: 'antd-pro-components-sider-menu-index-logo',
      sider: 'antd-pro-components-sider-menu-index-sider',
      fixSiderbar: 'antd-pro-components-sider-menu-index-fixSiderbar',
      light: 'antd-pro-components-sider-menu-index-light',
      icon: 'antd-pro-components-sider-menu-index-icon'
    }
  }, 148: function(e, t, a) {
    e.exports = {
      exception: 'antd-pro-components-exception-index-exception',
      imgBlock: 'antd-pro-components-exception-index-imgBlock',
      imgEle: 'antd-pro-components-exception-index-imgEle',
      content: 'antd-pro-components-exception-index-content',
      desc: 'antd-pro-components-exception-index-desc',
      actions: 'antd-pro-components-exception-index-actions'
    }
  }, 174: function(e, t, a) {
    'use strict'

    function n (e) {
      var t = e.split('/').filter(function(e) {
        return e
      })
      return t.map(function(e, a) {
        return '/'.concat(t.slice(0, a + 1).join('/'))
      })
    }

    a.d(t, 'a', function() {
      return n
    })
  }, 190: function(e, t, a) {
    e.exports = {
      popover: 'antd-pro-components-notice-icon-index-popover',
      noticeButton: 'antd-pro-components-notice-icon-index-noticeButton',
      icon: 'antd-pro-components-notice-icon-index-icon',
      tabs: 'antd-pro-components-notice-icon-index-tabs'
    }
  }, 216: function(e, t, a) {
    e.exports = a.p + 'static/media/logo.b29324c4.svg'
  }, 217: function(e, t, a) {
    e.exports = {
      filterDropdown: 'antd-pro-containers-websites-all-styles-filterDropdown',
      btn: 'antd-pro-containers-websites-all-styles-btn'
    }
  }, 279: function(e, t, a) {
    e.exports = {
      main: 'antd-pro-components-page-header-wrapper-grid-content-main',
      wide: 'antd-pro-components-page-header-wrapper-grid-content-wide'
    }
  }, 280: function(e, t, a) {
    e.exports = {
      globalFooter: 'antd-pro-components-global-footer-index-globalFooter',
      links: 'antd-pro-components-global-footer-index-links',
      copyright: 'antd-pro-components-global-footer-index-copyright'
    }
  }, 281: function(e, t, a) {
    e.exports = {
      headerSearch: 'antd-pro-components-header-search-index-headerSearch',
      input: 'antd-pro-components-header-search-index-input',
      show: 'antd-pro-components-header-search-index-show'
    }
  }, 282: function(e, t, a) {
    e.exports = {
      main: 'antd-pro-containers-login-login-main',
      icon: 'antd-pro-containers-login-login-icon',
      other: 'antd-pro-containers-login-login-other',
      register: 'antd-pro-containers-login-login-register',
      forgot: 'antd-pro-containers-login-login-forgot',
      button: 'antd-pro-containers-login-login-button'
    }
  }, 566: function(e, t, a) {
  }, 575: function(e, t, a) {
    e.exports = { content: 'antd-pro-components-page-header-wrapper-index-content' }
  }, 593: function(e, t, a) {
    e.exports = { container: 'antd-pro-components-header-dropdown-index-container' }
  }, 594: function(e, t, a) {
    e.exports = { fixedHeader: 'antd-pro-layouts-header-fixedHeader' }
  }, 597: function(e, t, a) {
    e.exports = { content: 'antd-pro-layouts-basic-layout-content' }
  }, 60: function(e, t, a) {
    e.exports = {
      pageHeader: 'antd-pro-components-page-header-index-pageHeader',
      wide: 'antd-pro-components-page-header-index-wide',
      detail: 'antd-pro-components-page-header-index-detail',
      row: 'antd-pro-components-page-header-index-row',
      breadcrumb: 'antd-pro-components-page-header-index-breadcrumb',
      tabs: 'antd-pro-components-page-header-index-tabs',
      logo: 'antd-pro-components-page-header-index-logo',
      title: 'antd-pro-components-page-header-index-title',
      action: 'antd-pro-components-page-header-index-action',
      content: 'antd-pro-components-page-header-index-content',
      extraContent: 'antd-pro-components-page-header-index-extraContent',
      main: 'antd-pro-components-page-header-index-main'
    }
  }, 609: function(e, t, a) {
    e.exports = a(1352)
  }, 65: function(e, t, a) {
    e.exports = {
      header: 'antd-pro-components-global-header-index-header',
      logo: 'antd-pro-components-global-header-index-logo',
      menu: 'antd-pro-components-global-header-index-menu',
      trigger: 'antd-pro-components-global-header-index-trigger',
      right: 'antd-pro-components-global-header-index-right',
      action: 'antd-pro-components-global-header-index-action',
      search: 'antd-pro-components-global-header-index-search',
      account: 'antd-pro-components-global-header-index-account',
      avatar: 'antd-pro-components-global-header-index-avatar',
      dark: 'antd-pro-components-global-header-index-dark',
      name: 'antd-pro-components-global-header-index-name'
    }
  }, 80: function(e, t, a) {
    e.exports = {
      list: 'antd-pro-components-notice-icon-notice-list-list',
      item: 'antd-pro-components-notice-icon-notice-list-item',
      meta: 'antd-pro-components-notice-icon-notice-list-meta',
      avatar: 'antd-pro-components-notice-icon-notice-list-avatar',
      iconElement: 'antd-pro-components-notice-icon-notice-list-iconElement',
      read: 'antd-pro-components-notice-icon-notice-list-read',
      title: 'antd-pro-components-notice-icon-notice-list-title',
      description: 'antd-pro-components-notice-icon-notice-list-description',
      datetime: 'antd-pro-components-notice-icon-notice-list-datetime',
      extra: 'antd-pro-components-notice-icon-notice-list-extra',
      notFound: 'antd-pro-components-notice-icon-notice-list-notFound',
      clear: 'antd-pro-components-notice-icon-notice-list-clear'
    }
  }
}, [[609, 2, 1]]])
//# sourceMappingURL=main.361ac47a.chunk.js.map