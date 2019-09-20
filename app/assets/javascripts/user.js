$(document).on('turbolinks:load', function(){ 
  $(document).on('keyup', '#user-search-field', function(e){ 
    e.preventDefault(); 
    var input = $.trim($(this).val());
    $.ajax({
      url: '/groups/edit',
      type: "GET",
      data: { keyword: input },
      dataType: 'json',
      processData: false,
      contentType: false,
    })
  });
});
