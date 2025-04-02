/****************************************************************************************************
 *
 * @file:    menu.dart
 * @author:  Nolan Olhausen
 * @date: 2024-11-15
 *
 * @brief:
 *      This file contains the MenuPage class, which is a StatefulWidget that displays the menu
 *      of products available for purchase. The menu can be filtered by category and subcategory,
 *      and searched by name or description. The user can add products to their cart by clicking
 *      on the product card. The user can also navigate to the cart page by clicking on the cart icon.
 * 
 ****************************************************************************************************/

import 'package:flutter/material.dart';
import 'package:flutter_svg/flutter_svg.dart';
import 'package:google_fonts/google_fonts.dart';
import '../cards/product_card.dart';
import 'cart.dart';
import '../utility/squareAPI.dart';

class MenuPage extends StatefulWidget {
  final List<Item> products;
  List<CartItem> cart;
  final bool applePayEnabled;
  final bool googlePayEnabled;
  final LoyaltyAccount? account;

  MenuPage({
    super.key,
    required this.cart,
    required this.products,
    required this.applePayEnabled,
    required this.googlePayEnabled,
    required this.account,
  });

  @override
  State<MenuPage> createState() => _MenuPageState();
}

class _MenuPageState extends State<MenuPage> {
  String selectedMainFilter = 'All';
  String searchQuery = '';

  final List<String> mainFilters = [
    'All',
    'Seasonal',
    'Coffee',
    'Blended',
    'Other Drinks',
    'Food'
  ];

  Map<String, List<String>> subFilters = {
    'All': [
      'Latte',
      'Mocha',
      'Macchiato',
      'Cappuccino',
      'Americano',
      'Cold Brew',
      'Espresso',
      'Drip Coffee',
      'Coffee Frappe',
      'Cream Frappe',
      'Smoothie',
      'Chai',
      'Italian Soda',
      'Energy Drink',
      'Kids',
      'Sweet',
      'Muffin',
      'Pastry',
      'Soup'
    ],
    'Seasonal': ['Latte', 'Mocha', 'Chai', 'Coffee Frappe', 'Cream Frappe'],
    'Coffee': [
      'Latte',
      'Mocha',
      'Macchiato',
      'Cappuccino',
      'Americano',
      'Cold Brew',
      'Espresso',
      'Drip Coffee'
    ],
    'Blended': ['Coffee Frappe', 'Cream Frappe', 'Smoothie'],
    'Other Drinks': ['Chai', 'Italian Soda', 'Energy Drink', 'Kids'],
    'Food': ['Sweet', 'Muffin', 'Pastry', 'Soup'],
  };

  @override
  Widget build(BuildContext context) {
    final filteredProducts = widget.products.where((product) {
      final matchesSearchQuery = product.description!
              .toLowerCase()
              .contains(searchQuery.toLowerCase()) ||
          product.name.toLowerCase().contains(searchQuery.toLowerCase()) ||
          product.categories.any((category) =>
              category.name.toLowerCase().contains(searchQuery.toLowerCase()));
      return matchesSearchQuery;
    }).toList();

    return Scaffold(
      body: Padding(
        padding: const EdgeInsets.symmetric(horizontal: 16.0),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          mainAxisAlignment: MainAxisAlignment.start,
          children: [
            const SizedBox(height: 50),
            Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: [
                Text(
                  "Menu",
                  style: GoogleFonts.poppins(
                    color: const Color.fromARGB(255, 255, 153, 7),
                    fontSize: 36,
                    fontWeight: FontWeight.w900,
                  ),
                ),
                IconButton(
                  onPressed: () {
                    Navigator.push(
                      context,
                      MaterialPageRoute(
                        builder: (context) => CartPage(
                          account: widget.account,
                          products: widget.cart,
                          applePayEnabled: widget.applePayEnabled,
                          googlePayEnabled: widget.googlePayEnabled,
                        ),
                      ),
                    );
                  },
                  icon: SvgPicture.asset(
                    'assets/icons/cart.svg',
                    height: 36,
                    width: 36,
                    color: const Color.fromARGB(255, 255, 153, 7),
                  ),
                ),
              ],
            ),
            TextField(
              decoration: const InputDecoration(
                border: OutlineInputBorder(),
                labelText: 'Search',
                prefixIcon: Icon(Icons.search),
              ),
              onChanged: (value) {
                setState(() {
                  searchQuery = value;
                });
              },
            ),
            const SizedBox(height: 8),
            SingleChildScrollView(
              scrollDirection: Axis.horizontal,
              child: Row(
                children: mainFilters.map((filter) {
                  return Padding(
                    padding: const EdgeInsets.symmetric(horizontal: 4.0),
                    child: ChoiceChip(
                      label: Text(filter),
                      selected: selectedMainFilter == filter,
                      onSelected: (selected) {
                        setState(() {
                          selectedMainFilter = filter;
                        });
                      },
                    ),
                  );
                }).toList(),
              ),
            ),
            Expanded(
              child: ListView(
                padding: EdgeInsets.zero,
                children: subFilters[selectedMainFilter]!
                    .map((subCategory) {
                      // Get products that belong to this subcategory
                      final categoryProducts = filteredProducts
                          .where((product) => product.categories
                              .any((category) => category.name == subCategory))
                          .toList();

                      // If no products belong to this category, skip it
                      if (categoryProducts.isEmpty) {
                        return SizedBox
                            .shrink(); // This prevents empty categories from rendering
                      }

                      return Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          Text(
                            subCategory,
                            style: GoogleFonts.poppins(
                              fontSize: 24,
                              fontWeight: FontWeight.bold,
                            ),
                          ),
                          SizedBox(
                            height: 220,
                            child: ListView(
                              scrollDirection: Axis.horizontal,
                              children: categoryProducts
                                  .map((product) => ProductCard(
                                        product: product,
                                        cart: widget.cart,
                                      ))
                                  .toList(),
                            ),
                          ),
                        ],
                      );
                    })
                    .where((widget) =>
                        widget is! SizedBox) // Ensure we remove empty widgets
                    .toList(),
              ),
            ),
          ],
        ),
      ),
    );
  }
}
