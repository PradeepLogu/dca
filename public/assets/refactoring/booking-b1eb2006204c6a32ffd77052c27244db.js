(function(){this.module("Dchq",function(){return this.module("Booking",function(){return this.module("Step_1",function(){var e,t,i,a;return this.init=function(){var n;return $("#event_customer_participant_id, #kit_hire_select, #insurance_select, .additionals select, .transports select").change(function(){return t()}),a(),$("#check-cert-for-step1").click(function(e){return e.preventDefault(),$.post(Routes.check_certificate_customers_path({format:"js"}),{email:$("#customer_email").val(),public_key:$("#public_key").val()})}),$(".btn.btn-primary.btn-icon.glyphicons.stripe").click(function(){var t;return t=$(this).closest("form"),t.find("button").prop("disabled",!0),Stripe.createToken(t,e),!1}),n=$(".original_certification_levels").html(),$("#certification_agency_id").live("change",function(){var e;return e=$("#certification_level_id"),i(e,n)})},i=function(e,t){var i,a;return i=$(e).closest(".row-fluid").find("#certification_agency_id :selected").text(),a=$(t).filter("optgroup[label='"+i+"']").html(),$(e).html(a),$(e).selectpicker("refresh").selectpicker("val",$(e).data("selected"))},e=function(e,t){var i,a;i=$("form.ecp_form"),t.error?($(".alert.alert-error").remove(),i.prepend("<div class='alert alert-error' id='alert alert-error'><button class='close' data-dismiss='alert'>\xd7</button><h4>There was an issue processing this payment:</h4><ul><li>"+t.error.message+"</li></ul></div>"),i.find("button").prop("disabled",!1)):(a=t.id,i.append($('<input type="hidden" name="stripe_card_token" />').val(a)),i.get(0).submit())},t=function(){var e;return e=$(".ecp_form"),$.ajax({url:"/bookings/calculate_price.json",data:e.serialize().replace(/&_method=[a-z]+/,""),type:"POST",success:function(e){return e.errors?alert(errors):($("#insurance").html(e.insurance),$("#kit_hire").html(e.kit_hire),$("#transport").html(e.transport),$("#additionals").html(e.additionals),$("#discount").html(e.discount),$("#event_text_price").html(e.event_text_price),$("#total_price").html(e.total_price))}})},a=function(){var e;return e=/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,e.test($("#customer_email").val())}})})}),$(function(){return $("body.bookings").length?Dchq.Booking.Step_1.init():void 0})}).call(this);