function addInviteMember(){inviteMemberLength<14&&(inviteMemberLength++,$(".invite-list").append(basicInputComponent),resetInviteNumLabel())}function removeInviteMember(e){inviteMemberLength>3&&(inviteMemberLength--,$(".invite-list .normal-input-title:eq("+e+")").remove(),$(".invite-list .normal-input-component:eq("+e+")").remove(),resetInviteNumLabel())}function resetInviteNumLabel(){window.checkAndSetFooterPoint&&checkAndSetFooterPoint(),$(".invite-num").each(function(e){$(this).html(e+1)})}function checkInviteEmail(e){var t=!0;return $(".invite-list").children(".invite-member-email").each(function(){var e=$(this).children("input").val().trim(),i=!1;if(0!==e.length&&Rtool.checkMail(e)&&(i=!0,$(this).children(".normal-input-error-area").html("注册邮箱格式有误").parent().addClass("normal-input-error-area-show")),i||$(this).removeClass("normal-input-error-area-show"),i)return t=!1,!1}),t}var inviteMemberLength=0,basicInputComponent=$(".invite-list").html();$(".invite-list").html("");for(var i=0;i<3;i++)addInviteMember();$(".invite-list").on("blur",".invite-member-email input",function(){checkInviteEmail(!1)}),$(".invite-list").on("keyup",".invite-member-email input",function(e){var t=$(this).index(".invite-member-email input");8===e.keyCode&&t!=inviteMemberLength-1&&""==$(this).val()&&(removeInviteMember(t),$(".invite-member-email input:eq("+t+")").focus()),t+1===inviteMemberLength&&""!=$(this).val()&&addInviteMember()});var shouldInvite=!0;$(".invite-submit").click(function(){if(isProduction?(mixpanel.track("enter button click"),_hmt.push(["_trackEvent","enter button click","Button click"])):console.log("enter button click"),checkInviteEmail(!0)){var e=[];$(".invite-list").children(".invite-member-email").each(function(){var t=$(this).children("input").val().trim();0!==t.length&&e.push(t)}),e.length>0&&shouldInvite?$.ajax({url:"api/project/team/"+window.teamUUID+"/invitations/add_batch",dataType:"json",type:"post",headers:{"ones-auth-token":window.userToken,"ones-user-id":window.userUUID},data:JSON.stringify({emails:e}),contentType:"application/json; charset=utf-8",success:function(e){isProduction?(mixpanel.track("invite people"),_hmt.push(["_trackEvent","invite people","Effective number"])):console.log("invite people"),location.href="https://ones.ai/project/#/home",registable=!0},error:function(e){toastError("服务器申请人数过多,请稍后再试。")}}):0===e.length&&(location.href="https://ones.ai/project/#/home")}});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZ25fdXBfaW52aXRlLmpzIl0sIm5hbWVzIjpbImFkZEludml0ZU1lbWJlciIsImludml0ZU1lbWJlckxlbmd0aCIsIiQiLCJhcHBlbmQiLCJiYXNpY0lucHV0Q29tcG9uZW50IiwicmVzZXRJbnZpdGVOdW1MYWJlbCIsInJlbW92ZUludml0ZU1lbWJlciIsImluZGV4IiwicmVtb3ZlIiwid2luZG93IiwiY2hlY2tBbmRTZXRGb290ZXJQb2ludCIsImVhY2giLCJpIiwidGhpcyIsImh0bWwiLCJjaGVja0ludml0ZUVtYWlsIiwiaXNTdWJtaXQiLCJzaG91bGRTdWJtaXQiLCJjaGlsZHJlbiIsInNpZ25VcEVtYWlsIiwidmFsIiwidHJpbSIsImlzRXJyb3IiLCJsZW5ndGgiLCJSdG9vbCIsImNoZWNrTWFpbCIsInBhcmVudCIsImFkZENsYXNzIiwicmVtb3ZlQ2xhc3MiLCJvbiIsImUiLCJpbnB1dEluZGV4Iiwia2V5Q29kZSIsImZvY3VzIiwic2hvdWxkSW52aXRlIiwiY2xpY2siLCJpc1Byb2R1Y3Rpb24iLCJtaXhwYW5lbCIsInRyYWNrIiwiX2htdCIsInB1c2giLCJjb25zb2xlIiwibG9nIiwiZW1haWxBcnJheSIsImFqYXgiLCJ1cmwiLCJ0ZWFtVVVJRCIsImRhdGFUeXBlIiwidHlwZSIsImhlYWRlcnMiLCJvbmVzLWF1dGgtdG9rZW4iLCJ1c2VyVG9rZW4iLCJvbmVzLXVzZXItaWQiLCJ1c2VyVVVJRCIsImRhdGEiLCJKU09OIiwic3RyaW5naWZ5IiwiZW1haWxzIiwiY29udGVudFR5cGUiLCJzdWNjZXNzIiwibG9jYXRpb24iLCJocmVmIiwicmVnaXN0YWJsZSIsImVycm9yIiwidG9hc3RFcnJvciJdLCJtYXBwaW5ncyI6IkFBSUEsU0FBU0Esa0JBQ0hDLG1CQUFxQixLQUN2QkEscUJBQ0FDLEVBQUUsZ0JBQWdCQyxPQUFPQyxxQkFDekJDLHVCQUdKLFNBQVNDLG1CQUFtQkMsR0FDdEJOLG1CQUFxQixJQUN2QkEscUJBQ0FDLEVBQUUsdUNBQXVDSyxFQUFNLEtBQUtDLFNBQ3BETixFQUFFLDJDQUEyQ0ssRUFBTSxLQUFLQyxTQUN4REgsdUJBR0osU0FBU0Esc0JBQ1BJLE9BQU9DLHdCQUEwQkEseUJBQ2pDUixFQUFFLGVBQWVTLEtBQUssU0FBU0MsR0FDN0JWLEVBQUVXLE1BQU1DLEtBQUtGLEVBQUUsS0EwQm5CLFNBQVNHLGlCQUFpQkMsR0FDeEIsSUFBSUMsR0FBZSxFQXFCbkIsT0FwQkFmLEVBQUUsZ0JBQWdCZ0IsU0FBUyx3QkFBd0JQLEtBQUssV0FDdEQsSUFBSVEsRUFBY2pCLEVBQUVXLE1BQU1LLFNBQVMsU0FBU0UsTUFBTUMsT0FDOUNDLEdBQVUsRUFhZCxHQVoyQixJQUF2QkgsRUFBWUksUUFBZ0JDLE1BQU1DLFVBQVVOLEtBQzlDRyxHQUFVLEVBQ1ZwQixFQUFFVyxNQUNDSyxTQUFTLDRCQUNUSixLQUFLLFlBQ0xZLFNBQ0FDLFNBQVMsaUNBRVRMLEdBQ0hwQixFQUFFVyxNQUNDZSxZQUFZLGdDQUVkTixFQUVELE9BREFMLEdBQWUsR0FDUixJQUdKQSxFQXRFVCxJQUFJaEIsbUJBQXFCLEVBQ3JCRyxvQkFBc0JGLEVBQUUsZ0JBQWdCWSxPQXlCNUNaLEVBQUUsZ0JBQWdCWSxLQUFLLElBQ3ZCLElBQUssSUFBSUYsRUFBRSxFQUFFQSxFQUFFLEVBQUVBLElBQ2ZaLGtCQUdGRSxFQUFFLGdCQUFnQjJCLEdBQUcsT0FBTyw2QkFBNkIsV0FDdkRkLGtCQUFpQixLQUduQmIsRUFBRSxnQkFBZ0IyQixHQUFHLFFBQVEsNkJBQTZCLFNBQVNDLEdBQ2pFLElBQUlDLEVBQWE3QixFQUFFVyxNQUFNTixNQUFNLDhCQUNiLElBQWR1QixFQUFFRSxTQUNERCxHQUFjOUIsbUJBQXFCLEdBQ2xCLElBQWpCQyxFQUFFVyxNQUFNTyxRQUNYZCxtQkFBbUJ5QixHQUNuQjdCLEVBQUUsaUNBQWlDNkIsRUFBVyxLQUFLRSxTQUVqREYsRUFBYSxJQUFNOUIsb0JBQXVDLElBQWpCQyxFQUFFVyxNQUFNTyxPQUNuRHBCLG9CQTRCSixJQUFJa0MsY0FBZSxFQUNuQmhDLEVBQUUsa0JBQWtCaUMsTUFBTSxXQU94QixHQU5HQyxjQUNEQyxTQUFTQyxNQUFNLHNCQUNmQyxLQUFLQyxNQUFNLGNBQWUscUJBQXNCLGtCQUVoREMsUUFBUUMsSUFBSSxzQkFFWDNCLGtCQUFpQixHQUFNLENBQ3hCLElBQUk0QixLQUNKekMsRUFBRSxnQkFBZ0JnQixTQUFTLHdCQUF3QlAsS0FBSyxXQUN0RCxJQUFJUSxFQUFjakIsRUFBRVcsTUFBTUssU0FBUyxTQUFTRSxNQUFNQyxPQUN2QixJQUF2QkYsRUFBWUksUUFDZG9CLEVBQVdILEtBQUtyQixLQUdqQndCLEVBQVdwQixPQUFPLEdBQUtXLGFBQ3hCaEMsRUFBRTBDLE1BQ0FDLElBQUksb0JBQXNCcEMsT0FBT3FDLFNBQVcseUJBQzVDQyxTQUFTLE9BQ1RDLEtBQU0sT0FDTkMsU0FDRUMsa0JBQWtCekMsT0FBTzBDLFVBQ3pCQyxlQUFlM0MsT0FBTzRDLFVBRXhCQyxLQUFLQyxLQUFLQyxXQUNSQyxPQUFRZCxJQUVWZSxZQUFhLGtDQUNiQyxRQUFRLFNBQVNMLEdBRVpsQixjQUNEQyxTQUFTQyxNQUFNLGlCQUNmQyxLQUFLQyxNQUFNLGNBQWUsZ0JBQWlCLHNCQUUzQ0MsUUFBUUMsSUFBSSxpQkFFZGtCLFNBQVNDLEtBQUssaUNBQ2RDLFlBQWEsR0FFZkMsTUFBTSxTQUFTVCxHQUNiVSxXQUFXLHVCQUdlLElBQXJCckIsRUFBV3BCLFNBQ3BCcUMsU0FBU0MsS0FBSyIsImZpbGUiOiJzaWduX3VwX2ludml0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBpbnZpdGVNZW1iZXJMZW5ndGggPSAwO1xudmFyIGJhc2ljSW5wdXRDb21wb25lbnQgPSAkKFwiLmludml0ZS1saXN0XCIpLmh0bWwoKTtcblxuXG5mdW5jdGlvbiBhZGRJbnZpdGVNZW1iZXIoKXtcbiAgaWYgKGludml0ZU1lbWJlckxlbmd0aCA8IDE0KXtcbiAgICBpbnZpdGVNZW1iZXJMZW5ndGgrKztcbiAgICAkKFwiLmludml0ZS1saXN0XCIpLmFwcGVuZChiYXNpY0lucHV0Q29tcG9uZW50KTtcbiAgICByZXNldEludml0ZU51bUxhYmVsKCk7XG4gIH1cbn1cbmZ1bmN0aW9uIHJlbW92ZUludml0ZU1lbWJlcihpbmRleCl7XG4gIGlmIChpbnZpdGVNZW1iZXJMZW5ndGggPiAzKXtcbiAgICBpbnZpdGVNZW1iZXJMZW5ndGggLS0gO1xuICAgICQoXCIuaW52aXRlLWxpc3QgLm5vcm1hbC1pbnB1dC10aXRsZTplcShcIitpbmRleCtcIilcIikucmVtb3ZlKCk7XG4gICAgJChcIi5pbnZpdGUtbGlzdCAubm9ybWFsLWlucHV0LWNvbXBvbmVudDplcShcIitpbmRleCtcIilcIikucmVtb3ZlKCk7XG4gICAgcmVzZXRJbnZpdGVOdW1MYWJlbCgpO1xuICB9XG59XG5mdW5jdGlvbiByZXNldEludml0ZU51bUxhYmVsKCl7XG4gIHdpbmRvdy5jaGVja0FuZFNldEZvb3RlclBvaW50ICYmIGNoZWNrQW5kU2V0Rm9vdGVyUG9pbnQoKTtcbiAgJChcIi5pbnZpdGUtbnVtXCIpLmVhY2goZnVuY3Rpb24oaSl7XG4gICAgJCh0aGlzKS5odG1sKGkrMSk7XG4gIH0pXG59XG5cbiQoXCIuaW52aXRlLWxpc3RcIikuaHRtbChcIlwiKTtcbmZvciAodmFyIGk9MDtpPDM7aSsrKXtcbiAgYWRkSW52aXRlTWVtYmVyKCk7XG59XG5cbiQoXCIuaW52aXRlLWxpc3RcIikub24oJ2JsdXInLCcuaW52aXRlLW1lbWJlci1lbWFpbCBpbnB1dCcsZnVuY3Rpb24oKXtcbiAgY2hlY2tJbnZpdGVFbWFpbChmYWxzZSk7XG59KVxuXG4kKFwiLmludml0ZS1saXN0XCIpLm9uKCdrZXl1cCcsJy5pbnZpdGUtbWVtYmVyLWVtYWlsIGlucHV0JyxmdW5jdGlvbihlKXtcbiAgdmFyIGlucHV0SW5kZXggPSAkKHRoaXMpLmluZGV4KFwiLmludml0ZS1tZW1iZXItZW1haWwgaW5wdXRcIik7XG4gIGlmIChlLmtleUNvZGUgPT09IDhcbiAgICAmJiBpbnB1dEluZGV4ICE9IGludml0ZU1lbWJlckxlbmd0aCAtIDFcbiAgICAmJiAkKHRoaXMpLnZhbCgpID09ICcnKSB7XG4gICAgcmVtb3ZlSW52aXRlTWVtYmVyKGlucHV0SW5kZXgpO1xuICAgICQoXCIuaW52aXRlLW1lbWJlci1lbWFpbCBpbnB1dDplcShcIitpbnB1dEluZGV4K1wiKVwiKS5mb2N1cygpO1xuICB9XG4gIGlmIChpbnB1dEluZGV4ICsgMSA9PT0gaW52aXRlTWVtYmVyTGVuZ3RoICYmICQodGhpcykudmFsKCkgIT0gJycpIHtcbiAgICBhZGRJbnZpdGVNZW1iZXIoKTtcbiAgfVxufSlcblxuZnVuY3Rpb24gY2hlY2tJbnZpdGVFbWFpbChpc1N1Ym1pdCl7XG4gIHZhciBzaG91bGRTdWJtaXQgPSB0cnVlO1xuICAkKFwiLmludml0ZS1saXN0XCIpLmNoaWxkcmVuKFwiLmludml0ZS1tZW1iZXItZW1haWxcIikuZWFjaChmdW5jdGlvbigpe1xuICAgIHZhciBzaWduVXBFbWFpbCA9ICQodGhpcykuY2hpbGRyZW4oJ2lucHV0JykudmFsKCkudHJpbSgpO1xuICAgIHZhciBpc0Vycm9yID0gZmFsc2U7XG4gICAgaWYgKHNpZ25VcEVtYWlsLmxlbmd0aCAhPT0gMCAmJiBSdG9vbC5jaGVja01haWwoc2lnblVwRW1haWwpKSB7XG4gICAgICBpc0Vycm9yID0gdHJ1ZTtcbiAgICAgICQodGhpcylcbiAgICAgICAgLmNoaWxkcmVuKFwiLm5vcm1hbC1pbnB1dC1lcnJvci1hcmVhXCIpXG4gICAgICAgIC5odG1sKFwi5rOo5YaM6YKu566x5qC85byP5pyJ6K+vXCIpXG4gICAgICAgIC5wYXJlbnQoKVxuICAgICAgICAuYWRkQ2xhc3MoXCJub3JtYWwtaW5wdXQtZXJyb3ItYXJlYS1zaG93XCIpXG4gICAgfVxuICAgIGlmICghaXNFcnJvcil7XG4gICAgICAkKHRoaXMpXG4gICAgICAgIC5yZW1vdmVDbGFzcyhcIm5vcm1hbC1pbnB1dC1lcnJvci1hcmVhLXNob3dcIilcbiAgICB9XG4gICAgaWYoaXNFcnJvcil7XG4gICAgICBzaG91bGRTdWJtaXQgPSBmYWxzZTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH0pXG4gIHJldHVybiBzaG91bGRTdWJtaXQ7XG59XG52YXIgc2hvdWxkSW52aXRlID0gdHJ1ZTtcbiQoXCIuaW52aXRlLXN1Ym1pdFwiKS5jbGljayhmdW5jdGlvbigpe1xuICBpZihpc1Byb2R1Y3Rpb24pIHtcbiAgICBtaXhwYW5lbC50cmFjayhcImVudGVyIGJ1dHRvbiBjbGlja1wiKTtcbiAgICBfaG10LnB1c2goWydfdHJhY2tFdmVudCcsICdlbnRlciBidXR0b24gY2xpY2snLCAnQnV0dG9uIGNsaWNrJ10pXG4gIH1lbHNlIHtcbiAgICBjb25zb2xlLmxvZyhcImVudGVyIGJ1dHRvbiBjbGlja1wiKVxuICB9XG4gIGlmKGNoZWNrSW52aXRlRW1haWwodHJ1ZSkpe1xuICAgIHZhciBlbWFpbEFycmF5ID0gW107XG4gICAgJChcIi5pbnZpdGUtbGlzdFwiKS5jaGlsZHJlbihcIi5pbnZpdGUtbWVtYmVyLWVtYWlsXCIpLmVhY2goZnVuY3Rpb24oKXtcbiAgICAgIHZhciBzaWduVXBFbWFpbCA9ICQodGhpcykuY2hpbGRyZW4oJ2lucHV0JykudmFsKCkudHJpbSgpO1xuICAgICAgaWYgKHNpZ25VcEVtYWlsLmxlbmd0aCAhPT0gMCkge1xuICAgICAgICBlbWFpbEFycmF5LnB1c2goc2lnblVwRW1haWwpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGlmKGVtYWlsQXJyYXkubGVuZ3RoPjAgJiYgc2hvdWxkSW52aXRlKXtcbiAgICAgICQuYWpheCh7XG4gICAgICAgIHVybDpcImFwaS9wcm9qZWN0L3RlYW0vXCIgKyB3aW5kb3cudGVhbVVVSUQgKyBcIi9pbnZpdGF0aW9ucy9hZGRfYmF0Y2hcIixcbiAgICAgICAgZGF0YVR5cGU6XCJqc29uXCIsXG4gICAgICAgIHR5cGU6ICdwb3N0JyxcbiAgICAgICAgaGVhZGVyczp7XG4gICAgICAgICAgXCJvbmVzLWF1dGgtdG9rZW5cIjp3aW5kb3cudXNlclRva2VuLFxuICAgICAgICAgIFwib25lcy11c2VyLWlkXCI6d2luZG93LnVzZXJVVUlELFxuICAgICAgICB9LFxuICAgICAgICBkYXRhOkpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICBlbWFpbHM6IGVtYWlsQXJyYXksXG4gICAgICAgIH0pLFxuICAgICAgICBjb250ZW50VHlwZTogXCJhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04XCIsXG4gICAgICAgIHN1Y2Nlc3M6ZnVuY3Rpb24oZGF0YSl7XG5cbiAgICAgICAgICBpZihpc1Byb2R1Y3Rpb24pIHtcbiAgICAgICAgICAgIG1peHBhbmVsLnRyYWNrKFwiaW52aXRlIHBlb3BsZVwiKTtcbiAgICAgICAgICAgIF9obXQucHVzaChbJ190cmFja0V2ZW50JywgJ2ludml0ZSBwZW9wbGUnLCAnRWZmZWN0aXZlIG51bWJlciddKVxuICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJpbnZpdGUgcGVvcGxlXCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBsb2NhdGlvbi5ocmVmPSdodHRwczovL29uZXMuYWkvcHJvamVjdC8jL2hvbWUnO1xuICAgICAgICAgIHJlZ2lzdGFibGUgPSB0cnVlO1xuICAgICAgICB9LFxuICAgICAgICBlcnJvcjpmdW5jdGlvbihkYXRhKXtcbiAgICAgICAgICB0b2FzdEVycm9yKFwi5pyN5Yqh5Zmo55Sz6K+35Lq65pWw6L+H5aSaLOivt+eojeWQjuWGjeivleOAglwiKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0gZWxzZSBpZiAoZW1haWxBcnJheS5sZW5ndGggPT09MCkge1xuICAgICAgbG9jYXRpb24uaHJlZj0naHR0cHM6Ly9vbmVzLmFpL3Byb2plY3QvIy9ob21lJztcbiAgICB9XG4gIH1cbn0pIl19