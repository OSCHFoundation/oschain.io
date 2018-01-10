! function(t, i) {
    function n(n, o) {
        function s() {
            this.x = Math.random() * n.width, this.y = Math.random() * n.height, this.vx = r.velocity - .5 * Math.random(), this.vy = r.velocity - .5 * Math.random(), this.radius = Math.random() * r.star.width
        }
        var e = t(n),
            h = n.getContext("2d"),
            a = {
                star: {
                    color: "rgba(224, 224, 224, .7)",
                    width: 1
                },
                line: {
                    color: "rgba(224, 224, 224, .7)",
                    width: .2
                },
                position: {
                    x: 0,
                    y: 0
                },
                width: i.innerWidth,
                height: i.innerHeight,
                velocity: .1,
                length: 100,
                distance: 100,
                radius: 150,
                stars: []
            },
            r = t.extend(!0, {}, a, o);
        s.prototype = {
            create: function() {
                h.beginPath(), h.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, !1), h.fill()
            },
            animate: function() {
                var t;
                for (t = 0; t < r.length; t++) {
                    var i = r.stars[t];
                    i.y < 0 || i.y > n.height ? (i.vx = i.vx, i.vy = -i.vy) : (i.x < 0 || i.x > n.width) && (i.vx = -i.vx, i.vy = i.vy), i.x += i.vx, i.y += i.vy
                }
            },
            line: function() {
                var t, i, n, o, s = r.length;
                for (n = 0; s > n; n++)
                    for (o = 0; s > o; o++) t = r.stars[n], i = r.stars[o], t.x - i.x < r.distance && t.y - i.y < r.distance && t.x - i.x > -r.distance && t.y - i.y > -r.distance && t.x - r.position.x < r.radius && t.y - r.position.y < r.radius && t.x - r.position.x > -r.radius && t.y - r.position.y > -r.radius && (h.beginPath(), h.moveTo(t.x, t.y), h.lineTo(i.x, i.y), h.stroke(), h.closePath())
            }
        }, this.createStars = function() {
            var t, i, o = r.length;
            for (h.clearRect(0, 0, n.width, n.height), i = 0; o > i; i++) r.stars.push(new s), t = r.stars[i], t.create();
            t.line(), t.animate()
        }, this.setCanvas = function() {
            n.width = r.width, n.height = r.height
        }, this.setContext = function() {
            h.fillStyle = r.star.color, h.strokeStyle = r.line.color, h.lineWidth = r.line.width
        }, this.setInitialPosition = function() {
            o && o.hasOwnProperty("position") || (r.position = {
                x: .5 * n.width,
                y: .5 * n.height
            })
        }, this.loop = function(t) {
            t(), i.requestAnimationFrame(function() {
                this.loop(t)
            }.bind(this))
        }, this.bind = function() {
            t(document).on("mousemove", function(t) {
                r.position.x = t.pageX - e.offset().left, r.position.y = t.pageY - e.offset().top
            })
        }, this.init = function() {
            this.setCanvas(), this.setContext(), this.setInitialPosition(), this.loop(this.createStars), this.bind()
        }
    }
    t.fn.constellation = function(t) {
        return this.each(function() {
            var i = new n(this, t);
            i.init()
        })
    }
}($, window);
! function(t, i) {
    function n(n, o) {
        function s() {
            this.x = Math.random() * n.width, this.y = Math.random() * n.height, this.vx = r.velocity - .5 * Math.random(), this.vy = r.velocity - .5 * Math.random(), this.radius = Math.random() * r.star.width
        }
        var e = t(n),
            h = n.getContext("2d"),
            a = {
                star: {
                    color: "rgba(224, 224, 224, .7)",
                    width: 1
                },
                line: {
                    color: "rgba(224, 224, 224, .7)",
                    width: .2
                },
                position: {
                    x: 0,
                    y: 0
                },
                width: i.innerWidth,
                height: i.innerHeight,
                velocity: .1,
                length: 100,
                distance: 100,
                radius: 150,
                stars: []
            },
            r = t.extend(!0, {}, a, o);
        s.prototype = {
            create: function() {
                h.beginPath(), h.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, !1), h.fill()
            },
            animate: function() {
                var t;
                for (t = 0; t < r.length; t++) {
                    var i = r.stars[t];
                    i.y < 0 || i.y > n.height ? (i.vx = i.vx, i.vy = -i.vy) : (i.x < 0 || i.x > n.width) && (i.vx = -i.vx, i.vy = i.vy), i.x += i.vx, i.y += i.vy
                }
            },
            line: function() {
                var t, i, n, o, s = r.length;
                for (n = 0; s > n; n++)
                    for (o = 0; s > o; o++) t = r.stars[n], i = r.stars[o], t.x - i.x < r.distance && t.y - i.y < r.distance && t.x - i.x > -r.distance && t.y - i.y > -r.distance && t.x - r.position.x < r.radius && t.y - r.position.y < r.radius && t.x - r.position.x > -r.radius && t.y - r.position.y > -r.radius && (h.beginPath(), h.moveTo(t.x, t.y), h.lineTo(i.x, i.y), h.stroke(), h.closePath())
            }
        }, this.createStars = function() {
            var t, i, o = r.length;
            for (h.clearRect(0, 0, n.width, n.height), i = 0; o > i; i++) r.stars.push(new s), t = r.stars[i], t.create();
            t.line(), t.animate()
        }, this.setCanvas = function() {
            n.width = r.width, n.height = r.height
        }, this.setContext = function() {
            h.fillStyle = r.star.color, h.strokeStyle = r.line.color, h.lineWidth = r.line.width
        }, this.setInitialPosition = function() {
            o && o.hasOwnProperty("position") || (r.position = {
                x: .5 * n.width,
                y: .5 * n.height
            })
        }, this.loop = function(t) {
            t(), i.requestAnimationFrame(function() {
                this.loop(t)
            }.bind(this))
        }, this.bind = function() {
            t(document).on("mousemove", function(t) {
                r.position.x = t.pageX - e.offset().left, r.position.y = t.pageY - e.offset().top
            })
        }, this.init = function() {
            this.setCanvas(), this.setContext(), this.setInitialPosition(), this.loop(this.createStars), this.bind()
        }
    }
    t.fn.constellation = function(t) {
        return this.each(function() {
            var i = new n(this, t);
            i.init()
        })
    }
}($, window);