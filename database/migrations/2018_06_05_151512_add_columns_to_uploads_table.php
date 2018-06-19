<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddColumnsToUploadsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('uploads', function (Blueprint $table) {
            $table->bigInteger('upload_user');
            $table->dateTime('upload_date');
            $table->dateTime('upload_date_gmt');
            $table->text('upload_content');
            $table->string('upload_title', 100);
            $table->text('upload_except');
            $table->string('upload_status', 20);
            $table->string('comment_status', 20);
            $table->string('ping_status', 20);
            $table->string('upload_password', 20);
            $table->string('upload_name', 200);
            $table->text('to_ping');
            $table->text('pinged');
            $table->dateTime('upload_modified');
            $table->dateTime('upload_modified_gmt');
            $table->text('upload_content_filtered');
            $table->bigInteger('upload_parent');
            $table->string('guid', 255);
            $table->bigInteger('menu_order');
            $table->string('upload_type', 20);
            $table->string('upload_mime_type', 100);
            $table->bigInteger('comment_count');

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
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('uploads', function (Blueprint $table) {
            //
        });
    }
}
