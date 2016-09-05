<?php
/**
 * The base configurations of the WordPress.
 *
 * This file has the following configurations: MySQL settings, Table Prefix,
 * Secret Keys, WordPress Language, and ABSPATH. You can find more information
 * by visiting {@link http://codex.wordpress.org/Editing_wp-config.php Editing
 * wp-config.php} Codex page. You can get the MySQL settings from your web host.
 *
 * This file is used by the wp-config.php creation script during the
 * installation. You don't have to use the web site, you can just copy this file
 * to "wp-config.php" and fill in the values.
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'lisaeddington');
//define('DB_NAME', 'lisaeddington_db');

/** MySQL database username */
define('DB_USER', 'root');
//define('DB_USER', 'lisa_db_admin');

/** MySQL database password */
define('DB_PASSWORD', 'root');
//define('DB_PASSWORD', 'greener5db');

/** MySQL hostname */
define('DB_HOST', 'localhost');
//define('DB_HOST', 'mysql.lisaeddington.com');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'yVsYj_oZAmJ@Q(U+,>3Yvxx--c|HB1}C#;JPdsqKT?doCVCp(SW$>c:zHIOaM=_j');
define('SECURE_AUTH_KEY',  'r*20HTS~8d .j$@!mPW1-,#8rrcQ|e~Uat:?NYvp%#t|~>o*CO6[dMre>uO!+IlQ');
define('LOGGED_IN_KEY',    '6i-~L)-p8y:f;|<L$pc@&?tN7N^IV*+=t$ zr#sxiI.H&iypgxC@z-$b5@`C?AOI');
define('NONCE_KEY',        '@nDm:LGSiS7wk K4y:mQ9cwPJ1zi%aG8_TXQc]oL;Nze?7-O-o~^RgSEJ-/@l}[4');
define('AUTH_SALT',        '%D,^}2Nk_.1pMd^,$)M!gJ8.0xa6#Q+qe1ats-m{0{;U~+Q)8z~E[Ri:6@,)Bx0N');
define('SECURE_AUTH_SALT', '$sA|BfI~IPp*I|6<N#ojNXs7,.E-f!dAQkc|~|A6#,~^+$CVlMAv%|kYU<|,XPO|');
define('LOGGED_IN_SALT',   '$+#Cz]p&KhVpQu|],mk|S+aF8oy*zd!F|E8w8h/uy?-W?u>H2GMAR=8zqX=XD)]H');
define('NONCE_SALT',       '6!T6DqcB|/{nayN2LX2/K<y V~-||sCI5@V&?>bAkzrEGmr&+0%$-Ko&@Bv,E(y5');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each a unique
 * prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * WordPress Localized Language, defaults to English.
 *
 * Change this to localize WordPress. A corresponding MO file for the chosen
 * language must be installed to wp-content/languages. For example, install
 * de_DE.mo to wp-content/languages and set WPLANG to 'de_DE' to enable German
 * language support.
 */
define('WPLANG', '');

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
