package com.beltranbot;

import java.util.ArrayList;
import java.util.List;

public class Main {

    static List<TestCase> testCases;
    public static void main(String[] args) {
        loadCases();
        test();
    }

    private static void loadCases() {
        testCases = new ArrayList<>();
        testCases.add(new TestCase(new TestInput("aba", 10), 7));
        testCases.add(new TestCase(new TestInput("aba", 12), 8));
        testCases.add(new TestCase(new TestInput("aba", 13), 9));
        testCases.add(new TestCase(new TestInput("a", 1000000000000L), 1000000000000L));
    }

    private static void test() {
        for (TestCase testCase : testCases) {
            String input = testCase.getInput().getString();
            long n = testCase.getInput().getN();
            long expected = testCase.getExpected();
            long result = Solution.repeatedString(input, n);
            assert result == expected;
        }
    }
}

class TestCase {
    private TestInput input;
    private long expected;

    public TestCase(TestInput input, long expected) {
        this.input = input;
        this.expected = expected;
    }

    public TestInput getInput() {
        return input;
    }

    public long getExpected() {
        return expected;
    }
}

class TestInput {
    private String string;
    private long n;

    public TestInput(String string, long n) {
        this.string = string;
        this.n = n;
    }

    public String getString() {
        return string;
    }

    public long getN() {
        return n;
    }
}
