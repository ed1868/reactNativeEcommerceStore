import Product from '../models/product';

const PRODUCTS = [
  new Product(
    'p1',
    'u1',
    'Fumas',
    'https://static.wixstatic.com/media/4d72de_3eb82a3d4bee470da03e4d816c11a6f6~mv2.png',
    "Our Small Fumas' aka Mediano are our #1 Sellers",
    29.99
  ),
  new Product(
    'p2',
    'u1',
    'Gigantes',
    'https://static.wixstatic.com/media/4d72de_11c4fa6118614887a41bbb287a035bb8~mv2.png',
    'Our Gigantes are for those that prefer a longer cigar at 8"x 46 you cant go wrong!',
    35.99
  ),
  new Product(
    'p3',
    'u2',
    'Calzadores',
    'https://static.wixstatic.com/media/4d72de_4bc3f031cff84ef584f7ea329f121e74~mv2.png',
    'These 7 3/8"x 46 cigar Super Cazadores, are rounded on the top with no tail.',
    35.99
  ),
  new Product(
    'p4',
    'u3',
    'DOUBLE WRAPPER',
    'https://static.wixstatic.com/media/4d72de_04e69ff82c1246a5b258e37316ea8d5d~mv2.png',
    "Our Double Wrapper, or as we like to call them Candy Canes, are one of our more unique cigars.",
    45.99
  ),
  new Product(
    'p5',
    'u3',
    'Maduros',
    'https://static.wixstatic.com/media/4d72de_f83f77fb4123433da95aacb817b6a96f~mv2.png',
    "Our Presidente Maduros' are one of our highest quality maduro cigars.",
    30.99
  ),
  new Product(
    'p6',
    'u1',
    'Robusto',
    'https://static.wixstatic.com/media/4d72de_0e2f5615752046db9cb6bf7bb5e1601d~mv2.png',
    "This Robusto is a long filler cigar with a Connecticut wrapper.",
    29.49
  )
];

export default PRODUCTS;
