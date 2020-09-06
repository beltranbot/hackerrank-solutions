package com.beltranbot;

public class Solution {

    public static int jumpingOnTheClouds(int[] arr) {
        int jumps = 0;
        for (int i = 0; i < arr.length - 1; i++) {
            int a = i + 1;
            int b = i + 2;

            if (b < arr.length && arr[b] == 0) {
                i = b - 1;
            } else {
                i = a - 1;
            }
            jumps++;
        }
        return jumps;
    }
}
