/// @file:    rewards.dart
/// @author:  Nolan Olhausen, Kade Bolen
/// @date: 2024-11-15
///
/// @brief:
///      Page for displaying rewards and loyalty points.
library;

import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:mobile_app/pages/cart.dart';
import '../utility/squareAPI.dart';

class RewardsPage extends StatelessWidget {
  final List<RewardProgram> programs;
  final List<CartItem> cart;
  final LoyaltyAccount? account;

  const RewardsPage({
    super.key,
    required this.programs,
    required this.cart,
    required this.account,
  });

  String getRewardDescription(RewardTier reward) {
    if (reward.discountType == 'FIXED_AMOUNT' &&
        reward.fixedDiscountMoney != null) {
      final dollars = reward.fixedDiscountMoney! / 100;
      return '\$${dollars.toStringAsFixed(2)} off';
    } else if (reward.discountType == 'FIXED_PERCENTAGE' &&
        reward.percentageDiscount != null) {
      return '${reward.percentageDiscount}% off';
    }
    return 'Reward details';
  }

  @override
  Widget build(BuildContext context) {
    const orange = Color.fromARGB(255, 255, 153, 7);
    final program = programs.first;

    return Scaffold(
      body: Padding(
        padding: const EdgeInsets.symmetric(horizontal: 16.0),
        child: Column(
          children: [
            const SizedBox(height: 50),
            // Header Text
            Align(
              alignment: Alignment.centerLeft,
              child: Text(
                'Rewards',
                style: GoogleFonts.poppins(
                  color: orange,
                  fontSize: 36,
                  fontWeight: FontWeight.w900,
                ),
              ),
            ),
            // Loyalty Card
            Card(
              color: const Color(0xFF2B2B2B),
              shape: RoundedRectangleBorder(
                borderRadius: BorderRadius.circular(16),
              ),
              margin: const EdgeInsets.symmetric(vertical: 16),
              child: Padding(
                padding: const EdgeInsets.all(20.0),
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Text(
                      account == null ? 'GUEST' : 'Member',
                      style: GoogleFonts.poppins(
                        fontSize: 18,
                        fontWeight: FontWeight.bold,
                        color: orange,
                      ),
                    ),
                    const SizedBox(height: 8),
                    Text(
                      account == null
                          ? 'Log in to start earning rewards!'
                          : '${account!.balance} ${account!.balance == 1 ? program.singular : program.plural}',
                      style: GoogleFonts.poppins(
                        fontSize: 24,
                        fontWeight: FontWeight.w700,
                        color: Colors.white,
                      ),
                    ),
                    if (account != null && program.rewardTiers.isNotEmpty)
                      Padding(
                        padding: const EdgeInsets.only(top: 12),
                        child: LinearProgressIndicator(
                          value: account!.balance /
                              program.rewardTiers.last.points,
                          backgroundColor: Colors.grey[800],
                          color: orange,
                          minHeight: 6,
                        ),
                      ),
                  ],
                ),
              ),
            ),
            // Section title
            Row(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                Padding(
                  padding:
                      const EdgeInsets.symmetric(vertical: 8, horizontal: 8),
                  child: Text(
                    "Redeemable At Checkout",
                    style: GoogleFonts.poppins(
                      color: orange,
                      fontSize: 16,
                      fontWeight: FontWeight.w600,
                    ),
                  ),
                ),
                Expanded(
                  child: Container(
                    height: 1,
                    color: orange,
                  ),
                ),
              ],
            ),
            // Reward Tiers List
            Expanded(
              child: RefreshIndicator(
                onRefresh: () async {
                  // Refresh logic should go here
                },
                child: ListView.builder(
                  padding: EdgeInsets.zero,
                  itemCount: program.rewardTiers.length,
                  itemBuilder: (context, index) {
                    final reward = program.rewardTiers[index];
                    final canRedeem =
                        account != null && account!.balance >= reward.points;

                    return Card(
                      color: canRedeem
                          ? const Color(0xFF333333)
                          : const Color(0xFF1E1E1E),
                      margin: const EdgeInsets.symmetric(vertical: 8),
                      child: ListTile(
                        leading: const Icon(Icons.card_giftcard, color: orange),
                        title: Text(
                          reward.name,
                          style: const TextStyle(color: Colors.white),
                        ),
                        subtitle: Text(
                          getRewardDescription(reward),
                          style: TextStyle(color: Colors.grey[300]),
                        ),
                        trailing: Text(
                          '${reward.points} pts',
                          style: TextStyle(
                            color: canRedeem ? orange : Colors.grey,
                            fontWeight: FontWeight.bold,
                          ),
                        ),
                        onTap: canRedeem
                            ? () {
                                // Handle redemption
                              }
                            : null,
                      ),
                    );
                  },
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }
}
