# README

## groups_usersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user


## usersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|name|text|null: false, foreign_key: true|
|Email|text|null: false, foreign_key: true|
|group_id|text|null: false, foreign_key: true|

### Association
- belongs_to :group
- has_many :message


## groupsテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_name|text|null: false, foreign_key: true|
|message|text|null: false, foreign_key: true|
|image|text|null: false, foreign_key: true|

### Association
- has_many :users
- has_many :message

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
