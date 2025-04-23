/****************************************************************************************************
 *
 * @file:    cart.dart
 * @author:  Nolan Olhausen
 * @date: 2024-11-15
 *
 * @brief:
 *      Page for displaying the user's cart and allowing them to adjust the quantity of items
 *      and add a tip. The user can also proceed to checkout from this page.
 * 
 ****************************************************************************************************/

import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:mobile_app/pages/checkout.dart';
import '../utility/squareAPI.dart';

/****************************************************************************************************
 *
 * @file:    cart.dart
 * @author:  Nolan Olhausen
 * @date: 2024-11-15
 *
 * @brief:
 *      Page for displaying the user's cart and allowing them to adjust the quantity of items
 *      and add a tip. The user can also proceed to checkout from this page.
 * 
 ****************************************************************************************************/

import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:mobile_app/pages/checkout.dart';
import '../utility/squareAPI.dart';

class CartItem {
  final String variationId;
  final List<String> modifierIds;
  final Item product;
  final double itemTotal;
  int quantity;

  CartItem({
    required this.variationId,
    required this.modifierIds,
    required this.product,
    required this.itemTotal,
    this.quantity = 1,
  });
}

class CartPage extends StatefulWidget {
  List<CartItem> products;
  final bool applePayEnabled;
  final bool googlePayEnabled;
  final LoyaltyAccount? account;

  CartPage(
      {super.key,
      required this.products,
      required this.account,
      required this.applePayEnabled,
      required this.googlePayEnabled});

  @override
  _CartPageState createState() => _CartPageState();
}

class _CartPageState extends State<CartPage> {
  double totalAmount = 0.0;
  double taxAmount = 0.0;
  double tipAmount = 0.0;
  String selectedTip = 'Custom'; // default to custom 0.00
  TextEditingController customTipController =
      TextEditingController(text: '0.00');
  FocusNode customTipFocusNode = FocusNode();

  @override
  void initState() {
    super.initState();
    // Call _calculateCartTotal when the page is first loaded
    _calculateCartTotal();
  }

  @override
  void dispose() {
    customTipFocusNode.dispose();
    super.dispose();
  }

  // update tip variable
  void _updateTipAmount(String tipType) {
    setState(() {
      if (tipType != 'Custom') {
        double percentage = double.parse(tipType.replaceAll('%', '')) / 100.0;
        tipAmount = totalAmount * percentage;
        customTipController.text = tipAmount.toStringAsFixed(2);
      } else {
        tipAmount = double.tryParse(customTipController.text) ?? 0.0;
      }
      selectedTip = tipType;
    });
  }

  // use api call to calculate current order total as well as update tip
  Future<void> _calculateCartTotal() async {
    final prices = await SquareAPI().fetchCartPrice(cart: widget.products);
    setState(() {
      totalAmount = prices['totalAmount']!;
      taxAmount = prices['taxAmount']!;
      _updateTipAmount(selectedTip);
    });
  }

  // get item variation (whats used as the item of an order rather than base item)
  String _getVariationName(Item item, String variationId) {
    final variation = item.itemVariations.firstWhere(
      (v) => v.id == variationId,
    );
    return variation.name;
  }

  // names of modifiers for item
  List<String> _getModifierNames(Item item, List<String> modifierIds) {
    final modifierNames = <String>[];
    for (var modifierList in item.modifierLists) {
      for (var modifier in modifierList.modifiers) {
        if (modifierIds.contains(modifier.id)) {
          modifierNames.add(modifier.name);
        }
      }
    }
    return modifierNames;
  }

  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      onTap: () {
        // Dismiss the keyboard if tapping outside the TextField
        FocusScope.of(context).requestFocus(FocusNode());
      },
      child: Scaffold(
        appBar: AppBar(
          title: Text(
            'Cart',
            style: GoogleFonts.poppins(
              color: const Color.fromARGB(255, 255, 153, 7),
              fontSize: 24,
              fontWeight: FontWeight.w900,
            ),
          ),
        ),
        body: Padding(
          padding: const EdgeInsets.symmetric(horizontal: 16.0),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Expanded(
                child: ListView.builder(
                  padding: EdgeInsets.zero,
                  itemCount: widget.products.length,
                  itemBuilder: (context, index) {
                    final cartItem = widget.products[index];
                    final variationName = _getVariationName(
                        cartItem.product, cartItem.variationId);
                    final modifierNames = _getModifierNames(
                        cartItem.product, cartItem.modifierIds);

                    return Card(
                      shape: RoundedRectangleBorder(
                        borderRadius: BorderRadius.circular(12),
                      ),
                      elevation: 4,
                      margin: const EdgeInsets.symmetric(vertical: 8),
                      child: Padding(
                        padding: const EdgeInsets.all(12.0),
                        child: Row(
                          crossAxisAlignment: CrossAxisAlignment.start,
                          children: [
                            Image.network(
                              cartItem.product.itemImage?.url ?? '',
                              width: 80,
                              height: 80,
                              fit: BoxFit.cover,
                            ),
                            const SizedBox(width: 16),
                            Expanded(
                              child: Column(
                                crossAxisAlignment: CrossAxisAlignment.start,
                                children: [
                                  Text(
                                    cartItem.product.name,
                                    style: const TextStyle(
                                      fontSize: 16,
                                      fontWeight: FontWeight.bold,
                                    ),
                                  ),
                                  const SizedBox(height: 4),
                                  Text(
                                    variationName,
                                    style: const TextStyle(
                                      fontSize: 14,
                                      color: Colors.grey,
                                    ),
                                  ),
                                  const SizedBox(height: 4),
                                  Text(
                                    modifierNames.isNotEmpty
                                        ? modifierNames.join(', ')
                                        : 'No Modifiers',
                                    style: const TextStyle(
                                      fontSize: 14,
                                      color: Colors.grey,
                                    ),
                                  ),
                                ],
                              ),
                            ),
                            Column(
                              children: [
                                Row(
                                  children: [
                                    IconButton(
                                      icon: const Icon(Icons.remove),
                                      onPressed: () {
                                        setState(() {
                                          if (cartItem.quantity > 1) {
                                            cartItem.quantity--;
                                          } else {
                                            widget.products.removeAt(index);
                                          }
                                        });
                                        _calculateCartTotal();
                                      },
                                    ),
                                    Text(
                                      '${cartItem.quantity}',
                                      style: const TextStyle(fontSize: 16),
                                    ),
                                    IconButton(
                                      icon: const Icon(Icons.add),
                                      onPressed: () {
                                        setState(() {
                                          cartItem.quantity++;
                                        });
                                        _calculateCartTotal();
                                      },
                                    ),
                                  ],
                                ),
                                const SizedBox(height: 8),
                                Text(
                                  '\$${cartItem.itemTotal.toStringAsFixed(2)}',
                                  style: const TextStyle(fontSize: 16),
                                ),
                              ],
                            ),
                          ],
                        ),
                      ),
                    );
                  },
                ),
              ),
              const Divider(),
              Padding(
                padding: const EdgeInsets.symmetric(vertical: 8.0),
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Text(
                      'Add a Tip:',
                      style: GoogleFonts.poppins(
                        fontSize: 18,
                        fontWeight: FontWeight.bold,
                      ),
                    ),
                    Wrap(
                      spacing: 8.0,
                      children:
                          ['10%', '15%', '20%', '25%', 'Custom'].map((tip) {
                        return ChoiceChip(
                          label: Text(tip),
                          selected: selectedTip == tip,
                          onSelected: (_) {
                            setState(() {
                              selectedTip = tip;
                              if (tip != 'Custom') {
                                _updateTipAmount(tip);
                                FocusScope.of(context)
                                    .unfocus(); // hide keyboard if open
                              } else {
                                FocusScope.of(context)
                                    .requestFocus(customTipFocusNode);
                              }
                            });
                          },
                        );
                      }).toList(),
                    ),
                    if (selectedTip == 'Custom')
                      Padding(
                        padding: const EdgeInsets.only(top: 8.0),
                        child: Row(
                          crossAxisAlignment: CrossAxisAlignment.center,
                          children: [
                            Text(
                              'Custom Tip: \$',
                              style: GoogleFonts.poppins(
                                fontSize: 16,
                                fontWeight: FontWeight.w600,
                              ),
                            ),
                            SizedBox(
                              width: 100,
                              child: TextField(
                                controller: customTipController,
                                focusNode: customTipFocusNode,
                                keyboardType:
                                    const TextInputType.numberWithOptions(
                                        decimal: true),
                                decoration: const InputDecoration(
                                  isDense: true,
                                  contentPadding:
                                      EdgeInsets.symmetric(horizontal: 8.0),
                                  border: OutlineInputBorder(),
                                ),
                                onChanged: (value) {
                                  setState(() {
                                    tipAmount = double.tryParse(value) ?? 0.0;
                                  });
                                },
                              ),
                            ),
                          ],
                        ),
                      ),
                    const SizedBox(height: 8),
                    Text(
                      'Items .... ${widget.products.fold(0, (sum, item) => sum + item.quantity)}',
                      style: GoogleFonts.poppins(
                        fontSize: 18,
                        fontWeight: FontWeight.w700,
                      ),
                    ),
                    Text(
                      'Tip ......... \$${tipAmount.toStringAsFixed(2)}',
                      style: GoogleFonts.poppins(
                        fontSize: 18,
                        fontWeight: FontWeight.w700,
                      ),
                    ),
                    Text(
                      'Tax ........ \$${taxAmount.toStringAsFixed(2)}',
                      style: GoogleFonts.poppins(
                        fontSize: 18,
                        fontWeight: FontWeight.w700,
                      ),
                    ),
                    SizedBox(height: 25),
                  ],
                ),
              )
            ],
          ),
        ),
        floatingActionButton: widget.products.isNotEmpty
            ? Container(
                width: 200, // Set the width for the oval shape
                height:
                    60, // Set the height to match the width for the oval shape
                child: FloatingActionButton(
                  onPressed: () {
                    Navigator.push(
                      context,
                      MaterialPageRoute(
                        builder: (context) => CheckoutPage(
                          account: widget.account,
                          cart: widget.products,
                          orderAmount: totalAmount,
                          tipAmount: tipAmount,
                          applePayEnabled: widget.applePayEnabled,
                          googlePayEnabled: widget.googlePayEnabled,
                        ),
                      ),
                    );
                  },
                  child: Text(
                    'Checkout  \$${(totalAmount + tipAmount).toStringAsFixed(2)}',
                    style: GoogleFonts.poppins(
                      fontSize: 18,
                      fontWeight: FontWeight.w700,
                      color: Colors.white,
                    ),
                  ),
                  backgroundColor: const Color.fromARGB(255, 255, 153, 7),
                  shape: RoundedRectangleBorder(
                    borderRadius:
                        BorderRadius.circular(30), // Apply rounded corners
                  ),
                ),
              )
            : null,
      ),
    );
  }
}
