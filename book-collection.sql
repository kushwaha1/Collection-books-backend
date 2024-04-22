-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 22, 2024 at 07:06 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `book-collection`
--

-- --------------------------------------------------------

--
-- Table structure for table `books`
--

CREATE TABLE `books` (
  `id` int(50) NOT NULL,
  `title` varchar(100) DEFAULT NULL,
  `author` varchar(100) DEFAULT NULL,
  `description` longtext DEFAULT NULL,
  `publicationYear` int(50) DEFAULT NULL,
  `ISBN` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `books`
--

INSERT INTO `books` (`id`, `title`, `author`, `description`, `publicationYear`, `ISBN`) VALUES
(1, 'Anna Karenina', 'Leo Tolstoy', 'Set in 19th-century Russia, this novel revolves around the life of Anna Karenina, a high-society woman who, dissatisfied with her loveless marriage, embarks on a passionate affair with a charming officer named Count Vronsky. This scandalous affair leads to her social downfall, while parallel to this, the novel also explores the rural life and struggles of Levin, a landowner who seeks the meaning of life and true happiness. The book explores themes such as love, marriage, fidelity, societal norms, and the human quest for happiness.', 1877, '9780141199610'),
(2, 'Madame Bovary', 'Gustave Flaubert', 'Madame Bovary is a tragic novel about a young woman, Emma Bovary, who is married to a dull, but kind-hearted doctor. Dissatisfied with her life, she embarks on a series of extramarital affairs and indulges in a luxurious lifestyle in an attempt to escape the banalities and emptiness of provincial life. Her desire for passion and excitement leads her down a path of financial ruin and despair, ultimately resulting in a tragic end.', 1857, '9780679420316'),
(3, 'War and Peace', 'Leo Tolstoy', 'Set in the backdrop of the Napoleonic era, the novel presents a panorama of Russian society and its descent into the chaos of war. It follows the interconnected lives of five aristocratic families, their struggles, romances, and personal journeys through the tumultuous period of history. The narrative explores themes of love, war, and the meaning of life, as it weaves together historical events with the personal stories of its characters.', 1869, '9781566190275'),
(4, 'The Great Gatsby', 'F. Scott Fitzgerald', 'Set in the summer of 1922, the novel follows the life of a young and mysterious millionaire, his extravagant lifestyle in Long Island, and his obsessive love for a beautiful former debutante. As the story unfolds, the millionaire\s dark secrets and the corrupt reality of the American dream during the Jazz Age are revealed. The narrative is a critique of the hedonistic excess and moral decay of the era, ultimately leading to tragic consequences.', 1925, '9780743273565'),
(5, 'Lolita', 'Vladimir Nabokov', 'The novel tells the story of Humbert Humbert, a man with a disturbing obsession for young girls, or \"nymphets\" as he calls them. His obsession leads him to engage in a manipulative and destructive relationship with his 12-year-old stepdaughter, Lolita. The narrative is a controversial exploration of manipulation, obsession, and unreliable narration, as Humbert attempts to justify his actions and feelings throughout the story.', 1955, '9780679410430'),
(6, 'Middlemarch', 'George Eliot', ' Set in the fictitious English town of Middlemarch during the early 19th century, the novel explores the complex web of relationships in a close-knit society. It follows the lives of several characters, primarily Dorothea Brooke, a young woman of idealistic fervor, and Tertius Lydgate, an ambitious young doctor, who both grapple with societal expectations, personal desires, and moral dilemmas. Their stories intertwine with a rich tapestry of other townsfolk, reflecting themes of love, marriage, ambition, and reform, making a profound commentary on the human condition.', 1871, '9780451531964'),
(7, 'The Adventures of Huckleberry Finn', 'Mark Twain', 'The novel follows the journey of a young boy named Huckleberry Finn and a runaway slave named Jim as they travel down the Mississippi River on a raft. Set in the American South before the Civil War, the story explores themes of friendship, freedom, and the hypocrisy of society. Through various adventures and encounters with a host of colorful characters, Huck grapples with his personal values, often clashing with the societal norms of the time.', 1884, '9781639048540'),
(8, 'The Stories of Anton Chekhov', 'Anton Chekhov', 'This collection of short stories explores the complexities of human nature and society in 19th-century Russia. Written by a renowned Russian author, the stories range from humorous to tragic, often focusing on the everyday lives and struggles of ordinary people. The author\s keen observation and deep understanding of human nature shine through in these tales, making them timeless classics that continue to resonate with readers today.', 1900, '9780553381009'),
(9, 'In Search of Lost Time', 'Marcel Proust', ' This renowned novel is a sweeping exploration of memory, love, art, and the passage of time, told through the narrator\s recollections of his childhood and experiences into adulthood in the late 19th and early 20th century aristocratic France. The narrative is notable for its lengthy and intricate involuntary memory episodes, the most famous being the \madeleine episode\. It explores the themes of time, space and memory, but also raises questions about the nature of art and literature, and the complex relationships between love, sexuality, and possession.', 1913, '9780812969641'),
(10, 'Hamlet', 'William Shakespeare', 'This classic play revolves around the young Prince of Denmark who is thrown into a state of emotional turmoil after his father\s sudden death and his mother\s quick remarriage to his uncle. The prince is visited by the ghost of his father who reveals that he was murdered by the uncle, prompting the prince to seek revenge. The narrative explores themes of madness, revenge, and moral corruption as the prince navigates the complex political and emotional landscape of the Danish court.', 1600, '9788175992924');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `books`
--
ALTER TABLE `books`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `books`
--
ALTER TABLE `books`
  MODIFY `id` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
