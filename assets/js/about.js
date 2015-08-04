$(function() {

    $("[data-toggle='collapse']").on("click", function (e) {
        e.preventDefault();
        var id = $('.v-icon[data-target="' + $(this).attr("data-target") + '"]');
        var icon = $(id).children("i");
        if (/fa-minus/i.test($(icon).attr("class"))) {
            $(icon).removeClass("fa-minus").addClass("fa-plus");
        }
        else {
            $(icon).removeClass("fa-plus").addClass("fa-minus");
        }
    });

    $(".dial").knob({
        draw : function () {
            // "tron" case
            if(this.$.data('skin') == 'tron') {

                var a = this.angle(this.cv)  		// Angle
                    , sa = this.startAngle          // Previous start angle
                    , sat = this.startAngle         // Start angle
                    , ea                            // Previous end angle
                    , eat = sat + a                 // End angle
                    , r = true;

                this.g.lineWidth = this.lineWidth;

                this.o.cursor
                && (sat = eat - 0.3)
                && (eat = eat + 0.3);

                if (this.o.displayPrevious) {
                    ea = this.startAngle + this.angle(this.value);
                    this.o.cursor
                    && (sa = ea - 0.3)
                    && (ea = ea + 0.3);
                    this.g.beginPath();
                    this.g.strokeStyle = this.previousColor;
                    this.g.arc(this.xy, this.xy, this.radius - this.lineWidth, sa, ea, false);
                    this.g.stroke();
                }

                this.g.beginPath();
                this.g.strokeStyle = r ? this.o.fgColor : this.fgColor ;
                this.g.arc(this.xy, this.xy, this.radius - this.lineWidth, sat, eat, false);
                this.g.stroke();

                this.g.lineWidth = 2;
                this.g.beginPath();
                this.g.strokeStyle = this.o.fgColor;
                this.g.arc(this.xy, this.xy, this.radius - this.lineWidth + 1 + this.lineWidth * 2 / 3, 0, 2 * Math.PI, false);
                this.g.stroke();

                return false;
            }
        }
    });

});

$(window).load(function() {

    // Animate knob filling on tablets and wider devices
    if(Modernizr.mq('(min-width: 768px)'))
    {
        $('.dial').each(function(i, e) {
            var aimedValue = $(e).val();
            $(e).val(0).trigger('change');
            new Waypoint({
                element: document.getElementById('languages'),
                offset: 'bottom-in-view',
                handler: function(d) {
                    $({value: 0}).animate({value: aimedValue}, {
                        duration: 2000,
                        easing: 'swing',
                        step: function()
                        {
                            $(e).val(Math.ceil(this.value)).trigger('change');
                        },
                        always: function() {
                            //$(e).val(aimedValue).trigger('change');
                        }
                    });
                    this.destroy();
                }
            });
        });
    }

});