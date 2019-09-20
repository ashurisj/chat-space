json.array! @users do |user|
  json.user_id user.user.id
  json.user_name @users.user.name
end