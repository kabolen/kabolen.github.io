/// @file:    themes.dart
/// @author:  Nolan Olhausen, Kade Bolen
/// @date: 2024-11-15
///
/// @brief:
///      This file contains the light and dark themes for the application.
library;

import 'package:flutter/material.dart';

ThemeData lightTheme = ThemeData(
  brightness: Brightness.light,
  chipTheme: const ChipThemeData(
    selectedColor: Color.fromARGB(255, 255, 153, 7),
  ),
  inputDecorationTheme: InputDecorationTheme(
    focusedBorder: OutlineInputBorder(
      borderSide: const BorderSide(
          color: Color.fromARGB(255, 255, 153, 7)),
      borderRadius: BorderRadius.circular(8.0),
    ),
    floatingLabelStyle:
        const TextStyle(color: Color.fromARGB(255, 255, 153, 7)),
  ),
  textSelectionTheme: const TextSelectionThemeData(
    cursorColor: Color.fromARGB(255, 255, 153, 7),
  ),
  radioTheme: const RadioThemeData(
    fillColor: WidgetStatePropertyAll(Color.fromARGB(255, 255, 153, 7)),
  ),
);

ThemeData darkTheme = ThemeData(
  brightness: Brightness.dark,
  scaffoldBackgroundColor: const Color(0xFF2B2B2B), // Jet — it complements warm tones nicely
  canvasColor: const Color(0xFF1E1E1E),
  colorScheme: const ColorScheme.dark(
    primary: Color.fromARGB(255, 255, 153, 7),
    surface: Color(0xFF2A2A2A),
  ),
  // ... keep your existing theme configs
  switchTheme: SwitchThemeData(
    thumbColor:
        WidgetStateProperty.resolveWith<Color>((Set<WidgetState> states) {
      if (states.contains(WidgetState.selected)) {
        return const Color.fromARGB(255, 130, 77, 4).withValues(alpha: 0.48);
      }
      return const Color.fromARGB(255, 255, 153, 7);
    }),
  ),
  chipTheme: const ChipThemeData(
    selectedColor: Color.fromARGB(255, 255, 153, 7),
  ),
  inputDecorationTheme: InputDecorationTheme(
    focusedBorder: OutlineInputBorder(
      borderSide: const BorderSide(
          color: Color.fromARGB(255, 255, 153, 7)),
      borderRadius: BorderRadius.circular(8.0),
    ),
    floatingLabelStyle:
        const TextStyle(color: Color.fromARGB(255, 255, 153, 7)),
  ),
  textSelectionTheme: const TextSelectionThemeData(
    cursorColor: Color.fromARGB(255, 255, 153, 7),
  ),
  radioTheme: const RadioThemeData(
    fillColor: WidgetStatePropertyAll(Color.fromARGB(255, 255, 153, 7)),
  ),
);
