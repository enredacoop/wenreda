// Scroll Up Menu
$(function() {
  $('header').scrollUpMenu();
});



// RSS
$("#home-blog-items").rss(
  "http://enreda.coop/feed/",
  {
    limit: 3,
    layoutTemplate: '<div class="row">{entries}</div>',
    entryTemplate: '<div class="col-md-4"><div class="itemnews"><a href="{url}" target="_blank">{title}</a><br/><small>{date}</small><br/><span class="label label-custom">tag</span> <span class="label label-custom">tag</span></div></div>',
    // formats the date with moment.js (optional)
    // default: 'dddd MMM Do'
    // valid values: see http://momentjs.com/docs/#/displaying/
    dateFormat: 'dddd MMM Do',
    // formats the date in whatever manner you choose. (optional)
    // this function should return your formatted date.
    // this is useful if you want to format dates without moment.js.
    // if you don't use moment.js and don't define a dateFormatFunction, the dates will
    // not be formatted; they will appear exactly as the RSS feed gives them to you.
    dateFormatFunction: function(date){
        moment.locale('es'); // change the global locale to Spanish
        return moment(date).format('DD/MM/YYYY');
    },
    // the effect, which is used to let the entries appear
    // default: 'show'
    // valid values: 'show', 'slide', 'slideFast', 'slideSynced', 'slideFastSynced'
    effect: 'slideFastSynced',
    error: function(){},
    success: function(){},
    // a callback, which gets triggered once data was received but before the rendering.
    // this can be useful when you need to remove a spinner or something similar
    onData: function(){ $('#loading-blog-items').hide(); }
  },
  // callback function
  // called after feeds are successfully loaded and after animations are done
  function callback() {}
)
