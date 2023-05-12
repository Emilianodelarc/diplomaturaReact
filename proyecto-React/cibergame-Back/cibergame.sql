-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 12-05-2023 a las 13:16:45
-- Versión del servidor: 8.0.31
-- Versión de PHP: 8.0.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `cibergame`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `novedades`
--

DROP TABLE IF EXISTS `novedades`;
CREATE TABLE IF NOT EXISTS `novedades` (
  `id` int NOT NULL AUTO_INCREMENT,
  `titulo` varchar(250) COLLATE utf8mb4_general_ci NOT NULL,
  `subtitulo` text COLLATE utf8mb4_general_ci NOT NULL,
  `cuerpo` text COLLATE utf8mb4_general_ci NOT NULL,
  `img_id` varchar(250) COLLATE utf8mb4_general_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `novedades`
--

INSERT INTO `novedades` (`id`, `titulo`, `subtitulo`, `cuerpo`, `img_id`) VALUES
(1, 'Parece que otra leyenda de Halo abandonó 343 Industries y Microsoft', 'Todo indica que la franquicia perdió a otro de sus creativos más importantes', 'Desafortunadamente para los fans, Halo no pasa por su mejor momento. Recientemente se confirmó la salida de Joseph Staten de Xbox y Microsoft. Ahora, reportes indican que hay otra baja importante para la franquicia, pues su director creativo al parecer también abandonó las compañías.\r\n\r\nNos referimos a Frank O\'Connor, quien ha trabajado en la franquicia por casi 2 décadas. De acuerdo con Windows Central, el creativo modificó recientemente su perfil de LinkedIn, donde ya no figura como director de la saga en la actualidad. En su lugar hay un nuevo puesto no revelado, lo que sugiere que sus días con Halo tal vez llegaron a su fin.', 'yyoyb4uovwnp8yhkzl3e'),
(9, '¿Cuánto dura el juego Dead Island 2?', 'Os contamos cuánto hemos tardado en completar la campaña del RPG de acción con zombis, además de las horas que suman las misiones secundarias y otras actividades.', 'Dead Island 2 llega a las tiendas de España y el resto del mundo este 21 de abril para PC (exclusivo de Epic Games Store), PlayStation 5, Xbox Series X/S, PlayStation 4 y Xbox One. Se trata de un RPG de acción centrado en masacrar zombis de manera creativa usando armas cuerpo a cuerpo y los daños elementales del entorno, y como es habitual en los juegos con toques de rol, además de la historia principal hay misiones secundarias y contenidos opcionales.\r\n\r\n¿Cuánto dura la historia?\r\nNuestra primera partida a Dead Island 2 la jugamos sin prisa y explorando los elementos que nos llamaban la atención de sus niveles (recordad que no es un mundo abierto), pero centrándonos en la historia principal. Una vez vimos los títulos de crédito, y habiendo hecho unas cuatro o cinco misiones secundarias hasta ese momento, el contador de horas alcanzaba las 16 horas. Por lo tanto, en completar las 24 misiones principales creemos que tardaréis unas 15 horas si no vais ni muy deprisa ni muy lentos.', 'q3lrgmpegkb2ogu1zvcd'),
(10, 'Novedades de Xbox Game Pass: Redfall, Minecraft Legends, Coffe Talk 2 y más', 'Ocho nuevos juegos llegan a Xbox Game Pass desde hoy hasta el 2 de mayo. También se han anunciado los cinco juegos que abandonan el catálogo el 30 de abril.', 'Xbox ha anunciado a través de su blog oficial la segunda tanda de juegos de abril para Xbox Game Pass, su servicio de suscripción disponible tanto en consolas Xbox Series X/S y Xbox One como en PC y dispositivos móviles iOS y Android a través del juego en la nube.\r\n\r\nEn esta ocasión, el catálogo de Xbox Game Pass se ampliará con ocho lanzamientos que irán llegando al servicio a lo largo del mes, con el primer estreno disponible hoy mismo y el último, el esperado Redfall, como la última incorporación de esta tanda. Podéis ver la lista completa a continuación:\r\nNuevos juegos de abril en Xbox Game Pass\r\nMinecraft Legends (Xbox, PC y nube) - disponible hoy\r\nCoffee Talk Episode 2: Hibiscus & Butterfly (Xbox, PC y nube) - 20 de abril\r\nMedieval Dynasty (Xbox One) - 20 de abril\r\nHomestead Arcana (Xbox Series X/S, PC y nube) - 21 de abril\r\nCassette Beasts (PC) - 26 de abril\r\nBlazBlue: Cross Tag Battle Special Edition (Xbox, PC y nube) - 27 de abril\r\nThe Last Case of Benedict Fox (Xbox y PC) - 27 de abril\r\nRedfall (Xbox Series X/S, PC y nube) – May 2 de abril', 'onevsd9opi2opaggz8zx');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
CREATE TABLE IF NOT EXISTS `usuarios` (
  `id` int NOT NULL AUTO_INCREMENT,
  `usuario` varchar(250) COLLATE utf8mb4_general_ci NOT NULL,
  `password` varchar(250) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `usuario`, `password`) VALUES
(5, 'Emiliano', 'e10adc3949ba59abbe56e057f20f883e');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
