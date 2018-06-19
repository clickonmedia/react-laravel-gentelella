<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

// more information here
// https://laravel.com/docs/5.6/eloquent

class Post extends Model
{
	/**
	* The table associated with the model.
	*
	* @var string
	*/
	// By convention, the "snake case", plural name of the class will be used as the table name unless another name is explicitly specified.
	protected $table = 'posts';

	/**
	* Indicates if the model should be timestamped.
	*
	* @var bool
	*/
	// By default, Eloquent expects created_at and updated_at columns to exist on your tables.
	//public $timestamps = false;


	// ID BIGINT(20)
	// post_author BIGINT(20)
	// post_date DATETIME
	// post_date_gmt DATETIME
	// post_content LONGTEXT
	// post_title TEXT
	// post_except TEXT
	// post_status VARCHAR(20)
	// comment_status VARCHAR(20)
	// ping_status VARCHAR(20)
	// post_possword VARCHAR(20)
	// post_name VARCHAR(200)
	// to_ping TEXT
	// pinged TEXT
	// post_modified DATETIME
	// post_modified_gmt DATETIME
	// post_content_filtered LONGTEXT
	// post_parent BIGINT(20)
	// guid VARCHAR(255)
	// menu_order INT(11)
	// post_type VARCHAR(20)
	// post_mime_type VARCHAR(100)
	// comment_count BIGNINT(20)

}


class PostMeta extends Model
{
	/**
	* The table associated with the model.
	*
	* @var string
	*/
	// By convention, the "snake case", plural name of the class will be used as the table name unless another name is explicitly specified.
	protected $table = 'postmeta';

	/**
	* Indicates if the model should be timestamped.
	*
	* @var bool
	*/
	// By default, Eloquent expects created_at and updated_at columns to exist on your tables.
	//public $timestamps = false;


	// meta_id BIGINT(20)
	// post_id BIGINT(20)
	// meta_key VARCHAR(255)
	// meta_value LONGTEXT

}