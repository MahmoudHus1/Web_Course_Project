-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 15, 2021 at 09:58 PM
-- Server version: 10.4.19-MariaDB
-- PHP Version: 7.3.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `hibta_vs_2`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `ID` int(11) NOT NULL,
  `email` varchar(55) COLLATE utf8_bin NOT NULL,
  `password` varchar(255) COLLATE utf8_bin NOT NULL,
  `phone_number` varchar(55) COLLATE utf8_bin NOT NULL,
  `name` varchar(55) COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- --------------------------------------------------------

--
-- Table structure for table `admin_permissions`
--

CREATE TABLE `admin_permissions` (
  `ID` int(11) NOT NULL,
  `admin_ID` int(11) NOT NULL,
  `permission_ID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- --------------------------------------------------------

--
-- Table structure for table `ads`
--

CREATE TABLE `ads` (
  `ID` int(11) NOT NULL,
  `img` varchar(500) COLLATE utf8_bin NOT NULL,
  `section` int(11) NOT NULL,
  `status` tinyint(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- --------------------------------------------------------

--
-- Table structure for table `brands`
--

CREATE TABLE `brands` (
  `ID` int(11) NOT NULL,
  `brand` varchar(55) COLLATE utf8_bin NOT NULL,
  `icon` varchar(255) COLLATE utf8_bin NOT NULL,
  `status` tinyint(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Dumping data for table `brands`
--

INSERT INTO `brands` (`ID`, `brand`, `icon`, `status`) VALUES
(27, 'samsung', 'uploaded/brands/60fc61f292c184.68436499.jpg', 1),
(28, 'car_pic_style', 'uploaded/brands/611969b35e5a90.90746475.jpg', 1);

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `ID` int(11) NOT NULL,
  `name` varchar(55) COLLATE utf8_bin NOT NULL,
  `parent` int(11) DEFAULT NULL,
  `icon` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `status` tinyint(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- --------------------------------------------------------

--
-- Table structure for table `city_delivery`
--

CREATE TABLE `city_delivery` (
  `ID` int(11) NOT NULL,
  `name` varchar(55) COLLATE utf8_bin NOT NULL,
  `price` varchar(55) COLLATE utf8_bin NOT NULL,
  `free_price` varchar(55) COLLATE utf8_bin DEFAULT NULL,
  `status` tinyint(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Dumping data for table `city_delivery`
--

INSERT INTO `city_delivery` (`ID`, `name`, `price`, `free_price`, `status`) VALUES
(8, 'نابلس', '123', '178', 1),
(9, 'جنين', '150', '250', 0);

-- --------------------------------------------------------

--
-- Table structure for table `customer`
--

CREATE TABLE `customer` (
  `ID` int(11) NOT NULL,
  `name` varchar(55) COLLATE utf8_bin NOT NULL,
  `email` varchar(55) COLLATE utf8_bin NOT NULL,
  `password` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `phone_number` varchar(55) COLLATE utf8_bin NOT NULL,
  `city_ID` int(11) NOT NULL,
  `location` varchar(255) COLLATE utf8_bin NOT NULL,
  `img` varchar(500) COLLATE utf8_bin DEFAULT NULL,
  `gender` tinyint(1) NOT NULL,
  `verification_code` varchar(50) COLLATE utf8_bin DEFAULT NULL,
  `facebook_ID` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `facebook_img` mediumtext COLLATE utf8_bin DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- --------------------------------------------------------

--
-- Table structure for table `items`
--

CREATE TABLE `items` (
  `ID` int(11) NOT NULL,
  `name` varchar(150) COLLATE utf8_bin NOT NULL,
  `description` varchar(500) COLLATE utf8_bin DEFAULT NULL,
  `sold_out` tinyint(1) NOT NULL,
  `cat_ID` int(11) NOT NULL,
  `sub_cat_name` varchar(50) COLLATE utf8_bin DEFAULT NULL,
  `brand_ID` int(11) DEFAULT NULL,
  `price` varchar(55) COLLATE utf8_bin NOT NULL,
  `img` varchar(500) COLLATE utf8_bin NOT NULL,
  `img2` varchar(500) COLLATE utf8_bin DEFAULT NULL,
  `img3` varchar(500) COLLATE utf8_bin DEFAULT NULL,
  `img4` varchar(500) COLLATE utf8_bin DEFAULT NULL,
  `created_at` date NOT NULL,
  `status` tinyint(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `ID` int(11) NOT NULL,
  `date` date NOT NULL,
  `time` varchar(55) COLLATE utf8_bin NOT NULL,
  `location` varchar(500) COLLATE utf8_bin NOT NULL,
  `total_charge` int(55) NOT NULL,
  `customer_ID` int(11) NOT NULL,
  `status` tinyint(1) NOT NULL,
  `city_delivery_ID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- --------------------------------------------------------

--
-- Table structure for table `order_details`
--

CREATE TABLE `order_details` (
  `ID` int(11) NOT NULL,
  `quantity` varchar(55) COLLATE utf8_bin NOT NULL,
  `item_ID` int(11) NOT NULL,
  `order_ID` int(11) NOT NULL,
  `item_price` varchar(55) COLLATE utf8_bin NOT NULL,
  `price_quantity_price` varchar(55) COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- --------------------------------------------------------

--
-- Table structure for table `permission`
--

CREATE TABLE `permission` (
  `ID` int(11) NOT NULL,
  `text` varchar(55) COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Dumping data for table `permission`
--

INSERT INTO `permission` (`ID`, `text`) VALUES
(1, 'الرئيسية'),
(2, 'الطلبات'),
(3, 'الاصناف'),
(4, 'العلامات التجارية'),
(5, 'المنتجات'),
(6, 'العروض اليومية'),
(7, 'الاعلانات'),
(8, 'كشف الطلبات'),
(9, 'المدن والتوصيل'),
(10, 'ادارة المستخدمين'),
(11, 'معلومات الموقع');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `admin_permissions`
--
ALTER TABLE `admin_permissions`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `admin_ID` (`admin_ID`),
  ADD KEY `permission_ID` (`permission_ID`);

--
-- Indexes for table `ads`
--
ALTER TABLE `ads`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `brands`
--
ALTER TABLE `brands`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `fk_parent_cat` (`parent`);

--
-- Indexes for table `city_delivery`
--
ALTER TABLE `city_delivery`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `customer`
--
ALTER TABLE `customer`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `fk_city_ID` (`city_ID`);

--
-- Indexes for table `items`
--
ALTER TABLE `items`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `brand_ID` (`brand_ID`),
  ADD KEY `cat_ID` (`cat_ID`),
  ADD KEY `fk_type_cat_id` (`sub_cat_name`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `city_delivery_ID` (`city_delivery_ID`),
  ADD KEY `customer_ID` (`customer_ID`);

--
-- Indexes for table `order_details`
--
ALTER TABLE `order_details`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `item_ID` (`item_ID`),
  ADD KEY `order_ID` (`order_ID`);

--
-- Indexes for table `permission`
--
ALTER TABLE `permission`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admin`
--
ALTER TABLE `admin`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=47;

--
-- AUTO_INCREMENT for table `admin_permissions`
--
ALTER TABLE `admin_permissions`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=191;

--
-- AUTO_INCREMENT for table `ads`
--
ALTER TABLE `ads`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=82;

--
-- AUTO_INCREMENT for table `brands`
--
ALTER TABLE `brands`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=135;

--
-- AUTO_INCREMENT for table `city_delivery`
--
ALTER TABLE `city_delivery`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `customer`
--
ALTER TABLE `customer`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=110;

--
-- AUTO_INCREMENT for table `items`
--
ALTER TABLE `items`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1598;

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=149;

--
-- AUTO_INCREMENT for table `order_details`
--
ALTER TABLE `order_details`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `permission`
--
ALTER TABLE `permission`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `admin_permissions`
--
ALTER TABLE `admin_permissions`
  ADD CONSTRAINT `admin_permissions_ibfk_1` FOREIGN KEY (`admin_ID`) REFERENCES `admin` (`ID`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `admin_permissions_ibfk_2` FOREIGN KEY (`permission_ID`) REFERENCES `permission` (`ID`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `categories`
--
ALTER TABLE `categories`
  ADD CONSTRAINT `fk_parent_cat` FOREIGN KEY (`parent`) REFERENCES `categories` (`ID`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `customer`
--
ALTER TABLE `customer`
  ADD CONSTRAINT `fk_city_ID` FOREIGN KEY (`city_ID`) REFERENCES `city_delivery` (`ID`);

--
-- Constraints for table `items`
--
ALTER TABLE `items`
  ADD CONSTRAINT `items_ibfk_1` FOREIGN KEY (`brand_ID`) REFERENCES `brands` (`ID`),
  ADD CONSTRAINT `items_ibfk_2` FOREIGN KEY (`cat_ID`) REFERENCES `categories` (`ID`);

--
-- Constraints for table `orders`
--
ALTER TABLE `orders`
  ADD CONSTRAINT `orders_ibfk_1` FOREIGN KEY (`city_delivery_ID`) REFERENCES `city_delivery` (`ID`),
  ADD CONSTRAINT `orders_ibfk_2` FOREIGN KEY (`customer_ID`) REFERENCES `customer` (`ID`);

--
-- Constraints for table `order_details`
--
ALTER TABLE `order_details`
  ADD CONSTRAINT `order_details_ibfk_1` FOREIGN KEY (`item_ID`) REFERENCES `items` (`ID`),
  ADD CONSTRAINT `order_details_ibfk_2` FOREIGN KEY (`order_ID`) REFERENCES `orders` (`ID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
