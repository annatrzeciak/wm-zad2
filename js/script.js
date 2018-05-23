$(document).ready(function() {


  if ($(window).width() > 991) {
    panelPadding()
    filesPadding()
  } else {
    containerPadding();
    containerHeight();
  }


});

$(window).resize(function() {

  if ($(window).width() > 991) {
    panelPadding()
    filesPadding()
  } else {
    containerPadding();
    containerHeight();

  }
});


function panelPadding() {
  var panels = $('.panel');
  panels.each(function(index, panel) {
    panel.style.paddingLeft = ($(window).width() - $('.container').width() - 30) / 2 + 'px';
  });
}

function filesPadding() {
  var filesContent = $('.faq-article .files-content');
  filesContent.each(function(index, item) {
    item.style.paddingRight = ($(window).width() - $('.container').width() - 30) / 2 + 'px ';
  })
}

function containerPadding() {
  var filesContent = $('.faq-article .files-content');
  filesContent.each(function(index, item) {
    item.style.paddingRight = ($(window).width() - $('.container').width() - 30) / 2 + 'px ';
    item.style.paddingLeft = ($(window).width() - $('.container').width() - 30) / 2 + 'px ';
  });

  var panels = $('.panel');
  panels.each(function(index, panel) {
    panel.style.paddingLeft = ($(window).width() - $('.container').width() - 30) / 2 + 'px ';
  });
}

function containerHeight() {
  if ((parseInt($('#faq').height())-20) < (parseInt($('#files').height()))) {
    var faq = $('#faq');
    faq.each(function(index, item) {
      item.style.minHeight = ($('#files').height()) + 'px';
    });
  } else {
    var filesContent = $('#files');
    filesContent.each(function(index, item) {
      item.style.minHeight = $('#faq').height() +20+ 'px';
    });
  }
}
$(document).ready(function() {
  $('.panel-collapse').on('show.bs.collapse', function() {
    $(this).parent('.panel').addClass('active');
  });

  $('.panel-collapse').on('hide.bs.collapse', function() {
    $(this).parent('.panel').removeClass('active');
  });
});
