$(document).on('turbolinks:load', function(){

  var search_list = $("#user-search-result");
  var member_list = $(".chat-group-users");

  function appendUser(user) {
    var html = 
      `<div class="chat-group-user clearfix">
        <p class="chat-group-user__name">${user.name}</p>
        <a class="user-search-add chat-group-user__btn chat-group-user__btn--add" data-user-id="${user.id}" data-user-name="${user.name}">追加</a>
      </div>`
    search_list.append(html);
  }

  function appendErrorMessageToHTML(err_msg) {
    var html = 
      `<div class="chat-group-user clearfix">${err_msg}</div>`;
    search_list.append(html);
  }

  function appendMembers(name, user_id) {
    var html =
      `<div class='chat-group-user'>
        <input name='group[user_ids][]' type='hidden' value=${user_id}>
        <p class='chat-group-user__name'>${name}</p>
        <a class='user-search-remove chat-group-user__btn chat-group-user__btn--remove js-remove-btn' data-user-id="${user_id}" data-user-name="${name}">削除</a>
      </div>`
    member_list.append(html);
  }
  
  $('#user-search-field').on('keyup', function(e) {
    e.preventDefault();
    var input = $('#user-search-field').val();
    $.ajax({
      type: 'GET',
      url: '/users/search',
      data: { keyword: input },
      dataType: 'json',
    })
      .done(function(users){
        if (input.length === 0) {
          $('#user-search-result').empty();
        }
        else if (users.length !== 0) { 
          users.forEach(function(user){
            appendUser(user)
          });
        }
        else {
          appendErrorMessageToHTML("一致するユーザーがありません");
        }
      })
      .fail(function() {
        alert('ユーザー検索に失敗');
      });
  });

  $(function(){
    $(document).on("click", '.user-search-add', function(e) {
      e.preventDefault();
      var name = $(this).data("user-name");
      var user_id = $(this).data("user-id");
      $("#member-search-result").unwrap();
      appendMembers(name, user_id);
      $(this).parent().remove();
    });
    $(document).on("click", '.user-search-remove', function(e){
      e.preventDefault();
      $(this).parent().remove();
    });
  });
});
