# README

## groups_usersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|
<!-- |message_id|integer|null: false, foreign_key: true| -->

### Association
- belongs_to :group
- belongs_to :user
<!-- - belongs_to :message -->


## usersテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null: false, index|
|Email|text|null: false, foreign_key: true|

### Association
- has_many :groups_users
- has_many :messages


## groupsテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null: false|

### Association
- has_many :groups_users
- has_many :messages


## messagesテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|
|message|text||
|image|text||

### Association
- belongs_to :user
- belongs_to :group



<!-- This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ... -->
