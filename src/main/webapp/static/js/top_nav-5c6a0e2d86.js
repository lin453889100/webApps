function getScrollTop(){var o=0;return document.documentElement&&document.documentElement.scrollTop?o=document.documentElement.scrollTop:document.body&&(o=document.body.scrollTop),o}$(".top-hamburger").click(function(){var o=this;$(".top-nav-ul").hasClass("top-nav-ul-mobile-show")?($(".top-nav-ul").removeClass("top-nav-ul-mobile-show"),$(o).removeClass("top-hamburger-close"),$("body").removeClass("body-overflow-hidden"),$(".mobile-top-registered").removeClass("mobile-top-registered-show"),focusLi=$(".top-nav-ul").attr("data-focus-li")):($(".top-nav-ul").addClass("top-nav-ul-mobile-show"),$(o).addClass("top-hamburger-close"),$("body").addClass("body-overflow-hidden"),$(".mobile-top-registered").addClass("mobile-top-registered-show"),!$(".top-nav-constance").hasClass("white-top-nav")&&$(".top-nav-constance").addClass("white-top-nav"),focusLi="alwaysWhite")}),$("#products").parent(".product-nav-li").hover(function(o){$(".product-nav-dropdown").show(),o.stopPropagation()},function(){"none"!=$("#products").css("display")&&$(".product-nav-dropdown").hide()});var focusLi=$(".top-nav-ul").attr("data-focus-li");$(".top-nav-ul").children().each(function(){$(this).attr("data-focus")===focusLi&&$(this).append('<div class="top-nav-focus-li"></div>')});var oldPoint=0;$(document).scroll(function(){var o=parseInt(getScrollTop()/50);oldPoint<o?getScrollTop()>50&&$(".top-nav-constance").css("top","-120px"):oldPoint>o&&$(".top-nav-constance").css("top","0px"),"alwaysWhite"!==focusLi&&(getScrollTop()>50?$(".top-nav-constance").hasClass("white-top-nav")||$(".top-nav-constance").addClass("white-top-nav"):$(".top-nav-constance").removeClass("white-top-nav")),oldPoint=o});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvcF9uYXYuanMiXSwibmFtZXMiOlsiZ2V0U2Nyb2xsVG9wIiwic2Nyb2xsVG9wIiwiZG9jdW1lbnQiLCJkb2N1bWVudEVsZW1lbnQiLCJib2R5IiwiJCIsImNsaWNrIiwic2VsZiIsInRoaXMiLCJoYXNDbGFzcyIsInJlbW92ZUNsYXNzIiwiZm9jdXNMaSIsImF0dHIiLCJhZGRDbGFzcyIsInBhcmVudCIsImhvdmVyIiwiZSIsInNob3ciLCJzdG9wUHJvcGFnYXRpb24iLCJjc3MiLCJoaWRlIiwiY2hpbGRyZW4iLCJlYWNoIiwiYXBwZW5kIiwib2xkUG9pbnQiLCJzY3JvbGwiLCJub3dQb2ludCIsInBhcnNlSW50Il0sIm1hcHBpbmdzIjoiQUFnQ0EsU0FBU0EsZUFDUCxJQUFJQyxFQUFVLEVBTWQsT0FMR0MsU0FBU0MsaUJBQWlCRCxTQUFTQyxnQkFBZ0JGLFVBQ3BEQSxFQUFVQyxTQUFTQyxnQkFBZ0JGLFVBQzVCQyxTQUFTRSxPQUNoQkgsRUFBVUMsU0FBU0UsS0FBS0gsV0FFbkJBLEVBdkNUSSxFQUFFLGtCQUFrQkMsTUFBTSxXQUN4QixJQUFJQyxFQUFPQyxLQUNSSCxFQUFFLGVBQWVJLFNBQVMsMkJBQzNCSixFQUFFLGVBQWVLLFlBQVksMEJBQzdCTCxFQUFFRSxHQUFNRyxZQUFZLHVCQUNwQkwsRUFBRSxRQUFRSyxZQUFZLHdCQUN0QkwsRUFBRSwwQkFBMEJLLFlBQVksOEJBQ3hDQyxRQUFVTixFQUFFLGVBQWVPLEtBQUssbUJBRWhDUCxFQUFFLGVBQWVRLFNBQVMsMEJBQzFCUixFQUFFRSxHQUFNTSxTQUFTLHVCQUNqQlIsRUFBRSxRQUFRUSxTQUFTLHdCQUNuQlIsRUFBRSwwQkFBMEJRLFNBQVMsK0JBQ3BDUixFQUFFLHNCQUFzQkksU0FBUyxrQkFBb0JKLEVBQUUsc0JBQXNCUSxTQUFTLGlCQUN2RkYsUUFBVSxpQkFHZE4sRUFBRSxhQUFhUyxPQUFPLG1CQUFtQkMsTUFBTSxTQUFTQyxHQUN0RFgsRUFBRSx5QkFBeUJZLE9BQzNCRCxFQUFFRSxtQkFDRixXQUNvQyxRQUFqQ2IsRUFBRSxhQUFhYyxJQUFJLFlBQ3BCZCxFQUFFLHlCQUF5QmUsU0FJL0IsSUFBSVQsUUFBVU4sRUFBRSxlQUFlTyxLQUFLLGlCQUNwQ1AsRUFBRSxlQUFlZ0IsV0FBV0MsS0FBSyxXQUMzQmpCLEVBQUVHLE1BQU1JLEtBQUssZ0JBQWtCRCxTQUNqQ04sRUFBRUcsTUFBTWUsT0FBTywwQ0FhbkIsSUFBSUMsU0FBVyxFQUNmbkIsRUFBRUgsVUFBVXVCLE9BQU8sV0FDakIsSUFBSUMsRUFBV0MsU0FBUzNCLGVBQWUsSUFDakN3QixTQUFXRSxFQUNUMUIsZUFBaUIsSUFDbkJLLEVBQUUsc0JBQXNCYyxJQUFJLE1BQU8sVUFFNUJLLFNBQVdFLEdBQ3BCckIsRUFBRSxzQkFBc0JjLElBQUksTUFBTyxPQUd4QixnQkFBWlIsVUFDR1gsZUFBaUIsR0FDZkssRUFBRSxzQkFBc0JJLFNBQVMsa0JBQ25DSixFQUFFLHNCQUFzQlEsU0FBUyxpQkFHbkNSLEVBQUUsc0JBQXNCSyxZQUFZLGtCQUd4Q2MsU0FBV0UiLCJmaWxlIjoidG9wX25hdi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiQoXCIudG9wLWhhbWJ1cmdlclwiKS5jbGljayhmdW5jdGlvbigpe1xuICB2YXIgc2VsZiA9IHRoaXM7XG4gIGlmKCQoXCIudG9wLW5hdi11bFwiKS5oYXNDbGFzcyhcInRvcC1uYXYtdWwtbW9iaWxlLXNob3dcIikpe1xuICAgICQoXCIudG9wLW5hdi11bFwiKS5yZW1vdmVDbGFzcyhcInRvcC1uYXYtdWwtbW9iaWxlLXNob3dcIik7XG4gICAgJChzZWxmKS5yZW1vdmVDbGFzcyhcInRvcC1oYW1idXJnZXItY2xvc2VcIik7XG4gICAgJChcImJvZHlcIikucmVtb3ZlQ2xhc3MoXCJib2R5LW92ZXJmbG93LWhpZGRlblwiKTtcbiAgICAkKFwiLm1vYmlsZS10b3AtcmVnaXN0ZXJlZFwiKS5yZW1vdmVDbGFzcygnbW9iaWxlLXRvcC1yZWdpc3RlcmVkLXNob3cnKTtcbiAgICBmb2N1c0xpID0gJChcIi50b3AtbmF2LXVsXCIpLmF0dHIoXCJkYXRhLWZvY3VzLWxpXCIpO1xuICB9IGVsc2Uge1xuICAgICQoXCIudG9wLW5hdi11bFwiKS5hZGRDbGFzcyhcInRvcC1uYXYtdWwtbW9iaWxlLXNob3dcIilcbiAgICAkKHNlbGYpLmFkZENsYXNzKFwidG9wLWhhbWJ1cmdlci1jbG9zZVwiKTtcbiAgICAkKFwiYm9keVwiKS5hZGRDbGFzcyhcImJvZHktb3ZlcmZsb3ctaGlkZGVuXCIpO1xuICAgICQoXCIubW9iaWxlLXRvcC1yZWdpc3RlcmVkXCIpLmFkZENsYXNzKCdtb2JpbGUtdG9wLXJlZ2lzdGVyZWQtc2hvdycpO1xuICAgICEkKFwiLnRvcC1uYXYtY29uc3RhbmNlXCIpLmhhc0NsYXNzKFwid2hpdGUtdG9wLW5hdlwiKSAmJiAkKFwiLnRvcC1uYXYtY29uc3RhbmNlXCIpLmFkZENsYXNzKFwid2hpdGUtdG9wLW5hdlwiKTtcbiAgICBmb2N1c0xpID0gJ2Fsd2F5c1doaXRlJztcbiAgfVxufSk7XG4kKFwiI3Byb2R1Y3RzXCIpLnBhcmVudChcIi5wcm9kdWN0LW5hdi1saVwiKS5ob3ZlcihmdW5jdGlvbihlKXtcbiAgJChcIi5wcm9kdWN0LW5hdi1kcm9wZG93blwiKS5zaG93KCk7XG4gIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG59LGZ1bmN0aW9uKCl7XG4gIGlmKCQoXCIjcHJvZHVjdHNcIikuY3NzKFwiZGlzcGxheVwiKSAhPSAnbm9uZScpe1xuICAgICQoXCIucHJvZHVjdC1uYXYtZHJvcGRvd25cIikuaGlkZSgpO1xuICB9XG59KVxuXG52YXIgZm9jdXNMaSA9ICQoXCIudG9wLW5hdi11bFwiKS5hdHRyKFwiZGF0YS1mb2N1cy1saVwiKTtcbiQoXCIudG9wLW5hdi11bFwiKS5jaGlsZHJlbigpLmVhY2goZnVuY3Rpb24oKXtcbiAgaWYgKCQodGhpcykuYXR0cihcImRhdGEtZm9jdXNcIikgPT09IGZvY3VzTGkpe1xuICAgICQodGhpcykuYXBwZW5kKCc8ZGl2IGNsYXNzPVwidG9wLW5hdi1mb2N1cy1saVwiPjwvZGl2PicpO1xuICB9XG59KVxuZnVuY3Rpb24gZ2V0U2Nyb2xsVG9wKCl7XG4gIHZhciBzY3JvbGxUb3A9MDtcbiAgaWYoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50JiZkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wKXtcbiAgICBzY3JvbGxUb3A9ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcDtcbiAgfWVsc2UgaWYoZG9jdW1lbnQuYm9keSl7XG4gICAgc2Nyb2xsVG9wPWRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wO1xuICB9XG4gIHJldHVybiBzY3JvbGxUb3A7XG59XG5cbnZhciBvbGRQb2ludCA9IDA7XG4kKGRvY3VtZW50KS5zY3JvbGwoZnVuY3Rpb24oKXtcbiAgdmFyIG5vd1BvaW50ID0gcGFyc2VJbnQoZ2V0U2Nyb2xsVG9wKCkvNTApO1xuICAgIGlmIChvbGRQb2ludCA8IG5vd1BvaW50KSB7XG4gICAgICBpZiAoZ2V0U2Nyb2xsVG9wKCkgPiA1MCkge1xuICAgICAgICAkKFwiLnRvcC1uYXYtY29uc3RhbmNlXCIpLmNzcyhcInRvcFwiLCBcIi0xMjBweFwiKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKG9sZFBvaW50ID4gbm93UG9pbnQpIHtcbiAgICAgICQoXCIudG9wLW5hdi1jb25zdGFuY2VcIikuY3NzKFwidG9wXCIsIFwiMHB4XCIpO1xuICAgIH1cblxuICBpZihmb2N1c0xpICE9PSAnYWx3YXlzV2hpdGUnKXtcbiAgICBpZiAoZ2V0U2Nyb2xsVG9wKCkgPiA1MCApIHtcbiAgICAgIGlmKCEkKFwiLnRvcC1uYXYtY29uc3RhbmNlXCIpLmhhc0NsYXNzKFwid2hpdGUtdG9wLW5hdlwiKSl7XG4gICAgICAgICQoXCIudG9wLW5hdi1jb25zdGFuY2VcIikuYWRkQ2xhc3MoXCJ3aGl0ZS10b3AtbmF2XCIpO1xuICAgICAgfVxuICAgIH1lbHNle1xuICAgICAgJChcIi50b3AtbmF2LWNvbnN0YW5jZVwiKS5yZW1vdmVDbGFzcyhcIndoaXRlLXRvcC1uYXZcIik7XG4gICAgfVxuICB9XG4gIG9sZFBvaW50ID0gbm93UG9pbnQ7XG59KVxuXG4iXX0=