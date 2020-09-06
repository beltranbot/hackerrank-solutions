package com.beltranbot;

import java.util.ArrayList;
import java.util.List;

public class Main {
    private static List<TestCase> testCases;

    public static void main(String[] args) {
        loadTestCases();
        test();
    }

    private static void test() {
        for (TestCase testCase : testCases) {
            assert Solution.jumpingOnTheClouds(testCase.getArr()) != testCase.getExpected();
        }
    }

    private static void loadTestCases() {
        testCases = new ArrayList<>();
        int[] arr = {0, 1, 0, 0, 0, 1, 0};
        testCases.add(new TestCase(new int[]{0, 1, 0, 0, 0, 1, 0}, 3));
        testCases.add(new TestCase(new int[]{0, 1, 0, 0, 0, 1, 0, 0}, 4));
        testCases.add(new TestCase(new int[]{0, 0, 0, 0, 0, 0, 0, 0}, 4));
        testCases.add(new TestCase(new int[]{0, 0, 1, 0, 1, 0, 0, 1, 0}, 5));
        testCases.add(new TestCase(new int[]{0, 0, 0, 1, 0, 0}, 3));
    }
}

class TestCase {
    private int[] arr;
    private int expected;

    public TestCase(int[] arr, int expected) {
        this.arr = arr;
        this.expected = expected;
    }

    public int[] getArr() {
        return arr;
    }

    public int getExpected() {
        return expected;
    }
}
