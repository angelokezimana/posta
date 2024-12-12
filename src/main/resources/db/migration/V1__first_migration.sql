CREATE TABLE IF NOT EXISTS permissions (
    id BIGINT(20) UNSIGNED NOT NULL AUTO_INCREMENT,
    resource VARCHAR(50) NOT NULL,
    action VARCHAR(50) NOT NULL,
    PRIMARY KEY (id)
)ENGINE=InnoDB DEFAULT CHARSET=UTF8;

CREATE TABLE IF NOT EXISTS roles (
    id BIGINT(20) UNSIGNED NOT NULL AUTO_INCREMENT,
    name VARCHAR(50) UNIQUE NOT NULL,
    PRIMARY KEY (id)
)ENGINE=InnoDB DEFAULT CHARSET=UTF8;

CREATE TABLE IF NOT EXISTS users (
    id BIGINT(20) UNSIGNED NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    locale VARCHAR(2) NOT NULL DEFAULT 'en',
    account_locked BOOLEAN NOT NULL,
    enabled BOOLEAN NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
    PRIMARY KEY (id)
)ENGINE=InnoDB DEFAULT CHARSET=UTF8;

CREATE TABLE IF NOT EXISTS role_permission (
    role_id BIGINT(20) UNSIGNED,
    permission_id BIGINT(20) UNSIGNED,
    PRIMARY KEY (role_id, permission_id),
    FOREIGN KEY (role_id) REFERENCES roles(id) ON DELETE CASCADE,
    FOREIGN KEY (permission_id) REFERENCES permissions(id) ON DELETE CASCADE
)ENGINE=InnoDB DEFAULT CHARSET=UTF8;

CREATE TABLE IF NOT EXISTS role_user (
    user_id BIGINT(20) UNSIGNED,
    role_id BIGINT(20) UNSIGNED,
    PRIMARY KEY (user_id, role_id),
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (role_id) REFERENCES roles(id) ON DELETE CASCADE
)ENGINE=InnoDB DEFAULT CHARSET=UTF8;

CREATE TABLE IF NOT EXISTS posts (
  id BIGINT(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  text LONGTEXT NOT NULL,
  image_cover VARCHAR(255) NOT NULL,
  author BIGINT(20) UNSIGNED NOT NULL,
  published_on DATETIME DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  FOREIGN KEY (author) REFERENCES users(id) ON DELETE CASCADE
)ENGINE=InnoDB DEFAULT CHARSET=UTF8;

CREATE TABLE IF NOT EXISTS photo_posts (
    id BIGINT(20) UNSIGNED NOT NULL AUTO_INCREMENT,
    image VARCHAR(255) NOT NULL,
    post_id BIGINT(20) UNSIGNED NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (post_id) REFERENCES posts(id) ON DELETE CASCADE
)ENGINE=InnoDB DEFAULT CHARSET=UTF8;

CREATE TABLE IF NOT EXISTS comments (
    id BIGINT(20) UNSIGNED NOT NULL AUTO_INCREMENT,
    text LONGTEXT NOT NULL,
    post_id BIGINT(20) UNSIGNED NOT NULL,
    author BIGINT(20) UNSIGNED NOT NULL,
    published_on DATETIME DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (id),
    FOREIGN KEY (post_id) REFERENCES posts(id) ON DELETE CASCADE,
    FOREIGN KEY (author) REFERENCES users(id) ON DELETE CASCADE
)ENGINE=InnoDB DEFAULT CHARSET=UTF8;

CREATE TABLE IF NOT EXISTS tokens (
    id BIGINT(20) UNSIGNED NOT NULL AUTO_INCREMENT,
    token VARCHAR(255) UNIQUE NOT NULL,
    token_type ENUM('BEARER') NOT NULL,
    revoked BOOLEAN NOT NULL DEFAULT FALSE,
    expired BOOLEAN NOT NULL DEFAULT FALSE,
    created_at TIMESTAMP,
    expires_at TIMESTAMP,
    validated_at TIMESTAMP,
    user_id BIGINT(20) UNSIGNED NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE SET NULL
)ENGINE=InnoDB DEFAULT CHARSET=UTF8;
