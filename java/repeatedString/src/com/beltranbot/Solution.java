package com.beltranbot;

public class Solution {

    public static long repeatedString(String s, long n) {
        char letterA = 'a';
        long howManyFit = n / s.length();
        long leftover = n - (s.length() * howManyFit);

        return (countChar(letterA, s) * howManyFit) + countChar(letterA, s.substring(0, (int) leftover));
    }

    private static long countChar(char needle, String stack) {
        long counter = 0;
        for (int i = 0; i < stack.length(); i++) {
            if (needle == stack.charAt(i)) {
                counter++;
            }
        }
        return counter;
    }
}
