

CREATE TABLE `users_admin` (
    `id` int(11) NOT NULL UNIQUE AUTO_INCREMENT,
    `uid` varchar(255) NOT NULL PRIMARY KEY,
    `email` varchar(255) NOT NULL UNIQUE,
    `password` varchar(255) NOT NULL,
    `firstName` varchar(50),
    `lastName` varchar(50),
    `phone` varchar(50),
    `function` varchar(50),
    `permission_roles` text NOT NULL DEFAULT '[]',
    `last_log_in` datetime NOT NULL,
    `create_date` datetime NOT NULL
)


CREATE TABLE `users_client` (
    `id` int(11) NOT NULL UNIQUE AUTO_INCREMENT,
    `uid` varchar(255) NOT NULL PRIMARY KEY,
    `email` varchar(255) NOT NULL UNIQUE,
    `password` varchar(255) NOT NULL,
    
)