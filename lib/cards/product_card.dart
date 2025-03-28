/****************************************************************************************************
 *
 * @file:    product_card.dart
 * @author:  Nolan Olhausen
 * @date: 2024-11-15
 *
 * @brief:
 *      Card for displaying product details.
 * 
 ****************************************************************************************************/

import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:mobile_app/pages/cart.dart';
import '../pages/product.dart';
import '../utility/squareAPI.dart';
import 'package:intl/intl.dart';

class ProductCard extends StatelessWidget {
  final Item product; // product to display
  List<CartItem> cart; // cart for passing between pages

  // constructor
  ProductCard({
    super.key,
    required this.product,
    required this.cart,
  });

  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      onTap: () {
        // on tap go to product page
        Navigator.push(
          context,
          MaterialPageRoute(
            builder: (context) => ProductPage(
              product: product,
              cart: cart,
            ),
          ),
        );
      },
      child: Container(
        padding: const EdgeInsets.symmetric(vertical: 12.0, horizontal: 12.0),
        child: Column(
          mainAxisSize: MainAxisSize.min,
          children: [
            ClipOval(
              child: Image.network(
                product.itemImage!.url,
                fit: BoxFit.cover,
                width: 175,
                height: 175,
              ),
            ),
            const SizedBox(height: 8),
            SizedBox(
              width: 175,
              child: Text(
                product.name,
                maxLines: 2,
                overflow: TextOverflow.ellipsis,
                textAlign: TextAlign.center,
                style: GoogleFonts.poppins(
                  color: const Color.fromARGB(255, 255, 153, 7),
                  fontSize: 16,
                  fontWeight: FontWeight.w600,
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }
}
